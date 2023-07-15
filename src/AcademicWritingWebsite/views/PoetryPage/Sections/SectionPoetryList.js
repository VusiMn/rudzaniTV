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
            Develop your voice with poetry
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
                    Let there be light in our communities; ...
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
                    <Link to="/BeLightPoemPage"  className={classes.listItem}>
                    <img src={blog8} alt="..." />
                      </Link>
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
                      <h6>Poet: Professor Pumela Msweli; 05 May 2022</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                      Be the Light…
                      </a>
                    </h4>
                    <p className={classes.description}>
                    be the light 
that dispels the darkness of our fears, greed, corruption and illusions
be the light that restores order in the human psyche be the light that breaks the spell that divides and fractionise us into south, north, west and east...
                       <br></br>
                       <Link to="/BeLightPoemPage"  className={classes.listItem}>
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
                        Ignite your writing senses
                      </h6>
                    </Danger>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                      Cultivate creativity for writing
                      </a>
                    </h4>
                    <p className={classes.description}>
                    Beautiful thoughts for beautiful writing
Cultivating creativity to write authentically requires thinking practices such as mindfulness. In other words, we need to be fully present in our thoughts, and focus on thoughts that serve us...
                    <br></br>
                       <Link to="/BlogPostCultivateCreativityPage"  className={classes.listItem}>
                      Read More
                      </Link>
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
