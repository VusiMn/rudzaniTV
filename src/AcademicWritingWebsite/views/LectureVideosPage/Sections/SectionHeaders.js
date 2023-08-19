import React from "react";
// nodejs library that concatenates classes
// react component for creating beautiful carousel
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SectionHeaderLinks from "AcademicWritingWebsite/views/AboutUsPage/Sections/SectionHeaderLinks.js";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import bg12 from "assets/img/bg12.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      {/* HEADER 1 START */}
      <div>
        <Header
          brand="Academic Writing"
          links={<SectionHeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "info",
          }}
        />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${bg12}")` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>
                  Academic Weekly Writing sessions
                </h1>
                <h4>
                  Visit Prof Msweli youtube channel a journey all about academic
                  writing. Like, follow, subcribe and most importantly engage
                  with her on the comment section.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/@pumelamsweli1845"
                  target="_blank"
                  rel=""
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                <div className={classes.iframeContainer}>
                  <iframe
                    height="250"
                    src="https://www.youtube.com/embed/CGlCrsiw4XU?si=7kl5UtwbXuA3vogr"
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen=""
                    title="Tesla"
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* HEADER 1 END */}
    </div>
  );
}
