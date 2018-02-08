/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["initAutocomplete"] = initAutocomplete;

var places;




      // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.889931, lng: -77.0435},
          zoom: 14,
          mapTypeId: 'roadmap'
        });

        var markers = [{position: {lat: -15.786270, lng: 27.913389},
        map: map,
        draggable:true,
        title: 'Jack Rose',
        icon: image},{position: {lat: 38.8977, lng: -77.0365},
        map: map,
        draggable:true,
        title: 'White House',
        icon: image},{position: {lat: 38.916625, lng: -77.038710},
        map: map,
        draggable:true,
        title: 'ThreeFifty Bakery and Coffee Bar',
        icon: image}]
        //
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        
        for (var i in markers){
        var marker = new google.maps.Marker({
        position: markers[i]["position"],
        map: map,
        draggable:true,
        title: markers[i]["title"],
        icon: image
        });
        }

//https://developers.google.com/maps/documentation/javascript/markers

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        
         $("#place_area").width("0%")
         $("#map").width("100%") 
         
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          places = searchBox.getPlaces();
          $("#side_info").hide()
          ko.cleanNode(document.getElementById('place_area'));
          ko.applyBindings( new ViewModel(), document.getElementById('place_area'));

//          ko.applyBindings(new ViewModel())
         
         $("#place_area").width("20%")
         $("#map").width("80%") 
        
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }





       var ViewModel = function(){

          var self = this;
          
          var content
   
          this.placeList = ko.observableArray([]);
        
          places.forEach(function(place){
          
            self.placeList.push(new Place(place));
          });
          
          this.currentPlace = ko.observable(this.placeList()[0]);
            
          this.wiki_content = ko.observable("no info");
          this.wiki_url = ko.observable("");
          this.wiki_title = ko.observable("ni info")
         
         this.getCurrentPlace = function(){
            return this.currentPlace
         }
         
         this.setCurrentPlace   = function(){
               $("#side_info").show()
               self.currentPlace(this); 
               var place = $("#selected").text();
                $("#side_info").show()
               place=place.replace(/\s/g,"%20")
     
              url="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+place;
           
          
              $.ajax({
                  url: url+"&callback=?",
                  type: "GET",
                  dataType: 'json',
                  headers: { 'Api-User-Agent': 'Example/1.0' },
                  cache: true,
                  success: function (data, status, error) {
                    var page_content=data['query']['pages'];
                    var index= Object.keys(page_content)[0]
                    var url = page_content[index]["thumbnail"]['source']
                    var title = page_content[index]['title']
                    content = String(page_content[index].extract)
                  
                     self.wiki_content(content);
                     self.wiki_url(url)
                     self.wiki_title(title)
                  //   $("#wiki").html(content)
                     console.log(content) 
                     console.log(url)
                     
                  },
          
                  error: function (data, status, error) {
                    console.log('error', data, status, error);
                  }
              });
              
          };
        
     }


var Place = function(data){


         
   this.name = ko.observable(data.name);
   this.address = ko.observable(data.formatted_address);
   
}
window.initAutocomplete = initAutocomplete;
//Add Maps API key here




/***/ })
/******/ ]);