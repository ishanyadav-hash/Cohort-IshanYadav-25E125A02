const {hashPassword,comparePassword}=require('../utils/password')
const {generateToken,setToken,clearToken}=require('../utils/jwt')
const db = require("../models/connection")
const login = require('./login.controller')

const updateProfile= async(req,res)=>{
    const {email,password,age}=req.body()

    try{
        const {oldEmail}=req.user.email

        const user= await db.query(`SELECT * FROM demo WHERE email=$1`,[oldEmail])

        if(user.rows.length===0) {
            return res.json({
                message:"No user with this email is found"
            })
        }

        let newPassword=user.rows[0].password 

        if(password){
            newPassword=await hashPassword(password)
        }

        const existing = await db.query("SELECT * FROM demo WHERE email=$1",[email])
        
        if (email && existing.rows.length > 0) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }

        const updatedEmail= email || user.rows[0].email
        const updatedAge=age || user.rows[0].age
        const updateQuery = `
        UPDATE demo
        SET email=$1,password=$2,age=$3
        WHERE email=$4
        RETURNING *
        `
        const result = await db.query(updateQuery, [updatedEmail,updatedPassword,updatedAge,currentEmail]);

        return res.json({
            status:"Success",
            message:"Profile updated",
            data: result.rows[0]
        })
    } catch(error){
        console.log(error)
    }
}

module.exports=updateProfile