const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0a174b7f0a5b983fc699024d08f8413a&query=' + latitude + ',' + longitude


    request({url, json:true }, (error, {body}) => {   // Changes were made at this line
        if(error){
              callback('Unable to connect to Weather service!', undefined)  
        }else if(body.error){ 
              callback('Unable to find location. Try another search!', undefined)
        }else{
             callback(undefined, 
                  body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +' degrees out. It feels like '+ body.current.feelslike + ' degrees out. The humidity is '
                  + body.current.humidity + '%.'
                     )
        }
    })
}

module.exports = forecast


