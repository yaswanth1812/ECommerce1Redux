import React from 'react'
import logo from '../../images/logo.png'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      <div className='flex items-center justify-center '>
        <hr className='h-px w-4/5 bg-black-400 opacity-50 outline-none border-none'/>
        
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between pt-4">
<div>
    <img className='h-20' src={logo} alt="logo"></img>
</div>
<div>
    <p className='text-white text-sm font-inter no-underline normal-case'>
        Copyright {year} page by Yaswanth;
    </p>
</div>
      </div>
    </div>
  )
}

export default Footer
