// BI Compass — Service Worker
// Strategy: Cache First for static assets, Network First for HTML

const CACHE_NAME = 'bi-compass-v1.2';
const STATIC_ASSETS = [
  '/bi-compass/',
  '/bi-compass/index.html',
  '/bi-compass/manifest.json',
  '/bi-compass/icons/icon-192x192.png',
  '/bi-compass/icons/icon-512x512.png',
  '/bi-compass/icons/apple-touch-icon.png',
  // External CDN assets cached on first load
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap'
];

// ── INSTALL: cache all static assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Cache local assets immediately, CDN assets best-effort
        const localAssets = STATIC_ASSETS.filter(url => !url.startsWith('http'));
        const cdnAssets = STATIC_ASSETS.filter(url => url.startsWith('http'));
        
        return cache.addAll(localAssets).then(() => {
          // Cache CDN assets individually — don't fail install if one is unavailable
          return Promise.allSettled(
            cdnAssets.map(url => 
              fetch(url).then(res => cache.put(url, res)).catch(() => {})
            )
          );
        });
      })
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: Cache First for assets, Network First for HTML ──
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // HTML pages: Network First (get latest content), fallback to cache
  if (request.destination === 'document' || 
      request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // All other assets: Cache First
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200) return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return response;
      });
    })
  );
});

// ── MESSAGE: force update ──
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
