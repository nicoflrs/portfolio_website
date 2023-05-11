import { Typography } from "@mui/material";
import * as React from "react";

const styles = {
  location: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    paddingBottom: "25px",
  },
  design: {
    color: "white",
    fontWeight: 400,
    fontSize: "20px",
  },
};

const Signature: React.FC = () => {
  return (
    <div style={styles.location}>
      <a
        href="https://github.com/nicoflrs/portfolio_website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography sx={styles.design}>
          Designed and built by Nico Flores
        </Typography>
      </a>
    </div>
  );
};

export default Signature;
