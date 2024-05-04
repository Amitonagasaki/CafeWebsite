import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './caro.css'
import Data from '../data/data6.json'
import { Link } from 'react-router-dom'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

 const Caro4 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla1 ">
  
      <button className="embla__prev" onClick={scrollPrev}>
        <GrFormPrevious color='white' size={34}/>
      </button>
      <div className="embla__viewport   " ref={emblaRef}>
        <div className="embla__container  ">
          {
             Data && Data.map((data)=>{
              return(
            <div className=" embla__slide p-10   " key={data.page}>  
           
          <div className='card4 '>
           

     <div className='    '>
       
       <div>
        
       <p className='   font-bold'><Link to={`/Menu/${data.page}`}> <p>{data.dish}</p></Link></p>
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
export default Caro4