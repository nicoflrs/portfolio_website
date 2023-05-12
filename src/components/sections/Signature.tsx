import {
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";

const styles = createStyles({
  location: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    paddingBottom: "25px",
  },
  design: {
    color: "white",
    fontWeight: 400,
    fontSize: "20px",
  },
});

interface Props extends WithStyles<typeof styles> {}

const Signature: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.location}>
      <a
        href="https://github.com/nicoflrs/portfolio_website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography className={classes.design}>
          Designed and built by Nico Flores
        </Typography>
      </a>
    </div>
  );
};

export default withStyles(styles)(Signature);
