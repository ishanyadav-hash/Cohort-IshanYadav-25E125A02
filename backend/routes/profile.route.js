const updateProfile = require('../controllers/profile.controller')
const authentication = require('../middlewares/auth.middleware')

const profileRoute=require('express').Router()

profileRoute
.patch('/profile',authentication,updateProfile)