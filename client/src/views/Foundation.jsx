import React from 'react'
import Header from '../components/Header/Header'
import Banner1F from '../../public/img_Foundation/foundationBanner1.jpg'
import Footer from '../components/Footer/Footer'

function Foundation() {
  return (
    <div>
      <Header/>
      <div >
        <picture >
            <img src={Banner1F}
             alt="Banner1F"
             style={{ height: '100%', width: '100%' }} />
        </picture>
      </div>
      <Footer/>
    </div>
  )
}

export default Foundation
