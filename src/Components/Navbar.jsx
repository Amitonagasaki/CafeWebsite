import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
//nav starting is false
  const [nav, setNav] = useState(false)
  //so when user click hamburger button it goes false;
const handleClick= ( ) => setNav(!nav)


  return (
    <nav className='bg-slate-900 text-white flex p-2 justify-between items-center'>
      <div className='w-20 h-20 pt-4 md:pt-2 md:ml-4  bg-transparent '>
        <Link to='/'> <img src="/image/sunset-cafe-high-resolution-logo-transparent.png"alt="logo" /></Link>
        
      </div>
 
   <ul className='hidden 2xl:flex gap-6 '>
    <div className=''>
      <div className='flex flex-row gap-32'> 
      <NavLink to='/'><li className='text-3xl ' >Home</li></NavLink>
    <Link to='/MainMenu'><li className='text-3xl' >Menu</li></Link>
    <Link to='/ContactUs'><li className='text-3xl' >ContactUs</li></Link>
    <Link to='/Blog'><li className='text-3xl mr-60' >Blog</li></Link>
      </div>
    
    </div>

    <Link to='/SignIn'><li className='text-3xl' >SignIn</li></Link>
    <Link to='/Login'><li  className='text-3xl' >Login</li></Link>
    <div className='flex flex-col items-center'>
    <BsCart2 size={20}/>
     <Link to='/CartList'><li className=' mr-4 text-1xl' >MyCart</li></Link>
    </div>
 
   </ul>
   <div className='2xl:hidden z-10' onClick={handleClick}>
 {nav ? <FaTimes size={35} color={'white'}/>:<RxHamburgerMenu size={35}/>}
   </div>
   
   {/*Mobile view*/}
   <ul className={`${
    nav
    ? 'text-white opacity-100 transform translate-x-0':
    'opacity-0 transform -translate-y-full'} transition transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl z-10 }`}
    
    onClick={()=> setNav(false)}  >


<Link to='/'><li className='p-2 hover:text-teal-700'>Home</li></Link>
    <Link to='/MainMenu'><li className='p-2 hover:text-teal-700'>Menu</li></Link>
    <Link to='/ContactUs'><li className='p-2 hover:text-teal-700'>ContactUs</li></Link>
    <Link to='/Blog'><li className='p-2 hover:text-teal-700'>Blog</li></Link>
    <Link to='/SignIn'><li className='p-2 hover:text-teal-700'>SignIn</li></Link>
    <Link to='/Login'><li className='p-2 hover:text-teal-700'>Login</li></Link>
    <Link to='/CartList'><li className='p-2 hover:text-teal-700'>MyCart</li></Link>

   </ul>

     
   
    </nav>
 )
}

export default Navbar