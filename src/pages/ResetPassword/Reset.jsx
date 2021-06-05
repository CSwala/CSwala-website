import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./reset.css";
import resetIllustration from "../../assets/reset-pass/reset.svg";

const Reset = () => (
    <div className="container-ctm-reset container">
        <div className="illustration_img">
            <img src={resetIllustration} width="500px" height="500px"></img>
        </div>
        <div className="reset-content">
            <form action="/reset">
                <h1 style={{ fontSize: "30px" }} className="title">
                    Reset Password
                </h1>
                <div className="input-div pass">
                    <div className="i">
                        <i className="fa fa-lock"></i>
                    </div>
                    <div className="div">
                        <input
                            type="password"
                            placeholder="New Password"
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
                            placeholder="Confirm Password"
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

export default Reset;
