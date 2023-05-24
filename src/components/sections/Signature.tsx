import {
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { SIGNATURE } from "../../constants/signatureStrings";

const styles = createStyles({
  location: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    paddingBottom: "25px",
  },
  design: {
    color: "rgb(127,255,212)",
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
        <Typography className={classes.design}>{SIGNATURE}</Typography>
      </a>
    </div>
  );
};

export default withStyles(styles)(Signature);
