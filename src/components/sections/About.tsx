import * as React from "react";
import {
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core";
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
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    top: "0",
    color: "white",
    fontWeight: 700,
    fontSize: "30px",
    paddingRight: "15px",
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
        <Typography className={classes.heading}>About Me</Typography>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.content}>
        <div id="aboutme-text" className={classes.text}>
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
        <div id="aboutme-img" className={classes.imgContainer}>
          <img src={profile} width={300} height={300}></img>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(About);
