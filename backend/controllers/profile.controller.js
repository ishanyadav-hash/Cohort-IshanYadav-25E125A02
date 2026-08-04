const {hashPassword,comparePassword}=require('../utils/password')
const {generateToken,setToken,clearToken}=require('../utils/jwt')
const db = require("../models/connection")

const updateProfile= async(req,res)=>{
    const {email,password,age}=req.body

    try{
        const oldEmail=req.user.email

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

        const existing = await db.query("SELECT * FROM demo WHERE email=$1",[oldEmail])
        
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
        const result = await db.query(updateQuery, [updatedEmail,newPassword,updatedAge,oldEmail]);

        const {password:_,...noPass}=result.rows[0]

        return res.json({
            status:"Success",
            message:"Profile updated",
            data: noPass
        })
    } catch(error){
        console.log(error)
    }
}

const getProfile = async (req, res) => {

    try {
        const email = req.user.email;

        const result = await db.query(`SELECT id, name, regd_no, email, age FROM demo WHERE email=$1`,[email]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        return res.status(200).json({
            status: "Success",
            data: result.rows[0]
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

module.exports={updateProfile,getProfile}