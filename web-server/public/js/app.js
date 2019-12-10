console.log("client side javascript file!")

const weatherForm=document.querySelector('form')
const search =document.querySelector('input')
const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    const url='http://127.0.0.1:3000/weather?address='+location
    
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                mesage1.textContent=data.error
            }else{
                message1.textContent=data.address
                message2.textContent=data.forecast
            }
        })
    })

})