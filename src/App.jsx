import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/404/NotFound";
import "./index.scss";
import Preloader from "./components/Preloader/Preloader";

const Home = lazy(() => import("./pages/Home/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Login = lazy(() => import("./pages/Login/Login"));

function App({ location }) {
  return (
    <Suspense fallback={<Preloader />}>
      {location.pathname !== "/404" && <Header currentRoute={location.pathname} />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/explore" exact component={ContactUs} />
        <Route path="/jobs" exact component={ContactUs} />
        <Route path="/feed" exact component={ContactUs} />
        <Route path="/signin" exact component={Login} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      {location.pathname !== "/404" && <Footer />}
    </Suspense>
  );
}

export default withRouter(App);
