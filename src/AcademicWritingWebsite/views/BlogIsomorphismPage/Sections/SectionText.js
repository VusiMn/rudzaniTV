import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
// core components

//import blog4 from "assets/img/examples/blog4.jpg";
//import blog3 from "assets/img/examples/blog3.jpg";
//import blog1 from "assets/img/examples/blog1.jpg";

import purposeImage from "assets/img/IsomorphismImages/purpose.png";
import institutionalTheory from "assets/img/IsomorphismImages/institutionalTheory.png";
import diagram1 from "assets/img/IsomorphismImages/diagram1.png";
import diagram2 from "assets/img/IsomorphismImages/diagram2.png";
import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={4} md={4}>
          <br></br>
          <br></br>
          <br></br>
          <img src={purposeImage} alt="..." className={imgClasses} />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <h3 className={classes.title}>Business education</h3>
          <p>
            The fundamental purpose of business education is to foster deep
            learning, critical reasoning, creativity, critical thinking, and
            intellectual transformation for the greater good of society.
            <br />
            <br />
            Writing creatively requires us to do something creative everyday.
            This may be knitting, crocheting, cooking, dancing, gardening,
            dressing up, styling up your hair, playing a music instrument,
            drawing, and painting on canvas.
          </p>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            What are the pressing engaged Scholarship objectives?
          </h3>
          <ul className={classes.listUnstyled}>
            <li>
              <b>Economic Transformation</b>
            </li>
            <li>
              <b> Redress of past inequities</b>
            </li>
            <li>
              <b>
                Capacitating SMEs, Public and Private sectors with requisite
                skills to participate in mainstream economy{" "}
              </b>
            </li>
            <li>
              <b>Transformed societal logics</b>
            </li>
            <li>
              <b>Peaceful and harmonious societies</b>
            </li>

            <li>
              {" "}
              <b>Evolved consciousness</b>
            </li>
          </ul>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <img src={institutionalTheory} alt="..." className={imgClasses} />
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Unpacking Institutional Theory</h3>
          <p>
            Institutional theory is a set of concepts and statements that
            explain how organisational structures, process, rules, norms, myths,
            routines and practices are created and become established as
            authoritative guidelines for understanding organisational
            arrangements and behaviours that are inexplicable through economic
            rationalisation.
          </p>

          <h3 className={classes.title}>Isomorphism Spell</h3>
          <p>
            Using the ‘spell breaking and spell casting metaphor’ the paper
            interrogates how business schools may succumb to the spell of
            isomorphism as a result of highly institutionalised settings vested
            with bureaucratic inertia and influential stakeholders.
          </p>

          <p>
            The paper discusses institutional spells that enable or hinder
            agility and efficiency in institutionalising engaged scholarship
            projects that transform society.
          </p>
          <h3 className={classes.title}>
            Research Question: What are spells that lock public HE institutions
            to institutional isomorphism?
          </h3>
          <p>
            <b>Coercive</b> isomorphic spell emanating from political and
            regulatory influence creating bureaucratic inertia
          </p>
          <p>
            <b>Mimetic</b> isomorphic spell associated with uncertainty in
            goals, technology, or market dynamics, which lead organisational
            decision-makers to adopt structures and practices that mimic other
            organizations in their fields without creating sufficient space for
            critical reflexivity
          </p>
          <p>
            And thirdly, <b>normative</b> isomorphism is associated with the
            professionalisation and legitimation conferred by accreditation
            bodies, interorganisational networks
          </p>

          <Quote
            textClassName={classes.quoteText}
            text="“I  again apply the spell casting and spell breaking metaphor to analyse the three isomorphism forces and their interaction in enabling or disabling implementation of an engaged scholarship project that involves multiple stakeholders in multiple internal and external institutional spaces. ”"
            author="Pumela Msweli, Professor."
          />

          <GridItem xs={12} sm={10} md={10} className={classes.section}>
            <img src={diagram1} alt="..." className={imgClasses} />
          </GridItem>
          <GridItem xs={12} sm={10} md={10} className={classes.section}>
            <img src={diagram2} alt="..." className={imgClasses} />
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
}
