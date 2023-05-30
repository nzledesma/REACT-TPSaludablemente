import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { PorQueElegirnos } from './Components/PorQueElegirnos'
import { LosQueSaben } from './Components/LosQueSaben'
import { ImpAlimSaludable } from './Components/ImpAlimSaludable'
import { Warning } from './Components/Warning'

import { CompraFacil } from './Components/CompraFacil'
import { NavbarS } from './Components/NavBarS'
import { Footer } from './Components/Footer'
import AshopCart from './Components/AshopCart'
import { NoveSal } from './Components/NoveSal'


function App() {

  return (
    <>
      <Warning />
      <NavbarS />
      <CompraFacil />
      <AshopCart />
      <NoveSal />
      <PorQueElegirnos />
      <LosQueSaben />
      <ImpAlimSaludable />
      
      <Footer />
    </>
  )
}

export default App
