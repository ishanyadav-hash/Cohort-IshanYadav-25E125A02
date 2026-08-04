const loginRoute=require('express').Router()

const login=require('../controllers/login.controller')

loginRoute
.post('/login', login)

module.exports=loginRoute