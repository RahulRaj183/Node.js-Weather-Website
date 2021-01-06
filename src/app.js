
const hbs = require('hbs')

const path = require('path')
const express = require('express')  


const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()  
const port = process.env.PORT || 3000


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
        title:'About Me',
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


 app.listen(port, () => {
     console.log('Server is up on port '+ port)  //It will not be displayed in the browser
})









