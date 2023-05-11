import * as React from "react";
import { Typography } from "@mui/material";
import Text from "../bullets/Text";
import nexus from "../../assets/nexus.jpg";
import tradeConfirmed from "../../assets/tradeConfirmed.jpg";
import githubWork from "../../assets/githubWork.png";
import link from "../../assets/link.png";

const nexusString =
  "Nexus is a Microsoft VSCode extension that allows developers to visualize their NextJS code, providing a comprehensive view of their project's structure";

const tradeConfirmedString =
  "TradeConfirmed is a web-based trading log app that allows you to document your previous investment transactions";

const styles = {
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
};

const Work: React.FC = () => {
  return (
    <div id="work" style={styles.workContainer}>
      <div style={styles.workContentContainer}>
        <div style={styles.headingContainer}>
          <Typography sx={styles.heading}>Projects</Typography>
          <div style={styles.headingDivider}></div>
        </div>
        <div style={styles.projectRowContainer}>
          <div style={styles.imageColumn}>
            <img src={nexus} width={679} height={455}></img>
          </div>
          <div style={styles.projectColumn}>
            <div style={styles.titleContainer}>
              <Text
                string={"Nexus"}
                fontOverride={"30px"}
                paddingOverride={"0px"}
              />
            </div>
            <div style={styles.projectDescriptionContainer}>
              <Text
                string={nexusString}
                paddingOverride={"0px 0px 0px 35px"}
                fontOverride={"23px"}
              />
            </div>
            <div style={styles.techContainer}>
              <Text
                string={"VS Code | TypeScript | Webpack | Acorn"}
                fontOverride={"20px"}
                paddingOverride={"0px"}
              />
            </div>
            <div style={styles.linkContainer}>
              <div style={styles.link}>
                <a
                  href="https://github.com/oslabs-beta/Nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubWork}></img>
                </a>
              </div>
              <div style={styles.externalLink}>
                <a
                  href="https://nexus-js.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.projectRowContainer}>
          <div style={styles.projectColumn}>
            <div style={styles.textContainer}>
              <Text
                string={"TradeConfirmed"}
                fontOverride={"30px"}
                paddingOverride={"0px"}
              />
            </div>
            <div style={styles.textBlob}>
              <Text
                string={tradeConfirmedString}
                paddingOverride={"0px 0px 0px 35px"}
                fontOverride={"23px"}
              />
            </div>
            <div style={styles.technologies}>
              <Text
                string={"React | PostgreSQL | Express | Render"}
                fontOverride={"20px"}
                paddingOverride={"0px"}
              />
            </div>
            <div style={styles.tradeConfirmedLinkContainer}>
              <div style={styles.tradeConfirmedGithub}>
                <a
                  href="https://github.com/nicoflrs/TradeConfirmed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubWork}></img>
                </a>
              </div>
              <div style={styles.tradeConfirmedLink}>
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
          <div style={styles.tradeConfirmedImage}>
            <img src={tradeConfirmed} width={679} height={455}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
