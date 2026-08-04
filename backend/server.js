const express=require('express')

const app=express();

const cors=require('cors')

app.use(cors({credentials: true}))

require('dotenv').config()

const userRoute = require('./routes/signup.route');
const allDetailsRoute = require('./routes/details.route');
const loginRoute = require('./routes/login.route');
const delRoute = require('./routes/delete.route');
const profileRoute = require('./routes/profile.route');

const authentication = require('./middlewares/auth.middleware');

const db=require('./models/connection');

const {initDatabase}=require('./controllers/initDB')

initDatabase();

const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended: false}))

PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to the user management API"
    })
})

app.use('/users', allDetailsRoute)

app.use('/users',userRoute)

app.use('/users', loginRoute)

app.use('/users',delRoute)

app.use('/',profileRoute)

app.listen(PORT,(err)=>{
    if(err) console.log(err);

    console.log(`Successfully connected to this port: ${PORT}`)

});
