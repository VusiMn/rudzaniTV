/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import SchoolIcon from "@material-ui/icons/School";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import SectionResume from "./Sections/SectionResume.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import podcastImg from "assets/img/Ru/LibraryImages/podcast.jpg";
import youtubeImg from "assets/img/Ru/LibraryImages/youtube.png";
import professorProfile from "assets/img/faces/professorProfile.jpg";
import kendall from "assets/img/Ru/LibraryImages/library4.jpg";
import cardProfile2Square from "assets/img/Ru/LibraryImages/creativity.jpg";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ServicesPageV2({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />

      <Parallax
        image={require("assets/img/Ru/LibraryImages/library2.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img
                    src={professorProfile}
                    alt="..."
                    className={imageClasses}
                  />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Prof. Pumela Msweli</h3>
                  <h6>Academic writing coach</h6>
                  <SectionSocialMedia />
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Follow this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="primary"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <h4 className={classes.title}>About Me</h4>
            <p className={classes.description}>
              My name is Pumela Msweli, I am your writing coach. I currently
              serve as the Executive Dean and CEO of the School of Business
              Leadership at UNISA. I have taught at the University of
              Witwatersrand and at University of Natal which became the
              University of KwaZulu-Natal after the merger. I served as a
              visiting scholar at St Mary’s University in Canada, University of
              Mauritius and Westminster University in the UK. I have supervised
              19 doctoral students and 41 masters students to completion. I have
              published in excess of 80 scholarly works, more than 20
              commissioned business research reports in the past 30 years of my
              career as an academic, a social scientist and as an artist. I have
              participated in numerous international collaborative research
              projects located in South Africa, Uganda, Mauritius, Zimbabwe,
              Tanzania, Egypt, Ethiopia, Canada, USA, UK, Germany, France,
              Finland and Sweden. 
            </p>
          </div>

          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Resume",
                  tabIcon: SchoolIcon,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <SectionResume />
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>19</b> - Supervised Doctoral Students
                          </li>
                          <li>
                            <b>41</b> - Supervised Masters Students
                          </li>
                          <li>
                            <b>80</b> - Scholarly Publications
                          </li>
                          <li>
                            <b>20+</b> - Commisioned Business Research Reports
                          </li>
                        </ul>

                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="primary">Academic writting</Badge>
                        <Badge color="rose">Research</Badge>
                        <Badge color="rose">Critical thinking</Badge>
                        <Badge color="rose">
                          Authentic thinkers & writers{" "}
                        </Badge>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Media",
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <Link
                                    to="/blog-post"
                                    className={classes.listItem}
                                  >
                                    <img src={kendall} alt="..." />
                                  </Link>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + kendall + ")",
                                      opacity: "1",
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Blogs</h4>
                                  <Muted>
                                    <h6>Academic readers paradise</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    All thing academic writing
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <Link
                                    to="/PoetryPage"
                                    className={classes.listItem}
                                  >
                                    <img src={cardProfile2Square} alt="..." />
                                  </Link>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + cardProfile2Square + ")",
                                      opacity: "1",
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Poetry</h4>
                                  <Muted>
                                    <h6>Food for the soul</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Poetry to connnect in deeper level with a
                                    personal touch
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={podcastImg} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + podcastImg + ")",
                                      opacity: "1",
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Podcast</h4>
                                  <Muted>
                                    <h6> iTunes </h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    For authentic writers and thinkers
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={youtubeImg} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + youtubeImg + ")",
                                      opacity: "1",
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Youtube</h4>
                                  <Muted>
                                    <h6>Visual Connection</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Story to help you find your writing journey
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-profile"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
