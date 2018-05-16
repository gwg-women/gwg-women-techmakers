

const CACHE_NAME = 'maapa-cache-v15';

const urlsToCache =[
  '/',
  '/static/js/main.bd8fcf5f.js',
  '/static/css/main.181bbb8b.css',
  '/index.html',
];

function createDB() {
  idb.open('mappa', 1, function(upgradeDB){
    var store = upgradeDB.createObjectStore('weather')
  })  
};

// The first time the user starts up the app, 'install' is triggered.
self.addEventListener('install', function(event) {
  // if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache)
        })
    );
  // }
});

self.addEventListener("activate", function(event) {
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


// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function (event) {
  const requestUrl = new URL(event.request.url)

  if (requestUrl.pathname.startsWith('/maps/api/staticmap')) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        console.log("caching All request: ", requestUrl, " Response: ", response)
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone())
          return response;
        })
          .catch(function () {
            // console.log('in catch fetch for request: ', requestUrl.pathname);
            if (requestUrl.pathname.startsWith('/maps/api/js')) {
              return caches.match('maps/api/staticmap')
            }
          })
      })
    })
  )
  } 
});




