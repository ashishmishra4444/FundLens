import React from 'react'
import Header from '../components/Header'
import Insights from '../components/Insights'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <Insights/>
        <Footer/>
    </div>
  )
}

export default LandingPage
