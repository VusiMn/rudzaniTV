import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.js";

//import image1 from "assets/img/bg.jpg";
import image1 from "assets/img/academicWritingImages/CultivatingWritingCreativity/slide1.png";
import image2 from "assets/img/academicWritingImages/CultivatingWritingCreativity/slide2.png";
import image3 from "assets/img/academicWritingImages/CultivatingWritingCreativity/slide3.png";
import image4 from "assets/img/academicWritingImages/CultivatingWritingCreativity/slide4.png";
import image5 from "assets/img/academicWritingImages/CultivatingWritingCreativity/slide5.png";
import image6 from "assets/img/academicWritingImages/CultivatingWritingCreativity/slide6.png";
const useStyles = makeStyles(carouselStyle);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Taking a walk Balboa in Spain
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      The old city in Balboa
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Guggenheim Museum
                    </h4>
                  </div>
                </div>

                <div>
                  <img src={image4} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Mandragon - Basque Province of Spain
                    </h4>
                  </div>
                </div>

                <div>
                  <img src={image6} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Mondragon old city
                    </h4>
                  </div>
                </div>

                <div>
                  <img src={image5} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Mandragon - Basque Province of Spain
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
