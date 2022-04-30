import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import {MdLocationOn} from 'react-icons/md'
import {AiFillAppstore} from 'react-icons/ai'

function Nav() {

    const [active,setActive] = useState(0);

    const handleActive = (id)=>{
       if(id===active){
           return
       }
       setActive(id);
    }

  return (
    <div className=''>
        <div className='px-9 border-[1px] border-gray-300'>
            <ul className='flex text-sm items-center justify-end text-[#757575] '>
                <li >
                    <p className='px-2 py-3 cursor-pointer'>
                        Join/Log In
                    </p>
                </li>
                <li >
                    <p className='px-2 py-3 cursor-pointer'>
                        Help
                    </p>
                </li>
                <li >
                    <p className='px-2 py-3 relative cursor-pointer'>
                    <HiShoppingCart className='text-xl  '/>
                    <span className='absolute bottom-6 right-1 bg-red-500 text-white rounded-full w-[14px] h-[14px] text-center text-[10px] leading-[14px]'>1</span>
                    </p>
                </li>
                <li >
                    <p className='flex items-center px-2 py-3 cursor-pointer'>
                    <MdLocationOn className='text-xl '/>
                    <span>Japan</span>
                    </p>
                </li>
                
            </ul>
        </div>
        <div className='flex items-center justify-between px-9 border-[1px] border-gray-300'>
            <div>
                <Link to="/">
                <svg fill="#FF0017" fillRule="nonzero" width="50px" height="35px" viewBox="0 0 50 34" role="img"><title>Nike Sneakers Web</title><path d="M13.3.728c-2.102 2.34-3 3.732-3.482 5.389-.44 1.512-.207 2.76.671 3.626.697.69 1.437.947 2.717.947 1.041 0 1.932-.17 3.237-.615.715-.238 23.795-9.812 23.952-9.93a.03.03 0 0 0 0-.045c-.012-.012-5.075 1.3-11.254 2.918-6.174 1.612-11.468 2.986-11.763 3.048-.816.17-2.152.157-2.73-.025a2.52 2.52 0 0 1-1.605-1.505c-.126-.308-.145-.477-.145-1.086.007-.897.17-1.499.722-2.628.207-.42.37-.784.357-.797-.018-.012-.32.307-.677.703zM3.79 16.713c-2.184.495-3.67 2.434-3.771 4.93-.05 1.193.182 2.083.765 2.987.308.458 1.286 1.436 1.945 1.938 1.148.872 1.462 1.293 1.399 1.876-.044.364-.232.621-.602.797-.897.445-2.183-.107-3.231-1.387l-.232-.282v5.213l.42.132c.853.27 1.13.301 2.622.301 1.337 0 1.475-.012 1.914-.144 1.324-.414 2.403-1.317 3.005-2.503.113-.22.257-.54.32-.722l.119-.332v1.8l.006 1.807h4.266l.013-3.914.019-3.915 1.505 3.896 1.512 3.902 1.832.019 1.832.012V16.75h-4.266l-.013 3.551-.018 3.545-1.004-3.545-1.004-3.55H8.469v4.811c-.006 4.8-.006 4.818-.125 4.492-.301-.84-.904-1.606-1.85-2.346-.371-.289-.885-.697-1.149-.904-.621-.49-.89-.878-.89-1.292 0-.264.03-.345.225-.552.257-.289.54-.402.991-.395.496.012 1.242.407 1.794.953l.44.433v-4.686l-.402-.163c-.847-.333-1.324-.427-2.359-.452-.677-.013-1.091.006-1.355.063zM45.056 16.744c-.25.063-.702.232-.997.383-.91.451-1.794 1.418-2.196 2.396-.088.22-.163.408-.175.414-.013.013-.12-.182-.239-.439-.728-1.562-2.164-2.428-4.435-2.679-.464-.056-2.096-.069-5.515-.056l-4.855.019-1.073 2.283-1.073 2.278-.019-2.297-.012-2.296h-4.392v16.374h4.392v-3.438l.006-3.431 1.324 3.431 1.33 3.438h8.318l.02-2.246c.006-1.23.006-2.704 0-3.274-.007-.571.012-.992.037-.942.025.05.564 1.525 1.198 3.275l1.148 3.18 2.641.032c1.45.02 3.194.05 3.877.076 1.105.031 1.286.018 1.788-.1a4.936 4.936 0 0 0 3.275-2.592c.377-.753.515-1.361.552-2.365.082-2.152-.552-3.319-2.647-4.893-1.468-1.098-1.788-1.638-1.35-2.259.44-.62 1.463-.583 2.366.088.376.276 1.085 1.004 1.085 1.11 0 .032.032.057.063.057.038 0 .063-.878.063-2.503V17.27l-.364-.163c-.715-.32-1.324-.433-2.553-.458-.948-.019-1.205-.006-1.588.094zM31.041 27.773l-.018 3.375-1.487-3.588c-.822-1.97-1.493-3.608-1.493-3.639 0-.025.67-1.443 1.486-3.143l1.494-3.1.018 3.363c.007 1.851.007 4.881 0 6.732zm5.603-7.215c.608.345.928 1.035.853 1.87-.088 1.091-.778 1.844-1.688 1.85h-.364v-3.971l.433.032c.333.025.515.081.766.22zm6.198 4.869c.295.307.822.784 1.167 1.06.345.276.759.608.928.746.954.803.703 1.939-.477 2.152-.771.138-2.139-.615-2.766-1.524-.1-.145-.207-.257-.232-.257-.032 0-.063.614-.07 1.36l-.018 1.356-.96-1.989c-.533-1.098-.954-1.995-.941-2.001.652-.326.834-.458 1.248-.86.377-.37.534-.59.747-1.016l.27-.546.282.477c.157.27.515.722.822 1.042z"></path></svg>
                </Link>
            </div>
                <div>
                    <ul className='flex items-center justify-center font-light text-xl text-[#111]'>
                        <li className='h-12  mx-4 cursor-pointer'>
                            <Link to="/" className={active===0?'h-full leading-[48px] nav-hover active':'h-full leading-[48px] nav-hover'} onClick={()=>handleActive(0)}>Feed</Link>
                        </li>
                        <li  className='h-12  mx-4 cursor-pointer'><Link to="/in-stock" className={active===1?'h-full leading-[48px] nav-hover active':'h-full leading-[48px] nav-hover'} onClick={()=>handleActive(1)}>In Stock</Link></li>
                        <li className='h-12  mx-4 cursor-pointer'><Link to="/up-coming" className={active===2?'h-full leading-[48px] nav-hover active':'h-full leading-[48px] nav-hover'} onClick={()=>handleActive(2)}>Upcoming</Link></li>
                    </ul>
                </div>
            <div>
                <AiFillAppstore className='text-[28px] text-[#757575]'/>
            </div>
        </div>
    </div>
  )
}

export default Nav