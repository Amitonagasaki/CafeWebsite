import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './caro.css'
import Data from '../data/data4.json'
import { Link } from 'react-router-dom'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

 const Caro3 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
  
      <button className="embla__prev" onClick={scrollPrev}>
        <GrFormPrevious color='white' size={34}/>
      </button>
      <div className="embla__viewport  md:w-[80%] " ref={emblaRef}>
        <div className="embla__container  ">
          {
             Data && Data.map((data)=>{
              return(
            <div className=" embla__slide1 p-10   " key={data.id}>  
           
          <div className='card3 '>
           

     <div className='text-black  flex flex-row  place-items-center'>
      <div className='md:w-[30%]'>     <img src={data.content.image} className='card-img w-full md:p-2     ' alt="" /></div>
      <div className=' text-sm md:text-3xl w-[60%] p-5 '> <p>{data.content.description}</p>
        
        <p className='mt-2 md:mt-5 underline font-bold'><Link to={`/Blogging/${data.id}`}> Find out More </Link></p>
      
      </div>

    
   
           </div>
          </div>
           
           
            
            </div>
               
              )
             })

           
          }
          
      
          {/* <div className="embla__slide">Slide 2</div> */}
          
        </div>
      </div>
      <button className="embla__next" onClick={scrollNext}>
        <GrFormNext color='white' size={34}/>
      </button>
    </div>
  )
}
export default Caro3