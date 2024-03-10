import * as React from "react";
import {
  Typography,
  createStyles,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import Text from "../bullets/Text";
import nexus from "../../assets/nexus.jpg";
import tradeConfirmed from "../../assets/tradeConfirmed.jpg";
import githubWork from "../../assets/githubWork.png";
import link from "../../assets/link.png";
import {
  PROJECTS,
  NEXUS,
  NEXUS_DESCRIPTION,
  NEXUS_TECH,
  TRADECONFIRMED,
  TRADECONFIRMED_DESCRIPTION,
  TRADECONFIRMED_TECH,
} from "../../constants/workStrings";

const styles = createStyles({
  workContainer: {
    height: "1400px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  workContentContainer: {
    width: "1100px",
    height: "85%",
    display: "flex",
    flexDirection: "column",
  },
  headingContainer: {
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
  headingDivider: {
    borderBottom: "1px solid white",
    flex: 1,
  },
  projectRowContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  imageColumn: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  projectColumn: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "37px",
  },
  titleContainer: {
    position: "relative",
    bottom: "138px",
    left: "323px",
    width: "0",
    height: "0",
  },
  projectTitle: {
    fontOverride: "30px",
    paddingOverride: "0px",
  },
  projectDescriptionContainer: {
    backgroundColor: "hsla(180, 1%, 29%, 1)",
    width: "508px",
    height: "185px",
    borderRadius: "25px",
    position: "relative",
    right: "95px",
    bottom: "29px",
    display: "flex",
    alignItems: "center",
  },
  projectDescription: {
    paddingOverride: "0px 0px 0px 35px",
    fontOverride: "23px",
  },
  techContainer: {
    width: "81.5%",
    display: "flex",
    justifyContent: "flex-end",
  },
  tech: {
    fontOverride: "20px",
    paddingOverride: "0px",
  },
  linkContainer: {
    display: "flex",
    alignItems: "end",
    width: "81.5%",
    height: "12%",
  },
  link: {
    paddingLeft: "20px",
  },
  externalLink: {
    paddingLeft: "25px",
  },
  textContainer: {
    position: "relative",
    bottom: "135px",
    width: "0",
    height: "0",
  },
  textBlob: {
    backgroundColor: "hsla(180, 1%, 29%, 1)",
    width: "508px",
    height: "185px",
    borderRadius: "25px",
    position: "relative",
    bottom: "29px",
    display: "flex",
    alignItems: "center",
    zIndex: "1",
  },
  technologies: {
    width: "81.5%",
    display: "flex",
  },
  tradeConfirmedLinkContainer: {
    display: "flex",
    alignItems: "end",
    width: "81.5%",
    height: "12%",
    justifyContent: "flex-end",
  },
  tradeConfirmedGithub: { paddingRight: "25px" },
  tradeConfirmedLink: { paddingRight: "40px" },
  tradeConfirmedImage: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    position: "relative",
    right: "95px",
  },
});

interface WorkProps extends WithStyles<typeof styles> {}

const Work: React.FC<WorkProps> = ({ classes }) => {
  return (
    <div id="work" className={classes.workContainer}>
      <div className={classes.workContentContainer}>
        <div className={classes.headingContainer}>
          <Typography className={classes.heading}>{PROJECTS}</Typography>
          <div className={classes.headingDivider}></div>
        </div>
        <div className={classes.projectRowContainer}>
          <div className={classes.imageColumn}>
            <img src={nexus} width={679} height={455}></img>
          </div>
          <div className={classes.projectColumn}>
            <div className={classes.titleContainer}>
              <Text
                string={NEXUS}
                fontOverride={"30px"}
                paddingOverride={"0px"}
              />
            </div>
            <div className={classes.projectDescriptionContainer}>
              <Text
                string={NEXUS_DESCRIPTION}
                paddingOverride={"0px 0px 0px 35px"}
                fontOverride={"23px"}
              />
            </div>
            <div className={classes.techContainer}>
              <Text
                string={NEXUS_TECH}
                fontOverride={"20px"}
                paddingOverride={"0px"}
              />
            </div>
            <div className={classes.linkContainer}>
              <div className={classes.link}>
                <a
                  href="https://github.com/oslabs-beta/Nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubWork}></img>
                </a>
              </div>
              <div className={classes.externalLink}>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=Nexus-tree.nexus-extension"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.projectRowContainer}>
          <div className={classes.projectColumn}>
            <div className={classes.textContainer}>
              <Text
                string={TRADECONFIRMED}
                fontOverride={"30px"}
                paddingOverride={"0px"}
              />
            </div>
            <div className={classes.textBlob}>
              <Text
                string={TRADECONFIRMED_DESCRIPTION}
                paddingOverride={"0px 0px 0px 35px"}
                fontOverride={"23px"}
              />
            </div>
            <div className={classes.technologies}>
              <Text
                string={TRADECONFIRMED_TECH}
                fontOverride={"20px"}
                paddingOverride={"0px"}
              />
            </div>
            <div className={classes.tradeConfirmedLinkContainer}>
              <div className={classes.tradeConfirmedGithub}>
                <a
                  href="https://github.com/nicoflrs/TradeConfirmed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubWork}></img>
                </a>
              </div>
              <div className={classes.tradeConfirmedLink}>
                <a
                  href="https://tradeConfirmed.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link}></img>
                </a>
              </div>
            </div>
          </div>
          <div className={classes.tradeConfirmedImage}>
            <img src={tradeConfirmed} width={679} height={455}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Work);
