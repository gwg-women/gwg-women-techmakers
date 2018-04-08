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
          console.log('location unmodified: ' + city);
          
          //gets rid of 'unnamed road' from the search result
          city = city.replace(/\b\w*?Unnamed Road\w*?\b/gi, '')
          //gets rid of any numbers from the search result and the whole word if it contains number(s)
          let citynew = city.replace(/[a-z]*\d+[a-z]*/gi, '');
            //split by ',' and gets rid of empty arrays
            let citystate = citynew.split(',');
            //gets rid of those empty array elements that are empty
            citystate = citystate.filter(entry => entry.trim() !== '');
            if (citystate.length ===5) {
              citystate = [citystate[3], [citystate[4]]]
            }
            else if (citystate.length === 4) {
              citystate= [citystate[1], citystate[2]]
            }

            else if (citystate.length === 3) {
              citystate = [citystate[0], citystate[1]];
            }
            else if (citystate.length === 2) {
              citystate = [citystate[0], citystate[1]];
            }
            else if (citystate.length === 1) {
              citystate = [citystate[0]]
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