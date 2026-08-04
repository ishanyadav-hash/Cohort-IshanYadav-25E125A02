const allUser = require('../controllers/alldetails.controller')

const allDetailsRoute=require('express').Router()

allDetailsRoute
.get('/database',allUser)

module.exports=allDetailsRoute