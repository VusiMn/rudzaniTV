/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import cardProduct3 from "assets/img/examples/card-product3.jpg";
import cardProduct4 from "assets/img/examples/card-product4.jpg";
import cardProduct2 from "assets/img/examples/card-product2.jpg";
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

const useStyles = makeStyles(productStyle);

export default function SectionResume() {

  const classes = useStyles();
  return (
    
            <GridContainer>
              <GridItem>
                <h2 className={classes.title}>Education</h2>
                <Accordion
                  active={0}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "2001 PhD Exeter University, UK",
                      content: (
                        <p>
                         I was awarded a Doctoral of Philosophy (PhD) degree at Exeter in the area of management. My thesis used structural equation modelling to analyse the turnover effects in the network marketing industry in South Africa.
                        </p>
                      )
                    },
                    {
                      title: "1997 MBA Exeter University, UK",
                      content: (
                        <p>
                         I completed a Masters in Business Administration (cum laude) at the University of Exeter Business School.
                        </p>
                      )
                    },
                    {
                      title: "2015 MPhil in Development Finance University of Stellenbosch University",
                      content: (
                        <p>
                         I completed a Master of Philosophy in Development Finance, and wrote a thesis in the area of foreign direct investment inflows in relation to human capital development.
                        </p>
                      )
                    },
                    {
                      title: "2023 Professional Coaching Certificate University of Cape Town",
                      content: (
                        <p>
                         I am a certified integral coach, a qualification I completed at the University of Cape Town in 2023.
                        </p>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
   

  );
}
