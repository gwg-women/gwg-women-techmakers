(function() {
  'use strict';


  var staticCacheName = 'pages-cache-v1';

  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker');
    event.waitUntil(
      caches.open(staticCacheName)
    );
  });

  self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request).then(function(response) {
          return caches.open(staticCacheName).then(function(cache) {

           // if (event.request.url.indexOf('test') < 0) {
              cache.put(event.request.url, response.clone());
          //  }
            return response;
          });
        });
      })
    );
  });

  self.addEventListener('activate', function(event) {
  console.log('Activating new service worker...');

  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

})();
