export function getCity(lat, lng){
  let city;

  return new Promise(function (resolve, reject) {

    const latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};

    if (!window.google) {
      resolve();
    }

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