import React from "react";
import styles from "./Landing.css";
import AppUser from "../../../../assets/home/app-user.svg";

function Landing() {
  return (
    <div id="HomePage">
      <section id="hero">
        <div class="container py-5">
          <div class="row justify-content-between">
            <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  Gather information about everything and anything there is in Computer Science and related fields With <span>CSwaala</span>
                </h1>
                <h2>
                  Find the best resources in one place, which are already
                  present in this huge network called INTERNET.
                </h2>
                <div class="text-center text-lg-start">
                  <a href="/explore" class="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img src={AppUser} class="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
