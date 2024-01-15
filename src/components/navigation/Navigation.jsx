import React from "react"
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignIn }) => {
      if (isSignIn) {
        return (
        <nav>
          <a href="#"><div id="logo"></div></a>
          <div className="signRegister">
          <p onClick={() => onRouteChange('SignOut')}>Sign Out</p>
            {/* <a><p>Sign In</p></a><p>/</p><a><p>Register</p></a> */}
          </div>
        </nav>
        );
      } else {
        return (
        <nav>
          <a href="#"><div id="logo"></div></a>
          <div className="signRegister">
          <p onClick={() => onRouteChange('SignIn')} className="pointer">Sign In</p>
          <p onClick={() => onRouteChange('Register')} className="pointer">Register</p>
          </div>
        </nav>
        );
      }
}

export default Navigation;