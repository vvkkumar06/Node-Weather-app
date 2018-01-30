const request = require('request');

var getGeoData =(address, callback)=>{
        const add = encodeURIComponent(address);
    
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=AIzaSyCshfWQzYD4otgXglmjVc8R222b-dpr9Aw`,
        json: true
    
    }, (err, res, body)=>{
        if(err){
                callback('Unable to get data from server');
        }else if(body.status ==='ZERO_RESULTS'){
                callback('Incorrect address');
        }else if(body.status ==='OK'){
            callback(undefined, {
              address: body.results[0].formatted_address,
              lattitude: body.results[0].geometry.location.lat,
              longitude: body.results[0].geometry.location.lng
            });
        }
    });
    
};

module.exports.getGeoData = getGeoData;