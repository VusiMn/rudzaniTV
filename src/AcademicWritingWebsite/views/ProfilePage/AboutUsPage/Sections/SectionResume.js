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

export default function SectionResume() {

  const classes = useStyles();
  return (
    
            <GridContainer>
              <GridItem>
                <h2 className={classes.title}>Education</h2>
                <Accordion
                  active={0}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "2001 PhD Exeter University, UK",
                      content: (
                        <p>
                         I was awarded a Doctoral of Philosophy (PhD) degree at Exeter in the area of management. My thesis used structural equation modelling to analyse the turnover effects in the network marketing industry in South Africa.
                        </p>
                      )
                    },
                    {
                      title: "1997 MBA Exeter University, UK",
                      content: (
                        <p>
                         I completed a Masters in Business Administration (cum laude) at the University of Exeter Business School.
                        </p>
                      )
                    },
                    {
                      title: "2015 MPhil in Development Finance University of Stellenbosch University",
                      content: (
                        <p>
                         I completed a Master of Philosophy in Development Finance, and wrote a thesis in the area of foreign direct investment inflows in relation to human capital development.
                        </p>
                      )
                    },
                    {
                      title: "2023 Professional Coaching Certificate University of Cape Town",
                      content: (
                        <p>
                         I am a certified integral coach, a qualification I completed at the University of Cape Town in 2023.
                        </p>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
   

  );
}
