const http = require('https');

export default function getPlaces(lat, lng, query){
  let Listings =[];
  let location = {latitude:0,
                  longitide:0}
  location.latitude=lat;
  location.longitide=lng;
   console.log('in get places');

  const google_api = 'AIzaSyAR9_HMLChf4WdyDIX3ZuDF6pZYqi9aZDI'//process.env.GOOGLE_KEY
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${google_api}&location=${lat},${lng}&radius=5000`;


  const GOOGLE_PLACES_OPTIONS = {
  method: 'GET',
  hostname: 'www.googleapis.com',
  port: null,
  path: `/geolocation/v1/geolocate?key=${google_api}`,
  headers: {
    'content-type': 'application/json',
    'cache-control': 'no-cache',
  }
};


  return new Promise(function(resolve, reject){
    console.log('in place promise');
    http.get(url, (res) => {
      if(res.statusCode == 'OK'){
        console.log(" OK ");
        res.setEncoding('utf8');
        res.on('data', (data) => {
          data = JSON.parse(data);
          if(data.results.length >= 0){
              Listings = data.results;
              console.log(Listings);
              resolve(Listings);
          }
        })
      } else if(res.statusCode != 'ZERO_RESULTS'){
          console.log("error" + res.statusCode);
          reject();
      }
  });
  });

}


/* NOTES : Getting CORS error

localhost/:1 Failed to load https://maps.googleapis.com/maps/api/place/textsearch/json?query=food&key=AIzaSyAR9_HMLChf4WdyDIX3ZuDF6pZYqi9aZDI&location=40.854885,-88.081807&radius=5000: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
localhost/:1 Uncaught (in promise) TypeError: Failed to fetch

Also, couldn't find a wasy to use the env variables
api = process.env.API_KEY; is not working
*/