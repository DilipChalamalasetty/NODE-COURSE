const path =require('path')
const express=require('express')
const hbs=require('hbs')

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
        title:"weather",
        name:'dilip'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about page',
        name:'Dilip'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help page",
        name:'Dilip'
    })
})


app.listen(3000,()=>{
    console.log("server is up on port 3000")
})
