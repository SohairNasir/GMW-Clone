import React from 'react'
import { Header } from '../components/header/Header'
import DynamicAd from '../components/CarAds/DynamicAd'
import Feature from '../components/CarAds/FeatureSec/Feature'
import Philosophy from '../components/Philosophy/Philosophy'
import Ytube from '../components/Ytvideo/Ytube'
import DealerBtn from '../components/Dealer&FindBtn/DealerBtn'
import Footer from '../components/Footer/LandingPFooter'

const Home = () => {
  return (
    <>
    <Header />
    <DynamicAd/>
    <Feature />
    <Philosophy/>
    <Ytube />
    <DealerBtn/>
    <Footer/>
    </>
  )
}

export default Home