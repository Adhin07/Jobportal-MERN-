const { Error } = require("mongoose")
const UserModel = require("../models/userModels")
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs')

async function userLoginController(req,res)
{
    try{
        const {email,password}=req.body

        if(!email)
        {
            throw new Error("Please provide email")
        }
        if(!password)
        {
            throw new Error("Please provide password")
        }

        const user=await UserModel.findOne({email})

        if(!user)
        {
            throw new Error("User not found")
        }

        const checkPassword=await bcrypt.compare(password,user.password)

        if(checkPassword)
        {
            const tokenData={
                _id:user._id,
                email:user.email
            }

            const token =await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY,{expiresIn: '8h' })


            const tokenOption={
                httpOnly:true,
                secure:true
            }
    
            res.cookie("token",token,tokenOption).json({
                message:"Login Successfully..!",
                data:token,
                success:true,
                error:false
            })
        }else{
            throw new Error("Please check your password")
        }
      
    }
    catch(err){
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports=userLoginController