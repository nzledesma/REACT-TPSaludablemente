import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Warming } from './Components/Warming'
import { Navbar } from './Components/NavBar'
import { Banner } from './Components/Banner'
import { Cards } from './Components/Cards'
import { Suprise } from './Components/Surprise'
import { Whomakes } from './Components/Whomakes'
import { Parner } from './Components/Parner'
import { SocialMedia } from './Components/SocialMedia'
import { WhyChoose } from './Components/WhyChoose'
import { LastOffers } from './Components/LastOffers'
import { Footer } from './Components/Footer'
import { Carousel } from './Components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Warming/>
      <Navbar/>
      <Banner/>
      <Cards/>
      <Suprise/>
      <Whomakes/>
      <Parner/>
      <WhyChoose/>
      <LastOffers/>
      <Carousel/>
      <SocialMedia/>
      <Footer/>
    </>
  )
}

export default App
