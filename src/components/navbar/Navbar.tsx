import * as React from "react";
import { useEffect, useState } from "react";
import { Box, IconButton, Fade, Menu, MenuItem } from "@mui/material";
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
      if (currentScrollPos === 0) {
        setBackgroundColor("inherit");
        setBoxShadow("0px 0px");
      } else {
        setBackgroundColor("#0F1E40");
        setBoxShadow("0px 15px 30px -30px");
      }
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
    <Fade
      in={!isHidden || prevScrollPos === 0}
      style={{
        height: "100px",
        position: "sticky",
        top: 0,
        display: "flex",
        boxShadow,
        backgroundColor,
        zIndex: 100000000,
        width: "100vw",
      }}
      timeout={500}
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
    </Fade>
  );
};

export default Navbar;
