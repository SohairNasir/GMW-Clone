import React, { useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import DynamicAd from '../../components/DynamicAd/DynamicAd'
import Feature from '../../components/FeatureSec/FeatureSec'
import Philosophy from '../../components/Philosophy/Philosophy'
import Ytube from '../../components/Ytube/Ytube'
import DealerBtn from '../../components/DealerBtn/DealerBtn'
import Footer from '../../components/Footer/Footer'
import {useDispatch, useSelector} from 'react-redux'
import { carAds } from '../../Redux/Slices/CarAds'

const Home = () => {
  let dispatch = useDispatch()

  let Theme = useSelector((state=> state.Theme.value))
  let carModels = useSelector((state)=>state.carModels)
  
  useEffect(() => {
    dispatch(carAds())
  },[])
console.log(carModels)  
  // let testApi = async () => {
    //     try {
      // let data =  await dispatch(carAds()).unwrap()
      //       console.log(data)
      //     } catch (error) {
        //       console.log(error)
        //     }
      // }
      // testApi()

  return (
    <div className={`bg-${Theme}`}>
    <Header headerHeight={false} />
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