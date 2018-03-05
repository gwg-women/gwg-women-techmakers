const http = require('http');

export function getCity(lat, lng){
  let city;
  const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true`;

  return new Promise(function(resolve, reject){
    http.get(url, (res) => {
      // eslint-disable-next-line
      if(res.statusCode == '200'){
        res.setEncoding('utf8');
        res.on('data', (data) => {
          data = JSON.parse(data);
          for (var i = 0; i < data.results.length; i++) {
            // eslint-disable-next-line
            if(data.results[i].types[0] == 'locality'){
              city = data.results[i].formatted_address;
              resolve(city);
            }
          }
        })
      } else reject();
    })
  }) 

}