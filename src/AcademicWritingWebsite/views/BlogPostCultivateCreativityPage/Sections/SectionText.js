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
import blog1 from "assets/img/academicWritingImages/CultivatingWritingCreativity/mindfulness.jpg";
import blog4 from "assets/img/academicWritingImages/CultivatingWritingCreativity/mindfulness2.jpg";
import blog3 from "assets/img/academicWritingImages/CultivatingWritingCreativity/mindfullness3.jpg";

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
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
          Beautiful thoughts for beautiful writing
          </h3>
          <p>
          Cultivating  creativity to write authentically requires thinking practices such as mindfulness. In other words, we need to be fully present in our thoughts, and focus on thoughts that serve us. Thoughts are the magnet that attract our physical reality. Wisdom is to use  our magnetic force (our thoughts)  creatively to create something beautiful in our writings and in our lives. Poetry is one way of doing this.
            <br />
            <br />
            Writing creatively requires us to do  something creative everyday. This may be knitting, crocheting, cooking, dancing, gardening, dressing up, styling up your hair, playing a music instrument, drawing, and painting on canvas.
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“We need to be fully present in our thoughts, and focus on thoughts that serve us”"
            author="Pumela Msweli, Professor."
          />

        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Cultivate a creative hobby</h3>
          <p>
          Writing beautiful and creatively is a way of life. Spending at least 15 minutes a day doing something creative nurtures your creative 'muscle'.
          </p>

          <h3 className={classes.title}>
          Have a daily ritual to fit in creativity
            </h3>
          <p>
          Starting each day with a meditation or prayer is a beautiful way of connecting the creative forces of the universe
          </p>

          <h3 className={classes.title}>
          Inspiration for writing
          </h3>
          <p>
          Creativity for writing needs to be fed with colour, scents, shapes, light. I sat in this park in Balboa in Spain to pen a poem to capture the beauty of this space.
          </p>
          <p>I took a long walk from my hotel to the old city in Balboa to capture the essence of this magnificent city.</p>
          <p>I was mesmerised by the Guggenheim Museum.</p>

          <h3>
          My bucket list visit to Mandragon - Basque Province of Spain
          </h3>
          <p>
      

Mondragon inspired Co-operative policies in many countries globally. I visited this city to learn about this + US$ 18billion Co-operative. I learnt that even the university governance is based on the Mondragon model.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
