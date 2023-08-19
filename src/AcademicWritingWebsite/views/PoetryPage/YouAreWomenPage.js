/*eslint-disable*/ import React from "react";

// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";
import SectionHeaderLinks from "AcademicWritingWebsite/views/AboutUsPage/Sections/SectionHeaderLinks.js";
// Sections for this page
import SectionYouAreWomen from "./Sections/SectionYouAreWomen.js";
import SectionPeomInfo from "./Sections/SectionPeomInfo.js";

const useStyles = makeStyles(landingPageStyle);

export default function RoyalPoemPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand=""
        links={<SectionHeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/academicWritingImages/PoetryImages/Queen.JPG")}
        filter="dark"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>You are a woman</h1>
              <h4>
                Celebrating Women month African Queens celebrating the essence
                of womanhood. The of 9th August is Women's Day South African
                public holiday. Professor Pumela Msweli; July 2020
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/channel/UCWUGJB-Cw8lpVba1R1MSvmw"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch the Poet video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionYouAreWomen />
        </div>
        <SectionPeomInfo />
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com/?ref=mkpr-landing"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
