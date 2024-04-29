import React from 'react'
import Header from '../components/Header/Header'
import OurAllies from '../components/our_allies/Our_allies'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/aboutUs/AboutUs'
import OurTeam from '../components/ourTeam/OurTeam'
import ContextData from '../components/ContextData/ContextData'
import Banner from '../components/Banner/Banner'


function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <OurTeam />
      <ContextData />
      <OurAllies />
      <Footer />
    </div>
  )
}

export default Home