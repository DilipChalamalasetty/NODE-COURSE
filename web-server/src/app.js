const path =require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app=express()
//define paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setub handle bar engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)  
hbs.registerPartials(partialsPath)
//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather",
        name:'Dilip'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page',
        name:'Dilip'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help page",
        name:'Dilip'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('notfound',{
        title:'Error Page',
        error:'Help article not found',
        name:'Dilip'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Adddress need to specified in qyery string"
        })
    }
    const location=req.query.address
    geocode(location,(error,data)=>{
        if(error){
            return res.send({
                Error: error})
        }
    forecast(data.latitude,data.longitude,(error,weather)=>{
        if(error)
        {
        return res.send({
            Error: error})
        }
        res.send({
            address: data.place,
            forecast:weather
        })
    })
    })       
})
app.get('*',(req,res)=>{
    res.render('notfound',{
        title:'Error page',
        error:'404 page not found',
        name:'Dilip'
    })
})

app.listen(3000,()=>{
    console.log("server is up on port 3000")
})
