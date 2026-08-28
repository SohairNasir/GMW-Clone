import React from 'react'
import { Header } from '../../components/Header/Header'
import DynamicAd from '../../components/DynamicAd/DynamicAd'
import Feature from '../../components/FeatureSec/FeatureSec'
import Philosophy from '../../components/Philosophy/Philosophy'
import Ytube from '../../components/Ytube/Ytube'
import DealerBtn from '../../components/DealerBtn/DealerBtn'
import Footer from '../../components/Footer/Footer'
import { useSelector , useDispatch } from 'react-redux'
import { setTheme } from '../../Redux/Slices/ThemeSlice'

const Home = () => {
  const theme = useSelector((state)=>console.log(state.Theme.value))
  const dispatch = useDispatch()
  return (
    <>
    {/* <div style={{margin:'50px',position:'relative', zIndex:'200px'}} onClick={()=> dispatch(setTheme('hello'))}>
      change theme
    </div> */}
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