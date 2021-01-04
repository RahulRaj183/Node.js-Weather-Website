// // Video No.6.13 -------------------------------------------------------------------------------------------
// // Goal: Destructuring and property shorthand challenge
// //

//Challenge:
//Goal- Use both destructuring and property shorthand in weather app
//
//1. Use destructuring in app.js,forecast.js and geocode.js
//2. Use property shorthand in forecast.js and geocode.js
//3. Test your wok and ensure app still works.

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
                  body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +' degrees out. It feels like '+ body.current.feelslike + ' degrees out.'
                     )
        }
    })
}

module.exports = forecast



// // Video No.6.10 -------------------------------------------------------------------------------------------
// // Goal: Callback Abstraction Challenge - Here we will use callback pattern to improve weather app
// //  

// const request = require("request")

// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=0a174b7f0a5b983fc699024d08f8413a&query=' + latitude + ',' + longitude


//     request({url: url, json:true }, (error,response) => {
//         if(error){
//               callback('Unable to connect to Weather service!', undefined)    //instead of printing to console , here we are making code more flexible, by returning error or resonse via callback function, and now callback function will decide whether to print that o/p, or to send it to user via email,etc
//         }else if(response.body.error){ 
//               callback('Unable to find location. Try another search!', undefined)
//         }else{
//              callback(undefined, 
//                   response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature +' degrees out. It feels like '+ response.body.current.feelslike + ' degrees out.'
//                      )
//         }
//     })
// }

// module.exports = forecast