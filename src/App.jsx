import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.jsx';
import Rank from './components/rank/Rank.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Register from './components/Register/Register.jsx';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.jsx';
import FoodRecognition from './components/FoodRecognition/FoodRecognition.jsx';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      route: 'SignIn',
      isSignIn: false,
    };
  }



  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input})
    console.log('click');
  }

  onRouteChange = (route) => {
    if (route === 'SignOut') {
      this.setState({isSignIn: false})
    } else if (route === 'home') {
      this.setState({isSignIn: true})
    }
    this.setState({route: route});
  }

  render() {
    return (
      <div className='App'>
        <Navigation isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
        ? <div>
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={ this.onButtonSubmit }/>
          <FoodRecognition imageUrl={this.state.imageUrl}/>
          <Footer />
          </div>
        : (
          this.state.route === 'SignIn'
          ? <SignIn onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
        )
          
         
        }
      </div>
    );
  }
}

export default App;