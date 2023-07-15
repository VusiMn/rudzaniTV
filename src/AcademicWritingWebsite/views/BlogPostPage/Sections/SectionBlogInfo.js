import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";

import profileImage from "assets/img/faces/professorProfile.jpg";

import sectionBlogInfoStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionBlogInfoStyle.js";

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function SectionBlogInfo() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.blogTags}>
                <Badge color="blue"><a href="http://www.freepik.com">Photography Designed by stories / Freepik</a></Badge>
              </div>
              
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Button color="google" round className={classes.buttons}>
                <i className="fab fa-google" /> 232
              </Button>
              <Button color="twitter" round className={classes.buttons}>
                <i className="fab fa-twitter" /> 910
              </Button>
              <Button color="facebook" round className={classes.buttons}>
                <i className="fab fa-facebook-square" /> 872
              </Button>
            </GridItem>
          </GridContainer>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img src={profileImage} alt="..." />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <h4 className={classes.cardTitle}>Pumela Msweli</h4>
                <p className={classes.description}>
                My name is Pumela Msweli, I am your writing coach. You have come to the right place for ideas, insights and tips to create and write up your research projects. 
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <Button round className={classes.pullRight}>
                  Follow
                </Button>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
