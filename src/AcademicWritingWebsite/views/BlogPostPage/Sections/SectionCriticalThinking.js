import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import Quote from "components/Typography/Quote.js";
import thinkSkillsImage from "assets/img/scientificDiagrams/ThinkSkills1.png";
import mindMapArgumentBuilding from "assets/img/scientificDiagrams/MindMapArgumentBuilding.png";
import mindMapArgumentCase from "assets/img/scientificDiagrams/MindMapArgumentCase2.png";
import Accordion from "components/Accordion/Accordion.js";

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
            
                </CardBody>
              </Card>

            </GridItem>

            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
               
    
                <h2 className={classes.title}>Pitfalls leading to weak and illogical arguments</h2>
                <Accordion
                  active={0}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "1. Premature stance",
                      content: (
                        <p>
                         Deciding on a position or claim before reading widely  to familiarise yourself with other positions similar or different to yours results in a premature stance. Deciding on a position without interrogating other assertions, reasons and evidence leads to a premature stance. 
                        </p>
                      )
                    },
                    {
                      title: "2. Engaging superficially with a topic",
                      content: (
                        <p>
                        Superficially engaging with a topic, limited opinions and sources on the topic results in weak arguments. Focus not only on the sources and opinions you agree with, incorporate those you do not agree as the source of a rebuttal to strengthen your arguments. 
                        </p>
                      )
                    },
                    {
                      title: "3. To be married to your initial position for better or worse",
                      content: (
                        <p>
                         Be prepared to change your position in light of  valid evidence.  If your position changes, all the other elements of your argument should also change. 
                        </p>
                      )
                    }
                  ]}
                />
             
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 4 END */}
    </div>
  );
}
