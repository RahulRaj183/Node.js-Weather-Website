const weatherForm = document.querySelector('form') ///querySelector() only picks up the 1st one among the content u put inside it, here 1st form in the file will be picked up
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')   // picks up para with ide = "message-1"
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e) =>{  

    e.preventDefault()  
    
    const location = search.value  // contains value user types in input form

    messageOne.textContent = 'Loading....'  //this code manipulates the content of para in index.hbs with id='message-1'
    messageTwo.textContent = ''
 
    fetch('/weather?address='+location).then((response) => {
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


