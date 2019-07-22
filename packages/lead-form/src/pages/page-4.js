import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Step from "../components/step"

const FourthPage = () => (
  <Layout>
    <SEO title="Page four" />
    <Step selected="4"/>

    <h1>Hi from the Fourth page</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
