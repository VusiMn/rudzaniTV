import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function LectureVideosPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <SectionHeaders id="headers" />
      </div>
    </div>
  );
}
