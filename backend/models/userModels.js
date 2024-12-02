const mongoose=require('mongoose')

const userSchema =new mongoose.Schema({
    name:String,
    mobile:Number,
    email:{type:String,
            required:true,
            unique:true},
    password:{type:String,
            required:true},
    role:String,


},{
        timestamps:true
})

const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel