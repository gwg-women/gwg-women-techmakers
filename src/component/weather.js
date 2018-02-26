const http = require('http');
  
export function getWeather(lat, lng){
    let weather;
    const weather_api = process.env.WEATHER_KEY;

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
                    // return console.log("Current temperature: ", weather, "°F");
                    resolve(weather);
                })
            });
        }
    })

    // to be removed - possible code if using request node module
    // request.get(url, (err, res, body) => {
    //     body = JSON.parse(body);
    //     weather = body.main.temp;
    //     console.log("The temperature is: ", weather);
    // });
}