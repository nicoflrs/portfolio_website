import * as React from "react";
import Text from "./Text";

interface CompanyBullets {
  [key: string]: string[];
}

interface BulletProps {
  company: keyof CompanyBullets;
  opacity?: number;
  setOpacity: Function;
}

const arculesBulletFirst =
  "Unblocked a major customer by extending the capabilities of the frontend XML parsing logic, allowing the backend to send strings that let the frontend know what settings of a video device need to be enabled or disabled on the application";
const arculesBulletSecond =
  "Developed a kiosk software tool that displays live surveillance streams while preventing user interaction outside of the scope of expected execution; used HTTP cookies to ensure redirects back into kiosk software unless user intentionally opts out";
const arculesBulletThird = "";
const arculesBullets = [
  arculesBulletFirst,
  arculesBulletSecond,
  // arculesBulletThird,
];

const pennymacBulletFirst =
  "Utilized MSSQL to develop and automate reporting processes that contributed to the management of the credit risk transfer (CRT) loan portfolio, recovering more than $100M in unpaid principal balance during the height of the COVID-19 pandemic";
const pennymacBulletSecond =
  "Worked with Microsoft Office to manage executive level reporting, deliver KPI metrics, and create complex forecasting models";
const pennymacBulletThird = "";
const pennymacBullets = [
  pennymacBulletFirst,
  pennymacBulletSecond,
  // pennymacBulletThird,
];

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
          {idx < arculesBullets.length - 1 && (
            <div style={{ height: "5px" }}></div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Bullets;
