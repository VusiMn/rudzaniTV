import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionBeLightPoem() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>You are a woman </h2>

          <br></br>

          <h5 className={classes.description}>
            you are a steady radiance of light and beauty in the cosmic garden
            of abundance your beauty, your laughter your sorrows, your joys are
            a fountain of spring where humanity draws strength from the smile in
            your eyes is like sunshine in a frosty winter morning your love that
            pours out of your belly is the moonlight that turns the tides of
            life around
          </h5>

          <h5 className={classes.description}>
            you are a colourful radiant flower in the garden of life your
            everlasting blooming blossoms colour life with splendour
          </h5>

          <h5 className={classes.description}>
            your powers of creation have no equal after all you created the
            entire human family
          </h5>
        </GridItem>
      </GridContainer>

      <div></div>
    </div>
  );
}
