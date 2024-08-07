import React from 'react'
import Navbar from '../components/Navbar'
import Header3 from '../components/Header3'
import Project2 from '../components/Project2'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='max-w-screen max-h-screen'>
        <Navbar/>
        <Header3/>
        <Project2/>
        <Footer/>
    </div>
  )
}

export default page