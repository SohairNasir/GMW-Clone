import React from 'react'
import {Header} from '../../components/Header/Header'
import AboutImg from '../../components/AboutPagImg/AboutImg'
import GmwAbout from '../../components/GmwAbout/GmwAbout'
import Footer from '../../components/Footer/Footer'
const About = () => {
  console.log('runing')
  return (
    <>
    
    <Header/>
    <AboutImg/>
    <GmwAbout/>
    <GmwAbout heading={'sazgar'}  parah={'Sazgar brings engineering excellence into everyday journeys through vehicles that are trusted, innovative, and thoughtfully built. From the three-wheelers powering local economies to premium automobiles shaping modern roads, the brand focuses on performance that people can rely on with absolute peace of mind. With strong market recall and a rapidly growing global presence, Sazgar continues to build on its foundation of consistency and advanced technology. It offers vehicles that feel premium yet remain practical, making efficient transport and automotive sophistication a dependable choice for both daily commutes and new horizons.'} src={'https://djphncgl0uau7.cloudfront.net/aboutus_sustainabilityBackgroundImage_1786361398707.jpeg'} wrapperClass={'flex-row-reverse h-[110vh]'}/>
    <Footer/>
    </>
  )
}

export default About