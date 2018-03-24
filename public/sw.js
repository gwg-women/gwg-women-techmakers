// Set this to true for production
const doCache = true;

const CACHE_NAME = 'maapa-cache-v1';

const urlsToCache =[
  '/',
  '/static/js/',
  '/src/style/style.css',
  '/static/js/bundle.js',
  '/index.js',
  '/static/css',
  '/index.html',
  '/service-worker.js',
  '/sw.js'
];
//1
console.log('in service-worker')
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
  );
});

// The first time the user starts up the app, 'install' is triggered.
self.addEventListener('install', function(event) {
  console.log('install service-worker event')
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
              cache.addAll(urlsToCache)
        })
    );
  }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
    if (doCache) {
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
          })
      );
    }
});
