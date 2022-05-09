import React, {useRef} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './login.css';
import loginIllustartion from '../../assets/socialmedia/login.png';
import { authentication } from '../../firebase-config';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider,createUserWithEmailAndPassword  } from 'firebase/auth';
import {useUserContext} from "../../context/userContext"
export default function Login() {

    const emailRef = useRef();
    const psdRef = useRef();

    const {signInUser} = useUserContext();


    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleGithubLogin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(authentication, provider)
        .then((res) => {
            console.log(res.user);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = psdRef.current.value;
        if(email && password) signInUser(email,password);
    }

    

    return (
        <div className="container-ctm-login container">
            <div className="illustration_img">
                <img src={loginIllustartion} alt="bannerimg"></img>
            </div>
            <div className="login-content">
                <form onSubmit={handleClick}>
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
                                type="email"
                                placeholder="Email"
                                className="input"
                                required
                                ref={emailRef}
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
                                ref={psdRef}
                            ></input>
                        </div>
                    </div>

                    <a href="/forget">
                        <span style={{ color: 'red' }}>Forgot Password?</span>
                    </a>

                    <div className="loginbutton" >
                        <input
                            type="submit"
                            className="btn"
                            value="Login"
                        ></input>
                    </div>

                    <div id="alternativeLogin">
                        <a href="/signup"> Create your account! </a>
                    </div>

                    <div className="icons">
                        {/* <button className='googleAuthButton' >Google</button> */}
                        <div class="google-btn" onClick={handleGoogleLogin}>
                            <div class="google-icon-wrapper">
                                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="googlebtn"/>
                            </div>
                            <p class="btn-text"><b>Sign in with google</b></p>
                        </div>

                        <div class="github-btn" onClick={handleGithubLogin}>
                            <div class="github-icon-wrapper">
                                <img class="github-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GitHub_Mark.png/640px-GitHub_Mark.png" alt="githubbtn"/>
                            </div>
                            <p class="btn-text"><b>Sign in with github</b></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
