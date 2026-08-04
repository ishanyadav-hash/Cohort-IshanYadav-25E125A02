const db = require("../models/connection")

const allUser= async(req,res)=>{
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
}

module.exports=allUser