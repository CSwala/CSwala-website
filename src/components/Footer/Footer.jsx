import React from "react";
import styles from "./footer.module.scss";
import Logo from "./../../assets/_logo/logo.png";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
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
              href="https://discord.com/invite/rAz3Eb8fsN"
              className={styles.discordIcon}
            >
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEwNi41NzI4MSwyNC4wOGMtMS4zMjQwOCwwLjAyNjE5IC0yLjUxNTU3LDAuODEwMDcgLTMuMDYzNzUsMi4wMTU2M2MwLDAgLTEuMTUwMzgsMi41NTU0NCAtMS44Njc4MSw2LjIyODI4Yy02Ljc1MjgzLC0xLjA4MDQ4IC0xMi40MTY1MSwtMS4zNjM5MSAtMTUuNjQxMjUsLTEuMzYzOTFjLTMuMjI0NzQsMCAtOC44ODg0MiwwLjI4MzQyIC0xNS42NDEyNSwxLjM2MzkxYy0wLjcxNzQzLC0zLjY3Mjg0IC0xLjg2NzgxLC02LjIyODI4IC0xLjg2NzgxLC02LjIyODI4Yy0wLjU4ODE3LC0xLjI5MTQ3IC0xLjkwODk2LC0yLjA4OTI4IC0zLjMyNTc4LC0yLjAwODkxYy0wLjAyNjksMC4wMDE5MiAtMC4wNTM3OCwwLjAwNDE2IC0wLjA4MDYyLDAuMDA2NzJjMCwwIC0yMS44OTk5NiwxLjQzMzE5IC0zNi4yNTQzOCwxMi43NjU2M2MtMC4wODEzNywwLjA2MzYyIC0wLjE1OTg0LDAuMTMwODggLTAuMjM1MTYsMC4yMDE1NmMtMi40MzMzMiwyLjI5ODEzIC00LjMwODc4LDUuODgzMTYgLTYuNjExMjUsMTEuMDA1MzFjLTIuMzAyNDcsNS4xMjIxNiAtNC43Mjk3OCwxMS42MzY4MSAtNi45NjA2MiwxOS4wMDczNWMtNC40NjE2OSwxNC43NDEwNyAtOC4xNDMxMywzMi44NzMwNSAtOC4xNDMxMyw0OS44ODY3MmMwLjAwMDg0LDAuNjA0MDkgMC4xNjA3MywxLjE5NzMxIDAuNDYzNTksMS43MmM1LjA5MjM4LDguODEzNzMgMTQuMzE2MTYsMTQuMTQ0NDYgMjIuOTMxMDksMTcuNDgyMTljOC42MTQ5MywzLjMzNzcyIDE2LjU4MDA5LDQuNjY2OTYgMjAuNDU4NTksNC44NzExYzEuMTY5OTUsMC4wNjMwMSAyLjI5MTU0LC0wLjQ3Mzc0IDIuOTc2NCwtMS40MjQzOGw4LjI5NzY2LC0xMS41NjI5N2M2Ljc4NjQyLDEuNTgzMjkgMTQuNzYxMjcsMi42NzQwNiAyMy45OTI2NSwyLjY3NDA2YzkuMjMxMzgsMCAxNy4yMDYyMywtMS4wOTA3OCAyMy45OTI2NSwtMi42NzQwNmw4LjI5NzY2LDExLjU2Mjk3YzAuNjg0ODYsMC45NTA2NCAxLjgwNjQ1LDEuNDg3MzggMi45NzY0LDEuNDI0MzhjMy44Nzg1LC0wLjIwNDEzIDExLjg0MzY3LC0xLjUzMzM3IDIwLjQ1ODYsLTQuODcxMWM4LjYxNDkzLC0zLjMzNzcyIDE3LjgzODcyLC04LjY2ODQ2IDIyLjkzMTA5LC0xNy40ODIxOWMwLjMwMjg2LC0wLjUyMjY5IDAuNDYyNzUsLTEuMTE1OTEgMC40NjM2LC0xLjcyYzAsLTE3LjAxMzY3IC0zLjY4MTQ0LC0zNS4xNDU2NSAtOC4xNDMxMywtNDkuODg2NzJjLTIuMjMwODQsLTcuMzcwNTQgLTQuNjU4MTYsLTEzLjg4NTE5IC02Ljk2MDYyLC0xOS4wMDczNWMtMi4zMDI0NywtNS4xMjIxNSAtNC4xNzc5MywtOC43MDcxOCAtNi42MTEyNSwtMTEuMDA1MzFjLTAuMDc1MzIsLTAuMDcwNjggLTAuMTUzNzgsLTAuMTM3OTQgLTAuMjM1MTUsLTAuMjAxNTZjLTE0LjM1NDQyLC0xMS4zMzI0NSAtMzYuMjU0MzgsLTEyLjc2NTYzIC0zNi4yNTQzOCwtMTIuNzY1NjNjLTAuMTEzOTIsLTAuMDEwMTcgLTAuMjI4MjgsLTAuMDE0NjYgLTAuMzQyNjUsLTAuMDEzNDR6TTYyLjgyNzAzLDMxLjQ1NzE5YzAuMjU1NzcsMC43MTk5NiAwLjUyNjQsMS4zNDMwNCAwLjc1MjUsMi4yMDM3NWMtNy43Nzc0LDEuNzgwMDIgLTE2LjM2MjI2LDQuNjU0NjcgLTI0LjQxNTk0LDkuNDg2ODhjLTEuMDcxMDMsMC42MjQyNSAtMS43MjM0LDEuNzc2NDMgLTEuNzA3NjYsMy4wMTZjMC4wMTU3NCwxLjIzOTU3IDAuNjk3MTUsMi4zNzQ4MiAxLjc4MzY4LDIuOTcxNjhjMS4wODY1MywwLjU5Njg1IDIuNDEwMTUsMC41NjMgMy40NjQ3NSwtMC4wODg2MmMxNi4yNzQ1OCwtOS43NjQ3NCAzNi41MDg0NSwtMTEuMjA2ODcgNDMuMjk1NjMsLTExLjIwNjg3YzYuNzg3MTgsMCAyNy4wMjEwNSwxLjQ0MjEzIDQzLjI5NTYzLDExLjIwNjg3YzEuMDU0NiwwLjY1MTYyIDIuMzc4MjIsMC42ODU0NyAzLjQ2NDc1LDAuMDg4NjJjMS4wODY1MywtMC41OTY4NSAxLjc2Nzk0LC0xLjczMjEgMS43ODM2OCwtMi45NzE2OGMwLjAxNTc0LC0xLjIzOTU3IC0wLjYzNjYzLC0yLjM5MTc2IC0xLjcwNzY2LC0zLjAxNmMtOC4wNTM2OCwtNC44MzIyMSAtMTYuNjM4NTMsLTcuNzA2ODUgLTI0LjQxNTk0LC05LjQ4Njg4YzAuMjI2MSwtMC44NjA3MSAwLjQ5NjczLC0xLjQ4Mzc5IDAuNzUyNSwtMi4yMDM3NWMzLjk0NzQsMC40ODE2IDE5LjE1Mjc1LDIuNTk0MzIgMjkuNTYyNSwxMC43MDI5N2MwLjY5MTA1LDAuNjgyMjYgMi44ODIyMyw0LjAwNDIzIDUuMDA1NDcsOC43Mjc2NmMyLjE0ODA0LDQuNzc4NTkgNC40OTY0MSwxMS4wNjA0NyA2LjY1MTU2LDE4LjE4MDk0YzQuMjEyMDQsMTMuOTE2MjQgNy41ODM2NiwzMS4wNTM3MSA3Ljc0LDQ2Ljc2OTIyYy0zLjk3Nzc3LDYuMzExNjQgLTExLjM1MjY5LDEwLjk4NjM5IC0xOC44OTMxMywxMy45MDc4MWMtNy4xMDExLDIuNzUxMjEgLTEzLjQzMjU2LDMuNzAyMTUgLTE2LjY2OTIyLDQuMDE3ODFsLTUuNDk1OTQsLTcuNjU5MzhjMi44NzIzNiwtMC45MTk5IDUuNDcwNzEsLTEuOTAyMjYgNy43NTM0NCwtMi44OTU3OGM4LjY4NTcyLC0zLjc4MDMxIDEzLjMxNjU2LC03Ljc4NzAzIDEzLjMxNjU2LC03Ljc4NzAzYzAuOTM2OTYsLTAuODA1NzUgMS4zNjk4LC0yLjA1MjEzIDEuMTMzOSwtMy4yNjUxOGMtMC4yMzU4OSwtMS4yMTMwNSAtMS4xMDQyNiwtMi4yMDY0IC0yLjI3NDksLTIuNjAyM2MtMS4xNzA2NCwtMC4zOTU5IC0yLjQ2MzY5LC0wLjEzMzU0IC0zLjM4NzQ0LDAuNjg3MzNjMCwwIC0zLjYyMzgxLDMuMjE0NTkgLTExLjUzNjEsNi42NTgyOGMtMy4xMzk1MSwxLjM2NjQyIC02Ljk0NTc2LDIuNzI4NzggLTExLjM3NDg0LDMuODkwMTVjLTAuMDQ5NTYsMC4wMTIzNCAtMC4wOTg4NSwwLjAyNTc4IC0wLjE0NzgxLDAuMDQwMzFjLTYuNzA2MzksMS43NDU4OSAtMTQuODYyMzUsMy4wMSAtMjQuNTU3MDMsMy4wMWMtOS42MjE5MiwwIC0xNy43MjQ0MSwtMS4yNDQyNyAtMjQuNDAyNSwtMi45Njk2OWMtMC4wNjQ0MSwtMC4wMTk4MiAtMC4xMjkzOCwtMC4wMzc3NSAtMC4xOTQ4NSwtMC4wNTM3NWMtMC4wNDM2MiwtMC4wMTEzOCAtMC4wOTA4OCwtMC4wMjIxNyAtMC4xMzQzNywtMC4wMzM2Yy0wLjAxMTE5LC0wLjAwMjMgLTAuMDIyMzksLTAuMDA0NTMgLTAuMDMzNiwtMC4wMDY3MmMtNC40MDM5NCwtMS4xNTgxMyAtOC4xODg2NiwtMi41MTYzIC0xMS4zMTQzNywtMy44NzY3MmMtNy45MTIyOCwtMy40NDM2OSAtMTEuNTM2MSwtNi42NTgyOCAtMTEuNTM2MSwtNi42NTgyOGMtMC42MDM0NiwtMC41NDI1MiAtMS4zNzkyNiwtMC44NTQyNiAtMi4xOTAzMSwtMC44ODAxNWMtMS40NjE5MywtMC4wNDY5NyAtMi43OTM3MiwwLjgzNTU4IC0zLjMyMDIxLDIuMjAwMjJjLTAuNTI2NDksMS4zNjQ2NCAtMC4xMzI1NiwyLjkxMjk5IDAuOTgyMDksMy44NjAwOWMwLDAgNC42MzA4NCw0LjAwNjcyIDEzLjMxNjU2LDcuNzg3MDNjMi4yODI3MywwLjk5MzUyIDQuODgxMDgsMS45NzU4OCA3Ljc1MzQ0LDIuODk1NzhsLTUuNDk1OTQsNy42NTkzOGMtMy4yMzY2NiwtMC4zMTU2NSAtOS41NjgxMiwtMS4yNjY2IC0xNi42NjkyMiwtNC4wMTc4MWMtNy41NDA0MywtMi45MjE0MiAtMTQuOTE1MzYsLTcuNTk2MTcgLTE4Ljg5MzEyLC0xMy45MDc4MWMwLjE1NjM0LC0xNS43MTU1MSAzLjUyNzk2LC0zMi44NTI5OCA3Ljc0LC00Ni43NjkyMmMyLjE1NTE2LC03LjEyMDQ2IDQuNTAzNTMsLTEzLjQwMjM0IDYuNjUxNTYsLTE4LjE4MDk0YzIuMTIzMjQsLTQuNzIzNDMgNC4zMTQ0MSwtOC4wNDU0IDUuMDA1NDcsLTguNzI3NjZjMTAuNDA5NzUsLTguMTA4NjUgMjUuNjE1MSwtMTAuMjIxMzcgMjkuNTYyNSwtMTAuNzAyOTd6TTYzLjY0LDcyLjI0Yy00Ljk5NjE5LDAgLTkuMTY5MTEsMi4zMTkyNSAtMTEuNzQ0MzcsNS42MzAzMWMtMi41NzUyNywzLjMxMTA2IC0zLjczNTYzLDcuNDYwOCAtMy43MzU2MywxMS41Njk2OWMwLDQuMTA4ODkgMS4xNjAzNiw4LjI1ODYyIDMuNzM1NjMsMTEuNTY5NjljMi41NzUyNiwzLjMxMTA2IDYuNzQ4MTgsNS42MzAzMSAxMS43NDQzNyw1LjYzMDMxYzQuOTk2MTksMCA5LjE2OTExLC0yLjMxOTI1IDExLjc0NDM3LC01LjYzMDMxYzIuNTc1MjcsLTMuMzExMDYgMy43MzU2MywtNy40NjA4IDMuNzM1NjMsLTExLjU2OTY5YzAsLTQuMTA4ODkgLTEuMTYwMzUsLTguMjU4NjIgLTMuNzM1NjMsLTExLjU2OTY5Yy0yLjU3NTI2LC0zLjMxMTA2IC02Ljc0ODE4LC01LjYzMDMxIC0xMS43NDQzNywtNS42MzAzMXpNMTA4LjM2LDcyLjI0Yy04LjcwODYzLDAgLTE1LjQ4LDcuOTY0MTIgLTE1LjQ4LDE3LjJjMCw5LjIzNTg4IDYuNzcxMzcsMTcuMiAxNS40OCwxNy4yYzguNzA4NjMsMCAxNS40OCwtNy45NjQxMiAxNS40OCwtMTcuMmMwLC05LjIzNTg4IC02Ljc3MTM3LC0xNy4yIC0xNS40OCwtMTcuMnpNNjMuNjQsNzkuMTJjMy4wMzA0NywwIDQuODc3NTYsMS4xMjA3NSA2LjMxNTYzLDIuOTY5NjljMS40MzgwNiwxLjg0ODk0IDIuMjg0MzcsNC41NzkyIDIuMjg0MzcsNy4zNTAzMWMwLDIuNzcxMTEgLTAuODQ2MzEsNS41MDEzOCAtMi4yODQzNyw3LjM1MDMxYy0xLjQzODA2LDEuODQ4OTQgLTMuMjg1MTUsMi45Njk2OSAtNi4zMTU2MywyLjk2OTY5Yy0zLjAzMDQ3LDAgLTQuODc3NTYsLTEuMTIwNzUgLTYuMzE1NjMsLTIuOTY5NjljLTEuNDM4MDYsLTEuODQ4OTQgLTIuMjg0MzcsLTQuNTc5MiAtMi4yODQzNywtNy4zNTAzMWMwLC0yLjc3MTExIDAuODQ2MzEsLTUuNTAxMzggMi4yODQzNywtNy4zNTAzMWMxLjQzODA2LC0xLjg0ODk0IDMuMjg1MTUsLTIuOTY5NjkgNi4zMTU2MywtMi45Njk2OXpNMTA4LjM2LDc5LjEyYzQuMzYzMzcsMCA4LjYsNC40MTk4OCA4LjYsMTAuMzJjMCw1LjkwMDEyIC00LjIzNjYzLDEwLjMyIC04LjYsMTAuMzJjLTQuMzYzMzcsMCAtOC42LC00LjQxOTg4IC04LjYsLTEwLjMyYzAsLTUuOTAwMTIgNC4yMzY2MywtMTAuMzIgOC42LC0xMC4zMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </a>
          </div>
        </div>
        <div className={styles.col2}>
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
      </div>
      <div className={styles.row2}>
        <p className={styles.footerText}>Made with ❤️ in India</p>
        <p className={styles.footerText}>© Copyright 2021 CSwaala</p>
        <p className={styles.footerText}>
          <a href="/#">Privacy Policy</a> &nbsp; | &nbsp;
          <a href="/#">Site Map</a>&nbsp; | &nbsp;
          <a href="/#">Report a bug</a>
        </p>
      </div>
    </footer>
  );
}
