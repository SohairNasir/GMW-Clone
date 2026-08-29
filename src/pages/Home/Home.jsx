import React from 'react'
import { Header } from '../../components/Header/Header'
import DynamicAd from '../../components/DynamicAd/DynamicAd'
import Feature from '../../components/FeatureSec/FeatureSec'
import Philosophy from '../../components/Philosophy/Philosophy'
import Ytube from '../../components/Ytube/Ytube'
import DealerBtn from '../../components/DealerBtn/DealerBtn'
import Footer from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'

const Home = () => {
  let Theme = useSelector((state=> state.Theme.value))
  return (
    <div className={`bg-${Theme}`}>
    <Header />
    <DynamicAd/>
    <Feature />
    <Philosophy/>
    <Ytube />
    <DealerBtn/>
    <Footer/>
    </div>
  )
}

export default Home