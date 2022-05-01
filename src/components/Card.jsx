import Aos from 'aos';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react'
import 'aos/dist/aos.css';

function Card({shoe,setSnkr}) {
    useEffect(()=>{
        Aos.init();
    })
  return (
    <div onClick={()=>setSnkr(shoe)} data-aos="fade" data-aos-duration="600" data-aos-once="true" data-aos-easing="linear" className='card rounded-lg relative drop-shadow-lg overflow-hidden  bg-white cursor-pointer group'>
        <Link to="/overview">
        <div className='py-24 px-4 '>
            <img src={shoe.media.smallImageUrl} alt="" />
            
        </div>
        <div className='py-11 z-[2] relative'>
            <div className='group-hover:opacity-0 text-center opacity-100  transition-all duration-300 delay-200 ease-in-out flex flex-col items-center justify-center h-full'>
                <p className='text-base font-medium leading-[1.5]'>{shoe.shoe}</p>
                <p className='font-medium text-2xl leading-5'>{shoe.name}</p>
            </div>
            <div className='opacity-0 absolute top-0 left-0 h-full  w-full transition-all duration-300 delay-200 ease-linear flex justify-center items-center group-hover:opacity-100'>
                <p className='py-2 px-7 rounded-[20px] bg-[#111] text-white  text-center'>Buy</p>
            </div>
        </div>
            <div className='absolute w-full h-full top-0 left-0 group-hover:bg-[rgba(0,0,0,0.1)] group-hover:opacity-40 transition duration-300  ease-linear'></div>
            </Link>
       
    </div>
  )
}

export default Card