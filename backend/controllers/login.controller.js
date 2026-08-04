const {hashPassword,comparePassword}=require('../utils/password')
const {generateToken,setToken,clearToken}=require('../utils/jwt')
const db = require("../models/connection")

const login= async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email||!password){
            return res.json({
                message:"Email and password required"
            })
        }
        const findUserQuery=`
        SELECT * FROM demo
        WHERE email=$1`;

        const user= await db.query(findUserQuery,[email]);

        if(user.rows.length===0){
            return res.status(401).json({
                message:"Invalid email or password"
            })
        }

        const validatePassword=await comparePassword(password,user.rows[0].password)

        if(!validatePassword){
            return res.json({
                message:"Invalid password"
            })
        }

        const token=generateToken({userId: user.rows[0].id,email:user.rows[0].email})
        setToken(res,token)

        const{password:_,...userNopass}=user.rows[0]

        res.status(200).json({
            status: "Success",
            message: "Login Successful",
            data: userNopass
        })
    } catch(error){
        console.log(error)
        return res.status(500).json({
            status: "Failed",
            message:"Something went wrong",
            error: error
        })
    }
}

module.exports=login 