const UserModel = require("../models/userModels");

async function userDetailsController(req,res){
    try{
        const user =await UserModel.findById(req.userId)
        console.log({user});
        
        res.status(200).json({
            data:user,
            error:false,
            success:true,
            message:"USer Details"
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports=userDetailsController