import React, { useEffect, useState } from "react";
import style from "./explore.module.scss";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";
import Filter from "./Filter/Filter";

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
      background: "#1a1a1a",
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

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsPageLoaded(true);
    }
  }, [isLoaded]);

  const [tagSelcted, setTagSelected] = useState("");
  const SetTag = (Tag) => {
    setTagSelected(Tag);
  };
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsPageLoaded(true);
      setTagSelected("ALL");
    }
  }, [isLoaded]);

  let filterCourse = storedData;
  if (tagSelcted !== "ALL") {
    filterCourse = storedData.filter(function (result) {
      return (
        tagSelcted === result.tag.toUpperCase() ||
        tagSelcted === result.title.toUpperCase()
      );
    });
  }
  return (
    <div className={style.root}>
      <MetaComponent
        title={metaData.explore.title}
        description={metaData.explore.description}
        keywords={metaData.explore.keywords}
      />
      <Box py={6} px={3}>
        <Filter storedData={storedData} parentCall={SetTag} />
        <Grid container>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={2}>
              {filterCourse &&
                filterCourse.map((cardInfo, index) => {
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
    </div>
  );
}

export default Explore;
