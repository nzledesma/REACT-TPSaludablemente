import { useState } from 'react'
import './App.css'
import { OfertaSem } from './Components/OfertaSem';
import { PorQueElegirnos } from './Components/PorQueElegirnos'
import { LosQueSaben } from './Components/LosQueSaben';
import { ImpAlimSaludable } from './Components/ImpAlimSaludable'
import { Warning } from './Components/Warning';
import { CompraFacil } from './Components/CompraFacil';
import { Destacados } from './Components/Destacados'
import { NavbarS } from './Components/NavBarS'
import { Footer } from './Components/Footer'
import AshopCart from './Components/AshopCart';
import { CarouselImages } from './Components/CarouselIamges';
import { BootCar } from './Components/BootCar/BootCar';

function App() {

  return (
    <>
            
      <Warning />
      <NavbarS />
      <CompraFacil />
      <AshopCart />
      <OfertaSem />
      <PorQueElegirnos />
      <LosQueSaben />
      <ImpAlimSaludable />
      <CarouselImages />
      <BootCar />
      <Footer />
    </>
  )
}

export default App
