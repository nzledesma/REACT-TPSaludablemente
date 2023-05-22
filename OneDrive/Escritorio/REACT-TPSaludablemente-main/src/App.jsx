// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
// import { Footer } from './Components/Footer'
import { OfertaSem } from './Components/OfertaSem'
import { PorQueElegirnos } from './Components/PorQueElegirnos'
import { LosQueSaben } from './Components/LosQueSaben'
import { ImpAlimSaludable } from './Components/ImpAlimSaludable'
import { Warning } from './Components/Warning'
import { Instagram } from './Components/Instagram'
import { Comprafacil } from './Components/CompraFacil'
import { Destacados } from './Components/Destacados'
import { NavbarS } from './Components/NavBarS'


function App() {

  return (
    <>
      
      <Warning />
      <NavbarS />
      <Comprafacil />
      <Destacados />
      <OfertaSem />
      <PorQueElegirnos />
      <LosQueSaben />
      <ImpAlimSaludable />
      <Instagram />
      {/* <Footer />  */}
    </>
  )
}

export default App
