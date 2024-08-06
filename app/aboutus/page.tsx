import React from 'react'
import Navbar from '../components/Navbar'
import Header1 from "../components/Header1"
import AboutUs1 from "../components/AboutUs1"
import Team from '../components/Team'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Header1/>
        <AboutUs1/>
        <WhyUs/>
        <Footer/>
    </div>
  )
}

export default page