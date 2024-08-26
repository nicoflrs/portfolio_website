import * as React from "react";
import { useEffect, useState } from "react";
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
    "@media (max-width: 1100px)": {
      height: "auto",
    },
  },
  workContentContainer: {
    width: "75vw",
    height: "85%",
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1100px)": {
      width: "1100px",
    },
    "@media (max-width: 1100px)": {
      gap: "25px",
    },
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
    "@media (max-width: 1100px)": {
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  imageColumn: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    "@media (max-width: 1100px)": {
      width: "100%",
      display: "flex",
      alignItems: " center",
      position: "relative",
      minHeight: "456px",
      overflow: "hidden",
      borderRadius: "10px",
    },
  },
  projectColumn: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "37px",
    "@media (max-width: 1100px)": {
      display: "none",
    },
  },
  titleContainer: {
    position: "relative",
    bottom: "138px",
    left: "323px",
    width: "0",
    height: "0",
    "@media (max-width: 1100px)": {
      position: "unset",
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      display: "flex",
      paddingLeft: "20px",
    },
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
    "@media (max-width: 1100px)": {
      position: "unset",
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      display: "flex",
      paddingLeft: "20px",
    },
  },
  projectDescription: {
    paddingOverride: "0px 0px 0px 35px",
    fontOverride: "23px",
  },
  techContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    "@media (max-width: 1100px)": {
      flex: 1,
      alignItems: "center",
      display: "flex",
      paddingLeft: "20px",
    },
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
    "@media (max-width: 1100px)": {
      flex: 1,
      alignItems: "center",
      display: "flex",
    },
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
    "@media (max-width: 1100px)": {
      position: "unset",
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      display: "flex",
      paddingLeft: "20px",
    },
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
    "@media (max-width: 1100px)": {
      position: "unset",
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      display: "flex",
      paddingLeft: "20px",
    },
  },
  technologies: {
    width: "81.5%",
    display: "flex",
    "@media (max-width: 1100px)": {
      flex: 1,
      alignItems: "center",
      display: "flex",
      paddingLeft: "20px",
    },
  },
  tradeConfirmedLinkContainer: {
    display: "flex",
    alignItems: "end",
    width: "81.5%",
    height: "12%",
    justifyContent: "flex-end",
    "@media (max-width: 1100px)": {
      flex: 1,
      alignItems: "center",
      display: "flex",
      justifyContent: "unset",
      paddingLeft: "20px",
    },
  },
  tradeConfirmedGithub: { paddingRight: "25px" },
  tradeConfirmedLink: { paddingRight: "40px" },
  tradeConfirmedImage: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    position: "relative",
    right: "95px",
    "@media (max-width: 1100px)": {
      position: "relative",
      width: "100%",
      display: "flex",
      alignItems: " center",
      minHeight: "456px",
      overflow: "hidden",
      right: "0",
      borderRadius: "10px",
    },
  },
  imageOverlay: {
    "@media (max-width: 1100px)": {
      backgroundColor: "#494A4A",
      opacity: "90%",
      width: "100%",
      zIndex: 1,
      height: "100%",
    },
  },
  nexusImg: {
    "@media (min-width: 1100px)": {
      width: 679,
      height: 455,
      overflow: "hidden",
    },
  },
  projectDescriptionOverlayContainer: {
    "@media (max-width: 1100px)": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingRight: "20px",
    },
    "@media (min-width: 1100px)": {
      display: "none",
    },
  },
});

interface WorkProps extends WithStyles<typeof styles> {}
const Work: React.FC<WorkProps> = ({ classes }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="work" className={classes.workContainer}>
      <div className={classes.workContentContainer}>
        <div className={classes.headingContainer}>
          <Typography className={classes.heading}>{PROJECTS}</Typography>
          <div className={classes.headingDivider}></div>
        </div>
        <div className={classes.projectRowContainer}>
          <div className={classes.imageColumn}>
            <div className={classes.imageOverlay}>
              <div className={classes.projectDescriptionOverlayContainer}>
                <div className={classes.titleContainer}>
                  <Text string={NEXUS} fontOverride={"30px"} />
                </div>
                <div className={classes.projectDescriptionContainer}>
                  <Text string={NEXUS_DESCRIPTION} fontOverride={"23px"} />
                </div>
                <div className={classes.techContainer}>
                  <Text string={NEXUS_TECH} fontOverride={"20px"} />
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
            <img
              src={nexus}
              style={
                isMobile
                  ? {
                      "object-fit": "cover",
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      right: "0",
                      top: "0",
                    }
                  : {}
              }
              className={classes.nexusImg}
            ></img>
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
            <div className={classes.imageOverlay}>
              <div className={classes.projectDescriptionOverlayContainer}>
                <div className={classes.textContainer}>
                  <Text string={TRADECONFIRMED} fontOverride={"30px"} />
                </div>
                <div className={classes.textBlob}>
                  <Text
                    string={TRADECONFIRMED_DESCRIPTION}
                    fontOverride={"23px"}
                  />
                </div>
                <div className={classes.technologies}>
                  <Text string={TRADECONFIRMED_TECH} fontOverride={"20px"} />
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
            </div>
            <img
              src={tradeConfirmed}
              style={
                isMobile
                  ? {
                      "object-fit": "cover",
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      right: "0",
                      top: "0",
                    }
                  : {}
              }
              className={classes.nexusImg}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Work);
