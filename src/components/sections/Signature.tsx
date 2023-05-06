import { Typography } from "@mui/material";
import * as React from "react";

const Signature: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "20px",
        paddingBottom: "25px",
      }}
    >
      <a
        href="https://github.com/nicoflrs/portfolio_website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 400,
            fontSize: "20px",
          }}
        >
          Designed and built by Nico Flores
        </Typography>
      </a>
    </div>
  );
};

export default Signature;
