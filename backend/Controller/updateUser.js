const UserModel = require("../models/userModels")
const bcrypt=require('bcryptjs')

async function updateUser(req,res){
    try{
        const sessionUser=req.userId

        const {name,email,password,mobileNumber,}=req.body

        const salt=await bcrypt.genSaltSync(10)
        const hashPassword= await bcrypt.hashSync(password,salt)

        if(!hashPassword)
        {
            throw new Error ('somthing went wrong')
        }

        const payload={
            ...(email && {email:email}),
            ...(name && {name:name}),
            ...(hashPassword && {password:hashPassword}),
            ...(mobileNumber && {mobile:mobileNumber}),
        }

        const user=await UserModel.findById(sessionUser)

        

        const updateUser=await UserModel.findByIdAndUpdate(user,payload)

        res.json({
            data:updateUser,
            message:"User Updated",
            error:false,
            success:true
        })

    }
    catch(err){
        res.status(400).json({
            message :err.message || err,
            error :true,
            success:false
        })

    }
}

module.exports=updateUser