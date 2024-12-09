const { Error } = require("mongoose")
const resumeModel = require("../models/resumeModel")

async function resumeDownloadController(req,res){


    try {

        const {studentId}=req.params

        const resume=await resumeModel.find(studentId)

        const filePath= resume[0].filePath

        if(!filePath)
        {
            throw new Error("No resume found")
        }

        res.download(filePath,(err)=>{
            if (err) {
                console.error(err);
                res.status(500).send('Error downloading the resume');
              }
        })


        
        
    } catch (error) {
        res.json({
        message:error.message || error,
        error:true,
        success:false
    })}
}

module.exports=resumeDownloadController