import {
  Typography,
  createStyles,
  withStyles,
  WithStyles,
} from "@material-ui/core";
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
  heading: {
    color: "white",
    fontSize: "70px",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
  },
  paragraph: {
    color: "white",
    fontWeight: 700,
    fontSize: "25px",
    textAlign: "center",
    width: "761px",
    paddingTop: "21px",
    lineHeight: "29px",
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
    width: "750px",
  },
});

interface Props extends WithStyles<typeof styles> {}

const Contact: React.FC<Props> = ({ classes }) => (
  <div id="contact" className={classes.contact}>
    <div className={classes.contactContainer}>
      <Typography className={classes.heading}>{LETS_CONNECT}</Typography>
      <Typography className={classes.paragraph}>
        {CONTACT_DESCRIPTION}
      </Typography>
      <div className={classes.links}>
        <div>
          <a
            href="https://github.com/nicoflrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubContact}></img>
          </a>
        </div>
        <div className={classes.iconContainer}>
          <a
            href="mailto:floresni1996@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmail} width={74} height={74}></img>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nicolasaflores/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} width={74} height={74}></img>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Contact);
