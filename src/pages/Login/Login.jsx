import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./login.css";
import loginIllustartion from "../../assets/socialmedia/login.png";

export default function Login() {
  return (
    <div className="container-ctm-login container">
      <div className="illustration_img">
        <img src={loginIllustartion}></img>
      </div>
      <div className="login-content">
        <form>
          <h2 style={{ fontSize: "27px" }} className="title">
            Welcome
          </h2>

          <h1 style={{ fontSize: "18px", marginBottom: "30px" }}>
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
              ></input>
            </div>
          </div>

          <a href="/forget">
            <span style={{ color: "red" }}>Forgot Password?</span>
          </a>

          <div className="loginbutton">
            <input type="submit" className="btn" value="Login"></input>
          </div>

          <div id="alternativeLogin">
            <a href="#"> Create your account! </a>
          </div>

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
