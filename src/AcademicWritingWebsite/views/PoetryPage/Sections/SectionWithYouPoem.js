import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionWithYouPoem() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>
            Within you: reflections of a teacher{" "}
          </h2>

          <br></br>

          <h5 className={classes.description}>
            within you <br></br>around you <br></br> above you <br></br>beneath
            you <br></br>is all the love <br></br>you need
          </h5>

          <h5 className={classes.description}>
            within you <br></br> is all the healing<br></br> you can summon
          </h5>

          <h5 className={classes.description}>
            within you is <br></br>is the timeless <br></br>vital force{" "}
            <br></br> to restore the balance <br></br> of the container{" "}
            <br></br> of your soul
          </h5>

          <h5 className={classes.description}>
            within you is a teacher and a student <br></br>waiting to drink from
            the waters <br></br>of infinite intelligence, <br></br>waiting to
            drink from intelligence <br></br> ofmaterial and nonmaterial matter{" "}
            <br></br>
            located in the fine art, music and dance <br></br>located in the
            libraries, museums, institutions, homes, communities and galleries
            <br></br>
            located in the laboratories, in the dreams and countless visible and
            invisible spaces of life <br></br> located in the history and
            stories of humanity in the universal intergalactic cosmos
          </h5>

          <h5 className={classes.description}>
            within every teacher there is a student <br></br> within every
            teacher and student there is completeness <br></br>layered within
            perfection
          </h5>

          <h5 className={classes.description}>
            within every teacher and student <br></br>there is infiniteness{" "}
            <br></br>for our inner light to dwell in, and delight in
          </h5>

          <h5 className={classes.description}>
            within you <br></br>there is all of us <br></br>within you <br></br>
            you have a genetic code of your ancestors <br></br>that lived in
            this planet <br></br> who continue to live in this multi-galactic
            universe
          </h5>
          <h5 className={classes.description}>
            within you is the technological infrastructure <br></br>to access
            all the knowledge required <br></br>to teach and to learn <br></br>
            from past, present and future experiences <br></br> knowledge
            located within the intergalactic community <br></br>that was, that
            is, that will be
          </h5>

          <h5 className={classes.description}>
            within you there is infiniteness <br></br> that can never be
            destroyed <br></br>not even death of a physical body can destroy the
            infiniteness within you
          </h5>

          <h5 className={classes.description}>
            within you there is good and bad <br></br>reflected in the good and
            the bad of life <br></br>within you is your own unique light that
            guides<br></br> your complex journey as a teacher and as a student{" "}
            <br></br>a journey to infiniteness
          </h5>
        </GridItem>
      </GridContainer>

      <div></div>
    </div>
  );
}
