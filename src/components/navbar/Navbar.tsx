import * as React from "react";
import { useEffect, useState } from "react";
import { Box, IconButton, Button, Menu, MenuItem } from "@mui/material";
import NavbarCandidateName from "./NavbarCandidateName";
import NavbarHeaderOption from "./NavbarHeaderOption";
import {
  ABOUT,
  EXPERIENCE,
  WORK,
  CONTACT,
} from "../../constants/navbarStrings";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
  box: { width: "100%", display: "flex", justifyContent: "space-between" },
  name: {
    height: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingRight: "30px",
  },
  menu: { zIndex: 100000001 },
};

const Navbar: React.FC = () => {
  const isBrowser = typeof window !== "undefined";
  const headerOptions = [ABOUT, EXPERIENCE, WORK, CONTACT];
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("inherit");
  const [boxShadow, setBoxShadow] = useState("0px 0px");
  const [isMobile, setIsMobile] = useState(
    isBrowser ? window?.innerWidth < 750 : false
  );
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window?.innerWidth < 750);
    };

    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window?.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      !isVisible ? setOpacity(0) : setOpacity(1);
      currentScrollPos === 0
        ? setBackgroundColor("inherit")
        : setBackgroundColor("#0F1E40");
      currentScrollPos === 0
        ? setBoxShadow("0px 0px")
        : setBoxShadow("0px 15px 30px -30px");
      setIsHidden(!isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setAnchorEl(e.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        height: "100px",
        position: "sticky",
        top: 0,
        display: "flex",
        visibility: isHidden ? "hidden" : "visible",
        boxShadow: boxShadow,
        transition: "0.5s ease-in-out",
        opacity: opacity,
        backgroundColor: backgroundColor,
        zIndex: 100000000,
        width: "100vw",
      }}
    >
      <Box sx={styles.box}>
        <NavbarCandidateName />
        <div style={styles.name}>
          {isMobile ? (
            <>
              <IconButton
                onClick={(e: React.MouseEvent) => handleClick(e)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                sx={styles.menu}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {headerOptions.map((el) => (
                  <a
                    key={el}
                    href={`#${el.toLowerCase()}`}
                    style={{ color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>{el}</MenuItem>
                  </a>
                ))}
              </Menu>
            </>
          ) : (
            headerOptions.map((el) => (
              <NavbarHeaderOption headerOption={el} key={el} />
            ))
          )}
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
