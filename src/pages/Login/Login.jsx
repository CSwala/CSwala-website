import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './login.css';
import loginIllustartion from '../../assets/socialmedia/login.png';
import { authentication } from '../../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {ImGoogle} from "react-icons/im"
import {ImGithub} from "react-icons/im"
export default function Login() {


    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((res) => {
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }



    return (
        <div className="container-ctm-login container">
            <div className="illustration_img">
                <img src={loginIllustartion}></img>
            </div>
            <div className="login-content">
                <form>
                    <h2 style={{ fontSize: '27px' }} className="title">
                        Welcome
                    </h2>

                    <h1 style={{ fontSize: '18px', marginBottom: '30px' }}>
                        Sign in to your account
                    </h1>

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

                    <a href="/forget">
                        <span style={{ color: 'red' }}>Forgot Password?</span>
                    </a>

                    <div className="loginbutton">
                        <input
                            type="submit"
                            className="btn"
                            value="Login"
                        ></input>
                    </div>

                    <div id="alternativeLogin">
                        <a href="/signup"> Create your account! </a>
                    </div>

                    <div className="authBtns">
                        <button id="googlebutton" onClick={handleGoogleLogin}>
                            <ImGoogle className='icon' /> 
                            Continue with Google
                        </button>
                        <button id="githubbutton" >
                            <ImGithub className='icon' /> 
                            Continue with Github
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
