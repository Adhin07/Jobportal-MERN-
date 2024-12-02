import React, { useState } from 'react'
import loginIMG from '../Assets/images/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import SummaryApi from '../common'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import {toast} from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import { useDispatch } from 'react-redux';

function Login() {

  const dispatch=useDispatch()
  const [showPassword,setShowPassword]=useState(false)
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const navigate=useNavigate()

  const handleOnChange=(e)=>{
    const{name,value}=e.target

    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const dataResponse=await fetch(SummaryApi.Login.url,{
      method:SummaryApi.Login.method,
      credentials:"include",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })

    const dataApi=await dataResponse.json()

    if(dataApi.success){
      toast.success(dataApi.message)
      dispatch(setUserDetails(dataApi.data));
    
      
      navigate("/dashboard")
    }

    if(dataApi.error){
      toast.error(dataApi.message)
    }
    }

   

  return (
    <div className='text-black flex'>
      
      <div className=' sm:block hidden justify-center items-center w-1/2 '>
        <img src={loginIMG} alt=''className='w-full h-full '/>
      </div>
        

      <div className="flex justify-center items-center w-full md:w-1/2 bg-purple-200">
      <div className="w-2/4 mx-auto">
      <div className="flex flex-col items-center justify-center mx-auto lg:py-0 shadow-2xl">
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-purple-300  shadow-2xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white  -700 animate-bounce">
              LOGIN
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div >
                <label className="mb-2 font-medium flex">Email:</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={data.email}
                  name="email"
                  onChange={handleOnChange}
                  className="w-full bg-slate-100 p-2 rounded-md outline-none border  focus:ring-2 text-black"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className=" mb-2 font-medium flex">Password:</label>
                <div className="bg-slate-100 p-2 flex items-center rounded-md border border-gray-300 focus-within:ring-2 ">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={data.password}
                    name="password"
                    onChange={handleOnChange}
                    className="w-full bg-transparent outline-none text-black"
                    required
                  />
                  <div
                    className="cursor-pointer text-xl ml-2"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>

                <Link
                  to="/ForgotPassword"
                  className="block w-fit ml-auto mt-2 text-sm text-blue-600 hover:underline hover:text-red-600">
                  Forgot password?
                </Link>
              </div>

              {/* Sign-in Button */}
              
              <button
                type="submit"
                className="w-full text-purple-500 bg-white hover:bg-purple-600 hover:text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign in
              </button>
             

              {/* Sign-up Link */}
              <p className="text-sm font-light text-gray-500 dark:text-white flex justify-end">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-green-500 hover:underline dark:text-white ml-3"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
       
    </div>
  )
}

export default Login
