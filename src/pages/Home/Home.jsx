import React, { useEffect } from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

// import Banner from "./sections/Banner/Banner";
// import Team from "./sections/Team/Team";
import Landing from "./sections/Landing";

import style from "./home.module.scss";

function Home() {
  const getData = () => {
    fetch("https://api.cswaala.in/v1/cs", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        sessionStorage.setItem("store", JSON.stringify(myJson.Resources));
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.root}>
      <MetaComponent
        title={metaData.home.title}
        description={metaData.home.description}
        keywords={metaData.home.keywords}
      />
      <Landing />
      {/* <Team /> */}
    </div>
  );
}

export default Home;
