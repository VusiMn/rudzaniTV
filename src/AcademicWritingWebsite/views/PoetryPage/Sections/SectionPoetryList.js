import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import blog7 from "assets/img/examples/blog7.jpg";

import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.js";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

export default function SectionPoetryList() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
             Poetry
            </h2>
            <p className={classes.title + " " +classes.textCenter}>
            Writing creatively requires us to do something creative everyday. This may be knitting, crocheting, cooking, dancing, gardening, dressing up, styling up your hair, playing a music instrument, drawing, and painting on canvas.
          </p>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                  <Link to="/RoyalPoemPage"  className={classes.listItem}>
                      <img src={blog6} alt="..." />
                      </Link>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>Poet: Professor Pumela Msweli; 16 June 2023</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                      Mabudede ubumnyama kufike ukukhanya
                      </a>
                    </h4>
                    <p className={classes.description}>
                    AMakhosi, Royal Leaders, Mabudede ubumnyama kufike ukukhanya
                    Let there be light in our lives,
                    Let there be light in our communities;
                    Let there be light in our institutions
                    Let there be light in our planet earth 
                    Let us be ruled by the Truth of your Light and Wisdom, Royal Leaders.
                     <br></br>
                      <Link to="/RoyalPoemPage"  className={classes.listItem}>
                      Read More
                      </Link>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog8} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog8 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Success>
                      <h6>STARTUPS</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        Lyft launching cross-platform service this week
                      </a>
                    </h4>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog7} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog7 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Danger>
                      <h6>
                        <TrendingUp /> ENTERPRISE
                      </h6>
                    </Danger>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        6 insights into the French Fashion landscape
                      </a>
                    </h4>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
