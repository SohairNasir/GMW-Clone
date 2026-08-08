import React from 'react'
import Home from './pages/home'
import Models from './components/CarModels/Models'
import { Header } from './components/header/Header'
import CarProducts from './pages/CarProducts'
import { Route, Routes } from 'react-router-dom'
import Cardetails from './components/CarDetails/Cardetails'
import'@fontsource/inter'
import Size from './components/SizeingDir/Size'


function App (){
  return (
    <>
    {/* <Cardetails/> */}
    {/* <Header/> */}
    <Routes>
        {/* <Route path='/' element={<Size/>} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<CarProducts/>} />
        <Route path='/products/:id' element={<Cardetails/>} />
        {/* <Route path='*' element /> */}
        </Routes>
        {/* <Route path='/users/:id' element={<User/>} /> */}
        {/* <Route path='/user-search' element={<UserSearch/>} /> */}
  {/* <Models /> */}
    {/* <Home/> */}
    </>
   )
}

export default App