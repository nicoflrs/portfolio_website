import React from "react";
import "./layout.css";
import Navbar from "./navbar/Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "500px",
          color: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderStyle: "solid",
        }}
      >
        ABOUT ME SECTION! *in progress*
      </div>
      <div
        style={{
          height: "500px",
          color: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderStyle: "solid",
        }}
      >
        EXPERIENCE SECTION! *in progress*
      </div>
      <div
        style={{
          height: "500px",
          color: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderStyle: "solid",
        }}
      >
        WORK SECTION! *in progress*
      </div>
      <div
        style={{
          height: "500px",
          color: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderStyle: "solid",
        }}
      >
        CONTACT SECTION! *in progress*
      </div>
    </>
  );
};

export default Layout;
