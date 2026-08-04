const deleteUser = require('../controllers/delete.controller')
const authentication = require('../middlewares/auth.middleware')

const delRoute=require('express').Router()

delRoute
.delete('/delete',authentication,deleteUser)

module.exports=delRoute