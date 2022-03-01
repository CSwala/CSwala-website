import React from "react";
import styles from "./footer.module.scss";
import Logo from "./../../assets/_logo/logo.png";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.topShape}></div>
      <div className={styles.tint}></div>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div className={styles.top}>
            <img className={styles.logo} src={Logo} alt="" />
          </div>
          <a href="mailto:cs.wala.guy@gmail.com">cs.wala.guy@gmail.com</a>
          <div className={styles.socialDiv}>
            <a href="https://github.com/CSwala/CSwala-website">
              <UseAnimations
                className={styles.icon}
                animation={github}
                size={30}
                loop={true}
                strokeColor="#ffffff"
                speed={1}
              />
            </a>
            <a href="https://www.linkedin.com/company/cswala/">
              <UseAnimations
                className={styles.icon}
                animation={linkedin}
                size={30}
                loop={true}
                strokeColor="#ffffff"
                speed={1}
              />
            </a>
            <a
              href="https://discord.gg/yBDP4C2DAq"
              className={styles.discordIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="29"
                height="29"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path d="M59.02702,24.28548c-2.27783,-0.27174 -4.61557,0.00779 -6.81673,0.85384c-6.58564,2.51939 -15.17282,6.45233 -22.67578,12.51367l-0.19596,0.15397l-0.18197,0.15397c-3.32886,3.0859 -5.15679,6.78742 -7.48861,11.85579c-2.33181,5.06838 -4.68279,11.32305 -6.81673,18.36458c-4.26788,14.08307 -7.68457,31.22219 -7.68457,47.66113c0,1.72023 0.45085,3.50847 1.34375,5.08106c5.77769,10.19888 15.76717,15.88223 24.66341,19.28841c8.82385,3.37847 16.30324,4.52386 20.57617,4.67513c0.13925,0.00488 0.49195,0.05599 0.50391,0.05599c2.92103,0 6.71488,-1.07565 8.84635,-5.10905l6.60677,-12.49968c10.93966,1.91554 21.29665,1.8885 32.52995,-0.11198l6.64876,12.58366c2.13811,4.07887 5.96716,5.12305 8.86036,5.12305c0.01075,0 0.34259,-0.03769 0.46191,-0.04199c4.27327,-0.14728 11.77611,-1.30271 20.61816,-4.68913c8.88536,-3.40301 18.85788,-9.07294 24.63542,-19.24642c0.922,-1.59992 1.37174,-3.39695 1.37174,-5.10905c0,-16.43894 -3.42302,-33.58639 -7.71257,-47.68912c-2.14477,-7.05137 -4.50204,-13.33031 -6.85872,-18.42057c-2.35668,-5.09026 -4.25322,-8.82664 -7.58659,-11.91178l-0.18197,-0.15397l-0.18196,-0.15397c-7.42446,-6.00205 -15.97064,-9.89033 -22.53581,-12.3877c-4.39064,-1.6733 -9.34325,-1.0787 -13.22754,1.5957c-2.99963,2.06284 -4.01638,5.63183 -4.80111,9.1123h-31.49414c-0.78774,-3.47738 -1.79797,-7.04969 -4.78711,-9.1123c-1.94305,-1.34078 -4.16097,-2.1638 -6.4388,-2.43555zM57.33333,38.52083c0,6.35012 5.29572,11.64583 11.64583,11.64583h34.02767c6.34148,0 11.65215,-5.30586 11.65983,-11.64583h0.014c5.63562,2.14377 12.85934,5.61093 18.35059,9.98014c0.12649,0.15716 2.25734,3.02608 4.21322,7.25065c1.99841,4.31644 4.181,10.07033 6.15885,16.57292c3.84381,12.6373 6.73004,28.19735 6.90071,42.28614c-3.45385,5.38179 -9.81852,9.60814 -16.60091,12.20572c-6.1049,2.33812 -11.1696,2.9446 -13.75944,3.2334l-3.31738,-6.28483c2.45971,-0.72172 4.90318,-1.43059 7.5026,-2.30957c2.46687,-0.78782 4.31694,-2.84507 4.83947,-5.38142c0.52253,-2.53635 -0.36373,-5.15733 -2.31833,-6.85605c-1.9546,-1.69872 -4.67353,-2.21099 -7.11228,-1.34001c-27.44895,9.28195 -40.95465,9.29152 -66.97754,0.042c-0.89841,-0.33606 -1.85513,-0.48838 -2.81348,-0.44792c-3.43614,0.16517 -6.27031,2.74833 -6.7525,6.15447c-0.4822,3.40614 1.5236,6.67448 4.77887,7.78693c2.60779,0.92694 5.08139,1.68273 7.55859,2.43555l-3.27539,6.20084c-2.58814,-0.28846 -7.65474,-0.89603 -13.75944,-3.2334c-6.78218,-2.59675 -13.14362,-6.80586 -16.60091,-12.19173c0.16891,-14.09246 3.04497,-29.6554 6.87272,-42.28614c1.96898,-6.49719 4.13793,-12.22956 6.11686,-16.53092c1.93348,-4.20257 4.06512,-7.06437 4.12923,-7.16667c5.59469,-4.44776 12.86315,-7.9566 18.51855,-10.12012zM64.77995,71.63867c-5.94117,0 -10.75,6.40051 -10.75,14.30534c0,7.90483 4.80883,14.30533 10.75,14.30533c5.94117,0 10.75,-6.4005 10.75,-14.30533c-0.129,-7.90484 -4.78733,-15.09368 -10.75,-14.30534zM107.47201,71.75065c-5.93706,0 -10.75,6.41725 -10.75,14.33333c0,7.91608 4.81294,14.33333 10.75,14.33333c5.93706,0 10.75,-6.41725 10.75,-14.33333c0,-7.91608 -4.81294,-14.33333 -10.75,-14.33333z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.subColumn}>
          <p className={styles.head}>Organization</p>
          <ul className={styles.category}>
            <a href="/">Home</a>
            <a href="/#">About</a>
            <a href="/#">FAQs </a>
          </ul>
        </div>
        <div className={styles.subColumn}>
          <p className={styles.head} text-align="centre">
            Resources
          </p>
          <ul className={styles.category}>
            <a href="/#">Projects</a>
            <a href="/#">Docs</a>
            <a href="/#">Learn More</a>
          </ul>
        </div>
      </div>
      <div className={styles.row2}>
        <p className={styles.footerText}>Made with ❤️ in India</p>
        <p className={styles.footerText}>© Copyright 2021 CSwaala</p>
        <p className={styles.footerText}>
          <a href="/#">Privacy Policy</a> | <a href="/#">Site Map</a> |{" "}
          <a href="/#">Report a bug</a>
        </p>
      </div>
    </footer>
  );
}
