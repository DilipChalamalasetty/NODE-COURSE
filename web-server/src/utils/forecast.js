const chalk=require('chalk')
const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    url='https://api.darksky.net/forecast/ab8ff8e9dda8ed6eda84c6f770ef7d04/'+latitude+','+longitude+'?units=si'
    request({json:true,url:url},(error,response)=>{
        if(error){
            callback('Unable to connect to internet!',undefined)
        }
        else if(response.body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined,response.body.daily.data[0].summary+'it is cuurently '+response.body.currently.temperature+' degrees out. There  is a '+response.body.currently.precipProbability+'% chance of rain')
        }
    })

}
module.exports=forecast