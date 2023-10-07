import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons VisibilityOutlined
import arrowIcon from "@material-ui/icons/ArrowRight";
import VisionIcon from "@material-ui/icons/VisibilityOutlined";
import GroupWork from "@material-ui/icons/GroupWork";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Story</h2>
          <h5 className={classes.description}>
            At the core of the company’s ethos is the recognition and respect of
            the cultural identity of indigenous people as an asset for economic
            development, and this forms the basis for the need to promote their
            stories.
          </h5>
        </GridItem>
      </GridContainer>
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
    </div>
  );
}
