import * as React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import Bullets from "../bullets/Bullets";

interface ExperienceProps {
  company: string;
}

const Experience: React.FC<ExperienceProps> = () => {
  const [top, setTop] = useState("12px");
  const [opacity, setOpacity] = useState(0);
  const [company, setCompany] = useState("Arcules");
  const [positionTitle, setPositionTitle] = useState("Software Engineer");
  const [positionCompany, setPositionCompany] = useState("@ Arcules");
  const [positionWebsite, setPositionWebsite] = useState(
    "https://arcules.com/"
  );
  const [positionLength, setPositionLength] = useState("2022 - Present");

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
            width: "100%",
            height: "65px",
            paddingTop: "10px",
            position: "relative",
            left: "165px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
                opacity: opacity,
                transition:
                  opacity && opacity > 0 ? "opacity 0.2s ease-in-out" : "none",
              }}
            >
              {positionTitle}
            </Typography>
            <Typography
              sx={{
                paddingLeft: "7px",
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
                opacity: opacity,
                transition:
                  opacity && opacity > 0 ? "opacity 0.2s ease-in-out" : "none",
              }}
            >
              <a
                href={positionWebsite}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(127,255,212)" }}
              >
                {positionCompany}
              </a>
            </Typography>
          </div>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontWeight: "700",
              opacity: opacity,
              transition:
                opacity && opacity > 0 ? "opacity 0.2s ease-in-out" : "none",
            }}
          >
            {positionLength}
          </Typography>
        </div>
        <div
          style={{
            height: "50%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flex: "1 1 15%",
                borderLeft: "1px solid white",
                position: "relative",
                top: "33px",
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
                  fontSize: "24px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpacity(0);
                  setTop("12px");
                  setCompany("Arcules");
                  setPositionTitle("Software Engineer");
                  setPositionCompany("@ Arcules");
                  setPositionLength("2022 - Present");
                  setPositionWebsite("https://arcules.com/");
                }}
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
                  fontSize: "24px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpacity(0);
                  setTop("62px");
                  setCompany("PennyMac");
                  setPositionTitle("Data Analyst");
                  setPositionCompany("@ PennyMac");
                  setPositionLength("2020 - 2022");
                  setPositionWebsite("https://www.pennymac.com/");
                }}
              >
                PennyMac
              </Typography>
            </div>
            <div style={{ flex: "2 1 15%" }}></div>
            <div style={{ flex: "2 1 10%" }}></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px",
              paddingRight: "25px",
            }}
          >
            <div
              style={{
                width: "585px",
                borderRadius: "25px",
                height: "100%",
              }}
            >
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

export default Experience;
