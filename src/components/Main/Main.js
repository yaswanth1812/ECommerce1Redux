import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavigateButtons from '../NavigateButtons/Navigatebuttons'
import Slider from '../Slider/Slider'
import ProductSection from '../ProductSection/ProductSection'
import Footer from '../Footer/Footer'

const Main =()=> {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <NavigateButtons/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default Main
