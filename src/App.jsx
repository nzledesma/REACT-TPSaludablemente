import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/NavBar'
import { Footer } from './Components/Footer'
import { OfertaSem } from './Components/OfertaSem'
import { PorQueElegirnos } from './Components/PorQueElegirnos'
import { LosQueSaben } from './Components/LosQueSaben'
import { ImpAlimSaludable } from './Components/ImpAlimSaludable'
import { Warning } from './Components/Warning'
import { Instagram } from './Components/Instagram'
import { Comprafacil } from './Components/CompraFacil'
import { Destacados } from './Components/Destacados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Warning />
      <Navbar />
      <Comprafacil />
      <Destacados />
      <OfertaSem />
      <PorQueElegirnos />
      <LosQueSaben />
      <ImpAlimSaludable />
      <Instagram />
      <Footer/>
    </>
  )
}

export default App
