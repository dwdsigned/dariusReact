import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <Navigation />
        {/* {<Logo />
        <ImageLinkForm />
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
