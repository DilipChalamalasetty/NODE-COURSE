const chalk=require('chalk')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
const location=process.argv[2]
if(location)
{
geocode(location,(error,data)=>{
    if(error){
        return console.log("Error : ",chalk.red.bold(error))
    }
// console.log("Data : ",data)
forecast(data.latitude,data.longitude,(error,weather)=>{
    if(error)
    {
    return console.log("Error : ",chalk.red.bold(error))
    }
    console.log(chalk.bold.inverse("Location"), chalk.green.bold(data.place))
    console.log(chalk.bold.inverse("Weather report: "),weather)
})
})
}
else{
    console.log("Please specifiy the location like the following command")
    console.log("node app.js <location>")
}
