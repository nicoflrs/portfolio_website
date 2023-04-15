import * as React from "react";
import { Box } from "@mui/material";
import NavbarCandidateName from "./NavbarCandidateName";
import NavbarHeaderOption from "./NavbarHeaderOption";
import { ABOUT, EXPERIENCE, WORK, CONTACT } from "../../constants/navbarNames";

const Navbar: React.FC = () => {
  const headerOptions = [ABOUT, EXPERIENCE, WORK, CONTACT];

  return (
    <Box
      sx={{
        height: "100px",
        position: "sticky",
        top: 0,
        boxShadow: "0px 1px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <NavbarCandidateName />
        <div
          style={{
            height: "100%",
            color: "white",
            display: "flex",
            alignItems: "center",
            paddingRight: "30px",
          }}
        >
          {headerOptions.map((el) => (
            <NavbarHeaderOption headerOption={el} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
