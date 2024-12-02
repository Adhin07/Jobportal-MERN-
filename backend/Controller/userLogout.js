async function userLogout(req,res){

    try{
        res.clearCookie("token")

        res.json({
            message:"Logged out Successfully",
            error:false,
            success:true,
            data:[]
        })

    }
    catch(err){
        res.json(400)
           ({ 
            message:err.message || err,
            success:false,
            error:true
        })
    }
}

module.exports =userLogout