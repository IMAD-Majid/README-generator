self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('makereadme-cache-v1').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/style.css',
          '/main.js',
          '/manifest.json',
          '/service-worker.js'
          // Add other assets you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  