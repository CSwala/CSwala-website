import React from "react";
import style from "./not-found.module.scss";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

function NotFound() {
  return (
    <>
      <MetaComponent
        title={metaData.notFound.title}
        description={metaData.notFound.description}
        keywords={metaData.notFound.keywords}
      />
      <div className={style.root}>
        404
      </div>
    </>
  );
}

export default NotFound;
