const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
                .options({
                    a:{
                        demand: true,
                        alias: "address",
                        describe: "Address to fetch weather for",
                        string: true
                    }
                })
                .help()
                .alias('help', 'h')
                .argv;


geocode.getGeoData(argv.a, (err, data)=>{
    if(err){
            console.log(err);
    }else{
        console.log(data.address);
        weather.getWeatherData(data.lattitude,data.longitude, (err, temp)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`It is currently ${temp.temperature} deg Celcius. Looks like we have ${temp.summary} Sky`);
            }

        })
    }
});




