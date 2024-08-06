import React from 'react'
import Navbar from '../components/Navbar'
import Header2 from "../components/Header2"
import Layanan from '../components/Layanan'
import Testimoni from '../components/Testimoni'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Header2/>
        <Layanan/>
        <Testimoni/>
        <Footer/>
    </div>
  )
}

export default page