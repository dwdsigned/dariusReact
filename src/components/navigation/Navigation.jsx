import React from "react"
import './Navigation.css'

const Navigation = () => {
    return (
        <nav>
          <a href="#"><div id="logo"></div></a>
          <div className="signRegister">
            <a><p>Sign In</p></a><p>/</p><a><p>Register</p></a>
          </div>
        </nav>
    )
}

export default Navigation;