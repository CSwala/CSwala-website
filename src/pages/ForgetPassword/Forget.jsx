import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./forget.css";
import forget from "../../assets/forget-pass/forget.png";

const Forget = () => {
  return (
    <div className="container">
      <div className="illustration_img">
        <img src={forget} width="400px" height="400px"></img>
      </div>
      <div className="forget-content">
        <form>
          <h1 style={{ fontSize: "30px" }} className="title">
            Forgot Password?
          </h1>
          <p>Enter the email address associated with your account</p>

          <div className="input-div one">
            <div className="i">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="div">
              <input
                type="email"
                placeholder="name@example.com"
                className="input"
              ></input>
            </div>
          </div>
          <div className="submitbutton">
            <input type="submit" className="btn" value="Submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
