const express=require('express')
const userRoute=express.Router()
const newUser=require('../controllers/signup.controller')

userRoute
.post('/',newUser)

module.exports=userRoute