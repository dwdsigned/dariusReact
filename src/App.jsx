import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.jsx';
import Rank from './components/rank/Rank.jsx';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.jsx';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className='App'>
        {/* <ParticlesContainer className="particles"/> */}
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={ this.onButtonSubmit }/>
        {/* {<Logo />
        <FaceRecognition />} */}
        {/* {<header>
          <nav>
          <a href="#"><div id="logo"></div></a>
          </nav>
        </header>} */}
        <Footer />
      </div>
    );
  }
}

export default App;

































































// import React from 'react'
// import { useState } from 'react'
// import { Component } from 'react'
// import './App.css'
// // import ParticlesContainer from './components/Particles/Particles.jsx'
// import Navigation from './components/navigation/Navigation.jsx'
// import Rank from './components/rank/Rank.jsx'
// import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.jsx'
// import Footer from './components/footer/Footer'

// class App extends Component {
//   // const [count, setCount] = useState(0)
//   constructor() ; {
//     super();
//     this.state = {
//       input: "",
//     }
//   }

//   return (
//       <div className='App'>
//         {/* <ParticlesContainer className="particles"/> */}
//         <Navigation />
//         <Rank />
//         <ImageLinkForm />
//         {/* {<Logo />
        
//         <FaceRecognition />} */}
//         {/* {<header>
//           <nav>
//           <a href="#"><div id="logo"></div></a>
//           </nav>
//         </header>} */}
//         <Footer />
//       </div>
//   )
// }

// export default App
