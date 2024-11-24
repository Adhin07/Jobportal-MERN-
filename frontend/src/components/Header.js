import React from 'react'
import Logo from './Logo'
import { IoHome } from "react-icons/io5";
import {Link}  from 'react-router-dom'

const Header = () => {
  return (
   <header className='h-16 shadow-md bg-white fixed w-full z-40'>
    <div className='h-full mx-auto flex items-center px-4 justify-between'>
    <div className='text-3xl'>
        <Logo w={80} h={80} />
    </div>

    <div className='flex items-center font-bold text-5xl text-green-400'>FindIt</div>
        <div className='flex justify-between p-4'>
            <button className='hover:bg-green-500 rounded-md p-1 cursor-pointer pr-3'>
                <div className='flex justify-center relative text-green-600 hover:text-white '>
                    <div className='flex text-black pt-1 px-1 '><IoHome/></div>
                         <Link to={'/'} className='font-semibold '>HOME</Link>
                    </div>
            </button>

    <button className='bg-green-500 text-white hover:bg-green-700 rounded-md p-1 cursor-pointer pr-3 ml-2'>
    <div className='flex justify-center relative'>  
        <Link to={"/login"} className='font-semibold '>LOGIN</Link>
    </div>
    </button>

    <button className='hover:bg-green-500 rounded-md p-1 cursor-pointer pr-3'>
                <div className='flex justify-center relative text-green-600 hover:text-white '>
                    <div className='flex text-black pt-1 px-1 '><IoHome/></div>
                         <Link to={'/'} className='font-semibold '>JOB LIST</Link>
                    </div>
            </button>
        </div>

    </div>
    </header>
  )
}

export default Header
