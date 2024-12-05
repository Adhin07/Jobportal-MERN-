const mongoose=require("mongoose")

const resumeSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"",
        required:true
      },
    jobId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"",
        required :true
      },
    filename:{
        type:String,
        required:true
      },
    jobTitle: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      salary: {
        type: String,
        required: true,
      },
      experience: {
        type: String,
        required: true,
      },
      companyLocation: {
        type: String,
        required: true,
      },
      employerType: {
        type: String,
        enum: ['full-time', 'part-time'],
        required: true,
      },
      skills: {
        type: String,
        required: true,
      },
      qualification: {
        type: String,
        required: true,
      },
      jobDescription: {
        type: String,
        required: true,
      },
},{
    timestamps:true
})
const resumeModel =mongoose.model("Resume-Apply job",resumeSchema)

module.exports=resumeModel