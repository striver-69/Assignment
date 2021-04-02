const express = require('express')
const router= new express.Router()
const User=require('../models/user')

//Route to store form of user in the database
router.post('/users/signup',async(req,res)=>{
    const user=new User(req.body)
    try{
        await user.save()
        res.status(201).send({user})
    }catch(e){
        res.status(400).send({"Error":e.message})
    }
})

//Login Router
router.post('/users/login',async(req,res)=>{
    try{
        const user=await User.findbyCredentials(req.body.email,req.body.password)
        res.status(200).send({user})
    }catch(e){
        res.status(400).send({"failure":"Email or Password is invalid"})
    }
})

module.exports=router