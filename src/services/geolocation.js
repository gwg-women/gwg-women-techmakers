console.log('window', window)

export function getCity(lat, lng){
  let city;

  return new Promise(function (resolve, reject) {

    const latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          city = results[0].formatted_address;
          console.log('city: ', city);
          resolve(city.match(/, ([^,]+, \w*)/)[1]);
        } else {
          window.alert('No results found');
          reject();
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
        reject();
      }
    });
  })
}


  // const http = require('http');
  // export function getCity(lat, lng){
  // let city;
  // const url = `http://maps.googleapis.com/maps/api/geocode/json?v=3.3.1&latlng=${lat},${lng}&sensor=true`;
  // return new Promise(function(resolve, reject){
  //   http.get(url, (res) => {
  //     // eslint-disable-next-line
  //     if(res.statusCode == '200'){
  //       res.setEncoding('utf8');
  //       res.on('data', (data) => {
  //         if(data.includes('error_message')){
  //           console.log('Error grabbing key');
  //           reject();
  //         }
  //         else {
  //           try {
  //             data = JSON.parse(data);
  //             for (var i = 0; i < data.results.length; i++) {
  //               // eslint-disable-next-line
  //               if(data.results[i].types[0] == 'locality'){
  //                 city = data.results[i].formatted_address;
  //                 resolve(city.replace(/,.*/g, ""));
  //               }
  //             }
  //           } catch (e){
  //             console.log('Error parsing JSON response');
  //             reject();
  //           }
  //         }
  //       })
  //     } else reject();
  //   })
  // }) 
  // }