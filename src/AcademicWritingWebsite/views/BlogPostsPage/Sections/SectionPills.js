import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import criticalThinkImg from "assets/img/academicWritingImages/CultivatingWritingCreativity/crititcalThinkerBaner1.jpg";
import igniteWritingImg from "assets/img/academicWritingImages/CultivatingWritingCreativity/beautifulworkplace.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";
import institutionalTheoryImg from "assets/img/IsomorphismImages/institutionalTheory1.png";
import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + criticalThinkImg + ")" }}
          >
            <CardBody background>
              <Link
                to="/ThinkingAndWritingLogicalPage"
                className={classes.listItem}
              >
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Thinking and writing logically
                  </h3>
                </a>
                <p className={classes.category}>
                  To write coherent arguments requires that we understand
                  different components of a logically sound argument...
                </p>
              </Link>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <Link
                  to="/ThinkingAndWritingLogicalPage"
                  className={classes.listItem}
                >
                  Read More
                </Link>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + igniteWritingImg + ")" }}
          >
            <CardBody background>
              <Link
                to="/BlogPostCultivateCreativityPage"
                className={classes.listItem}
              >
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    {" "}
                    Cultivate creativity for writing
                  </h3>
                </a>
                <p className={classes.category}>
                  Cultivating creativity to write authentically requires
                  thinking practices such as mindfulness...
                </p>
              </Link>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <Link
                  to="/BlogPostCultivateCreativityPage"
                  className={classes.listItem}
                >
                  Read More
                </Link>
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + institutionalTheoryImg + ")" }}
          >
            <CardBody background>
              <Link to="/BlogIsomorphismPage" className={classes.listItem}>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Ignite writing senses</h3>
                </a>
                <p className={classes.category}>
                  Breaking the Spell of Institutional Isomorphism to achieve
                  Engaged Scholarship objectives...
                </p>
              </Link>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <Link to="/BlogIsomorphismPage" className={classes.listItem}>
                  Read More
                </Link>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
