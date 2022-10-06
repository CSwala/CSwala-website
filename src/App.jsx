import React, { lazy, Suspense, useEffect,useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/404/NotFound";
import "./index.scss";
import Preloader from "./components/Preloader/Preloader";
import Scroll from "./components/Scroll/Scroll";
import {authentication} from "./firebase-config"
import {onAuthStateChanged} from "firebase/auth"
const Home = lazy(() => import("./pages/Home/Home"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const DetailPage = lazy(() => import("./pages/DetailPage/DetailPage"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Login = lazy(() => import("./pages/Login/Login"));
const Forget = lazy(() => import("./pages/ForgetPassword/Forget"));
const Reset = lazy(() => import("./pages/ResetPassword/Reset"));
const Report = lazy(() => import("./pages/ReportaBug/Report"));
const Signup = lazy(() => import("./pages/SignupPage/Signup"));
const Jobhunt = lazy(() => import("./pages/JobHunt/Jobhunt"));
function App({ location }) {

  const [onUserLogin, setOnUserLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(()=>{
    onAuthStateChanged(authentication, (user) => {
      if(user){
        console.log(user.photoURL)
        setAvatar(user.photoURL);
        setUserName(user.displayName);
       return  setOnUserLogin(true);
      }
      setOnUserLogin(false);
    })

  })
    


  if(onUserLogin === true){
    return (
      <Suspense fallback={<Preloader />}>
        {location.pathname !== "/404" && (
          <Header onUserLogin={onUserLogin} userName = {userName} avatar={avatar} currentRoute={location.pathname} />
        )}
        <Scroll showBelow={200} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/jobhunt" exact component={Jobhunt} />
          <Route path="/e/:slug" exact component={DetailPage} />
          <Route path="/jobs" exact component={ContactUs} />
          <Route path="/feed" exact component={ContactUs} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forget" component={Forget} />
          <Route path="/reset" component={Reset} />
          <Route path="/report" component={Report} />
          <Route path="/404" exact component={NotFound} />
  
          <Redirect to="/" />
        </Switch>
        {location.pathname !== "/404" && <Footer fill={"#0D1017"} />}
      </Suspense>
    );
  }else{
    return (
      <Suspense fallback={<Preloader />}>
        {location.pathname !== "/404" && (
          <Header onUserLogin={onUserLogin} userName = {userName} avatar={avatar} currentRoute={location.pathname} />
        )}
        <Scroll showBelow={200} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/jobhunt" exact component={Jobhunt} />
          <Route path="/e/:slug" exact component={DetailPage} />
          <Route path="/jobs" exact component={ContactUs} />
          <Route path="/feed" exact component={ContactUs} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forget" component={Forget} />
          <Route path="/reset" component={Reset} />
          <Route path="/report" component={Report} />
          <Route path="/404" exact component={NotFound} />
  
          <Redirect to="/404" />
        </Switch>
        {location.pathname !== "/404" && <Footer fill={"#0D1017"} />}
      </Suspense>
    );
  }




  
}

export default withRouter(App);
