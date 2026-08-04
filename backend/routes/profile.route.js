const {updateProfile,getProfile} = require('../controllers/profile.controller')
const authentication = require('../middlewares/auth.middleware')

const profileRoute=require('express').Router()

profileRoute
.patch('/profile',authentication,updateProfile)
.get('/profile',authentication,getProfile)
module.exports=profileRoute
