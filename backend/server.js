const express=require('express')

const app=express();

const cors=require('cors')

app.use(cors())

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

    if (password.length < 8) {
        return res.status(400).json({
            status: "Failed",
            message: "Password must be at least 8 characters."
        });
    }

    if (regd_no.length !== 10) {
        return res.status(400).json({
            status: "Failed",
            message: "Registration number must be exactly 10 characters."
        });
    }

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

app.patch('/profile', async (req, res) => {
    const {name,currentPassword,newPassword,email,age} = req.body;
    try {
        const checkUserQuery = `
        SELECT * FROM demo
        WHERE name = $1 AND password = $2;
        `;
        const user = await db.query(checkUserQuery, [name, currentPassword]);

        if (newPassword.length < 8) {
            return res.status(400).json({
                status: "Failed",
                message: "Password must be at least 8 characters."
            });
        }
        const updateUserQuery = `
        UPDATE demo
        SET email=$3,password=$4,age=$5
        WHERE name = $1 AND password=$2
        RETURNING id, name, regd_no, email, age;
        `;

        const result = await db.query(updateUserQuery, [name,currentPassword,email,newPassword,age]);

        res.status(200).json({
            status: "Success",
            message: "Profile updated successfully",
            data: result.rows[0]
        });

    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Something went wrong",
            error
        });
    }
});

app.delete('/profile', async(req,res)=>{
    const {name,password}=req.body

    try{
        const delUserQuery=`
        DELETE FROM demo
        WHERE name=$1 AND password=$2
        RETURNING *`;

        const result= await db.query(delUserQuery,[name,password]);

        res.status(204).json({
            status: "Success",
            message: "Deleted Successful",
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