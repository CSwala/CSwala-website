import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./report.css";
import reportIllustration from "../../assets/report-a-bug/report.png";

const Report = () => (
    <div className="container-ctm-report container">
        <div className="illustration_img">
            <img src={reportIllustration} width="500px" height="350px"></img>
        </div>
        <div className="report-content">
            <form action="/report">
                <h1 style={{ fontSize: "30px" }} className="title">
                    Report a Bug !
                </h1>
                <div className="input-div pass">
                    <div className="i">
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="div">
                        <input
                            type="textarea"
                            placeholder="Name"
                            className="input"
                            required
                        ></input>
                    </div>
                </div>
                <div className="input-div pass">
                    <div className="i">
                        <i className="fa fa-bug"></i>
                    </div>
                    <div className="div">
                        <input
                            type="text"
                            placeholder="Your Bug description!"
                            className="input"
                            required
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

export default Report;
