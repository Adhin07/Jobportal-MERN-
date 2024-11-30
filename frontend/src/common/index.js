
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
}


module.exports=SummaryApi