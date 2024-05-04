import React from 'react'
import '../index.css'


import Caro from '../Components/Caro/Caro'
import Caro1 from '../Components/Caro/Caro1'
import Caro2 from '../Components/Caro/Caro2'
import { Link } from 'react-router-dom'

function Home() {
 


  return (
    <>
 <div className='bgimg'>
 
<div className=' flex flex-col xl:flex-row md:gap-20'>
  <div className='md:my-20 '>
  <p className=' text-xl md:text-3xl  font-bold  text-IOP text-center '>Welcome</p>
  <p className='text-xl md:text-3xl text-white p-2 md:p-5'>Discover Culinary Elegance at Café Sunset: Where Every Sip and Bite Unveils a Symphony of Flavors and Moments.</p>

  <p className='text-xl md:text-3xl font-bold text-IOP p-1 md:p-5'>Gateway to Serenity, Culinary Delights,</p>
  <p className='text-white p-2 md:text-2xl md:p-10'>Step into a World Where Ambiance, Flavor, and Warmth Converge—A Haven Where Every Visit Feels Like Coming Home..</p>
   <div className='  '> 
   
   <div className='flex flex-row justify-center items-center  '>

   <button class="bg-transparent hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded text-3xl">
<Link to='/OrderNow'> Order Now </Link>
</button>
   </div>
   </div>
   
  </div>
  <div className='my-1 md:my-16'>
  <div className='bg-caro md:[display:unset]'>
    <p className='text-xl p-2 md:text-3xl text-white text-center underline md:p-5'>We Are Known For :-</p>
   
   <Caro />
   </div>
  </div>
</div>
</div>


<div>
  <div className='flex flex-col md:flex-row bg-chef p-10 '>
    <div className='order-2 md:order-1'>
      <p className='text-3xl mt-4'>About Us</p>
      <p className='text-xl md:text-5xl font-extrabold '>The story behind sunset ...</p>
      <p className='text-xl mt-5 md:mr-20'>Welcome to Sunset Café, where our journey began with Chef André's bold decision 
        to depart from the world of haute cuisine and create a culinary sanctuary rooted in simplicity and heartfelt connection.</p>
        
        <p className='hidden md:[display:block] md:text-xl md:mt-16 md:mr-20 '>Inspired by a chance encounter with 
        a charming café bathed in the warm glow of twilight,Chef André envisioned a 
        place where genuine hospitality and exceptional flavors intertwine. At Sunset 
        Café, each dish is a reflection of Chef André's dedication to crafting culinary 
        experiences that nourish both body and soul.</p>

        <div className='flex flex-row justify-start items-start  '>

<button class="bg-readmore hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4   rounded-2xl text-3xl mt-10">
<Link to='/ReadMore'> Read More </Link>
</button>
</div>
    </div >
    <div className='order-1 md:order-2 w-60 md:[width:unset]'>
      <img src="image/chef.jpg" className='[border-radius:50%]  chef-img md:mr-40' alt="chef"/>
    </div>
  </div>
</div>

<div className='bg-pink-200'>
  <p className='text-xl font-semibold md:text-2xl p-10'>DEALS AND OFFERS</p>
   <Caro1/>

</div>

<div className='flex flex-row justify-center  [background:#0F172B] pb-10'>
  <div className='hidden md:mt-5 md:p-10 md:w-[55%]  lg:[display:block]'>
    <img src="./image/form2.jpg" alt=""/>
  </div>

  <div className=' text-center p-5  md:mt-5 '>
     <p className='text-2xl md:text-4xl  text-IOP '>Reservation</p>
     <p className=' text-2xl md:text-4xl text-white mt-5'>BOOK A TABLE ONLINE</p>

<div className='flex flex-col '>
<form className=' flex mt-10  gap-5   md:gap-40'>

<div className='text-xl'><input type="text" placeholder='Your Name'/></div> 
 <div className='text-xl'> <input type="email" placeholder='Your Email' /> </div> 
 </form>
 <form className=' flex mt-10 gap-5 md:gap-40 '>
 <div className='text-xl'><input type="text" placeholder='date'/></div> 
 <div className='text-xl'> <input type="number" placeholder='number of people' /> </div> 
 </form>
 <form className=' mt-10 flex-row text-xl'>
   <div >
     <input type="paragraph" placeholder='special request' />
   </div>
 </form>
 <div className='bg-yellow-500 hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4    text-3xl text-center mt-5'>
 <button class= "   ">
<Link to='/'> BOOK NOW </Link>
</button>
 </div>
</div>
    
  </div>
</div>

<div>
  <div className='bgimg2'> 
  <div className='bgimg2oi'>
  <p className='text-2xl md:text-6xl text-white text-center pt-10'>Motivation Being Our Hard Work</p>
    <Caro2/>
  </div>
  <div className='text-white  flex flex-col p-10 '>
    <div>
    <p className='text-xl md:text-5xl'>Subscribe To Newsletter
and Get -20% off</p>
<p className=' md:text-2xl mt-5'>Your Gateway to Serenity, Culinary Delights, and Unforgettable Moments.</p>
    </div>
   
<form className=' md:w-[20%] mt-10 text-black '>
  <input type="email"  placeholder='enter your email' color='black'/>
  <div className='bg-red-300 hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4    text-3xl text-center mt-5 rounded-lg'>
      <button class= "   ">
<Link to='/'> Subscribe </Link>
</button>
      </div>
</form>
  </div>
  </div>
</div>




</>
  )
}

export default Home