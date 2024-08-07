import React from 'react'
import Navbar from '../components/Navbar'
import Header4 from '../components/Header4'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


const page = () => {
  return (
    <div className='max-w-screen max-h-screen'>
        <Navbar/>
        <Header4/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default page