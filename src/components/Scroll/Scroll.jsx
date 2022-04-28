import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "4vh",
    backgroundColor: "#FBB03B",
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.1s",
      color: "#000",
      backgroundColor: "#FBB03B",
    },
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      backgroundColor: "#FBB03B",
    },
    [theme.breakpoints.up("lg")]: {
      right: "6.5%",
    },
  },
}));

const Scroll = ({ showBelow }) => {
  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
};
export default Scroll;
