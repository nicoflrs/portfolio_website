import * as React from "react";
import { Typography } from "@mui/material";
import Text from "../bullets/Text";
import nexus from "../../assets/nexus.jpg";
import github from "../../assets/github.png";
import link from "../../assets/link.png";

const nexusString =
  "Nexus is a Microsoft VSCode extension that allows developers to visualize and analyze their NextJS code, providing a comprehensive view of their project's structure.";

const Work: React.FC = () => {
  return (
    <div
      id="work"
      style={{
        height: "1400px",
        color: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1100px",
          height: "85%",
          display: "flex",
          flexDirection: "column",
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
            Projects
          </Typography>
          <div style={{ borderBottom: "1px solid white", flex: 1 }}></div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", height: "100%", alignItems: "center" }}
          >
            <img src={nexus} width={679} height={455}></img>
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "37px",
            }}
          >
            <div
              style={{
                position: "relative",
                bottom: "138px",
                left: "330px",
                width: "0",
                height: "0",
              }}
            >
              <Text
                string={"Nexus"}
                fontOverride={"30px"}
                paddingOverride={"0px"}
              />
            </div>
            <div
              style={{
                backgroundColor: "hsla(180, 1%, 29%, 1)",
                width: "508px",
                height: "185px",
                borderRadius: "25px",
                position: "relative",
                right: "95px",
                bottom: "29px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text
                string={nexusString}
                paddingOverride={"0px 0px 0px 35px"}
                fontOverride={"23px"}
              />
            </div>
            <div
              style={{
                width: "81.5%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Text
                string={"VS Code | TypeScript | Webpack | Acorn"}
                fontOverride={"20px"}
                paddingOverride={"0px"}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                width: "81.5%",
                height: "12%",
              }}
            >
              <div style={{ paddingLeft: "25px" }}>
                <a
                  href="https://github.com/oslabs-beta/Nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github}></img>
                </a>
              </div>
              <div style={{ paddingLeft: "25px" }}>
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
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default Work;
