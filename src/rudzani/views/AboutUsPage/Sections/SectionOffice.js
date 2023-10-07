import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js";
import VisionIcon from "@material-ui/icons/VisibilityOutlined";
import GroupWork from "@material-ui/icons/GroupWork";
import Fingerprint from "@material-ui/icons/Fingerprint";

// office
import office1 from "assets/img/Ru/bioscope1.jpg";
import office2 from "assets/img/Ru/bioscope5.png";
import office3 from "assets/img/Ru/bioscope4.jpg";
import office4 from "assets/img/Ru/bioscope3.jpg";
import office5 from "assets/img/Ru/bioscope2.jpg";

const useStyles = makeStyles(officeStyle);

export default function SectionOffice() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Vision"
            description={
              <span>
                <p>
                  To be the pioneers of distributing, exhibiting and preserving
                  African stories for Africans and the world through Film and
                  Television.
                </p>
              </span>
            }
            icon={VisionIcon}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Mission"
            description={
              <span>
                <p>
                  To unearth the audience overlooked by mainstream media by
                  distributing, exhibiting, and presenting stories as told by
                  local communities in Africa, using their own languages to
                  preserve local idioms, and screening in South African
                  communities through iBioscope project.
                </p>
              </span>
            }
            icon={GroupWork}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Values"
            description={
              <span>
                <p>
                  Rudzani Muthambi Properties is committed to making content
                  that is <b>ACCESSIBLE</b> and beneficial to African
                  communities, while maintaining <b>CONSISTENCY</b> in bringing
                  affordable products and services required by our customers. We
                  are creating symbolic <b>RELATIONSHIPS</b> based on{" "}
                  <b>HONESTY</b>, by cultivating, nurturing and distributing
                  films about our audience so in order to build a <b>LOYAL</b>
                  following.
                </p>
              </span>
            }
            icon={Fingerprint}
            iconColor="brown"
          />
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Our Story</h2>
          <h4 className={classes.description}>
            At the core of the company’s ethos is the recognition and respect of
            the cultural identity of indigenous people as an asset for economic
            development, and this forms the basis for the need to promote their
            stories.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office1}
            alt="office1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office2}
            alt="office2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office3}
            alt="office3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office4}
            alt="office4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office5}
            alt="office5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
