import React, { useEffect } from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";
import aboutPagesvg1 from "../../assets/about/aboutPage_People.svg";
import aboutPagesvg2 from "../../assets/about/aboutPage_Team.svg";
//css
import style from "./about.css";
//mui

function About() {
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
        title={metaData.about.title}
        description={metaData.about.description}
        keywords={metaData.about.keywords}
      />
      <div id="AboutPage">
        <section id="hero">
          <div class="container py-5">
            <div class="row justify-content-between">
              <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1>
                    <span>ABOUT US</span>
                  </h1>
                  <h2>
                    “Education is the passport to the future, for tomorrow
                    belongs to those who prepare for it today.” - Malcolm X
                  </h2>
                  <div class="text-center text-lg-start">
                    <p>
                      We are a community of like-minded peeps from different
                      areas of interests and are united by a single motive
                      "spread knowledge about the best resources that are
                      available free on the Internet but are not used
                      frequently". Everyone in our community was a beginner at
                      some point in time and in reaching the level where they
                      stand now, they came across various learning platforms and
                      resources. So they are all now sharing their knowledge
                      with the OSS community!
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img src={aboutPagesvg1} class="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="team">
          <div class="container py-5">
            <div class="row justify-content-between">
              <div
                class="col-lg-4 order-2 order-lg-1 hero-img"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img src={aboutPagesvg2} class="img-fluid animated" alt="" />
              </div>
              <div class="col-lg-7 pt-5 pt-lg-0 order-1 order-lg-2 align-items-right">
                <h1>
                  <span>Meet Our Team</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Team /> */}
    </div>
  );
}

export default About;
