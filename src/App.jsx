import CarModels from "./components/CarModels/CarModels";
import CarProducts from "./pages/CarProducts/CarProducts";
import Cardetails from "./components/CarDetails/Cardetails";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import React from "react";
import "@fontsource/inter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CarProducts />} />
        <Route path="/products/:id" element={<Cardetails />} />
      </Routes>
    </>
  );
}

export default App;
