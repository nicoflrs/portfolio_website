import * as React from "react";
import { Typography } from "@mui/material";
import profile from "../../assets/profile.jpg";

const styles = {
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
};

const About: React.FC = () => (
  <div id="about" style={styles.root}>
    <div style={styles.container}>
      <div style={styles.header}>
        <Typography sx={styles.heading}>About Me</Typography>
        <div style={styles.divider}></div>
      </div>
      <div style={styles.content}>
        <div id="aboutme-text" style={styles.text}>
          <div style={styles.textItem}>
            <Typography sx={styles.techItem}>
              My name is Nico Flores, a front end developer based in Los
              Angeles, CA. I enjoy creating beautiful and powerful tools and
              experiences that others can enjoy. I'm passionate about
              cutting-edge technology, optimization, and intuitive UX.
            </Typography>
          </div>
          <div style={styles.textItemWithPadding}>
            <Typography sx={styles.techItem}>
              Currently, I am working on the Product team at Arcules. My main
              focus these days is building a unique digital experience for our
              various clients.
            </Typography>
          </div>
          <div style={styles.textItemWithPadding}>
            <div>
              <Typography sx={styles.techItem}>
                Technologies I work with:
              </Typography>
            </div>
            <div style={styles.techList}>
              <Typography sx={styles.techItem}>• JavaScript (ES6+)</Typography>
              <Typography sx={styles.techItem}>• NodeJS</Typography>
              <Typography sx={styles.techItem}>• React</Typography>
              <Typography sx={styles.techItem}>• TypeScript</Typography>
              <Typography sx={styles.techItem}>• Docker</Typography>
              <Typography sx={styles.techItem}>• Kubernetes</Typography>
              <Typography sx={styles.techItem}>• Spinnaker</Typography>
              <Typography sx={styles.techItem}>
                • Google Cloud Platform
              </Typography>
            </div>
          </div>
        </div>
        <div id="aboutme-img" style={styles.imgContainer}>
          <img src={profile} width={300} height={300}></img>
        </div>
      </div>
    </div>
  </div>
);

export default About;
