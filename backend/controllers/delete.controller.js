const {hashPassword,comparePassword}=require('../utils/password')
const {generateToken,setToken,clearToken}=require('../utils/jwt')
const db = require("../models/connection")

const deleteUser= async(req,res)=>{
    const {email,password}=req.body

    try{
        const findUserQuery = `
        SELECT * FROM demo
        WHERE email = $1;
        `;

        const user = await db.query(findUserQuery, [email]);

        
        const validatePassword=await comparePassword(password,user.rows[0].password)
        
        if(!validatePassword){
            return res.json({
                message:"Invalid password"
            })
        }

        const delUserQuery=`
        DELETE FROM demo
        WHERE email=$1
        RETURNING *`;
        
        const result= await db.query(delUserQuery,[email]);

        clearToken(res)

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
}

module.exports=deleteUser