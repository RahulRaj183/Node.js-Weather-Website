// // Video No.8.7 -------------------------------------------------------------------------------------------
// // Goal: Wiring up the User Interface
// //           ########################################################################################### 


console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form') ///querySelector() only picks up the 1st one among the content u put inside it, here 1st form in the file will be picked up
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')   // picks up para with ide = "message-1"
const messageTwo = document.querySelector('#message-2')


//CHALLENGE:
//
//Goal: Rendering content to paragraphs
//
//1. Select the second message p from JavaScript
//2. Just before fetch, render loading message and empty p
//3. If error, render error
//4. If no error, render location and forecast
//5. Test your work! Search for errors and for valid locations




weatherForm.addEventListener('submit',(e) =>{  

    e.preventDefault()  
    
    const location = search.value  // contains value user types in input form

    messageOne.textContent = 'Loading....'  //this code manipulates the content of para in index.hbs with id='message-1'
    messageTwo.textContent = ''
 
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
     response.json().then((data) => {
         if(data.error){

            messageOne.textContent = data.error

         }else{

             messageOne.textContent = data.location
             messageTwo.textContent = data.forecast
             
         }
     })
 })
   
 })








// // Video No.8.6 -------------------------------------------------------------------------------------------
// // Goal: Creating a Search Form
// //           ########################################################################################### 

// console.log('Client side javascript file is loaded')





// // const weatherForm = document.querySelector('form')

// // const search = document.querySelector('input')

// // //2 params 1. name of the event we are trying to listen for. 2. Callback function which occurs every single time that event occurs.
// // weatherForm.addEventListener('submit',(e) =>{  // e: Event

// //    e.preventDefault()  // It is going to prevent the default behavior , which is to refresh the browser, allowing the server to render a new page and instead it gonna do nothing
   
// //    const location = search.value  // contains value user types in input form
// //    console.log(location)
// // })

// //Challenge : 
// //Goal: Use input value to get weather
// //
// //1. Migrate fetch call into the submit callback
// //2. Use the search text as the address query string value
// //3. Submit the form with a valid and invalid value to test

// const weatherForm = document.querySelector('form')

// const search = document.querySelector('input')

// //2 params 1. name of the event we are trying to listen for. 2. Callback function which occurs every single time that event occurs.
// weatherForm.addEventListener('submit',(e) =>{  // e: Event

//    e.preventDefault()  // It is going to prevent the default behavior , which is to refresh the browser, allowing the server to render a new page and instead it gonna do nothing
   
//    const location = search.value  // contains value user types in input form

//    fetch('http://localhost:3000/weather?address='+location).then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })
  
// })







// // Video No.8.5 -------------------------------------------------------------------------------------------
// // Goal: Browser HTTP Requests with Fetch
// //           ########################################################################################### 



// console.log('Client side javascript file is loaded')
// // To make HTTP request from client side javaScript we'll be using Fetch API
// // Fetch is not a part of JS, it's a browser based API.
// // Calling fetch() in our Client-side JS gonna kickoff an asynchronous I/O operation , much like calling request() in Node JS.

// //We can use Fetch in all modern apps , but it's not accessible in Node JS.

// //Syntax: fetch('URL we are trying to fetch from')
// //We use then() method on the return value from fetch(), and we provide to it a Callback function we wanna run



// fetch('http://puzzle.mead.io/puzzle').then((response) => {          // It's going to return back some randomly generated puzzle
// // Basically we are saying fetch() data from this URL and the run this callback function
//    response.json().then((data) =>{
//         //this then() function is gonna run when JSON data has arrived and is parsed
//         console.log(data)
//    })

// } )

// //CHALLENGE
// //
// // Goal: Fetch Weather!
// //
// //1. Setup a call to fetch weather for Boston
// //2. Get the parse JSON response
// //    - If error property, print error
// //    - If no error property, print current location and forecast
// //3. Refresh the browser and test your work.

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })




// // Video No.7.5 -------------------------------------------------------------------------------------------
// // Goal: Serving up CSS,JS,Images and More
// //           ########################################################################################### 

// console.log('Client side javascript file is loaded')