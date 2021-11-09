const express= require('express')
const mongoose=require('mongoose')
const hbs= require('hbs')
const path=require('path')
const indexRouter = require('./routers/index')



const app=express()


//set view engine 
app.set('view engine','hbs')
//where are our vues coming from 
const viewPath=path.join(__dirname,'/views')
app.set('views', viewPath)
//the header and the footer that we don't have to duplicate 
const partialPath=path.join(__dirname,'/partials')
hbs.registerPartials(partialPath)
//public 
const publicDirectoryPath= path.join(__dirname,'/public')
app.use(express.static(publicDirectoryPath))
mongoose.connect('mongodb://127.0.0.1:27017/bookLibrary',{
    useNewUrlParser:true,
  

})
const db= mongoose.connection
db.on('error',error=> console.error(error))
db.once('open',()=>{console.log('connceted ')})


app.use('/',indexRouter)






const port= process.env.port||3000
app.listen(port,()=>{
    console.log('app is running '+ port)
})




