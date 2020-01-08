import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Yekwon Park" />
    

    <div className="intro">
    </div>
    

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
