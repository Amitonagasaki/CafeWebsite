import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './caro.css'
import Data from '../data/data1.json'
import { Link } from 'react-router-dom'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
 const Caro = () => {
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
            <div className="embla__slide  " key={data.sno}>  
            
          <div className='card  '>
          <img src={data.content.image} className='card-img pb-1    w-full h-screen' alt="" />
           <div className='text-IOP text-xl'>{data.id } </div> 
           <div className='text-sm p-2' >{data.content.description} </div> 
           <div className='text-IOP  '>
            <Link to='/data.id'>Find Out More-----------------{`>`}</Link>
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
export default Caro