import React,{useState} from "react";
import "font-awesome/css/font-awesome.min.css";
import "./reset.css";
import resetIllustration from "../../assets/reset-pass/reset.svg";

function Reset() {
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");
    const[error,setError] = useState(false)
    const submitHandler = async (e) => {
        if(pwd!==cpwd) {
            e.preventDefault();
            setError(true);
        } 
    }
    return (
    <div className="container-ctm-reset container">
        <div className="illustration_img">
            <img src={resetIllustration} width="500px" height="500px" alt="reset"></img>
        </div>
        <div className="reset-content">
            <form onSubmit={submitHandler} action="/reset">
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
                            required
                            value={pwd}
                            onChange={(e) =>setPwd(e.target.value)}
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
                            required
                            value={cpwd}
                            onChange={(e) =>setCpwd(e.target.value)}
                        ></input>
                    </div>
                </div>
                {error && <span>Passwords don't match</span>}
                <div className="submitbutton">
                    <input type="submit" className="btn" value="Submit"></input>
                </div>
            </form>
        </div>
    </div>
);
    }
export default Reset;
