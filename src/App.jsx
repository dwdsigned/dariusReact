import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation.jsx'
import Rank from './components/rank/Rank.jsx'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.jsx'
import Footer from './components/footer/Footer'
// import Particles from './components/Particles/Particles.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        {/* <Particles /> */}
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {/* {<Logo />
        
        <FaceRecognition />} */}
        {/* {<header>
          <nav>
          <a href="#"><div id="logo"></div></a>
          </nav>
        </header>} */}
        <Footer />
      </div>
  )
}

export default App
