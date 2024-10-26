import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { cycleData } from '../utils/data';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='w-[100%] relative'>
        <div className='hero-items md:small-screen md:w-[100%]'>
            
        </div>
        <Swiper
        className='w-[50%] '
        modules={[Autoplay ]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        spaceBetween={10}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
       
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
        >
            {cycleData.map((item,index)=>{
                return <SwiperSlide className='' >
                    <div className='flex md:flex-col-reverse md:gap-5 gap-5 mt-[120px] '>
                      <div className=' relative md:mt-[50px]'>
                        <div className='sm:hidden absolute left-[50%] top-[-25%] right-0 font-bold rounded-full w-[100px] h-[100px] flex justify-center items-center bg-[#f7c17b]'>
                            <h3 className='text-[#325662] text-[20px]'>BEST</h3>
                        </div>
                        <img className='w-[700px] md:w-[100%] ' src={item.img} alt="" />
                      </div>
                      <div className='mt-[-30px]'>
                        <h1 style={{lineHeight:'50px'}} className='font-bold text-[45px] max-w-[200px] text-white'>{item.title}</h1>
                        <p className='max-w-[400px] mt-5 text-white text-[18px]'>{item.texts}</p>
                        <button className='bg-[#f7c17b] p-3 my-3 cursor-pointer text-white font-[500] w-[200px]'>Shop Now</button>
                      </div>
                    </div>
                    

                </SwiperSlide>

            })}

        </Swiper>
        {/* <div className='hero-btn'>
          <button className='swiper-button-prev'><FaChevronLeft/></button>
          <button className='swiper-button-next'><FaChevronRight/></button>
        </div> */}

    </div>
  )
}

export default Hero