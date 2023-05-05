import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Services from './components/Services'
import About from './components/About'
import Testimonial from './components/Testemonial'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Services/>
      <About/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App