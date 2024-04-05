import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navigatebuttons from '../NavigateButtons/Navigatebuttons'
import Slider from '../Slider/Slider'
import ProductSection from '../ProductSection/ProductSection'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Navigatebuttons/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default Main
