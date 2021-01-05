// // Video No.8.4 -------------------------------------------------------------------------------------------
// // // Goal: ES6 Aside : Default Function Parameters
// // //           ########################################################################################### 

const hbs = require('hbs')

const path = require('path')
const express = require('express')  


const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()  



//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
//Create path for partials:
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars and views location:     
app.set('views',viewsPath)  
app.set('view engine','hbs')  
hbs.registerPartials(partialsPath) 


//Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.get('', (req,res) => {
     res.render('index', { 
      title:'Weather',
      name: 'Rahul Raj'
                         })
})


app.get('/about', (req,res) =>{
     res.render('about', {  
        title:'About Page',
        name: 'Rahul Raj'
       })
})


app.get('/help' , (req,res) => {
      res.render('help', {
           
           helpText: 'This is some helpful text',
           title: 'Help',
           name: 'Rahul Raj'
      })
})



app.get('/weather' , (req, res) => {
     if(!req.query.address){
          return res.send({
               error:'You must provide an address'
          })
     }

     geocode(req.query.address, (error, {latitude,longitude,location} = {}) =>{  // causes default empty assignment for all the destructured properties

          if(error)
          {
              return res.send({error})
          }
    
            forecast(latitude, longitude, (error, forecastData) => {   // Changes were made at this line
                if(error)
                {
                    return res.send({error})
                }
    
                res.send({
                     forecast: forecastData,
                     location,
                     address : req.query.address
                })
              })
    })

 })


 app.get('/products', (req,res)=>{
        
         if(!req.query.search){  
           return   res.send({
                   error: 'You must provide a search term'
              })
         }

     console.log(req.query.search)
      res.send({                   

           products: []                     
      })
 })

 // To create a 404 page:


 app.get('/help/*',(req,res) => { //specially designed 404 page for help/* situation
    res.render('404',{
         errorMessage: 'Help article not found',
         title: '404',
         name: 'Rahul Raj'
    })
 })

 app.get('*',(req,res) => {   //"*" is a wildcard character , that represents match anything that hasn't been matched yet.
    res.render('404',{
       errorMessage: 'Page not found',
       title: '404',
       name: 'Rahul Raj'
    })
 })


 app.listen(3000, () => {
     console.log('Server is up on port 3000.')  //It will not be displayed in the browser
})






// // Video No.8.3 -------------------------------------------------------------------------------------------
// // // Goal: Building a JSON HTTP Endpoint
// // //           ########################################################################################### 

// const hbs = require('hbs')

// const path = require('path')
// const express = require('express')  


// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const app = express()  



// //Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname,'../templates/views')
// //Create path for partials:
// const partialsPath = path.join(__dirname, '../templates/partials')


// //Setup handlebars and views location:     
// app.set('views',viewsPath)  
// app.set('view engine','hbs')  
// hbs.registerPartials(partialsPath) 


// //Setup static directory to serve
// app.use(express.static(publicDirectoryPath))
// app.get('', (req,res) => {
//      res.render('index', { 
//       title:'Weather',
//       name: 'Andrew Mead'
//                          })
// })


// app.get('/about', (req,res) =>{
//      res.render('about', {  
//         title:'About Page',
//         name: 'Andrew Mead'
//        })
// })


// app.get('/help' , (req,res) => {
//       res.render('help', {
           
//            helpText: 'This is some helpful text',
//            title: 'Help',
//            name: 'Rahul Raj'
//       })
// })



// app.get('/weather' , (req, res) => {
//      if(!req.query.address){
//           return res.send({
//                error:'You must provide an address'
//           })
//      }

//      geocode(req.query.address, (error, {latitude,longitude,location} = {}) =>{  // causes default empty assignment for all the destructured properties

//           if(error)
//           {
//               return res.send({error})
//           }
    
//             forecast(latitude, longitude, (error, forecastData) => {   // Changes were made at this line
//                 if(error)
//                 {
//                     return res.send({error})
//                 }
    
//                 res.send({
//                      forecast: forecastData,
//                      location,
//                      address : req.query.address
//                 })
//               })
//     })

