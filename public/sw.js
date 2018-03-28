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
// self.addEventListener('fetch', function(event) {
//     if (doCache) {
//       event.respondWith(
//           caches.match(event.request).then(function(response) {
//               return response || fetch(event.request);
//           })
//       );
//     }
// });



//this is caching the static map on the first load
self.addEventListener('fetch', function (event) {

  const requestUrl = new URL(event.request.url)
  console.log(requestUrl)
  if (requestUrl.pathname.startsWith('/maps/api/staticmap')) {
    console.log("going to cache the static map")
    // event.respondWith(
    //   caches.open(CACHE_NAME).then(function(cache) {
    //     return cache.match(event.request).then(function(response) {
    //       return response || fetch(event.request).then(function(response) {
    //         cache.put(event.request, response.clone())
    //         return response
    //       })
    //     })
    //   })
    // )
  }
})


//this is hijacking the request to the maps api, and if it fails, it serves the static image (happinesssssssss)
self.addEventListener('fetch', function(event) {
  const requestUrl = new URL(event.request.url)
  
  if (requestUrl.pathname.startsWith('/maps/api/js')) {
    console.log('intercepting api')
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match('maps/api/staticmap')
      })
    )
  }
})