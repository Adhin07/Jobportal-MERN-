import React from 'react'
import loginIMG from '../Assets/images/loginsideimg.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='text-black flex'>
      
      <div className=' sm:block hidden justify-center items-center w-1/2 '>
        <img src={loginIMG} alt=''className='w-full h-full '/>
      </div>
        

      <div className="flex justify-center items-center w-full md:w-1/2 bg-green-500">

<div className="w-2/4 mx-auto ">
  <div className="flex flex-col items-center justify-center mx-auto lg:py-0 shadow-2xl">
    <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0 dark:bg-green-500 dark:border-green-500 shadow-2xl ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-gray-200 animate-bounce ">
          LOGIN
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
            >
               Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-500 dark:placeholder-white dark:text-white"
              placeholder="Enter your Email"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-500 dark:placeholder-white dark:text-white"
              placeholder="Enter Your Password"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={"/forgotpassword"}
              className="text-sm font-medium text-green-500 hover:underline dark:text-white"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-green-500 bg-white hover:bg-gray-300  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-white flex justify-end ">
            Don’t have an account yet?{" "}
            <Link
              to={"/signup"}
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
