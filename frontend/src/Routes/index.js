import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import App from "../App";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";
import UserDashBoard from "../Pages/UserDashBoard";
import JobList from "../Pages/JobList";


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
            }
            
        ]
    }
])

export default router