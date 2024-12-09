const mongoose=require('mongoose')

const statusSaveSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
      },
    jobId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"jobapplication",
        required :true
      },
      status:
      {
        type:String,
        enum:['shortlisted','rejected','hired','on-hold'],
        required:true
      },
      batchNumber:{
        type:String,
        required:true
      }

},{
        timestamps:true
})

const statusModel=mongoose.model("status",statusSaveSchema)

module.exports=statusModel