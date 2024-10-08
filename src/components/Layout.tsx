import React from "react";
import "../styles/layout.css";
import Navbar from "./navbar/Navbar";
import { createStyles, withStyles, WithStyles } from "@mui/styles";

interface LayoutProps {
  children: React.ReactNode;
}

interface LayoutProps extends WithStyles<typeof styles> {}

const styles = createStyles({
  layout: {
    display: "grid",
    justifyContent: "center",
  },
});

const Layout: React.FC<LayoutProps> = ({ classes, children }) => {
  return (
    <div className={classes.layout}>
      <Navbar />
      {children}
    </div>
  );
};

export default withStyles(styles)(Layout);
