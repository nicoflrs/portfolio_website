import * as React from "react";
import { Typography } from "@mui/material";

const styles = {
  header: {
    height: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingRight: "30px",
    fontSize: "18px",
  },
  textColor: { color: "white" },
};

interface NavbarHeaderOption {
  headerOption: string;
}

const NavbarHeaderOption: React.FC<NavbarHeaderOption> = ({ headerOption }) => (
  <Typography sx={styles.header}>
    <a style={styles.textColor} href={`#${headerOption.toLowerCase()}`}>
      {headerOption}
    </a>
  </Typography>
);

export default NavbarHeaderOption;
