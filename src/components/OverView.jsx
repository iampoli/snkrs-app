import React from 'react'
import {useState} from 'react';

const sizes = [5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13];

function OverView({snkr,setCart}) {
  const [size,setSize] = useState(null);

  const handleCart = (e)=>{
    e.preventDefault();
    setCart((prev)=>{
      return [...prev,{
        price:snkr.retailPrice,
        color:snkr.colorway,
        id:snkr.styleId,
        title:snkr.title,
        img:snkr.media.thumbUrl,
        size:size,
        gender:snkr.gender
      }];
    });
    alert("Item added to the cart")
  }
  return (
    <div className='px-5 pb-6 pt-6'>
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 px-12'>
                <img src={snkr.media.imageUrl} alt="" />
            </div>
            <div className='px-14 flex justify-start flex-col items-center'>
               <h5 className='text-lg tracking-wide'>{snkr.shoe}</h5>
               <h3 className='text-3xl tracking-wider pt-2 pb-1'>{snkr.name}</h3>
               <p className='text-lg'>${snkr.retailPrice}</p>
               <p className='text-center text-lg font-light pt-8 pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis voluptates nesciunt culpa vitae illum corrupti voluptatum molestiae dignissimos iure ad neque, laudantium qui? Eius sunt tempore illum. Atque quidem laudantium, doloremque dolorem voluptas beatae animi? Minima dolore suscipit tenetur accusamus praesentium, alias veritatis illum sed nobis quasi doloribus quos. Officia, optio saepe? Tempora earum eligendi numquam corporis quas unde aliquid natus eum, obcaecati facere vel commodi. Fugit fugiat eius repudiandae odio sint et asperiores praesentium, rerum deserunt, expedita, excepturi similique.</p>
               <p className='text-lg pb-8'>SKU: DO5254-180</p>
               <div className='grid grid-cols-2 w-full text-center text-lg '>
                  {sizes.map((sizeUS,index)=>{
                    
                  return  <div onClick={()=>setSize(sizeUS)} key={index} className={`${sizeUS===size && 'bg-black text-white'} px-1 py-3 border-l border-t border-r border-b hover:bg-[black] transition duration-300 hover:text-[white] cursor-pointer`} >US {sizeUS}</div>
                  })}
               </div>
               <button onClick={(e)=>handleCart(e)} className={size ? "text-lg px-[14px] py-4 my-8 w-full bg-[black] text-[white] rounded-[40px]" : "text-lg px-[14px] py-4 my-8 w-full bg-[#f5f5f5] text-[#ccc] rounded-[40px]"}>Buy ${snkr.retailPrice}</button>
            </div>
        </div>
    </div>
  )
}

export default OverView