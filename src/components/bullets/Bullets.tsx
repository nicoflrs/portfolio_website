import * as React from "react";
import { WithStyles, createStyles, withStyles } from "@mui/styles";
import Text from "./Text";
import {
  arculesBulletFirst,
  arculesBulletSecond,
  arculesBulletThird,
  pennymacBulletFirst,
  pennymacBulletSecond,
} from "../../constants/bulletStrings";

const styles = createStyles({
  bullet: { height: "5px" },
  list: {
    color: "white",
  },
});

interface CompanyBullets {
  [key: string]: string[];
}

interface BulletProps extends WithStyles<typeof styles> {
  company: keyof CompanyBullets;
  opacity?: number;
  setOpacity: Function;
}

const Bullets: React.FC<BulletProps> = ({
  classes,
  company,
  opacity,
  setOpacity,
}) => {
  const companyContainer: CompanyBullets = {
    Arcules: [arculesBulletFirst, arculesBulletSecond, arculesBulletThird],
    PennyMac: [pennymacBulletFirst, pennymacBulletSecond],
  };

  const bulletEffects = {
    opacity: opacity,
    transition: opacity && opacity > 0 ? "opacity 0.2s ease-in-out" : "none",
  };

  setTimeout(() => {
    setOpacity(1);
  }, 200);

  return (
    <ul style={bulletEffects} className={classes.list}>
      {companyContainer[company].map((el, idx) => (
        <React.Fragment key={idx}>
          <li>
            <Text
              string={el}
              paddingOverride={"0px 0px 0px 8px"}
              fontOverride={"18px"}
            />
          </li>
          {idx < companyContainer[company].length - 1 && (
            <div className={classes.bullet}></div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default withStyles(styles)(Bullets);
