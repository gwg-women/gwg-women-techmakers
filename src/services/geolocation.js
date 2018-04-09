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

          //gets rid of 'unnamed road', 'USA', numbers with their word if connected, and -=
          city = city.replace(/\b\w*?Unnamed Road|-|USA|[a-z]*\d+[a-z]*\w*?\b/gi, '');

            //split by ','
            let citystate = city.split(',');
            
            //gets rid of those empty array elements as well as remove empty space in front and back of array elements.
            citystate = citystate.filter(entry => entry.trim() !== '').map(string => string.trim());
              if (citystate.length >= 3) {
                citystate = `${[citystate[citystate.length -3]]}, ${[citystate[citystate.length -2]]}, ${[citystate[citystate.length -1]]}`
              }

              else if (citystate.length === 2) {
                citystate = `${[citystate[0]]}, ${[citystate[1]]}`;
              }

              else if (citystate.length === 1) {
               citystate = [citystate[0]]
              }
              else {
                citystate = 'Earth'
              }
            resolve(citystate);
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