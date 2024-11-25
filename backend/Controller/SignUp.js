const UserModel = require("../models/userModels")
const { Error } = require("mongoose");
const bcrypt=require('bcrypt')

async function userSignUpController(req,res) 
{
    try{
        const {name,email,password,role}=req.body

        const user=await UserModel.findOne({email})

        if(user)
        {
            throw new Error("User already Exist")
        }
        if(!email)
        {
            throw new Error("Please provide an email")
        }
        if(!password)
        {
            throw new Error("Please provide the password")

        }
        if(!name){
            throw new Error("Please provide a name")
        }

        //validating user role

        const validRole=["jobseeker",'employer']
        const UserRole=validRole.includes(role)? role:"jobseeker"

        //hash the password

        const salt=await bcrypt.genSaltSync(10)
        const hashPassword= await bcrypt.hashSync(password,salt)

        if(!hashPassword)
        {
            throw new Error ('somthing went wrong')
        }

        const payload ={
            ...req.body,
            password:hashPassword,
            role:UserRole
        }
        
        const userData =new UserModel(payload)

        
        const saveUSer=userData.save()

       

        res.status(201).json({
            data:saveUSer,
            success:true,
            error:false,
            message:"User Created Successfully !"
        })
    
        
    }
    catch(err){
        res.json(
           {
            message:err.message || err,
            error:true,
            success:false
           }
        )
    }
}

module.exports=userSignUpController