const request =require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGlsaXBjaGFsYW1hbGFzZXR0eSIsImEiOiJjazJ1YmY3YjIxa2k5M2Nvem9icWMxNWRnIn0.D1uhciBF5KamWO8-08x9zQ&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to location services!',undefined)
        }
        else if(response.body.features.length===0){
            callback('No city found of this name try the another one!',undefined)
        }
        else
        {
            callback(undefined,{
                place:response.body.features[0].place_name,
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0]
            })
        }

    })
}
module.exports=geocode