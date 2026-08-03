const jwt=require('jsonwebtoken')

const generateToken= (payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'1d'
    })
}

const setToken=(res,token)=>{
    res.cookie("token",token,{
        httpOnly:true,
        sameSite: "Strict",
        maxAge: 24*60*60*1000
    })
}

const clearToken=(res)=>{
    res.cookie('token','',{
        httpOnly: true,
        expires: new Date(0)
    })
}

module.exports={
    generateToken,setToken,clearToken
}