import * as React from "react";
import { useState } from "react";
import {
  Typography,
  createStyles,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import Bullets from "../bullets/Bullets";
import {
  WHERE_WORKED,
  ARCULES,
  PENNYMAC,
  companyDirectory,
} from "../../constants/experienceStrings";

const styles = createStyles({
  experience: {
    height: "850px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 775px)": {
      height: "auto",
    },
  },
  whereWorked: {
    height: "75%",
    width: "750px",
    paddingTop: "50px",
    "@media (max-width: 775px)": {
      width: "73vw",
      height: "100%",
    },
  },
  heading: {
    top: "0",
    color: "white",
    fontWeight: 700,
    fontSize: "30px",
    paddingRight: "15px",
  },
  companyLink: {
    color: "rgb(127,255,212)",
    "&::visited": {
      color: "rgb(127,255,212)",
    },
  },
  jobItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    borderBottom: "1px solid white",
    flex: 1,
  },
  jobList: {
    height: "50%",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    "@media (max-width: 775px)": {
      display: "unset",
    },
  },
  jobDescription: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 775px)": {
      display: "none",
    },
  },
  jobSubitemLarge: {
    flex: "2 1 15%",
  },
  jobSubitemSmall: {
    flex: "2 1 10%",
  },
  jobTitleContainer: {
    width: "100%",
    height: "65px",
    paddingTop: "10px",
    position: "relative",
    left: "165px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "@media (max-width: 775px)": {
      position: "unset",
      paddingTop: "0",
      height: "unset",
    },
  },
  jobTitleText: {
    display: "flex",
  },
  bulletContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
    paddingRight: "25px",
    "@media (max-width: 775px)": {
      paddingRight: "0",
    },
  },
  bulletWrapper: {
    width: "585px",
    borderRadius: "25px",
    height: "100%",
    "@media (max-width: 775px)": {
      width: "100%",
    },
  },
  container: {
    flex: "1 1 15%",
    borderLeft: "1px solid white",
    position: "relative",
    top: "33px",
  },
  containerRow: {
    "@media (max-width: 775px)": {
      display: "flex",
    },
  },
  company: {
    color: "white",
    height: "50%",
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-start",
    marginLeft: "20px",
    fontWeight: 700,
    fontSize: "24px",
    cursor: "pointer",
    "@media (max-width: 775px)": {
      marginLeft: "0",
    },
  },
  position: {
    color: "white",
    height: "50%",
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-end",
    marginLeft: "20px",
    fontWeight: 700,
    fontSize: "24px",
    cursor: "pointer",
    "@media (max-width: 775px)": {
      marginLeft: "0",
      marginRight: "20px",
    },
  },
  positionTitleText: {
    color: "white",
    fontSize: "24px",
    fontWeight: 700,
  },
  positionCompanyText: {
    paddingLeft: "7px",
    fontSize: "24px",
    fontWeight: 700,
  },
  positionLengthText: {
    color: "white",
    fontSize: "16px",
    fontWeight: 700,
  },
  dial: {
    width: "12px",
    height: "12px",
    position: "absolute",
    backgroundColor: "white",
    left: "-6px",
    transition: "top 0.5s",
    "@media (max-width: 775px)": {
      top: "-6px",
      left: "39px",
      position: "relative",
      transition: "left 0.5s",
    },
  },
  jobRow: {
    display: "flex",
    padding: "10px 0 10px 0",
    "@media (min-width: 775px)": {
      display: "none",
    },
  },
  jobRowBorder: {
    "@media (max-width: 775px)": {
      position: "relative",
      borderBottom: "1px solid white",
      paddingTop: "10px",
      width: "230px",
    },
  },
  jobRowContainer: {
    paddingTop: "10px",
    "@media (min-width: 775px)": {
      display: "none",
    },
  },
});

interface ExperienceProps extends WithStyles<typeof styles> {
  company: string;
}

const Experience: React.FC<ExperienceProps> = ({ classes }) => {
  const [company, setCompany] = useState(ARCULES);
  const [top, setTop] = useState("12px");
  const [left, setLeft] = useState("39px");
  const [opacity, setOpacity] = useState(0);

  const opacityChange = {
    opacity: opacity,
    transition: opacity && opacity > 0 ? "opacity 0.2s ease-in-out" : "none",
  };

  const topChange = { top: top };
  const leftChange = { left: left };

  return (
    <div id="experience" className={classes.experience}>
      <div className={classes.whereWorked}>
        <div className={classes.jobItem}>
          <Typography className={classes.heading}>{WHERE_WORKED}</Typography>
          <div className={classes.divider}></div>
        </div>
        <div className={classes.jobRowContainer}>
          <div className={classes.jobRowBorder} />
          <div className={classes.dial} style={leftChange}></div>
          <div className={classes.jobRow}>
            <Typography
              className={classes.position}
              onClick={() => {
                setCompany(PENNYMAC);
                setTop("62px");
                setLeft("39px");
                setOpacity(0);
              }}
            >
              {PENNYMAC}
            </Typography>
            <Typography
              className={classes.company}
              onClick={() => {
                setCompany(ARCULES);
                setTop("12px");
                setLeft("165px");
                setOpacity(0);
              }}
            >
              {ARCULES}
            </Typography>
          </div>
        </div>
        <div className={classes.jobTitleContainer}>
          <div className={classes.jobTitleText}>
            <Typography
              className={classes.positionTitleText}
              style={opacityChange}
            >
              {companyDirectory[company].positionTitle}
            </Typography>
            <Typography
              className={classes.positionCompanyText}
              style={opacityChange}
            >
              <a
                href={companyDirectory[company].positionWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.companyLink}
              >
                @ {company}
              </a>
            </Typography>
          </div>
          <Typography
            className={classes.positionLengthText}
            style={opacityChange}
          >
            {companyDirectory[company].positionLength}
          </Typography>
        </div>
        <div className={classes.jobList}>
          <div className={classes.jobDescription}>
            <div className={classes.container}>
              <div className={classes.dial} style={topChange}></div>
              <Typography
                className={classes.company}
                onClick={() => {
                  setCompany(ARCULES);
                  setTop("12px");
                  setLeft("165px");
                  setOpacity(0);
                }}
              >
                {ARCULES}
              </Typography>
              <Typography
                className={classes.position}
                onClick={() => {
                  setCompany(PENNYMAC);
                  setTop("62px");
                  setLeft("39px");
                  setOpacity(0);
                }}
              >
                {PENNYMAC}
              </Typography>
            </div>
            <div className={classes.jobSubitemLarge}></div>
            <div className={classes.jobSubitemSmall}></div>
          </div>
          <div className={classes.bulletContainer}>
            <div className={classes.bulletWrapper}>
              <Bullets
                company={company}
                opacity={opacity}
                setOpacity={setOpacity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Experience);
