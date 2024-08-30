import * as React from "react";
import { WithStyles, createStyles, withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import profile from "../../assets/profile.jpg";
import {
  BACKGROUND,
  CURRENT_WORK,
  TECHNOLOGY_HEADER,
  JAVASCRIPT,
  NODEJS,
  REACT,
  TYPESCRIPT,
  DOCKER,
  KUBERNETES,
  SPINNAKER,
  GOOGLE_CLOUD_PLATFORM,
} from "../../constants/aboutStrings";

const styles = createStyles({
  root: {
    height: "850px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "75%",
    width: "750px",
    "@media (max-width: 775px)": {
      width: "73vw",
      height: "auto",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    borderBottom: "1px solid white",
    flex: 1,
  },
  content: {
    display: "grid",
    height: "100%",
    gridTemplateColumns: "1fr 1fr",
    paddingTop: "30px",
    "@media (max-width: 775px)": {
      gridTemplateColumns: "unset",
    },
  },
  text: {
    display: "grid",
    height: "60%",
  },
  textItem: {
    width: "100%",
    height: "100%",
  },
  textItemWithPadding: {
    width: "100%",
    height: "100%",
    paddingTop: "10px",
  },
  techList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    paddingLeft: "15px",
  },
  techItem: {
    color: "white",
  },
  imgContainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-end",
    paddingLeft: "15px",
    "@media (max-width: 775px)": {
      justifyContent: "center",
      paddingLeft: "0",
      paddingTop: "15px",
    },
  },
});

const technologies = [
  JAVASCRIPT,
  NODEJS,
  REACT,
  TYPESCRIPT,
  DOCKER,
  KUBERNETES,
  SPINNAKER,
  GOOGLE_CLOUD_PLATFORM,
];

interface Props extends WithStyles<typeof styles> {}

const About: React.FC<Props> = ({ classes }) => (
  <div id="about" className={classes.root}>
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography
          sx={{
            top: "0",
            color: "white",
            fontWeight: 700,
            fontSize: "30px",
            paddingRight: "15px",
          }}
        >
          About Me
        </Typography>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.content}>
        <div className={classes.text}>
          <div className={classes.textItem}>
            <Typography className={classes.techItem}>{BACKGROUND}</Typography>
          </div>
          <div className={classes.textItemWithPadding}>
            <Typography className={classes.techItem}>{CURRENT_WORK}</Typography>
          </div>
          <div className={classes.textItemWithPadding}>
            <div>
              <Typography className={classes.techItem}>
                {TECHNOLOGY_HEADER}
              </Typography>
            </div>
            <div className={classes.techList}>
              {technologies.map((tech, idx) => (
                <Typography className={classes.techItem} key={idx}>
                  {tech}
                </Typography>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img src={profile} width={233} height={233}></img>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(About);
