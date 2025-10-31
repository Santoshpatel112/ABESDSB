import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Gallery from './Components/Gallery'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Gallery />
      <Card />
      <Footer />
    </>
  )
}

export default App
