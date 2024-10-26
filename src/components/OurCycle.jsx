import React from 'react'
import { ourCycle } from '../utils/data'

const OurCycle = () => {
  return (
    <div className='w-[100%] flex md:mt-[150px]  items-center justify-center my-[100px] flex-col'>
        <div className='container flex items-center justify-between flex-col'>
            <div className='text-center'>
                <h1 className='font-bold text-[40px]'>Our cycles</h1>
                <p className='font-[400] text-[20px]'>It is a long established fact that a reader will be distracted by the</p>
            </div>
            {ourCycle.map((item,index)=>{
                return <div className='flex md:flex-wrap   md:mt-[100px] md:h-[900px] md:gap-2 w-[90%] gap-[30px] my-[100px]'>
                    <div className=' md:w-[100%] w-[50%]   relative '>
                        <div className='bg-cycle  '>
                      
                        </div>
                        <img className='cycle-img md:w-[300px]' src={item.img} alt="" />
                       
                    </div>
                    <div className='  md:w-[100%]   md:p-[5px] w-[50%] '>
                        <div className=' flex justify-between items-center'>
                            <div className='w-[100px] h-[2px] bg-black'></div>
                            <h1 className='font-bold text-[40px]'>{item.title}</h1>
                        </div>
                        <p className='max-w-[400px] text-[20px] mt-[10px]'>{item.text}</p>
                        <div className='flex justify-between mt-[10px]'>
                            <button className='bg-[#325662] font-bold text-white p-[10px]'>Buy Now</button>
                            <p className='font-bold text-[25px]'>price <span className='text-[#f7c17b]'>$</span><span className='text-[#325662]'>{item.price}</span></p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default OurCycle