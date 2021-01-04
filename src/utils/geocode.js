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

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmFodWxyYWoxODMiLCJhIjoiY2tqNmoxd3FzMGR4aTJ3cnVwdjIwaXVxbiJ9.qFRGy7L35367B13FAAWSTw&limit=1'


    request({url, json:true }, (error, {body} = {} ) => {    // Changes were made at this line
        if(error){
              callback('Unable to connect to location services!', undefined)    
        }else if(body.features.length === 0){ 
              callback('Unable to find location. Try another search!', undefined)
        }else{
             callback(undefined, {
                   latitude:  body.features[0].center[1],
                   longitude: body.features[0].center[0],
                   location: body.features[0].place_name
             })
        }
    })
}

module.exports = geocode






// // Video No.6.9 -------------------------------------------------------------------------------------------
// // Goal: Callback Abstraction - Here we will use callback pattern to improve weather app
// //  

// const request = require("request")

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmFodWxyYWoxODMiLCJhIjoiY2tqNmoxd3FzMGR4aTJ3cnVwdjIwaXVxbiJ9.qFRGy7L35367B13FAAWSTw&limit=1'


//     request({url: url, json:true }, (error,response) => {
//         if(error){
//               callback('Unable to connect to location services!', undefined)    //instead of printing to console , here we are making code more flexible, by returning error or resonse via callback function, and now callback function will decide whether to print that o/p, or to send it to user via email,etc
//         }else if(response.body.features.length === 0){ 
//               callback('Unable to find location. Try another search!', undefined)
//         }else{
//              callback(undefined, {
//                    latitude:  response.body.features[0].center[1],
//                    longitude: response.body.features[0].center[0],
//                    location: response.body.features[0].place_name
//              })
//         }
//     })
// }

// module.exports = geocode