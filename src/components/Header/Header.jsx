import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "./../../assets/_logo/logo.png";
import { AccountCircle, Add, ExitToApp, Settings } from "@material-ui/icons";
import { IconButton, makeStyles, Card, CardContent, Button, Typography } from "@material-ui/core";

function Header(props) {
  const { currentRoute } = props;
  const header = useRef(null);

  const [loggedin, setLoggedin] = useState(false);

  const pages = ["Home", "Explore", "Job Hunt", "Hack Feed", "Sign in"];
  const paths = ["/", "/explore", "/jobs", "/feed", "/signin"];

  let currentPage;

  for (let i = 0; i < paths.length; i++) {
    if (currentRoute === paths[i]) {
      currentPage = pages[i];
      break;
    }
  }

  const toggleNav = () => {
    header.current.classList.toggle(styles.headerOpen);
  };

  const useStyles = makeStyles({
    icon: {
      marginTop: 4,
      color: "#fff",
      height: 33,
      width: 33,
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.06)",
      },
    },
    root: {
      cursor: "default",
      minWidth: 150,
      padding: "5px 5px !important",
      backgroundColor: "#444",
      color: "#f0f0f0",
    },
    greetingHead: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 8,
    },
    greeting: {
      fontSize: 14,
      textAlign: "center",
      color: "#f0f0f0",
      fontFamily: "'Open Sans', sans-serif",
    },
    actions: {
      padding: "10px 0px",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    action: {
      borderRadius: 0,
      width: "100%",
      color: "#f0f0f0",
      fontFamily: "'Open Sans', sans-serif",
      "&:hover": {
        backgroundColor: "rgba(225, 225, 225, 0.1)",
      },
    },
  });

  const classes = useStyles();

  return (
    <header ref={header} className={`${styles.header} ${styles.headerOpen}`}>
      <div className={`${styles.list} ${styles.left}`}>
        <div className={styles.homeContainer}>
          <Link
            className={
              currentPage === "Home" ? `${styles.li} ${styles.home} ${styles.activeLi}` : `${styles.li} ${styles.home}`
            }
            to={"/"}
          >
            <img className={styles.logo} src={Logo} alt="" />
          </Link>
          <div className={styles.hamburger} onClick={toggleNav}>
            <span className={`${styles.bar} ${styles.topBar}`}></span>
            <span className={`${styles.bar} ${styles.middleBar}`}></span>
            <span className={`${styles.bar} ${styles.bottomBar}`}></span>
          </div>
        </div>
        <div className={styles.pageLinks}>
          {pages.map((page, index) => {
            return (
              !["Sign in", "Home"].includes(page) && (
                <Link
                  key={index}
                  className={currentPage === page ? `${styles.li} ${styles.activeLi}` : styles.li}
                  to={paths[index]}
                >
                  {page}
                </Link>
              )
            );
          })}
        </div>
      </div>
      <div className={`${styles.list} ${styles.right}`}>
        {loggedin ? (
          <>
            <IconButton size="small" color="primary" className={classes.icon}>
              <Add fontSize="small" />
            </IconButton>
            <div className={styles.menu}>
              <AccountCircle fontSize="large" style={{ color: "white" }} />
              <div className={styles.dropDown}>
                <span className={styles.pointer}></span>
                <Card className={classes.root}>
                  <CardContent className={classes.greetingHead}>
                    <AccountCircle fontSize="large" style={{ color: "white" }} />
                    <Typography className={classes.greeting}>ashuvssut</Typography>
                  </CardContent>

                  <hr style={{background: "white"}}/>
                  <div className={classes.actions}>
                    <Button size="small" className={classes.action} startIcon={<Settings />}>
                      <Link className={classes.link} to="/profile">
                        profile
                      </Link>
                    </Button>
                    <Button
                      size="small"
                      className={classes.action}
                      startIcon={<ExitToApp />}
                      onClick={() => setLoggedin(false)}
                    >
                      Logout
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <Link className={styles.li} to={"/signin"} onClick={() => setLoggedin(true)}>
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
