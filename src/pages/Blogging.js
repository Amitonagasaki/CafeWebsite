import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Components/data/data5.json';
import "../index.css"

function Blogging() {
  const { Id } = useParams();

  // Find the blog post with the matching id
  const blogPost = Data.find(blog => blog.id === Id);

  // Render content dynamically based on the blog post data
  return (
    <div>
      {blogPost && (
        <>
        <div className='bg-[#252323] '>
        <p className='text-gray-400 text-3xl md:text-5xl text-center p-5'>#{blogPost.id}"{blogPost.title}"</p>

        <p className='text-2xl md:text-4xl bg-[#92621e] mb-10 text-center p-5'>{blogPost.heading}</p>
    <hr className='mb-5'/>
        <div className='flex flex-col md:flex-row  justify-center place-items-center  text-white'>
          <div className='w-3/4 md:pl-10 order-2 md:order-1'>
          <p className='bg-[#F00A0A69] p-5 text-xl md:text-3xl rounded-3xl '>{blogPost.content1.name}</p>
          <p className='md:text-2xl mt-5'>{blogPost.content1.description}</p>
          </div>
          <div className=' mb-5 md:pl-20 order-1 md:order-2'>
          <img src={blogPost.content1.image} className='circular' alt="cook"/>
          </div>
         
          
        </div>
        <hr className='mb-5 mt-5 text-red-400'/>
        <div className='flex flex-col md:flex-row justify-center place-items-center text-white pb-10'>

        <div className=' mb-5 md:pr-20 md:pl-10 '>
          <img src={blogPost.content2.image} className='circular' alt="cook"/>
          </div>

          <div className='mdLpr-10 w-3/4'>
          <p className='bg-[#F00A0A69] p-5 text-xl md:text-3xl rounded-3xl '>{blogPost.content2.name}</p>
          <p className='md:text-2xl mt-5'>{blogPost.content2.description}</p>
          </div>
         
         
          
        </div>

        <hr />
       
       <div className='text-white  md:text-3xl p-5 '>
        <div className='  bg-[#C17777BF] rounded-2xl p-2'>
        <p>{blogPost.endText}</p>
        </div>
   
       </div>


        </div>
        
      
        
        </>
      )}
      {!blogPost && <p>Blog post not found</p>}
    </div>
  );
}

export default Blogging;
