import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './caro.css'
import Data from '../data/data3.json'

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
 const Caro2 = () => {
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
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
             Data && Data.map(data=>{
              return(
            <div className="embla__slide1 flex mt-10 mb-10 " key={data.sno}>  
            
          <div className='card2 '>
         
 
           <div className=' text-xl md:text-6xl p-5 text-white ' >{data.quote} </div> 
        
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
export default Caro2