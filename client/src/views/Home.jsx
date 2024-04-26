import React from 'react'
import Header from '../components/Header/Header'
import OurAllies from '../components/our_allies/Our_allies'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/aboutUs/AboutUs'


function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <OurAllies />
    </div>
  )
}

export default Home