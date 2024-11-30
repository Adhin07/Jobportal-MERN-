import React from 'react'
import homeIMG from '../Assets/images/home.jpg'
import { FiArrowRight } from "react-icons/fi";

function Main() {
  return (
    <div>
             
             <div className="flex">

    <div className="w-1/2 bg-white p-4">
    <h1 className="text-6xl text-blue-900 mt-14 font-bold">Unlock New Career <br/> Paths Today.</h1>
    <p className='pt-12 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <div className='flex justify-center mt-14'>
        <button className=' flex bg-green-400 text-white p-4 rounded-lg hover:bg-green-600 font-semibold text-lg'>Learn More 
            <div className='my-auto pl-1'><FiArrowRight/></div>
        </button>
    </div>
  </div>


  <div className="w-1/2 bg-white p-4">
    <div className='h-2/4'>
    <img src={homeIMG}/>
    </div>
  </div>
</div>



    </div>
  )
}

export default Main
