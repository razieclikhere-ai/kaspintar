const CACHE_NAME = 'singkil-kas-v1';

// Memasang Aplikasi di HP
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Menjaga aplikasi tetap merespon dengan cepat
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
