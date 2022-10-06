import React from "react";
import style from "./not-found.module.scss";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import notfound from "../../assets/404/404.gif";

function NotFound() {
  return (
    <>
      <MetaComponent
        title={metaData.notFound.title}
        description={metaData.notFound.description}
        keywords={metaData.notFound.keywords}
      />
      <div className={style.root}>
        <h4 className={style.upperheading}>UH OH! You're lost.</h4>
        <img src={notfound} width="500px" height="500px" alt="404 icon"></img>
        <h4 className={style.lowerheading}>
          The page you are looking for does not exist. You can click the button
          below to go back to the homepage.
        </h4>
        <a href="/" className={style.returnHome}>
          Return Home
        </a>
      </div>
    </>
  );
}

export default NotFound;
