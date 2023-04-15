import * as React from "react";
import { Link } from "gatsby";
import { Typography } from "@mui/material";

interface NavbarHeaderOption {
  headerOption: string;
}

const NavbarHeaderOption: React.FC<NavbarHeaderOption> = ({ headerOption }) => (
  // <Link to={`/${headerOption.toLowerCase()}`}>
  <Typography
    sx={{
      height: "100%",
      color: "red",
      display: "flex",
      alignItems: "center",
      paddingRight: "30px",
      fontSize: "18px",
    }}
  >
    {headerOption}
  </Typography>
  // </Link>
);

export default NavbarHeaderOption;
