const mongoose=require("mongoose")

const resumeSchema =new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"",required:true},
    jobId:{type:mongoose.Schema.Types.ObjectId,ref:"",required :true},
    filename:{type:String,required:true}
},{
    timestamps:true
})

const resumeModel =mongoose.model("Resume",resumeSchema)

module.exports=resumeModel