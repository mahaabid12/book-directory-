const express= require ('express')

const indexRouter = new express.Router()

indexRouter.get('/',(req,res)=>{
    res.render('index',{
        title:'Book directory'
    })
})





module.exports=indexRouter
