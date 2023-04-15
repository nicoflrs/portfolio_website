import * as React from "react";
import { Typography } from "@mui/material";

interface NavbarHeaderOption {
  headerOption: string;
}

const NavbarHeaderOption: React.FC<NavbarHeaderOption> = ({ headerOption }) => (
  <Typography
    sx={{
      height: "100%",
      color: "white",
      display: "flex",
      alignItems: "center",
      paddingRight: "30px",
      fontSize: "18px",
    }}
  >
    {headerOption}
  </Typography>
);

export default NavbarHeaderOption;
