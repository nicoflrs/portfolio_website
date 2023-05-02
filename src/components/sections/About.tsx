import * as React from "react";
import { Typography } from "@mui/material";
import profile from "../../assets/profile.jpg";

const About: React.FC = () => {
  return (
    <div
      id="about"
      style={{
        height: "850px",
        color: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "75%",
          width: "750px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
          <div style={{ borderBottom: "1px solid white", flex: 1 }}></div>
        </div>
        <div
          style={{
            display: "grid",
            height: "100%",
            gridTemplateColumns: "1fr 1fr",
            paddingTop: "30px",
          }}
        >
          <div id="aboutme-text" style={{ display: "grid", height: "50%" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                My name is Nico Flores, a front end developer based in Los
                Angeles, CA. I enjoy creating beautiful and powerful tools and
                experiences that others can enjoy. I'm passionate about
                cutting-edge technology, optimization, and intuitive UX.
              </Typography>
            </div>
            <div style={{ width: "100%", height: "100%", paddingTop: "10px" }}>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Currently, I am working on the Product team at Arcules. My main
                focus these days is building a unique digital experience for our
                various clients.
              </Typography>
            </div>
            <div style={{ width: "100%", height: "100%", paddingTop: "10px" }}>
              <div>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Technologies I work with:
                </Typography>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  paddingLeft: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  • JavaScript (ES6+)
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  • NodeJS
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  • React
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  • TypeScript
                </Typography>
              </div>
            </div>
          </div>
          <div
            id="aboutme-img"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "flex-end",
              paddingLeft: "15px",
            }}
          >
            <img src={profile} width={300} height={300}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
