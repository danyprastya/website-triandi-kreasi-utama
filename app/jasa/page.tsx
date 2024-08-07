import React from 'react'
import Navbar from '../components/Navbar'
import Header2 from "../components/Header2"
import Layanan from '../components/Layanan'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='max-w-screen max-h-screen'>
        <Navbar/>
        <Header2/>
        <Layanan/>
        <Footer/>
    </div>
  )
}

export default page