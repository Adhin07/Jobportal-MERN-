
const backendDomain='http://localhost:8080'

const SummaryApi={
    Signup:
    {
        url:`${backendDomain}/api/signup`,
        method:'post'
    },
    Login:
    {
        url:`${backendDomain}/api/login`,
        method:'post'
    },
    current_user :
    {
        url :`${backendDomain}/api/user-details`,
        method :"get"
    },
    Update_user:
    {
        url:`${backendDomain}/api/update-user`,
        method:'post'        
    },
    User_logout:
    {
        url:`${backendDomain}/api/user-logout`,
        method:'get'
    },
   job_application:
   {
        url:`${backendDomain}/api/job-application`,
        method:'post'
   },
   all_job:{
        url:`${backendDomain}/api/all-job`,
        method:'get'
   },
   apply_job:
   {
        url:`${backendDomain}/api/apply-job`,
        method:'get'
   },
   resume_upload:
   {
        url:`${backendDomain}/api/resume-upload`,
        method:'post'
   },
   View_Applied_job:
   {
        url:`${backendDomain}/api/view-applied-job`,
        method:'get'
   },
   View_candidates:
   {
        url:`${backendDomain}/api/view-applied-candidates`,
        method:'get'
   },
   view_Created_Job:
   {
          url:`${backendDomain}/api/viewCreatedJob`,
          method:'get'
   },
   Update_Job_Application:
   {
          url:`${backendDomain}/api/editCreateJob`,
          method:'post'
   },
   Delete_job_application:
   {
          url:`${backendDomain}/api/deleteJobApplication`,
          method:'delete'
   },
   resumeDownload:
   {
          url:`${backendDomain}/api/resumeDownload`,
          method:'get'
   },
   status_resume:
   {
          url:`${backendDomain}/api/resume-status`,
          method:'post'
   }
   


}


module.exports=SummaryApi