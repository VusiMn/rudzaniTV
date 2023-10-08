import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(workStyle);

export default function SectionWork() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h5 className={classes.description}>
              <a className="right-area" href="mailto:ru@rudzani.tv">
                ru@rudzani.tv
              </a>
            </h5>
            <h5 className={classes.title}>+27 61 448 3540</h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
