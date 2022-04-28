import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './signup.css';
import signupIllustartion from '../../assets/socialmedia/login.png';

export default function Signup() {
    return (
        <div className="container-ctm-signup container">
            <div className="illustration_img">
                {/* <img src={signupIllustartion}></img> */}
            </div>
            <div className="signup-content">
                <form>
                    <h2 style={{ fontSize: '27px' }} className="title">
                        Welcome
                    </h2>

                    <h1 style={{ fontSize: '18px', marginBottom: '30px' }}>
                        Create a New Account !
                    </h1>

                    <div className="input-div one">
                        <div className="i">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="div">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input"
                                required
                            ></input>
                        </div>
                    </div>

                    <div className="input-div one">
                        <div className="i">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="div">
                            <input
                                type="text"
                                placeholder="Username"
                                className="input"
                                required
                            ></input>
                        </div>
                    </div>

                    <div className="input-div pass">
                        <div className="i">
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="div">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input"
                                required
                            ></input>
                        </div>
                    </div>

                    <div className="input-div pass">
                        <div className="i">
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="div">
                            <input
                                type="password"
                                placeholder="Comfirm Password"
                                className="input"
                            ></input>
                        </div>
                    </div>

                    <div className="signupbutton">
                        <input
                            type="submit"
                            className="btn"
                            value="Sign Up"
                        ></input>
                    </div>

                    <div id="alternativesignup">
                        <a href="/signin"> Sign in! </a>
                    </div>

                    <br/> or

                    <br /><br />Sign up with
                    <div className="icons">
                        <a href="#" id="facebookIcon"></a>
                        <a href="#" id="twitterIcon"></a>
                        <a href="#" id="googleIcon"></a>
                    </div>
                </form>
            </div>
        </div>
    );
}
