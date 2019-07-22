import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Step from "../components/step"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <Step selected="3"/>

    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-4/">Go to page 4</Link>
  </Layout>
)

export default ThirdPage
