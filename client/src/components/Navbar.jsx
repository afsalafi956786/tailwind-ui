import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    
    const [nav,setNav]=useState(false)

 function handleNav(){
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto'>
         <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
         <ul className=' hidden md:flex'>
            <li className='p-5' >Home</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Resources</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Contact</li>
         </ul>
         <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {
                nav? <AiOutlineClose size={22}/>: <AiOutlineMenu size={22}/>
            }
           
         </div>
         <div className={nav ? 'fixed left-0 top-0 h-full w-[50%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500  ':'fixed left-[-100%]'}>
         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
         <ul className='uppercase p-4'>
            <li className='p-5 border-b border-gray-600 ' >Home</li>
            <li className='p-5 border-b border-gray-600'>Company</li>
            <li className='p-5 border-b border-gray-600'>Resources</li>
            <li className='p-5 border-b border-gray-600'>About</li>
            <li className='p-5'>Contact</li>
         </ul>
         </div>
    </div>
  )
}

export default Navbar