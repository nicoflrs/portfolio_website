import React from "react";
import "../styles/layout.css";
import Navbar from "./navbar/Navbar";
import { createStyles, withStyles } from "@material-ui/core";

interface LayoutProps {
  children: React.ReactNode;
}

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
