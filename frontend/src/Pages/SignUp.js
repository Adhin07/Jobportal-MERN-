import React, { useState } from "react";
import loginIMG from "../Assets/images/signup.jpg"
import { Link } from "react-router-dom";
import SummaryApi from "../common";
import {toast} from 'react-toastify'

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  

  const handleOnChange=(e)=>{
    const {name,value}=e.target

    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })

  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    if(data.password === data.confirmPassword){
      const dataResponse =await fetch(SummaryApi.Signup.url,{
        method:SummaryApi.Signup.method,
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })

      console.log("dataResponse",dataResponse)

      const dataApi =await dataResponse.json()

      if(dataApi.success){
        toast.success(dataApi.message)
      }

      if(dataApi.error)
      {
        toast.error(dataApi.message)
      }
    }
  }


  return (
    <div className="text-black flex">
      {/* Left Image Section */}
      <div className="sm:block hidden justify-center items-center w-1/2">
        <img src={loginIMG} alt="Signup" className="w-full h-full" />
      </div>

      {/* Right Form Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 bg-purple-200 rounded-lg">
        <div className="w-2/4 mx-auto">
          <div className="flex flex-col items-center justify-center mx-auto lg:py-0 shadow-2xl">
            <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 shadow-2xl bg-purple-300">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-gray-200 animate-bounce">
                  SIGN UP
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleOnChange}
                      value={data.name}
                      id="name"
                      className="bg-gray-50 border text-gray-900 rounded-lg  block w-full p-2.5  dark:placeholder-black dark:text-white"
                      placeholder="Enter your Name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleOnChange}
                      value={data.email}
                      id="email"
                      className="bg-gray-50 border text-gray-900 rounded-lg  block w-full p-2.5  dark:placeholder-black dark:text-white"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleOnChange}
                      value={data.password}
                      id="password"
                      className="bg-gray-50 border text-gray-900 rounded-lg  block w-full p-2.5  dark:placeholder-black dark:text-white"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
                    >
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={handleOnChange}
                      value={data.confirmPassword}
                      id="confirm-password"
                      className="bg-gray-50 border text-gray-900 rounded-lg  block w-full p-2.5  dark:placeholder-black dark:text-white"
                      placeholder="Confirm Your Password"
                      required
                    />
                  </div>

                  {/* Radio Buttons */}
                  <div>
                    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex">
                      Are you a:
                    </label>
                    <div className="flex items-center space-x-4">
                      {/* Jobseeker Radio Button */}
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="role"
                          value="jobseeker"
                          checked={data.role === "jobseeker"} // Reflects the selected value
                          onChange={handleOnChange} // Updates the state when clicked
                          className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-green-500 dark:focus:ring-offset-green-500"
                          required
                        />
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                          Jobseeker
                        </span>
                      </label>

                      {/* Employer Radio Button */}
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="role"
                          value="employer"
                          checked={data.role === "employer"} // Reflects the selected value
                          onChange={handleOnChange} // Updates the state when clicked
                          className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-green-500 dark:focus:ring-offset-green-500"
                          required
                        />
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                          Employer
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full text-purple-500 bg-white hover:bg-purple-500 focus:ring-4 focus:outline-none hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                    Sign Up
                  </button>

                  {/* Login Link */}
                  <p className="text-sm font-light text-gray-500 dark:text-white flex justify-end">
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-green-500 hover:underline dark:text-white ml-3"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
