import React  from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

// import Banner from "./sections/Banner/Banner";
// import Team from "./sections/Team/Team";
import Landing from "./sections/Landing";

import style from "./home.module.scss";

function Home() {
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
