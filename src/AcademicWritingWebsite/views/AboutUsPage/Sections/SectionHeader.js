import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { Link } from "react-router-dom";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import dg1 from "assets/img/academicWritingImages/LibraryImages/library5.jpg";
import dg2 from "assets/img/academicWritingImages/LibraryImages/study-group-learning-library.jpg";
import dg3 from "assets/img/academicWritingImages/LibraryImages/library4.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeader({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    
      <div>
        <Header
          absolute
          brand="Academic Writing"
          color="transparent"
          links={
            <List className={classes.list + " " + classes.mlAuto}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  
                  <Link to="/" className={classes.listItem}>
                  Home
                </Link>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                <Link to="/profile-page" className={classes.listItem}>
                     Meet Professor
                </Link>
                
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
            
                 <Link to="/blog-posts" className={classes.listItem}>
                 Blogs
                </Link>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <Link to="/blog-post" className={classes.listItem}>
                      Thinking & Logical Writing   
                    </Link>
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
      <Button
        href="#"
        className={classes.navLink}
        onClick={e => e.preventDefault()}
        color="transparent"
      >
         <Link to="/BlogPostCultivateCreativityPage"  className={classes.listItem}>
         Ignite writing senses
          </Link>
      </Button>
    </ListItem>

    <ListItem className={classes.listItem}>
      <Button
        href="#"
        className={classes.navLink}
        onClick={e => e.preventDefault()}
        color="transparent"
      >
         <Link to="/PoetryPage"  className={classes.listItem}>
         Poetry
          </Link>
      </Button>
    </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Contact us
                </Button>
              </ListItem>
            </List>
          }
        />
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h1 className={classes.title}>Welcome Academic Writing Authors</h1>
                    <h4>
                    Thought leaders writing responsibly for durable impact. The future of academic research and writing is in your hands. 
                    </h4>
                    <br />
                    <Button color="danger" size="lg">
                    <Link to="/BlogPostCultivateCreativityPage"  className={classes.listItem}>
                      Read more
                      </Link>
                    </Button>
                  
                    <Button 
                      href="https://scholar.google.com/citations?user=YNeIukoAAAAJ&hl=en"
                      target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button
                       href="https://www.youtube.com/channel/UCWUGJB-Cw8lpVba1R1MSvmw"
                       target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-youtube" />
                      </Button>

                      <Button
                       href="https://www.linkedin.com/in/profpumelamsweli/?originalSubdomain=za"
                       target="_blank"
                      color="white" simple  size="lg" justIcon>
                        <i className="fab fa-linkedin" />
                      </Button>
                      
                    <Button 
                    href="https://twitter.com/UnisaSBL/status/1674381882790666241"
                    target="_blank"
                    justIcon color="white" simple size="lg">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button 
                     href="https://www.facebook.com/UNISASBL/videos/prof-pumela-msweli-picks-up-from-the-series-on-writing-and-further-explores-issu/461182979264071/"
                     target="_blank"
                    justIcon color="white" simple size="lg">
                      <i className="fab fa-facebook-square" />
                    </Button>
                  
                   
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Think and write authentically</h1>
                    <h4>
                    Cultivating creativity to write authentically through Poetry or even better find your own creative outlet to ignite your creative ability.
                    </h4>
                    <br />
                    <h6>Connect with us on:</h6>
                    <div>
                    <Button 
                      href="https://scholar.google.com/citations?user=YNeIukoAAAAJ&hl=en"
                      target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button
                       href="https://www.youtube.com/channel/UCWUGJB-Cw8lpVba1R1MSvmw"
                       target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-youtube" />
                      </Button>

                      <Button
                       href="https://www.linkedin.com/in/profpumelamsweli/?originalSubdomain=za"
                       target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                       href="https://twitter.com/UnisaSBL/status/1674381882790666241"
                       target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button 
                      href="https://www.facebook.com/UNISASBL/videos/prof-pumela-msweli-picks-up-from-the-series-on-writing-and-further-explores-issu/461182979264071/"
                      target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                     
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>contributing to knowledge</h1>
                    <h4>
                     Your academic research must be published make durable impact
                    </h4>
                    <br />
                    {
                      /*** 
                    <div>
                      <Button color="white" simple size="lg">
                        <Share /> Share Offer
                      </Button>
                      <Button color="danger" size="lg">
                        <ShoppingCart /> Shop now
                      </Button>
                    </div>
                    **/}

                    <div>
                    <Button 
                      href="https://scholar.google.com/citations?user=YNeIukoAAAAJ&hl=en"
                      target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button
                       href="https://www.youtube.com/channel/UCWUGJB-Cw8lpVba1R1MSvmw"
                       target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-youtube" />
                      </Button>

                      <Button
                       href="https://www.linkedin.com/in/profpumelamsweli/?originalSubdomain=za"
                       target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                       href="https://twitter.com/UnisaSBL/status/1674381882790666241"
                       target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button 
                      href="https://www.facebook.com/UNISASBL/videos/prof-pumela-msweli-picks-up-from-the-series-on-writing-and-further-explores-issu/461182979264071/"
                      target="_blank"
                      color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                     
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
        </Carousel>
      </div>
    
    
  );
}
