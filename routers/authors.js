const express=require('express')

const authorRouter= new express.Router()

authorRouter.get('/',(req,res)=>{
    res.render('authors/index')
})



authorRouter.get('/new',(req,res)=>{
    res.render('authors/new')
})

authorRouter.post(('/new'),(req,res)=>{
    res.send('a new author is created')
}

module.exports= authorRouter