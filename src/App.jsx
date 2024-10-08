import Navbar from './Components/Navbar'

import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import HIW from './Components/HIW'
import SuccessStory from './Components/SuccessStory'
import CTA from './Components/CTA'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <SuccessStory />
      <HIW />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}

export default App
