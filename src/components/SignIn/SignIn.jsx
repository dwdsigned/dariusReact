import React from "react";
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="SignIn">
            <main className="">
                <form className="">
                    <fieldset id="sign_up" className="">
                        <legend className="">Sign In</legend>
                        <div className="">
                            <label className="" htmlFor="email-address">Email</label>
                            <input className="" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="">
                            <label className="" htmlFor="password">Password</label>
                            <input className="" type="password" name="password" id="password" />
                        </div>
                        <label className="">
                            <input type="checkbox" /> Remember me
                        </label>
                    </fieldset>
                    <div className="">
                        <input className="" type="submit" value="Sign in" />
                    </div>
                    <div className="">
                        <a href="#0" className="">Sign up</a>
                        <a href="#0" className="">Forgot your password?</a>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default SignIn;