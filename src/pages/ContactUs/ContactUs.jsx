import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./ContactUs.scss";
// import MetaComponent from "../../seo/MetaComponent";
// import metaData from "../../seo/metaData";
// import styles from "./contact-us.module.scss";


function ContactUs() {
  const [condition, setCondition] = useState(false);
  const [active1, setactive1] = useState(false);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);
  const [active4, setactive4] = useState(false);


const sendClick = (e) => {
  setCondition(!condition);
}

const inputFocus1 = (e) => {
  if(e.target.value === "")
  {
    setactive1(!active1);
  }
}
const inputFocus2 = (e) => {
  if(e.target.value === "")
  {
    setactive2(!active2);
  }
}
const inputFocus3 = (e) => {
  if(e.target.value === "")
  {
    setactive3(!active3);
  }
}
const inputFocus4 = (e) => {
  if(e.target.value === "")
  {
    setactive4(!active4);
  }
}

  return (
    // <div className={styles.root} id="home_contact">
    //   <MetaComponent
    //     title={metaData.contact.title}
    //     description={metaData.contact.description}
    //     keywords={metaData.contact.keywords}
    //   />
    //   Contact Us page
    // </div>
    <div className="center">
      <div className="container">
          <div className="title">
          <h3>Contact us</h3>
            <p style={{fontSize:"20px"}}>Any question or remarks? Just write us a message.</p>
          </div>
          <div className={ active1 ? "form form__1 active" : "form form__1" }>
            <label for="name" className="form__label">Full name</label>
            <input onFocus={inputFocus1} onBlur={inputFocus1} type="text" className="form__input" placeholder="" id="name" required/>
          </div>
        
          <div className={ active2 ? "form form__2 active" : "form form__2" }>
            <label for="email" className="form__label">Email address</label>
            <input onFocus={inputFocus2} onBlur={inputFocus2} type="email" className="form__input" placeholder="" id="email" required/>
          </div>
        
          <div className={ active3 ? "form form__3 active" : "form form__3" }>
            <label for="subject" className="form__label">Subject</label>
            <input onFocus={inputFocus3} onBlur={inputFocus3} type="subject" className="form__input" placeholder="" id="subject" required/>
          </div>
        
          <div className={ active4 ? "form form__4 active" : "form form__4" }>
            <label for="message" className="form__label">Your message</label>
            <input onFocus={inputFocus4} onBlur={inputFocus4} type="text" className="form__input" placeholder="" id="message" required/>
          </div>
        
          <button className="form__btn" onClick={sendClick}>
            <span className={ condition ? "form__btn--visible invisible" : "form__btn--visible" }><p>Submit &nbsp;</p> 
              <i className="fa fa-arrow-right" ></i>
            </span>
            <span class={ condition ? "form__btn--invisible visible" : "form__btn--invisible" }>Message sent!</span>
          </button>
      
        <div className="container-mail">
          <div className="mail">
            <div className="mail__back"></div>
            <div className={ condition ? "mail__top closed" : "mail__top" }></div>
            <div className={ condition ? "mail__letter move" : "mail__letter" }>
              <div className="mail__letter-square">
              </div>
              <div className="mail__letter-lines">
              </div>
            </div>
            <div className="mail__left"></div>
            <div className="mail__right"></div>
            <div className="mail__bottom"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ContactUs;
