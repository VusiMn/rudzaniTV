import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We will help you start your writing journey</h2>
          <h5 className={classes.description}>
        
            We are an institution of life long learning aiming to cultivate your creativity and inspire generation of academic authors that take pride and joy of their academic publications that are the essence of shaping progressive academic research. 
           
            The Academic writing resources are curated primarily by Professor Pumela Msweli and will also feature fellow high esteemed authors in the academic writing fraternity. Prof. Msweli as protagonist of the platform she will add a flair of her personal touch by sharing blogs, podcasts of personal expereinces 
            that help her countinously improve in her academic writing. 
            
          </h5>
          <h2 className={classes.title}>Academic Writing Topics </h2>

        
                          <h6>
                          Think and Write Authentically
                          </h6>
                          <h6>
                          Academic Rhetoric
                          </h6>
                          <h6>
                          Theorising and Conceptualising
                          </h6>
                          <h6>
                          Identifying a Relavant Theoretical Framework
                          </h6>
                          <h6>
                           Critical Theory and Literature
                          </h6>
                          <h6>
                           Research Methods for Different Worldviews
                          </h6>
                          <h6>
                           Writing up Qualitative Research Chapter
                          </h6>
                          <h6>
                           Writing up Quantitative Research Charpter
                          </h6>
                          <h6>
                          Contributing to knowledge
                          </h6>
        </GridItem>
      </GridContainer>
    

    </div>
  );
}
