import CarModels from "./components/CarModels/CarModels";
import CarProducts from "./pages/CarProducts/CarProducts";
import Cardetails from "./components/CarDetails/Cardetails";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import React from "react";
import "@fontsource/inter";
import ContactUser from "./pages/ContactUser/ContactUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CarProducts />} />
        <Route path="/products/:id" element={<Cardetails />} />
        <Route path="/contact" element={<ContactUser/>} />
      </Routes>
    </>
  );
}

export default App;
