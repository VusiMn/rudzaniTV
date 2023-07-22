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

import SectionCriticalThinking from './SectionCriticalThinking.js';

import blog3 from "assets/img/academicWritingImages/CultivatingWritingCreativity/crititcalThinkerBaner1.png";
import blog4 from "assets/img/academicWritingImages/CultivatingWritingCreativity/beautifulworkplace.jpg";
import blog1 from "assets/img/academicWritingImages/CultivatingWritingCreativity/Thinking1.jpg";
import thinkDifferentImage from "assets/img/scientificDiagrams/thinkDifferently1.png";
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
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <br></br>
              <br></br>
              <br></br>
              <img src={thinkDifferentImage} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h3 className={classes.title}>Components for a coherent argument</h3>

              <ul className={classes.listUnstyled}>
                <li>
                  <b>A point of view</b> - SA point at the centre of an argument that is in dispute or in question.
                </li>
                <li>
                  <b> A hypothesis</b> - A claim/assertion or position we take on an issue backed with a valid/factual premise, in other words, reasons for the claim/assertion or position we are taking.
                 </li>
                 <li>
                    <b>Assumptions</b> - Assumptions we make about the issue, assertions or claim must be valid and factual.
                 </li>
                  <li>
                    <b>Evidence</b> - Evidence - that is facts, information to support a claim or conclusion.
                 </li>
                 <li>
                    <b>Conclusion</b> - Conclusion - a proposition which is arrived at after the consideration of valid evidence.
                 </li>
             </ul>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem>
          <SectionCriticalThinking/>
        </GridItem>
       
      
      </GridContainer>
     
    </div>

  );
}
