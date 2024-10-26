import React from 'react'
import Hero from '../components/Hero'
import OurCycle from '../components/OurCycle'
import AboutUs from '../components/AboutUs'
import Customer from '../components/Customer'
import News from '../components/News'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <OurCycle/>
    <AboutUs/>
    <Customer/>
    <News/>
    <Footer/>
    </>
  )
}

export default Home