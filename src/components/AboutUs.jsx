import React from 'react'
import cycle4 from '../assets/img/cycle4.png'

const AboutUs = () => {
  return (
    <section className='adout-session flex justify-center gap-5 w-[100%] h-[100vh]'>
        <div className='container flex flex-col  items-center'>
            <div className='text-center flex flex-col justify-center items-center py-[50px] text-white'>
                <h1 className='font-bold text-[45px]'>About Our cycle Store</h1>
                <p className='mt-[30px] text-[20px] max-w-[800px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            </div>
            <div className='cycle-bottom'>
                <img src={cycle4} alt="" />
                
            </div>
            <div>
                <button className='bg-[#f7c17b] mt-[30px] font-[500] w-[200px] text-white p-[10px]'>Read More</button>
            </div>

        </div>
    </section>
  )
}

export default AboutUs