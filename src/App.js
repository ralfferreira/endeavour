import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import Mission from './components/Mission'
import VisionSection from './components/Vision'
import ValuesSection from './components/Values'
import Footer from './components/Footer'
import GlobalStyles from './styles/GlobalStyles'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
      
  return ( 
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <AboutSection {...homeObjOne} />
      <Mission {...homeObjTwo} />
      <VisionSection {...homeObjThree} />
      <ValuesSection {...homeObjFive} />
      <Footer />
      <GlobalStyles />
    </Router>
   );
}

// Navbar, About, Mission, Vision, Team, Values, Footer

export default App;