import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Step from "../components/step"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Step selected="2"/>

    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default SecondPage
