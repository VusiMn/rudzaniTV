import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";

import bg7 from "assets/img/bg7.jpg";
import cardProfile1Square from "assets/img/faces/biddy.jpg";
import cardProfile2Square from "assets/img/faces/mesete.png";
import cardProfile4Square from "assets/img/faces/happy.jpeg";
import cardProfile6Square from "assets/img/faces/pheeha.png";
import cardProfile5Square from "assets/img/faces/Trod.JPG";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Team 4 START */}
      <div
        className={classes.team + " " + classes.section}
        style={{ backgroundImage: `url(${bg7})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>The Team</h2>
              <h5 className={classes.descriptionWhite}>
                Dedicated team passionate about our vision.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={cardProfile1Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>DONALD ‘BIDDY’ MADUNA</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>PRODUCTION MANAGER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Biddy juggles between being a Production Coordinator and a
                    Production / Project Manager - conflicted on whether he is
                    superhuman. He strongly believes that one must be the first
                    one in and the last one out for the job to be done. Not very
                    “Glitzy”, but yeah.
                  </p>
                  <i>
                    “You must be the first one in and the last one out for the
                    job to be done”
                  </i>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={cardProfile2Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>MMAPOWANA MASETE</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>PUBLICITY MANAGER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Armed with a BA in Media Studies with Distinction and
                    currently obtaining her Honours Degree, Mmapowana is on a
                    journey to become a creative force in all aspects of
                    filmmaking. A budding Writer, Poet, Editor, Marketer, and
                    Make Up artist expanding into film Producing, Directing,
                    film Editing and more…She plans to use a creative approach
                    in film, literature, and art to address social ills and help
                    South African youth. Changing the trajectory of the media
                    space in Africa and presenting it to the world is my
                    purpose.
                  </p>
                  <i>
                    “Changing the trajectory of the media space in Africa and
                    presenting it to the world is my purpose”
                  </i>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={cardProfile4Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>HAPPY KHUMALO</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>ASSISTANT DIRECTOR</h6>
                  </Muted>
                  <p className={classes.description}>
                    Be proud to know who KHUMALO is – Happy KHUMALO a university
                    graduate in Media Studies. Core force at RMP. He fell in
                    love with the entertainment industry since high school where
                    he wrote and directed several school stage dramas. He is a
                    self-taught writer and director. Being part of RMP is a
                    dream come true to him as he gets to practice what he has
                    learned professionally.
                  </p>
                  <i>“I am eager to strive in the industry”</i>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={cardProfile6Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>PHEEHA TJALE</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      SOCIAL MEDIA COORDINATOR
                    </h6>
                  </Muted>
                  <p className={classes.description}>
                    Pheeha Tjale is a media studies graduate at the university
                    of Limpopo and social media Coordinator for RMP. He is
                    hardworking and sets reasonable goals. He believes in
                    collaboration where often two minds are better than one.
                    Working in a team with a collaborative spirit is important
                    to him. He dreams of becoming the best social media
                    coordinator. He oversees the launch and progress of several
                    social media platform of RMP. The goal is to ensure that all
                    the social media platform get to the people. And of course,
                    situations happen when the results are not ideal, and when
                    that happens, he does his best to tip the hat in a positive
                    direction.
                  </p>
                  <i>
                    “Working in a team with a collaborative spirit is important
                    to me”
                  </i>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={cardProfile5Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    COUNTRIES “TROD VICTORY” MACHATE
                  </h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>
                      POST PRODUCTION MANAGER
                    </h6>
                  </Muted>
                  <p className={classes.description}>
                    Stage name Trod Victory, formerly known as Countries
                    Machate. A Media Studies degree holder. He is an
                    enthusiastic song composer who has contributed songs to
                    various up-and-coming performers globally. A passionate
                    musician, music producer, a video editor, and writer. An
                    enthusiastic journalist by profession and a young,
                    burgeoning filmmaker who believes that an individual is just
                    as restricted as their imagination that is why he enjoys
                    exploring. Due to the flexibility of being able to work in
                    whatever profession you desire, he is delighted to be a part
                    of RMP.” There is no time to sleep because we work.
                  </p>
                  <i>
                    “An individual is just as restricted as their imagination
                    that is why I enjoy exploring.”
                  </i>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 4 END */}

      {/* Team 3 START */}
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Our Dedicated Team</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile1Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile1Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        DONALD ‘BIDDY’ MADUNA
                      </h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          PRODUCTION MANAGER
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Biddy juggles between being a Production Coordinator and
                        a Production / Project Manager - conflicted on whether
                        he is superhuman. He strongly believes that one must be
                        the first one in and the last one out for the job to be
                        done. Not very “Glitzy”, but yeah.
                      </p>
                      <i>
                        “You must be the first one in and the last one out for
                        the job to be done”
                      </i>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile6Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile6Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>MMAPOWANA MASETE</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          PUBLICITY MANAGER
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Armed with a BA in Media Studies with Distinction and
                        currently obtaining her Honours Degree, Mmapowana is on
                        a journey to become a creative force in all aspects of
                        filmmaking. A budding Writer, Poet, Editor, Marketer,
                        and Make Up artist expanding into film Producing,
                        Directing, film Editing and more…She plans to use a
                        creative approach in film, literature, and art to
                        address social ills and help South African youth.
                        Changing the trajectory of the media space in Africa and
                        presenting it to the world is my purpose.
                      </p>
                      <i>
                        “Changing the trajectory of the media space in Africa
                        and presenting it to the world is my purpose”
                      </i>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile4Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile4Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>HAPPY KHUMALO</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          ASSISTANT DIRECTOR
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Be proud to know who KHUMALO is – Happy KHUMALO a
                        university graduate in Media Studies. Core force at RMP.
                        He fell in love with the entertainment industry since
                        high school where he wrote and directed several school
                        stage dramas. He is a self-taught writer and director.
                        Being part of RMP is a dream come true to him as he gets
                        to practice what he has learned professionally.
                      </p>
                      <i>“I am eager to strive in the industry”</i>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile6Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile6Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>PHEEHA TJALE</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          SOCIAL MEDIA COORDINATOR
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Pheeha Tjale is a media studies graduate at the
                        university of Limpopo and social media Coordinator for
                        RMP. He is hardworking and sets reasonable goals. He
                        believes in collaboration where often two minds are
                        better than one. Working in a team with a collaborative
                        spirit is important to him. He dreams of becoming the
                        best social media coordinator. He oversees the launch
                        and progress of several social media platform of RMP.
                        The goal is to ensure that all the social media platform
                        get to the people. And of course, situations happen when
                        the results are not ideal, and when that happens, he
                        does his best to tip the hat in a positive direction.
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile5Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile5Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        COUNTRIES “TROD VICTORY” MACHATE
                      </h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          POST PRODUCTION MANAGER
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Stage name Trod Victory, formerly known as Countries
                        Machate. A Media Studies degree holder. He is an
                        enthusiastic song composer who has contributed songs to
                        various up-and-coming performers globally. A passionate
                        musician, music producer, a video editor, and writer. An
                        enthusiastic journalist by profession and a young,
                        burgeoning filmmaker who believes that an individual is
                        just as restricted as their imagination that is why he
                        enjoys exploring. Due to the flexibility of being able
                        to work in whatever profession you desire, he is
                        delighted to be a part of RMP.” There is no time to
                        sleep because we work.
                      </p>
                      <i>
                        “An individual is just as restricted as their
                        imagination that is why I enjoy exploring.”
                      </i>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 3 END */}
    </div>
  );
}
