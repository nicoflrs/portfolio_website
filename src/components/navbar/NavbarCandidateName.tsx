import * as React from "react";
import { Typography } from "@mui/material";
import { CANDIDATE_NAME } from "../../constants/navbarNames";

const NavbarCandidateName: React.FC = () => (
  <Typography
    sx={{
      height: "100%",
      color: "white",
      display: "flex",
      alignItems: "center",
      paddingLeft: "30px",
      fontWeight: 700,
      fontSize: "24px",
    }}
  >
    {CANDIDATE_NAME}
  </Typography>
);

export default NavbarCandidateName;
