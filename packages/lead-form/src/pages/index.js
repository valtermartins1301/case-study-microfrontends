import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LeadForm } from "lead-form"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />

      <LeadForm/>
    </Layout>
  </div>
)

export default IndexPage
