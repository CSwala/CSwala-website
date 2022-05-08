import React, {useRef} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './signup.css';
import signupIllustartion from '../../assets/socialmedia/login.png';
import { useUserContext } from "../../context/userContext";
export default function Signup() {
    const emailRef = useRef();
    const nameRef = useRef();
    const psdRef = useRef();

    const {registerUser} = useUserContext();

    const handleClick = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = psdRef.current.value;
        if(email && name && password) registerUser(email,name,password);
    }

    return (

        <div className="container-ctm-signup container">
            <div className="illustration_img">
                <img src={signupIllustartion}></img>
            </div>
            <div className="signup-content">
                <form onSubmit={handleClick}>
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
                                ref={nameRef}
                            ></input>
                        </div>
                    </div>

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

                    {/* <div className="input-div pass">
                        <div className="i">
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className="div">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input"
                            ></input>
                        </div>
                    </div> */}

                    <div className="signupbutton" >
                        <input
                            type="submit"
                            className="btn"
                            value="Sign Up"
                        ></input>
                    </div>

                    <div id="alternativesignup">
                        <a href="/signin"> Already have an account ! </a>
                    </div>

                    {/* <br/> or

                    <br /><br />Sign up with
                    <div className="icons">
                        <a href="#" id="facebookIcon"></a>
                        <a href="#" id="twitterIcon"></a>
                        <a href="#" id="googleIcon"></a>
                    </div> */}
                </form>
            </div>
        </div>
    );
}
