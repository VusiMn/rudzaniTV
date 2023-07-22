import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import Button from "components/CustomButtons/Button.js";
const useStyles = makeStyles(headersStyle);

export default function SectionSocialMedia() {

    const classes = useStyles();

    return(
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
    )

}