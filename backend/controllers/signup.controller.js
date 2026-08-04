const {hashPassword,comparePassword}=require('../utils/password')
const {generateToken,setToken,clearToken}=require('../utils/jwt')
const db = require("../models/connection")

const newUser=async(req,res)=>{
    const {name,regd_no,email,password,age}=req.body

    if(!name||!regd_no||!email||!password){
        return res.json({
            message:"Name,email,regd_no,password required"
        })
    }

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
        const findUserQuery=`SELECT * FROM demo WHERE email=$1`

        const findUser=await db.query(findUserQuery,[email])

        if(findUser.rows.length>0){
            return res.json({
                message:"Email already exists"
            })
        }

        const hashedPassword=await hashPassword(password)

        const newUserQuery=`
        INSERT INTO demo(name,regd_no,email,password,age)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING id,name,regd_no,email,password,age`;

        const result= await db.query(newUserQuery,[name,regd_no,email,hashedPassword,age]);

        const user=result.rows[0]

        const token=generateToken({userID:user.id,userEmail:user.email})
        setToken(res,token)

        const{password:_,...userNOpass}=user
        res.status(201).json({
            status: "Success",
            message: "Created",
            data: userNOpass
        })
    } catch(error){
        return res.status(500).json({
            status: "Failed",
            message:"Something went wrong",
            error: error
        })
    }
}

module.exports=newUser