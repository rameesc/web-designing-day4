import React from 'react'
import { newCycle } from '../utils/data'
import Map from './Map'

const News = () => {
  return (
   <section className='w-[100%] flex flex-col items-center justify-center bg-[#325662] py-[50px]'>
    <div className='container  flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold text-[40px]'>News</h1>
            <p className='max-w-[800px] text-center my-[20px] text-white text-[20px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
        </div>
        <div className='grid gap-5 px-5 md-min:grid-cols-3'>
            {newCycle.map((item,index)=>{
                return <div className='hover:shadow-white hover:shadow-lg my-[30px] '>
                    <div className='  overflow-hidden'>
                     <img className='hover:scale-125 md:w-[100%] transition-all delay-200' src={item.img} alt="" />
                    </div>
                    
                    <div className='bg-white  rounded-b-lg p-[10px]'>
                        <h2 className='text-[22px] my-4 font-[500]'>{item.title}</h2>
                        <div className='flex justify-between'>
                            <span className='text-[20px]'>Post by :{item.postBy}</span>
                            <span  className='text-[20px]'>{item.date}</span>
                        </div>
                        <p className='my-[15px] text-[19px]'>{item.text}</p>
                    </div>

                   </div>
            })}

        </div>
        <div className='flex flex-col justify-center items-center my-[150px]'>
            <h1 className='font-bold text-white text-[45px]'>A call Back</h1>
            <div className='flex w-[100%] flex-col gap-5 my-[10px] '>
                <input className='input' type="text" placeholder='Name' />
                <input  className='input' type="text" placeholder='Email' />
                <input  className='input' type="text" placeholder='Phone Numbar' />
                <input id='message' className='input' type="text" placeholder='Massage' />
            </div>
            <button className='bg-[#f7c17b] rounded-md text-[20px] p-3 mt-[15px] text-white font-[400] w-[200px]'>SEND</button>

        </div>
    
    </div>
    <Map/>
   </section>
  )
}

export default News