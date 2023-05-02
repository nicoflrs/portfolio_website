import * as React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";

const Experience: React.FC = () => {
  const [top, setTop] = useState("12px");
  return (
    <div
      id="experience"
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
            Where I've Worked
          </Typography>
          <div style={{ borderBottom: "1px solid white", flex: 1 }}></div>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ flex: "2 1 10%" }}></div>
            <div
              style={{
                flex: "1",
                borderLeft: "1px solid white",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  position: "absolute",
                  backgroundColor: "white",
                  left: "-6px",
                  top: top,
                  transition: "top 0.5s",
                }}
              ></div>
              <Typography
                sx={{
                  color: "white",
                  height: "50%",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "flex-start",
                  marginLeft: "20px",
                  fontWeight: 700,
                  fontSize: "25px",
                  cursor: "pointer",
                }}
                onClick={() => setTop("12px")}
              >
                Arcules
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  height: "50%",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "flex-end",
                  marginLeft: "20px",
                  fontWeight: 700,
                  fontSize: "25px",
                  cursor: "pointer",
                }}
                onClick={() => setTop("77px")}
              >
                PennyMac
              </Typography>
            </div>
            <div style={{ flex: "2 1 10%" }}></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
