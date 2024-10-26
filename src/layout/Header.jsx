import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { NavLink,Outlet } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { motion } from 'framer-motion';

const Header = () => {

  const  items={
    close:{x:800},
    open:{x:0}
  }

  const [show,setShow]=useState(false)
  return (
    <>
    <header className='w-[100%] h-[100px] z-10 flex  overflow-hidden'>
      <div className='px-2 w-[100%] flex items-center justify-between'>
        <img src={logo} alt="" />
        <div className='right flex gap-9'>
          <motion.ul
          animate={show?"open":"close"}
          variants={items}
          
          className='flex md:hidden text-white text-[20px] items-center gap-5'>
            <li>Home</li>
            <li>about</li>
            <li>Our Cycle</li>
            <li>shop</li>
            <li>News</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li><FaShoppingCart/></li>
          </motion.ul>
          <div className='menu-icon md:text-[#325662] md-min:text-white'>
            <RiMenu3Line onClick={()=>setShow(!show)}   size={35}/>

          </div>
        </div>
      </div>
      
    </header>
    {show&& <ul className='bg-[#5d9db3] hidden md:block text-white cursor-pointer text-[20px] w-[100%] list-none p-3'>
           <li className='hover:text-black'>Home</li>
            <li  className='hover:text-black'>about</li>
            <li className='hover:text-black'>Our Cycle</li>
            <li className='hover:text-black'>shop</li>
            <li className='hover:text-black'>News</li>
            <li className='hover:text-black'>Contact Us</li>
            <li className='hover:text-black'>Login</li>
            <li className='hover:text-black'><FaShoppingCart/></li>
        
      </ul>}
   
   <Outlet/>
   </>
  )
}

export default Header