import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
// react components for routing our app without refresh

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
          <Card raised background style={{ backgroundImage: "url(" + +")" }}>
            <CardBody background>
              <div className={classes.iframeContainer}>
                <iframe
                  height="250"
                  src="https://www.youtube.com/watch?v=CGlCrsiw4XU&t=11s"
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen=""
                  title="Tesla"
                />
              </div>
            </CardBody>
          </Card>
          <iframe
            height="250"
            src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen=""
            title="Tesla"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card raised background style={{ backgroundImage: "url(" + +")" }}>
            <CardBody background>
              <h6 className={classes.category}>Banks and Bank Systems</h6>
              <a href="" target="_blank">
                <h3 className={classes.cardTitle}>
                  Factors contributing to bank selection choices: a generation
                  theory perspective
                </h3>
              </a>

              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href="" target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card raised background style={{ backgroundImage: "url(" + +")" }}>
            <CardBody background>
              <h6 className={classes.category}>Environmental Economics</h6>
              <a href="" target="_blank">
                <h3 className={classes.cardTitle}>
                  On carbon emission reduction and firm performance: example
                  from 3M Company
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href="" target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
