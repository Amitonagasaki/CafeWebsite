import React from 'react'
import {  useParams } from 'react-router-dom';
import Data from "../Components/data/data6.json"

import { useCart } from '../Contexts/Cart';
import Caro4 from '../Components/Caro/Caro4';
function Menu() {

 


  const {Id} = useParams();
  const MenuPost = Data.find(Menu => Menu.page === Id);


  const { itemsInCart, setItemsInCart } = useCart([]);

  const addToCart = (product) => {
    let newCart = [...itemsInCart];
    let currentItem = newCart.find((item) => product.name === item.name);
 
    if (currentItem) {
      // currentItem.quantity++;
      console.log("same item", currentItem);
    } else {
      currentItem = {
        ...product,
        quantity: 1
      };
      newCart.push(currentItem);
    }
    setItemsInCart(newCart);
    console.log(currentItem);
    
  };

  return (
    
   <div>
    {MenuPost &&(
      <>
      <div className='bg-[#252323] text-white'>
      <div>
      <img src={MenuPost.content.image} className='object-cover h-72 md:h-96 w-[100%] rounded-xl' alt=""/>
    </div>
 <Caro4/>
 <div >
 <div className='flex md:flex-row flex-col justify-evenly '>
  
 <div className='p-5 md:p-10 '>
  {MenuPost.content['col-1'].map((col,index)=>(
    <div key={index}>
      <p className='text-2xl md:text-5xl pb-10'>{col.title}</p>
      <ul>
        { col.item.map((item,i)=>(
          <li key={i}>
            <div className='flex flex-row justify-between pb-10 gap-2 md:gap-20'>
            <div className='flex flex-col '>
            <span className='text-sm md:text-2xl'>{item.name}</span>
           <span className='text-sm  md:text-2xl text-yellow-400'>{item.price}</span>
            </div>
         
         <div className='flex flex-row gap-5'>
         <div class="box-border h-2 w-2 p-2 border-2 mt-3" style={{ backgroundColor: item.color === "green" ? "green" : "red" }}>
              
              </div>
              <div>
              <button  onClick={()=>addToCart(item)}  class="bg-red-500 hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded  text-sm md:text-1xl">
 {" "}  Add To Cart {" "}
  </button>
              </div>   
         </div>
           
            </div>
                     
          </li>
        ))
  
  
        }
      </ul>
    </div>
  ))}
  </div>
  <div className='p-5 md:p-10 '>
  {MenuPost.content['col-2'].map((col,index)=>(
    <div key={index}>
      <p className='text-2xl md:text-5xl pb-10'>{col.title}</p>
      <ul>
        { col.item.map((item,i)=>(
          <li key={i}>
            <div className='flex flex-row justify-between pb-10 gap-2 md:gap-20'>
            <div className='flex flex-col '>
            <span className='text-sm md:text-2xl'>{item.name}</span>
           <span className='text-sm  md:text-2xl text-yellow-400'>{item.price}</span>
            </div>
         
         <div className='flex flex-row gap-5'>
         <div class="box-border h-2 w-2 p-2 border-2 mt-3" style={{ backgroundColor: item.color === "green" ? "green" : "red" }}>
              
              </div>
              <div>
              <button  onClick={()=>addToCart(item)}  class="bg-red-500 hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded  text-sm md:text-1xl">
   Add To Cart 
  </button>
              </div>   
         </div>
           
            </div>
                     
          </li>
        ))
  
  
        }
      </ul>
    </div>
  ))}
  </div>
  
  
  </div>
 </div>


      </div>
   
</>
   ) }
 

   </div>
  )
}

export default Menu