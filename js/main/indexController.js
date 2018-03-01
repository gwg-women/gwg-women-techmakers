export default function IndexController(container) {
  this._container = container;
  //this._openSocket();
  this._registerServiceWorker();
}

IndexController.prototype._registerServiceWorker = function() {
  if (!navigator.serviceWorker) return;

  navigator.serviceWorker.register('./js/sw/index.js').then(function() {
    console.log('Registration worked!');
  }).catch(function() {
    console.log('Registration failed!');
  });
};

// open a connection to the server for live updates
// IndexController.prototype._openSocket = function() {
//   var indexController = this;

//   // create a url pointing to /updates with the ws protocol
//   var socketUrl = new URL('/updates', window.location);
//   socketUrl.protocol = 'ws';

//   if (latestPostDate) {
//     socketUrl.search = 'since=' + latestPostDate.valueOf();
//   }

//   // this is a little hack for the settings page's tests,
//   // it isn't needed for Wittr
//   socketUrl.search += '&' + location.search.slice(1);

//   var ws = new WebSocket(socketUrl.href);

  // add listeners
//   ws.addEventListener('open', function() {
//     if (indexController._lostConnectionToast) {
//       indexController._lostConnectionToast.hide();
//     }
//   });

//   ws.addEventListener('message', function(event) {
//     requestAnimationFrame(function() {
//       indexController._onSocketMessage(event.data);
//     });
//   });

//   ws.addEventListener('close', function() {
//     // tell the user
//     if (!indexController._lostConnectionToast) {
//       indexController._lostConnectionToast = indexController._toastsView.show("Unable to connect. Retrying…");
//     }

//     // try and reconnect in 5 seconds
//     setTimeout(function() {
//       indexController._openSocket();
//     }, 5000);
//   });
//};

// called when the web socket sends message data
IndexController.prototype._onSocketMessage = function(data) {
  
};