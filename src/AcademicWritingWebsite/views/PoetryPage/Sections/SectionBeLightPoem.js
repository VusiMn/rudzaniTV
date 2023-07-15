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
          <h2 className={classes.title}>Be The Light... </h2>
         
<br>
</br>

<h5 className={classes.description}>
Be the light 
          </h5>

          <h5 className={classes.description}>

          
that dispels the darkness of our fears, greed, corruption and illusions
be the light that restores order in the human psyche
be the light that breaks the spell
that divides and fractionise us into south, north, west and east
</h5>

            <h5 className={classes.description}>Be The Light</h5>

          <h5 className={classes.description}>
          that breaks the spell of brutality and force in our nature
invoke magic and restore wholeness
and connectedness to essence
Connect to the infinite light
That make us see, feel and know
that we are one planet, one family
</h5>

          <h5 className={classes.description}> Be The Light
</h5>

          <h5 className={classes.description}>
          That frees us from the dark side of our nature
that is commanded by fear,
controlled by the spell of blame and entitlement
illuded by darkness masquerading as glamour and glitz
          </h5>

          <h5 className={classes.description}>
          invoke the magic of your light 
          </h5>
          <h5 className={classes.description}>
          and connect to all light workers  who have dedicated their work 
to restoring peace in our planet
rehabilitating us to experience
our connectedness to our true essence 
our connectedness to the boundless love and perfection 
of the Sacred Perfect  Light, so we as humans, may coexist 
with the entirety of the cosmos in peace and harmony
          </h5>
          
        </GridItem>
      </GridContainer>

    
      <div>
      </div>
    </div>
  );
}
