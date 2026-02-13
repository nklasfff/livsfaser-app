const CACHE_NAME = 'livsfaser-v37';
const urlsToCache = [
  './',
  './index.html',
  './css/variables.css',
  './css/base.css',
  './css/components.css',
  './css/screens.css',
  './js/app.js',
  './screens/idag.html',
  './screens/relationer.html',
  './screens/favoritter.html',
  './screens/onboarding.html',
  './screens/samlede-indsigt.html',
  './screens/alle-faser.html',
  './screens/tidsrejse.html',
  './screens/mine-cyklusser.html',
  './screens/mine-relationer.html',
  './screens/min-praksis.html',
  './screens/min-rejse.html',
  './screens/cyklusser-i-cyklusser.html',
  './screens/min-udvikling.html',
  './screens/de-ni-livsfaser.html',
  './screens/livsfase-detail.html',
  './screens/de-fire-uger.html',
  './screens/refleksion.html',
  './screens/kontrolcyklussen.html',
  './screens/foelelser.html',
  './screens/yin-yoga.html',
  './assets/images/lotus-divider.png'
];

// Install - cache files, activate immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch - network first, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Update cache with fresh response
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// Activate - clean old caches, claim clients immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
