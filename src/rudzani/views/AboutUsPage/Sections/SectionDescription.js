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
          <h2 className={classes.title}>About Us</h2>
          <h5 className={classes.description}>
            Rudzani Muthambi Properties PTY LTD – (RMP), is a 100% black owned
            brainchild of a young female visionary, committed to raising the
            flags of Kwazulu – Natal, Limpopo and Mpumalanga provinces and the
            country through closing the skills and access to information gap.
            This is done by accurately preserving, representing and distributing
            Film and Television content in these areas, through an audience
            development project called iBioscope yeCommunity (Cinema for
            People’s Development), where we take films and filmmakers to
            communities thus making films accessible to the majority of South
            Africans. Our content includes shorts, features, and doccies all
            filmed in SA communities. Rudzani (CEO), an enthusiastic creative
            herself, has been involved in various aspects of the arts, culture
            and entertainment industry for the past 17 years. Having benefited
            from a range of work in radio, film, television, theatre and print
            media and contributed to the establishment and development of
            various cultural initiatives, she got to learn and appreciate the
            power of the arts to create change. From this was spawned the idea
            to form a Distribution Production Company that caters for Africans
            in the Film and Television industry.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
