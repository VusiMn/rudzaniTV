import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
// core components

import SectionSideImageAndText from 'AcademicWritingWebsite/views/BlogPostPage/Sections/SectionSideImageAndText.js';
import SectionCriticalThinking from 'AcademicWritingWebsite/views/BlogPostPage/Sections/SectionCriticalThinking.js';

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section} justify="center">

      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
          Thinking and writing logically
          </h3>

         
          <Quote
            textClassName={classes.quoteText}
            text="“To write coherent arguments requires that we understand different components of a logically sound argument”"
            author="Pumela Msweli, Professor."
          />
        </GridItem>
        <GridItem>
        <SectionSideImageAndText/>
        </GridItem>
        <GridItem>
          <SectionCriticalThinking/>
        </GridItem>
       
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
     
    </div>

  );
}
