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

export default function SectionPeomInfo() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
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
                Writing creatively requires us to do something creative everyday. This may be poetry, knitting, crocheting, cooking, dancing, gardening, dressing up, styling up your hair, playing a music instrument, drawing, and painting on canvas.
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
