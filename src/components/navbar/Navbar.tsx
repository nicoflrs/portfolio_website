import * as React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import NavbarCandidateName from "./NavbarCandidateName";
import NavbarHeaderOption from "./NavbarHeaderOption";
import { ABOUT, EXPERIENCE, WORK, CONTACT } from "../../constants/navbarNames";

const Navbar: React.FC = () => {
  const headerOptions = [ABOUT, EXPERIENCE, WORK, CONTACT];
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      !isVisible ? setOpacity(0) : setOpacity(1);
      setIsHidden(!isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      style={{
        height: "100px",
        position: "sticky",
        top: 0,
        display: "flex",
        visibility: isHidden ? "hidden" : "visible",
        backgroundColor: "rgba(10, 25, 47, 0.85)",
        transition: "0.5s ease-in-out",
        opacity: opacity,
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
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
            <NavbarHeaderOption headerOption={el} key={el} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
