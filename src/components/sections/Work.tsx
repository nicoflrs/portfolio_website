import * as React from "react";
import { Typography } from "@mui/material";
import nexus from "../../assets/nexus.jpg";

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
          <div style={{ height: "100%", width: "100%" }}></div>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default Work;
