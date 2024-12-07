import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import App from "../App";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";
import UserDashBoard from "../Pages/UserDashBoard";
import JobList from "../Pages/JobList";
import EmployerDashboard from "../Pages/EmployerDashboard";
import JobApplication from "../Pages/JobApplication";
import ViewJobApplication from "../Pages/ViewJobApplication";
import JobDetails from "../Pages/ViewAppliedJobs";
import ViewCandidates from "../Pages/ViewCandidates";
import createdJobView from "../components/createdJobView";
import JobApplicationEdit from "../Pages/JobApplicationEdit";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signup",
                element:<SignUp/>
            },
            {
                path:"forgotpassword",
                element:<ForgotPassword/>
            },
            {
                path:"dashboard",
                element:<UserDashBoard/>
            },
            {
                path:"joblist",
                element:<JobList/>
            },
            {
                path:"employer-dashboard",
                element:<EmployerDashboard/>
            },
            {
                path:"job-application",
                element:<JobApplication/>
            },
            {
                path:"viewJobDetails/:jobId",
                element:<ViewJobApplication/>
            },
            {
                path:"view-applied-job",//jobseeker can view the applied job details
                element:<JobDetails/>
            },
            {
                path:"ViewappliedCandidates", //Employee can view the candidates
                element:<ViewCandidates/>
            },
            {
                path:"edit-Create-Job/:jobId", //Editing Employee created job
                element:<JobApplicationEdit/>
            }
            
        ]
    }
])

export default router