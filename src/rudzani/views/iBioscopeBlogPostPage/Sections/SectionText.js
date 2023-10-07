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

import blog4 from "assets/img/Ru/bioscope4.jpg";
import blog3 from "assets/img/Ru/bioscope5.png";
import blog1 from "assets/img/Ru/bioscope2.jpg";

import office1 from "assets/img/Ru/bioscope1.jpg";
import office2 from "assets/img/Ru/bioscope5.png";
import office3 from "assets/img/Ru/bioscope4.jpg";
import office4 from "assets/img/Ru/bioscope3.jpg";
import office5 from "assets/img/Ru/bioscope2.jpg";

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
          <h3 className={classes.title}>iBioscope yeCommunity</h3>
          <p>
            Is a Mobile Cinema or Travelling Cinema project.After 12 years of
            experimental implementation and praxis at the University of Limpopo,
            public primary and high schools, and the surrounding community
            audiences - the concept has been redesigned, developed, and
            improved.
            <br />
            <br />
            It is now theorised as an adapted systemic solution to address the
            great distribution and audience challenges faced by African
            filmmakers, and South African Black filmmakers in particular.
            iBioscope yeCommunity draws its inspiration from experiences,
            attempts, and initiatives taken in the country related to audience
            development and distribution of films produced by Black South
            African filmmakers for their natural and real markets in the
            townships, rural areas, and schools.
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“Cinema for People’s Development”"
            author="Rudzani"
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
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            The project is designed to provide a solution to a problem created
            by a system of exclusion of black and poor communities in South
            Africa from accessing African Narrative films produced by black
            African filmmakers, particularly in South Africa. It is also
            designed as a socio-economic business model with immediate and
            measurable social and economic impact on local beneficiaries, in
            line with the National Radical transformation Vision and the Africa
            Agenda 2063.
          </p>
          <p>
            The black South African filmmakers are not able to take their films
            to their natural and real audiences in townships, rural areas, and
            in schools. Many of them have encountered audience failure when
            releasing their films in the formal distribution circles. “Kalushi”
            is a perfect illustration of an opportunity lost. This is a great
            film by a black South African filmmaker, which was not allowed to
            meet its real audience.
          </p>
          <p>
            Several other independent and private initiatives have been
            undertaken, of which most have also failed, and a few are still
            trying to find their way without making the required or expected
            impact because only a systemic solution can successfully be applied
            to a systemic problem.
          </p>
          <p>
            Our inability to see ourselves on the big screen has led to a great
            deal of audience isolation. It has decreased the confidence of Black
            filmmakers in making not only stories that are creative, but also
            original. Consequently, hereof, the African story’s importance and
            validation is brought to disrepute. This cultural event – iBioscope
            yeCommunity – Cinema for People’s Development, hopes to change the
            perception of the elitist cinema going culture by presenting an
            accessible cinema experience.
          </p>
          <p>
            We are now taking the successful results from our experience by
            creating a national network of iBioscope yeCommunity - Cinema for
            People’s Development in the country.
          </p>
          <p>
            This network will facilitate the long-awaited easy access of black
            South African films in particular and African films generally to
            their natural audiences in townships, rural areas and schools while
            providing a platform for filmmakers to easily reach their local
            audiences in each province and each district of South Africa. The
            aim is for iBioscope yeCommunity to create a cinema going culture
            for African and South African films, and ultimately close the gap
            created by a colonial system, which ignored black audiences the
            right to watch films made for them, and also denied black filmmakers
            from accessing their natural audiences in townships, rural areas,
            and schools.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
