import './App.css'
import { PorQueElegirnos } from './Components/PorQueElegirnos'
import { LosQueSaben } from './Components/LosQueSaben';
import { ImpAlimSaludable } from './Components/ImpAlimSaludable'
import { Warning } from './Components/Warning'
import { CompraFacil } from './Components/CompraFacil'
<<<<<<< HEAD
=======
import CarouselImages from './Components/CarouselIamges';
>>>>>>> main
import { NavbarS } from './Components/NavBarS'
import { Footer } from './Components/Footer'
import AshopCart from './Components/AshopCart'
import { NoveSal } from './Components/NoveSal'
import { BootCar } from './Components/BootCar/BootCar';


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
      <CarouselImages />
      <BootCar />
      <Footer />
    </>
  )
}

export default App
