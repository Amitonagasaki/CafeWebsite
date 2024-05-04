import React from 'react'
import "../index.css"

import { Link } from 'react-router-dom'
function MainMenu() {
  return (
    <div className='bg-[#252323] text-white'>

      <div className='flex justify-center' >
        <img src="/image/mainmenuimg.png" class='object-cover h-72 md:h-96 w-[100%] rounded-xl ' alt=""/>
      </div>

      <p className='text-4xl text-center p-5'>WHAT’S ON YOUR MIND?</p>

         <div className='flex flex-col gap-10 text-center  md:text-2xl p-5'>
          <div className='flex place-content-center gap-32  md:gap-20'>
            <div className=''>
            <Link to={`/Menu/1`}> 
            <img src="/image/burger.jpg" className=' circular1   ' alt=""/>
            <p className='mt-5'>BURGER & <br/> SANDWICHES</p>
            </Link>
            </div>
            <div>
            <Link to={`/Menu/2`}>
            <img src="/image/Starters.jpg" className=' circular1' alt=""/>
            <p className='mt-5'>STARTERS</p>
            </Link>
            </div>
           
            <div className='hidden md:[display:unset]'>
            <Link to={`/Menu/3`}>
            <img src="/image/chinese.jpg" className='circular1' alt=""/>
            <p className='mt-5'>CHINESE CUSINE</p>
            </Link>
            </div>
             </div>

          <div className='flex place-content-center gap-32  md:gap-20'>
            <div>
            <Link to={`/Menu/4`}>
            <img src="/image/sides.jpg" className='circular1' alt=""/>
            <p className='mt-5'>SIDES</p>
            </Link>
            </div>
            <div>
            <Link to={`/Menu/5`}> 
            <img src="/image/salads.jpg"  className='circular1'alt=""/>
            <p className='mt-5'>SALADS</p>
            </Link>
            </div>
        
            <div className='hidden md:[display:unset]'>
            <Link to={`/Menu/6`}>
            <img src="/image/deserts.jpg" className='circular1' alt=""/>
            <p className='mt-5'>DESSERTS / ICE-CREAM</p>
            </Link>
            </div>
       
          
           
          </div>
          <div className='flex place-content-center gap-32  md:gap-20'>
            <div>
            <Link to={`/Menu/7`}>
            <img src="/image/main.jpg" className='circular1' alt=""/>
            <p className='mt-5'>MAIN COURSE</p>
            </Link>
            </div>

            <div>
            <Link to={`/Menu/8`}>
            <img src="/image/VALUE.JPG" className='circular1' alt=""/>
            <p className='mt-5'>VALUE COMBO</p>
            </Link>
            </div>
           
            <div className='hidden md:[display:unset]'>
            <Link to={`/Menu/9`}>
            <img src="/image/Beverages.jpg" className='circular1' alt=""/>
            <p className='mt-5'>BEVERAGES</p>
            </Link>
            </div>
          
            </div>
         </div>

    </div>
  )
}

export default MainMenu