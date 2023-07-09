import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/bg5.jpg";
import Quote from "components/Typography/Quote.js";
import thinkSkillsImage from "assets/img/scientificDiagrams/ThinkSkills1.png";
import mindMapArgumentBuilding from "assets/img/scientificDiagrams/MindMapArgumentBuilding.png";
import mindMapArgumentCase from "assets/img/scientificDiagrams/MindMapArgumentCase2.png";

const useStyles = makeStyles(blogsStyle);

export default function SectionCriticalThinking({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 4 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
                    <h2 className={classes.title}>Thinking Skill</h2>
              <br />
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={thinkSkillsImage} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${thinkSkillsImage})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Critical Thinking
                    </a>
                  </h3>
                <Quote
                    textClassName={classes.quoteText}
                    text="Think like a PRO"
                    author="Prof. Pumela Msweli, Academic writing coach"
                />

                  <h5 className={classes.description}>
                   Critical thinking is a skillful way of thinking that is clear, logical,  open-minded, and informed by evidence.
                  </h5>
                  <h5 className={classes.description}>
                    Critical thinking is a complex thoughtful, purposeful process of forming judgement using valid evidence. It is a way of reaching logically sound conclusion by being curious, open minded, and respectful of others' views.
                  </h5>

                  <h5 className={classes.description}>
                    Critical thinking is an approach to enlighten knowledge and wisdom, centered around values of respect, humility, empathy and open mindedness.
                  </h5>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Use a mind map to build an argument
                    </a>
                  </h3>
              
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={mindMapArgumentBuilding} alt="..." />
                  </a>
                
                </CardHeader>
                <CardBody plain>
                  <Success>
                    <h6 className={classes.cardCategory}>Mind map five steps for building a sound argument</h6>
                  </Success>
                
                  <CardHeader image plain>
                    <br></br>
                    <br></br>
                    <br></br>
              
                  <Quote
                    textClassName={classes.quoteText}
                    text="Argue skilfully and professionally"
                    author="Prof. Pumela Msweli, Academic writing coach"
                />

                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={mindMapArgumentCase} alt="..." />
                  </a>
                
                  <Success>
                    <h6 className={classes.cardCategory}>Mind map hierarchy for building a sound argument</h6>
                  </Success>
                
                </CardHeader>
                  <h5 className={classes.description}>
                    Don{"'"}t be vusi of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>

            </GridItem>

            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
               
               <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={thinkSkillsImage} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${thinkSkillsImage})`, opacity: "1" }}
                  />
                </CardHeader>
             
                <CardBody plain>


                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 4 END */}
    </div>
  );
}
