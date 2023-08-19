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

import office2 from "assets/img/academicWritingImages/CultivatingWritingCreativity/Thinking1.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";
import pdf1 from "../Articles/BBS_en_2015_01_Msweli.pdf";
import pdf2 from "../Articles/ee_2013_02_Ngwakwe.pdf";
import pdf3 from "../Articles/ee_2014_04_Msweli.pdf";
import pdf4 from "../Articles/ee_2015_01spec.issue_Msweli.pdf";
import pdf5 from "../Articles/ee_2016_04cont_Ndlovu.pdf";
import pdf6 from "../Articles/PMF_2016_04_Msweli.pdf";
import pdf7 from "../Articles/PMF_2017_01_Gumede.pdf";
import pdf8 from "../Articles/PPM_2014_02_Msweli.pdf";

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
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Banks and Bank Systems</h6>
              <a href={pdf1} target="_blank">
                <h3 className={classes.cardTitle}>
                  Factors contributing to bank selection choices: a generation
                  theory perspective
                </h3>
              </a>

              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf1} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Environmental Economics</h6>
              <a href={pdf2} target="_blank">
                <h3 className={classes.cardTitle}>
                  On carbon emission reduction and firm performance: example
                  from 3M Company
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf2} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Environmental Economics</h6>
              <a href={pdf3} target="_blank">
                <h3 className={classes.cardTitle}>
                  An analysis of corporate community engagement in Zimbabwe
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf3} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Environmental Economics</h6>
              <a href={pdf4} target="_blank">
                <h3 className={classes.cardTitle}>
                  Human capital development: what can South Africa learn from
                  Botswana?
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf4} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Environmental Economics</h6>
              <a href={pdf5} target="_blank">
                <h3 className={classes.cardTitle}>
                  Theorizing and institutionalizing operation Sukuma Sakhe: a
                  case study of integrated service delivery
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf5} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Board gender diversity</h6>
              <a href={pdf1} target="_blank">
                <h3 className={classes.cardTitle}>
                  Voices of Women in Boards Count, Effective Participation
                  Counts More: A Board Gender Diversity Theoretical Framework.
                </h3>
              </a>

              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a
                  href="https://media.licdn.com/dms/document/media/D4D1FAQGQBSwmH8j9WA/feedshare-document-pdf-analyzed/0/1691065977760?e=1692230400&v=beta&t=5tkc_Jdr7EMVM1AfidlbgnNzjuYAk0Vf0h2UB76x8NM"
                  target="_blank"
                >
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Public and Municipal Finance</h6>
              <a href={pdf7} target="_blank">
                <h3 className={classes.cardTitle}>
                  Commonwealth Games: can Africa afford the games?
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf7} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Public and Municipal Finance</h6>
              <a href={pdf6} target="_blank">
                <h3 className={classes.cardTitle}>
                  Managing core university business performance in the wake of
                  ‘fees must fall’ context: a legitimacy theoretical perspective
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf6} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>
                Problems and Perspectives in Management"
              </h6>
              <a href={pdf8} target="_blank">
                <h3 className={classes.cardTitle}>
                  An analysis of board attributes that contribute to decision
                  quality in state-owned companies in South Africa
                </h3>
              </a>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} />
                <a href={pdf8} target="_blank">
                  Read article
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + cardProject6 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Academic writing</h6>
              <a
                href="https://scholar.google.com/citations?user=YNeIukoAAAAJ&hl=en"
                target="_blank"
              >
                <h3 className={classes.cardTitle}>Prof. Pumela Msweli</h3>
              </a>
              <p className={classes.category}>
                Visit Google Scholar for more published academic writing
                research
              </p>
              <Button round href="#pablo" color="danger">
                <a
                  href="https://scholar.google.com/citations?user=YNeIukoAAAAJ&hl=en"
                  target="_blank"
                >
                  Visit Google Scholar
                </a>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
