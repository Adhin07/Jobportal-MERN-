import React from 'react'
import Logo from './Logo'
import { IoHome } from "react-icons/io5";
import {Link, useNavigate}  from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RiLoginBoxFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';


const Header = () => {

    const navigate=useNavigate()
    const user=useSelector((state)=>state?.user?.user)

       const dispatch= useDispatch()

       const handleLoggout=async()=>{
        const fetchData=await fetch(SummaryApi.User_logout.url,
            {
                method:SummaryApi.User_logout.method,
                credentials:"include"
            }
        )

        const LogoutData=await fetchData.json()

        if(LogoutData.success){
            toast.success(LogoutData.message)
            dispatch(setUserDetails(null))
            navigate("/")
        }
       }

       
  return (
<header className="h-16 shadow-md bg-white fixed w-full z-40">
  <div className="h-full mx-auto flex items-center px-4 justify-between">
    
    <div className="text-3xl">
      <Logo w={60} h={60} />
    </div>

    <div className="hidden sm:flex items-center justify-center font-extrabold text-2xl sm:text-5xl text-gray-700">
      FindIt
    </div>

    <div className="flex items-center space-x-2 sm:space-x-4">

      <button className="hover:bg-purple-500 rounded-md p-2 cursor-pointer">
        <div className="flex items-center text-purple-600 hover:text-white">
          <IoHome className="text-xl sm:text-2xl" />
          <Link to="/" className="ml-2 font-semibold hidden sm:block">
            HOME
          </Link>
        </div>
      </button>

      
      {user ? (
        <button
          className="text-purple-600 hover:bg-purple-500 rounded-md p-2 cursor-pointer"
          onClick={handleLoggout}
        >
          <div className="flex items-center font-semibold hover:text-white">
            <RiLoginBoxFill className="text-xl sm:text-2xl" />
            <span className="ml-2 hidden sm:block">LOGOUT</span>
          </div>
        </button>
      ) : (
        <button className="text-purple-600 hover:bg-purple-500 rounded-md p-2 cursor-pointer">
          <div className="flex items-center font-semibold hover:text-white">
            <RiLoginBoxFill className="text-xl sm:text-2xl" />
            <Link to="/login" className="ml-2 hidden sm:block">
              LOGIN
            </Link>
          </div>
        </button>
      )}

      {user && (
        <button className="hover:bg-purple-500 rounded-md p-2 cursor-pointer">
          <div className="flex items-center text-purple-600 hover:text-white">
            <MdDashboard className="text-xl sm:text-2xl" />
            <Link
              to="/dashboard"
              className="ml-2 font-semibold hidden sm:block uppercase"
            >
              Dashboard
            </Link>
          </div>
        </button>
      )}
    </div>
  </div>
</header>

  )
}

export default Header
