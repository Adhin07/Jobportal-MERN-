
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
    }


}


module.exports=SummaryApi