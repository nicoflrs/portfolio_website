import { createStyles, withStyles, WithStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import * as React from "react";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import githubContact from "../../assets/githubContact.png";
import {
  LETS_CONNECT,
  CONTACT_DESCRIPTION,
} from "../../constants/contactStrings";

const styles = createStyles({
  contact: {
    height: "850px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  links: {
    width: "100%",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "34px",
  },
  iconContainer: {
    paddingLeft: "64px",
    paddingRight: "64px",
  },
  contactContainer: {
    width: "80%",
  },
});

interface Props extends WithStyles<typeof styles> {}

const Contact: React.FC<Props> = ({ classes }) => (
  <div id="contact" className={classes.contact}>
    <div className={classes.contactContainer}>
      <Typography
        sx={{
          color: "white",
          fontSize: "70px",
          fontWeight: 700,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {LETS_CONNECT}
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontWeight: 700,
          fontSize: "25px",
          textAlign: "center",
          paddingTop: "21px",
          lineHeight: "29px",
        }}
      >
        {CONTACT_DESCRIPTION}
      </Typography>
      <div className={classes.links}>
        <div>
          <a
            href="https://github.com/nicoflrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubContact} width={50} height={50}></img>
          </a>
        </div>
        <div className={classes.iconContainer}>
          <a
            href="mailto:floresni1996@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmail} width={50} height={50}></img>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nicoflrs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} width={50} height={50}></img>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Contact);
