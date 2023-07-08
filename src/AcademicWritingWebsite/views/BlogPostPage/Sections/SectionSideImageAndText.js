import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import Extension from "@material-ui/icons/Extension";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

//import iphone from "assets/img/sections/iphone.png";
import iphone from "assets/img/scientificDiagrams/thinkDifferently.png";
//import iphone from "assets/img/scientificDiagrams/2.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bg9 from "assets/img/bg9.jpg";

const useStyles = makeStyles(featuresStyle);

export default function SectionSideImageAndText({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 3 START */}
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer}>
                <img src={iphone} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h3 className={classes.title}>Logical sound argument components</h3>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="A point of view"
                description="A point at the centre of an argument that is in dispute or in question."
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="A hypothesis"
                description="A claim/assertion or position we take on an issue backed with a valid/factual premise, in other words, reasons for the claim/assertion or position we are taking"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="Assumptions"
                description="Assumptions we make about the issue, assertions or claim must be valid and factual"
                iconColor="primary"
              />
                <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="Evidence"
                description="Evidence - that is facts, information to support a claim or conclusion."
                iconColor="primary"
              />
                   <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="Conclusion"
                description="Conclusion - a proposition which is arrived at after the consideration of valid evidence"
                iconColor="primary"
              />
              
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 3 END */}
      </div>
    </div>
  );
}
