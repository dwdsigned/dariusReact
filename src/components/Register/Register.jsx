import React from "react";
import './Register.css';

const Register = ({onRouteChange}) => {
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center centerReact marginTop50">
        <main className="pa4 black-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                </div>
                {/* vvv email vvv */}
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                </div>
                {/* ^^^ email ^^^ */}
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                </div>
                {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
              </fieldset>
              <div className="">
                <input
                onClick={() => onRouteChange('home')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Register" />
              </div>
            </div>
        </main>
      </article>
        // <div className="SignIn">
        //     <main className="">
        //         <form className="">
        //             <fieldset id="sign_up" className="">
        //                 <legend className="legend">Sign In</legend>
        //                 <div className="">
        //                     <label className="" htmlFor="email-address">Email</label>
        //                     <input className="" type="email" name="email-address" id="email-address" />
        //                 </div>
        //                 <div className="">
        //                     <label className="" htmlFor="password">Password</label>
        //                     <input className="" type="password" name="password" id="password" />
        //                 </div>
        //                 <div className="">
        //                 <input className="" type="submit" value="Sign in" />
        //                 <a href="#0" className="">Register</a>
        //             </div>
        //             </fieldset>
        //         </form>
        //     </main>
        // </div>
    );
}

export default Register;