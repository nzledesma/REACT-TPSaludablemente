import { useState } from 'react'
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
      <Destacados />
      
      {/* <Warning />
      <Navbar />
      <Comprafacil />
      <Destacados />
      <DestacadosBtn />
      <OfertaSem />
      <PorQueElegirnos />
      <LosQueSaben />
      <ImpAlimSaludable />
      <Instagram />
      <Footer/>  */}
    </>
  )
}

export default App
