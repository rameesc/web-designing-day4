import React from 'react'
import client from '../assets/img/client.png'
import { FaQuoteLeft } from "react-icons/fa";
const Customer = () => {
  return (
    <section className='w-[100%] md:pt-[350px] py-[180px] flex flex-col items-center justify-center'>
        <div className='container border-2 p-10 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[45px]'>Says Customers</h1>
            <div className='flex md:flex-wrap shadow-2xl gap-5 mt-[20px] p-[10px]'>
               <div className='  '>
                <img className='w-[300px] md:w-[400px]' src={client} alt="" />
               </div>
               <div>
                <span><FaQuoteLeft className=' text-[#f7c17b] text-[25px]'/></span>
                <p className='max-w-[600px] text-[20px] my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                <h2 className='font-bold text-[22px]'>Channery</h2>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Customer