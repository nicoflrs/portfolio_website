import { Typography } from "@mui/material";
import { WithStyles, createStyles, withStyles } from "@mui/styles";
import React from "react";
import { SIGNATURE } from "../../constants/signatureStrings";

const styles = createStyles({
  location: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    paddingBottom: "25px",
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
        <Typography
          sx={{
            color: "rgb(127,255,212)",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          {SIGNATURE}
        </Typography>
      </a>
    </div>
  );
};

export default withStyles(styles)(Signature);
