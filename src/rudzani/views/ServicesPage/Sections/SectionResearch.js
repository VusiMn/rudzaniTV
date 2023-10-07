/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
// react component used to create nice image meadia player
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Accordion from "components/Accordion/Accordion.js";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

// images

const useStyles = makeStyles(productStyle);

export default function SectionResearch() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem>
        <h2 className={classes.title}>Research and Development</h2>
        <Accordion
          active={0}
          activeColor="rose"
          collapses={[
            {
              title: "BEFORE WE WERE STREET NAMES",
              content: (
                <p>
                  Political satire feature that looks at lives of the freedom
                  fighters in Africa.
                </p>
              ),
            },
            {
              title: "URBAN BLACK RADIO",
              content: (
                <p>
                  75 – minute feature documentary, tracing the past 35 years of
                  urban black radio in South Africa and its contributions to the
                  current radio trends as told by the radio legend.
                </p>
              ),
            },
            {
              title: "55 AFRICAN STAMPS",
              content: (
                <p>
                  Travelogue depicting Africa’s beauty and history through the
                  eyes of their stars.
                </p>
              ),
            },
            {
              title: "READING LIST",
              content: (
                <p>
                  Feature film about a girl who turns an isolation room into
                  something beautiful.
                </p>
              ),
            },
          ]}
        />
      </GridItem>
    </GridContainer>
  );
}
