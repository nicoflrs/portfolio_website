import * as React from "react";
import { Typography } from "@mui/material";

interface BulletPoint {
  string: string;
  paddingOverride?: string;
  fontOverride?: string;
}

const Text: React.FC<BulletPoint> = ({
  string,
  paddingOverride,
  fontOverride,
}) => {
  return (
    <Typography
      sx={{
        color: "white",
        fontWeight: 700,
        fontSize: fontOverride,
        padding: paddingOverride,
        lineHeight: 1.3,
        listStylePosition: "outside",
        marginRight: "10px",
      }}
    >
      {string}
    </Typography>
  );
};

export default Text;
