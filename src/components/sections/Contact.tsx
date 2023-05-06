import { Typography } from "@mui/material";
import * as React from "react";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import githubContact from "../../assets/githubContact.png";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      style={{
        height: "850px",
        color: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ color: "white", fontSize: "70px", fontWeight: "700" }}>
        Let's Connect!
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontWeight: "700",
          fontSize: "25px",
          textAlign: "center",
          width: "761px",
          paddingTop: "21px",
          lineHeight: "29px",
        }}
      >
        While I am not currently looking for any opportunities, I am always open
        to chat. Whether you have a question or just want to say hello, please
        feel free to reach out to me at any time!
      </Typography>
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "34px",
        }}
      >
        <div>
          <a
            href="https://github.com/nicoflrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubContact}></img>
          </a>
        </div>
        <div style={{ paddingLeft: "64px", paddingRight: "64px" }}>
          <a
            href="mailto:floresni1996@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmail} width={74} height={74}></img>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nicolasaflores/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} width={74} height={74}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
