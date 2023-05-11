import * as React from "react";
import Text from "./Text";

const styles = {
  bullet: { height: "5px" },
};

interface CompanyBullets {
  [key: string]: string[];
}

interface BulletProps {
  company: keyof CompanyBullets;
  opacity?: number;
  setOpacity: Function;
}

const arculesBulletFirst =
  "Delivered and styled interactive web applications throughout the product using React and Material UI";
const arculesBulletSecond =
  "Collaborated with designers, product managers, and other engineers to transform concepts in the ideation phase into production realities for both customers and stakeholders";
const arculesBulletThird =
  "Contributed extensively to the creation of Forensic Video Search, an AI motion and object detection tool that allows users to search through vast amounts of recorded video";
const arculesBullets = [
  arculesBulletFirst,
  arculesBulletSecond,
  arculesBulletThird,
];

const pennymacBulletFirst =
  "Developed and automated KPI metric reporting for multiple divisions throughout the company using MSSQL and SSRS";
const pennymacBulletSecond =
  "Worked with Microsoft Office to manage executive level reporting and create complex forecasting models";
const pennymacBullets = [pennymacBulletFirst, pennymacBulletSecond];

const Bullets: React.FC<BulletProps> = ({ company, opacity, setOpacity }) => {
  const companyContainer: CompanyBullets = {
    Arcules: arculesBullets,
    PennyMac: pennymacBullets,
  };

  setTimeout(() => {
    setOpacity(1);
  }, 200);

  return (
    <ul
      style={{
        color: "white",
        opacity: opacity,
        transition:
          opacity && opacity > 0 ? "opacity 0.2s ease-in-out" : "none",
      }}
    >
      {companyContainer[company].map((el, idx) => (
        <React.Fragment key={idx}>
          <li>
            <Text
              string={el}
              paddingOverride={"0px 0px 0px 8px"}
              fontOverride={"18px"}
            />
          </li>
          {idx < arculesBullets.length - 1 && <div style={styles.bullet}></div>}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Bullets;
