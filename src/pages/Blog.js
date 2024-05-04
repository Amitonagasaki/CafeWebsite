import React from 'react'
import '../index.css'
import Caro3 from '../Components/Caro/Caro3'

function Blog() {
  return (
    <div className='bg-[#252323] text-white'>
      <div className='flex  justify-center p-5'>
      <div className=' bgimg3  rounded-xl  '>
        <div className='flex flex-row gap-6 md:gap-40 p-10'>
          <div>
          <p className='font-semibold text-2xl md:text-4xl md:mt-10'>SUNSET</p> 
          </div>


        <div>
               <p className='font font-semibold text-2xl md:text-4xl   md:mt-10 '>OUR VISION</p>
               <p className='text-xl md:text-2xl mt-5 md:mt-10'>To create a haven where every cup is a canvas, 
  painting moments of serenity and connection against the backdrop of a
       setting sun.</p> 
</div>

        </div>
      
</div> 
      </div>

<div>
  <hr/>
  <p className='text-center text-3xl mt-5 underline'>LATEST BLOG POST</p>
  <Caro3/>
  <hr/>
</div>

<div>
  
</div>




 
      </div>
  )
}

export default Blog