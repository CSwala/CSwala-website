import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "./../../assets/_logo/logo.png";
import { AccountCircle, Add, ExitToApp, Settings } from "@material-ui/icons";
import {
  IconButton,
  makeStyles,
  Button,
  Typography,
  ListItem,
  List,
  Divider,
} from "@material-ui/core";

function Header(props) {
  const { currentRoute } = props;
  const header = useRef(null);

  const [loggedin, setLoggedin] = useState(false);

  const pages = ["Home", "Explore", "Job Hunt", "Hack Feed", "Sign in"];
  //const paths = ["/", "/explore", "/jobs", "/feed", "/signin"];
  const paths = ["/", "/explore", "/explore", "/explore", "/signin"];

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

  const closeNav = () => {
    header.current.classList.remove(styles.headerOpen);
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
      fontFamily: "'Work Sans', bold",
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
      fontFamily: "'Work Sans', bold",
      "&:hover": {
        backgroundColor: "#1c1c1c",
      },
    },
  });

  const classes = useStyles();

  return (
    <>
      <header ref={header} className={styles.header}>
        <div className={styles.hamburger} onClick={toggleNav}>
          <span className={`${styles.bar} ${styles.topBar}`}></span>
          <span className={`${styles.bar} ${styles.middleBar}`}></span>
          <span className={`${styles.bar} ${styles.bottomBar}`}></span>
        </div>

        <Link
          className={styles.mobileLogo}
          style={{
            transform: currentPage === "Home" && "scale(1.2) translateX(-45%)",
          }}
          to={"/"}
        >
          <img className={styles.logo} src={Logo} alt="" />
        </Link>

        <div className={`${styles.list} ${styles.left}`}>
          <div className={styles.homeContainer}>
            <Link
              className={
                currentPage === "Home"
                  ? `${styles.li} ${styles.home} ${styles.activeLi}`
                  : `${styles.li} ${styles.home}`
              }
              onClick={closeNav}
              to={"/"}
            >
              <img className={styles.logo} src={Logo} alt="" />
            </Link>
          </div>
          <div className={styles.pageLinks}>
            {pages.map((page, index) => {
              return (
                !["Sign in", "Home"].includes(page) && (
                  <Link
                    key={index}
                    className={
                      currentPage === page
                        ? `${styles.li} ${styles.activeLi}`
                        : styles.li
                    }
                    to={paths[index]}
                    onClick={closeNav}
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
                  <List className={classes.root}>
                    <ListItem className={classes.greetingHead}>
                      <AccountCircle
                        fontSize="large"
                        style={{ color: "white" }}
                      />
                      <Typography className={classes.greeting}>
                        ashuvssut
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem disableGutters>
                      <List className={classes.actions}>
                        <Button
                          size="small"
                          className={classes.action}
                          startIcon={<Settings />}
                        >
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
                      </List>
                    </ListItem>
                  </List>
                </div>
              </div>
            </>
          ) : (
            <Link
              className={styles.li}
              to={"/signin"}
              onClick={() => setLoggedin(true)}
            >
              Sign in
            </Link>
          )}
        </div>
      </header>
      <div className={styles.spacer}></div>
    </>
  );
}

export default Header;
