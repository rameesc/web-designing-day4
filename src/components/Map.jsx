import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
const Map = () => {
  return (
    <section className='w-[100%] md:flex-col md:items-center md:p-[20px] flex gap-5'>
        <div className='w-[70%] bg-red-100'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37242.92339652567!2d75.95500280546452!3d11.137185841171584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64ee2471144f5%3A0x8692de4117c315d!2sKondotty%2C%20Kerala%20673638!5e0!3m2!1sen!2sin!4v1729934374191!5m2!1sen!2sin" 
         className='w-[100%] h-[400px]'
         allowfullscreen loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className='text-white'>
            <p className='flex  items-center gap-2 text-[19px] my-2'><span><IoLocationSharp size={25}/></span> Page when looking at its layou</p>
            <p  className='flex  items-center gap-2 text-[19px] my-2'><span><BiSolidPhoneCall size={25}/></span>call Now +01 12346887878</p>
            <p  className='flex  items-center gap-2 text-[19px] my-2'><span><MdEmail size={25}/></span>demo@gmail.com</p>
            <div className='flex gap-3 my-[10px]'>
                <span>< FaSquareFacebook size={25}/></span>
                <span>< FaSquareFacebook size={25}/></span>
                <span>< FaSquareFacebook size={25}/></span>
                <span>< FaSquareFacebook size={25}/></span>
            </div>
            <input className='p-2 my-3' type="text"placeholder='Enter Your Email' /><br />
            <button className='bg-[#f7c17b] p-2 text-[19px] my-2 w-[200px]'>Subscribe</button>
        </div>

    </section>
  )
}

export default Map