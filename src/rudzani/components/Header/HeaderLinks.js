/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/" className={classes.listItem}>
            Home
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/about-us" className={classes.listItem}>
            About Us
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/services-page" className={classes.listItem}>
            Services
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/ibioscope-page" className={classes.listItem}>
            iBioscope
          </Link>
        </Button>
      </ListItem>
      {/**
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link
            to="/ThinkingAndWritingLogicalPage"
            className={classes.listItem}
          >
            Thinking & Logical Writing
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link
            to="/BlogPostCultivateCreativityPage"
            className={classes.listItem}
          >
            Ignite writing senses
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/BlogIsomorphismPage" className={classes.listItem}>
            Spells of Institutional Isomorphism
          </Link>
        </Button>
      </ListItem>
**/}
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/our-team-page" className={classes.listItem}>
            Our Team
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href=""
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/LectureVideosPage" className={classes.listItem}>
            Videos
          </Link>
        </Button>
      </ListItem>

      {/*
      /blog-posts
    <ListItem className={classes.listItem}>
      <Button
        href="#pablo"
        className={classes.navLink}
        onClick={e => e.preventDefault()}
        color="transparent"
      >
        Contact us
      </Button>
    </ListItem>
    */}
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
