import React from 'react'
import Logo from './Logo'
import { IoHome } from "react-icons/io5";
import {Link}  from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RiLoginBoxFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";


const Header = () => {
    const user=useSelector((state)=>state?.user?.user)
       const dispatch= useDispatch()

       
  return (
   <header className='h-16 shadow-md bg-white fixed w-full z-40'>
    <div className='h-full mx-auto flex items-center px-4 justify-between'>
    <div className='text-3xl'>
        <Logo w={80} h={80}/>
    </div>

    <div className='flex items-center font-bold text-5xl text-gray-900'>FindIt</div>
        <div className='flex justify-between p-4'>
            <button className='hover:bg-purple-500 rounded-md p-1 cursor-pointer pr-3'>
                <div className='flex justify-center relative text-purple-600 hover:text-white '>
                    <div className='flex text-black pt-1 px-1 '><IoHome/></div>
                         <Link to={'/'} className='font-semibold '>HOME</Link>
                    </div>
            </button>

            {
                user ? (
                    <button className=' text-purple-600 hover:bg-purple-500 rounded-md p-1 cursor-pointer pr-3 ml-2 mr-2' >
                    <div className='flex justify-center relative font-semibold hover:text-white'>  
                    <div className='flex text-black pt-1 px-1'>
                     <RiLoginBoxFill />
                    </div>
                    <Link to={"/"}>LOGOUT
                    </Link>
                    
                    </div>
                    </button>
                ):
                (
                    <button className=' text-purple-600 hover:bg-purple-500 rounded-md p-1 cursor-pointer pr-3 ml-2 mr-2' >
                    <div className='flex justify-center relative font-semibold hover:text-white'>  
                    <div className='flex text-black pt-1 px-1'>
                     <RiLoginBoxFill />
                    </div>
                    <Link to={"/login"}>LOGIN</Link>
                    
                    </div>
                    </button>
                )
               
           
           }


        { 
            user && (
                
                    <button className='hover:bg-purple-500 rounded-md p-1 cursor-pointer pr-3'>
                        <div className='flex justify-center relative text-purple-600 hover:text-white '>
                        <div className='flex text-black pt-1 px-1 '><MdDashboard/></div>
                        <Link to={'/dashboard'} className='font-semibold uppercase'>Dashboard</Link>
                        </div>
                    </button>

                    )
        }
    
        </div>

    </div>
    </header>
  )
}

export default Header
