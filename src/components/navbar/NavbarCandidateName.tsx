import * as React from "react";
import { Typography } from "@mui/material";
import { CANDIDATE_NAME } from "../../constants/navbarNames";

const styles = {
  name: {
    height: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    fontWeight: 700,
    fontSize: "24px",
  },
  textColor: { color: "white" },
};

const NavbarCandidateName: React.FC = () => (
  <Typography sx={styles.name}>
    <a style={styles.textColor} href={`#top`}>
      {CANDIDATE_NAME}
    </a>
  </Typography>
);

export default NavbarCandidateName;
