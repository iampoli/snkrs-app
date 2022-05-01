import React from 'react'
import Card from '../components/Card'


function InStock({data,setSnkr}) {
 
  return (
    <div className='px-5 pb-6 pt-6 bg-[rgba(0,0,0,0.05)]'>
        <div className='grid grid-cols-3 gap-6 '>
        {data && data.map((shoe)=>{
         return <Card key={shoe.id} shoe={shoe} setSnkr={setSnkr}/>
        })}         

        </div>
    </div>
  )
}

export default InStock