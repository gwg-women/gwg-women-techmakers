const http = require('http');
  
export function getWeather(lat, lng){
    let weather;
    const weather_api = process.env.REACT_APP_WEATHERKEY;

    return new Promise(function(resolve, reject){
        if(typeof weather_api === 'undefined'){
            console.log('Please set up your weather key to return weather details.');
            reject();
        } else {
            const url = `http://api.openweathermap.org/data/2.5/weather?units=Imperial&lat=${lat}&lon=${lng}&APPID=${weather_api}`;
    
            http.get(url, (res) => {
                res.setEncoding('utf8');
                res.on('data', (data) => {
                    data = JSON.parse(data);
                    weather = data.main.temp;
                    resolve(weather);
                })
            });
        }
    })
}