import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
          You have come to the right place for ideas, insights and tips to create and write up your research projects. Creating and writing up a research project is almost like building a car. Theprocess requires critical thinking skills and creativity.  If I may use the engine as a metaphor for your research,academic writing is the aesthetics and the performance of your car - it reflects your critical thinking capabilities and therigour of your research process.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
