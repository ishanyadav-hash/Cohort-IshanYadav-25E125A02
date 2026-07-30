const express=require('express')

const app=express();

require('dotenv').config

const {initDatabase}=require('./controllers/initDB')

const db=require('./models/connection')

initDatabase();

PORT = process.env.PORT



app.listen(PORT,(err)=>{
    if(err) console.log(err);

    console.log(`Successfully connected to this port: ${PORT}`)

});