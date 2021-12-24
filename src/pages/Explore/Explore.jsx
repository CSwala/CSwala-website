import React, { useEffect, useState } from "react";
import style from "./explore.module.scss";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";
import PropTypes from "prop-types";
import Zoom from "@material-ui/core/Zoom";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";

import {
  Paper,
  Grid,
  Box,
  makeStyles,
  Typography,
  Tooltip,
  Fade,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "white",
    background: "#1C1C1C",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    display: "grid",
    justifyItems: "flex-start",
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    overflow: "hidden",
    "&:hover": {
      // background: "#fbb03b;",
      border: "1px solid #fbb03b",
      borderBottomLeftRadius: "25px",
      transform: "scale(1.1)",
      overlap: "hidden",
    },
  },
  subtitle: {
    lineHeight: 1.4,
    fontFamily: '"Work Sans", bold',
    display: "-webkit-box",
    lineClamp: 1,
    boxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    wordBreak: "break-all",
  },
  tag: {
    display: "-webkit-box",
    lineClamp: 1,
    fontFamily: '"Work Sans", bold',
    boxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    wordBreak: "break-all",
  },
}));
function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};



function Explore() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [storedData, setStoredData] = useState(
    JSON.parse(sessionStorage.getItem("store"))
  );

  const getData = () => {
    fetch("https://api.cswaala.in/v1/cs", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson);
        setData(myJson.Resources);
        sessionStorage.setItem("store", JSON.stringify(myJson.Resources));
      });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (data.length !== 0) {
      sessionStorage.setItem("store", JSON.stringify(data));
      setStoredData(JSON.parse(sessionStorage.getItem("store")));
    }
  }, [data]);

  return (
    <div className={style.root}>
      <MetaComponent
        title={metaData.explore.title}
        description={metaData.explore.description}
        keywords={metaData.explore.keywords}
      />
      <Toolbar id="back-to-top-anchor" style={{minHeight:0,paddingTop:"-20px"}} />
      <Box py={6} px={3}>
        <Grid container>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={2}>
              {storedData &&
                storedData.map((cardInfo, index) => {
                  return (
                    <Grid key={`card-${index}`} item xs={6} md={4} lg={3}>
                      <Box
                        display="grid"
                        align-items="stretch"
                        minHeight="95px"
                        height="100%"
                      >
                        <a
                          href={
                            "/e/" +
                            cardInfo.title.replace(" ", "-").toLowerCase()
                          }
                        >
                          <Paper className={classes.paper} elevation={3}>
                            <Tooltip
                              title={cardInfo.title}
                              TransitionProps={{ timeout: 1500 }}
                              TransitionComponent={Fade}
                              leaveDelay={0}
                              placement="bottom-start"
                            >
                              <Typography
                                variant="subtitle1"
                                align="left"
                                className={classes.subtitle}
                              >
                                {cardInfo.title}
                              </Typography>
                            </Tooltip>
                            <Typography
                              variant="body2"
                              style={{ color: "#ffffff59" }}
                              className={classes.tag}
                            >
                              {cardInfo.tag}
                            </Typography>
                          </Paper>
                        </a>
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
      </Box>
      <ScrollTop>
        <Fab style={{backgroundColor: '#fbb03b'}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default Explore;
