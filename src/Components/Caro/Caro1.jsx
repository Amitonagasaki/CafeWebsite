import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './caro.css'
import Data from '../data/data2.json'
import { Link } from 'react-router-dom'

import { DotButton,useDotButton } from './dotbutton'
 const Caro1 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi)



  return (
    <div className="embla">
  
      <div className="embla__viewport p-2" ref={emblaRef}>
        <div className="embla__container ">
          {
             Data && Data.map(data=>{
              return(
            <div className="embla__slide  " key={data.sno}>  
            
          <div className='card1 p-3'>
        <div className='flex flex-row '>
          <div className=''>
            <p className='md:font-semibold'>FLAT <div className=' text-3xl md:text-5xl mt-1 text-OFFER'>{data.order}</div></p>
            <p className='text-sm md:text-xl '>ON ORDER ABOVE {data.content.above}</p>
            <div className=' justify-center text-center p-2'>
            <button class="bg-offbut hover:bg-slate-400 text-gray-500  rounded-lg  md:text-xl p-0.5 border-black border-[1px]  ">
<Link to='/ReadMore'> Use Code <span className='font-semibold md:font-bold text-black '>{data.content.code}  </span> </Link>
</button>
            </div>
    
          </div>
          <div className=''>
         <img src={data.content.image} className='card-img p-3 mt-3 w-full   '  alt="" />
            </div>
        </div>
          </div>
           
           
            
            </div>
               
              )
             })
        
           
          }
          
    
          
        </div>
        <div className="embla_dotcontrol">
      
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>



      </div>

    

    </div>
  )
}
export default Caro1