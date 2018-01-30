const request = require('request');


var getWeatherData =(lat,lng, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/c716f5b8a54830d1f47408432215de7f/${lat},${lng}?units=si`,
        json:true
    }, (err, res, body)=>{
        if(err){
            callback('Unable to connect weather server');
        }else if(res.statusCode===400){
            callback("Unable to fetch weather");
        }
        else if(res.statusCode===200){
           const temperature = body.currently.temperature;
           const summary = body.currently.summary;
            callback(undefined, {temperature, summary});
        }
    });
};

module.exports.getWeatherData = getWeatherData;