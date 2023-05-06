import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";
import Signature from "../components/sections/Signature";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <About />
      <Experience />
      <Work />
      <Contact />
      <Signature />
    </Layout>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Portfolio | Nico Flores</title>;
