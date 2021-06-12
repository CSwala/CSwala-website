import React from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";

import styles from "./contact-us.module.scss";

function ContactUs() {
  return (
    <div className={styles.root} id="home_contact">
      <MetaComponent
        title={metaData.contact.title}
        description={metaData.contact.description}
        keywords={metaData.contact.keywords}
      />
      Under Development
    </div>
  );
}

export default ContactUs;
