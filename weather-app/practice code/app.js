// console.log("Starting")

// setTimeout(()=>{
//     console.log("afeter 2 sec")
// },2000)

// console.log("Stopping")

//wheather report is from darksky
//const request =require('request')

// const url ="https://api.darksky.net/forecast/ab8ff8e9dda8ed6eda84c6f770ef7d04/37.8267,-122.4233?lang=es"
// //es for spanish
// request({url : url,json:true},(error,response)=>{
//     //if error is populated the n response willnot and vice versa
//     // const data =JSON.parse(response.body)
//     // console.log(data.currently)
//     // console.log(response.body.currently)
//     if(error)
//     {
//         console.log("Unable to connect.check network connectivity")
//     }
//     else if(response.body.error){
//         console.log("Unable to find the location")
//     }
//     else{
//         console.log(response.body.daily.data[0].summary+'it is cuurently '+response.body.currently.temperature+' degrees out. There  is a '+response.body.currently.precipProbability+'% chance of rain')
//     }
  
       
// })



//geocoding feature used to turn address into lat and lon

//mapbox is used for geocoding

// const url1="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGlsaXBjaGFsYW1hbGFzZXR0eSIsImEiOiJjazJ1YmY3YjIxa2k5M2Nvem9icWMxNWRnIn0.D1uhciBF5KamWO8-08x9zQ&limit=1"

// request({url : url1,json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect.check network connectivity")
//     }
//     else if(response.body.features.length===0){
//         console.log("No city found,Try for another one")

//     }
//     else{
//         console.log("latitude "+response.body.features[0].center[0]+" longitude"+response.body.features[0].center[1])
//     }
   
// })


geocode('philadelphia',(error,data)=>{

    console.log("Error : ",error)
    console.log("Data : ",data)
    })