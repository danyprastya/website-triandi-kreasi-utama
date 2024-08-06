import React from 'react'
import Navbar from '../components/Navbar'
import Header1 from "../components/Header1"
import AboutUs1 from "../components/AboutUs1"
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

export default function aboutus () {
  return (
    <div className='w-screen h-screen'>
        <Navbar/>
        <Header1/>
        <AboutUs1/>
        <WhyUs/>
        <Footer/>
    </div>
  )
}
