import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
import { blogPostData } from "./blogPostData";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import bg5 from "assets/img/bg5.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionBlogList() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title + " " + classes.textCenter}>
        You may also be interested in
      </h3>
      <br />
      {console.log(blogPostData)}
      <GridContainer>
        {blogPostData.map((blog) => {
          return (
            <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
              <Card plain blog>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src={blog.profileImage} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url(" + blog.profileImage + ")",
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6>{blog.name}</h6>
                  </Info>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo">{blog.professionTitle}</a>
                  </h4>
                  <p className={classes.description}>
                    {blog.bannerSubTitle}
                    <a href="#pablo"> Read More </a>
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
}
