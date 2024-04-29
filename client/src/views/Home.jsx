import React from 'react'
import Header from '../components/Header/Header'
import OurAllies from '../components/our_allies/Our_allies'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/aboutUs/AboutUs'
import OurTeam from '../components/ourTeam/OurTeam'
import ContextData from '../components/ContextData/ContextData'


function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <OurTeam />
      <ContextData />
      <OurAllies />
    </div>
  )
}

export default Home