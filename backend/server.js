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
    try{
        const getUsersQuery=`
        SELECT * FROM demo;`

        const result= await db.query(getUsersQuery);

        res.status(200).json({
            status: "Success",
            message: "All users fetched",
            data: result.rows
        })
    } catch(error){
        return res.status(500).json({
            status: "Failed",
            message:"Something went wrong",
            error: error
        })
    }
})

app.post('/users', async(req,res)=>{
    const {name,regd_no,email,password,age}=req.body

    try{
        const newUserQuery=`
        INSERT INTO demo(name,regd_no,email,password,age)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING id,name,regd_no,email,password,age`;

        const result= await db.query(newUserQuery,[name,regd_no,email,password,age]);

        res.status(201).json({
            status: "Success",
            message: "Created",
            data: result.rows[0]
        })
    } catch(error){
        return res.status(500).json({
            status: "Failed",
            message:"Something went wrong",
            error: error
        })
    }
})

app.post('/login', async(req,res)=>{
    const {name,password}=req.body

    try{
        const findUserQuery=`
        SELECT * FROM demo
        WHERE name=$1 AND password=$2`;

        const result= await db.query(findUserQuery,[name,password]);

        res.status(200).json({
            status: "Success",
            message: "Login Successful",
            data: result.rows[0]
        })
    } catch(error){
        return res.status(500).json({
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