//      // res.send({
//      //      forecast: 'It is snowing',
//      //      loaction: 'Philadelphia',
//      //      address: req.query.address
//      // })
//  })

//  //CHALLENGE:
//  //
//  //Goal: Wire up /weather
//  //1. Require geocode/forecast into app.js
//  //2. Use the address to geocode
//  //3. Use the coordinates to get forecast
//  //4. Send back the real forecast and location

//  app.get('/products', (req,res)=>{
        
//          if(!req.query.search){  
//            return   res.send({
//                    error: 'You must provide a search term'
//               })
//          }

//      console.log(req.query.search)
//       res.send({                   

//            products: []                     
//       })
//  })

//  // To create a 404 page:


//  app.get('/help/*',(req,res) => { //specially designed 404 page for help/* situation
//     res.render('404',{
//          errorMessage: 'Help article not found',
//          title: '404',
//          name: 'Rahul Raj'
//     })
//  })

//  app.get('*',(req,res) => {   //"*" is a wildcard character , that represents match anything that hasn't been matched yet.
//     res.render('404',{
//        errorMessage: 'Page not found',
//        title: '404',
//        name: 'Rahul Raj'
//     })
//  })


//  app.listen(3000, () => {
//      console.log('Server is up on port 3000.')  //It will not be displayed in the browser
// })



// // Video No.8.2 -------------------------------------------------------------------------------------------
// // // Goal: The Query String
// // //           ########################################################################################### 

// const hbs = require('hbs')

// const path = require('path')
// const express = require('express')  



// const app = express()  



// //Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname,'../templates/views')
// //Create path for partials:
// const partialsPath = path.join(__dirname, '../templates/partials')


// //Setup handlebars and views location:     
// app.set('views',viewsPath)  
// app.set('view engine','hbs')  
// hbs.registerPartials(partialsPath) 


// //Setup static directory to serve
// app.use(express.static(publicDirectoryPath))
// app.get('', (req,res) => {
//      res.render('index', { 
//       title:'Weather',
//       name: 'Andrew Mead'
//                          })
// })


// app.get('/about', (req,res) =>{
//      res.render('about', {  
//         title:'About Page',
//         name: 'Andrew Mead'
//        })
// })


// app.get('/help' , (req,res) => {
//       res.render('help', {
           
//            helpText: 'This is some helpful text',
//            title: 'Help',
//            name: 'Rahul Raj'
//       })
// })

// //CHALLENGE:
// //
// //Goal: Update weather endpoint to accept address
// //1. No address? Send back an error message
// //2. Address? Send back the static JSON
// //   -Add address property onto JSON which returns the provided address
// //3. Test/weather and /weather?address=philadelphia


// app.get('/weather' , (req, res) => {
//      if(!req.query.address){
//           return res.send({
//                error:'You must provide an address'
//           })
//      }

//      res.send({
//           forecast: 'It is snowing',
//           loaction: 'Philadelphia',
//           address: req.query.address
//      })
//  })

//  app.get('/products', (req,res)=>{
//          // query string lookslike: 'http://localhost:3000/products?search=games&rating=5', informations are passed through query strings
//          // and are stored in 'req' variable
//          if(!req.query.search){  //if no value for search key in the url query
//            return   res.send({
//                    error: 'You must provide a search term'
//               })
//          }

//      console.log(req.query.search)
//       res.send({                   

//            products: []                     
//       })
//  })

//  // To create a 404 page:


//  app.get('/help/*',(req,res) => { //specially designed 404 page for help/* situation
//     res.render('404',{
//          errorMessage: 'Help article not found',
//          title: '404',
//          name: 'Rahul Raj'
//     })
//  })

//  app.get('*',(req,res) => {   //"*" is a wildcard character , that represents match anything that hasn't been matched yet.
//     res.render('404',{
//        errorMessage: 'Page not found',
//        title: '404',
//        name: 'Rahul Raj'
//     })
//  })


//  app.listen(3000, () => {
//      console.log('Server is up on port 3000.')  //It will not be displayed in the browser
// })




