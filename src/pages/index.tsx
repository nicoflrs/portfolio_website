import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC = () => <Layout />;

export default IndexPage;
export const Head: HeadFC = () => <title>Portfolio | Nico</title>;
