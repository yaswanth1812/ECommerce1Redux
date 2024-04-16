import React from 'react'
import { dotSlide, nextSlide,prevSlide, } from '../../features/slices/Sliderslice'
import {useSelector,useDispatch,} from "react-redux"
import sliderData from "../../assests/data/dummyData"


const Slider=()=>{
  const slideIndex =useSelector((state)=>state.slider.value);
  const Dispatch =useDispatch();

  return (
    <div className='relative pb-3'>
      <div>
        {sliderData.map((item)=>{
          return ( <div 
          key={item.id}
           className={
            parseInt(item.id)=== slideIndex
             ? 
            "opacity-100 duration-600 ease-in-out scale-100" 
            :  "opacity-0 duration-600 ease-in-out scale-100"
          }>
            <div>
              {parseInt(item.id)=== slideIndex && (
              <img className="w-full md:h-[525px]" src={item.img} alt="shoes"></img>
              )}
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none text-center">
              {parseInt(item.id)=== slideIndex && item.text}</p>
              </div>
          </div>
          );
        })}
      </div>
      <div className='flex absolute bottom-4 left-1/2 transform -translate-x-1/2'>
{sliderData.map((dot,index)=>{
  return(
    <div className='mr-4'  key={index} > 
    <div 
  
    className={index === slideIndex ? 'bg-green-300 rounded-full p-4 cursor-pointer':
    'bg-white rounded-full p-4 cursor-pointer'
  }
  onClick={()=>Dispatch(dotSlide(index))}
  >

  </div>
    </div>
  )
})}
      </div>
      <div className='absolute inset-0 flex items-center'>
      <button 
      className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={()=> Dispatch(nextSlide(slideIndex+1))}>
      <svg xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5"
       stroke="currentColor"
        className="w-6 h-6"
        >
  <path strokeLinecap="round" 
  strokeLinejoin="round" 
  d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

        </button>
      <button
       className='absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300'
        onClick={()=> Dispatch(prevSlide(slideIndex-1))}
        >
      <svg
       xmlns="http://www.w3.org/2000/svg"
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="w-6 h-6">
  <path 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

      </button>
    </div>
    </div>
  )
}

export default Slider
