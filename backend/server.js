const express=require('express')

const app=express();

require('dotenv').config()

const {initDatabase}=require('./controllers/initDB')

const db=require('./models/connection')

initDatabase();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to the user management API"
    })
})

app.get('/users', async(req,res)=>{
    const getUsersQuery=`
    SELECT * FROM demo;`

    try{
        const result= await db.query(getUsersQuery);
        res.send(200).json({
            status: "Success",
            message: "All users fetched",
            data: result.rows
        })
    } catch(error){
        return res.send(500).json({
            status: "Failed",
            message:"Something went wrong",
            error: error
        })
    }
})




app.listen(PORT,(err)=>{
    if(err) console.log(err);

    console.log(`Successfully connected to this port: ${PORT}`)

});