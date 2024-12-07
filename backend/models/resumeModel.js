const mongoose=require("mongoose")

const resumeSchema =new mongoose.Schema({
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
      batchNumber:{
        type:String,
        required:true
      },
        filePath: {
          type: String,
          required: true,
        },
        fileName: {
          type: String, 
          required: true,
        },
},{
    timestamps:true
})

resumeSchema.index({ userId: 1, jobId: 1 }, { unique: true });

const resumeModel =mongoose.model("Resume-Apply job",resumeSchema)

module.exports=resumeModel