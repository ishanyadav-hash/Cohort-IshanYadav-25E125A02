const jwt = require('jsonwebtoken')

const authentication=(req,res,next)=>{
    try{
        const token= req.cookoes?.token

        if(!token){
            return res.json({
                message:"No token provided"
            })
        }

        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()

    } catch(error){
        console.log(error)
    }
}

module.exports=authentication