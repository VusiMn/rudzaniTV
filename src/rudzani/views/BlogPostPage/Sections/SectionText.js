import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components

import ReactHtmlParser from "react-html-parser";
import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText(props) {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );

  const { paragraphs, mainTitle, carouselImages } = props.blogItem;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {<h2 className={classes.title}>{mainTitle}</h2>}
          {paragraphs.map((paragraph) => {
            return (
              <h4 className={classes.description}>
                {ReactHtmlParser(paragraph)}
              </h4>
            );
          })}
        </GridItem>
      </GridContainer>
      {/**<SectionCarousel carouselImages={carouselImages} />**/}
    </div>
  );
}
