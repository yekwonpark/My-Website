import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.css"
import Macbook from "../images/macbook.png"
import Headphone from "../images/headphone.png"
import Jersey from "../images/jersey.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Yekwon Park" />
    

    <div className="intro">
      <div className="developer"> 

        <img src={Macbook} alt="Macbook image" id="macbook" />

        <div id="developer-text">Growing Developer</div>
      </div>

      <div className="musician"> 

        <img src={Headphone} alt="Headphone image" id="headphone" />

        <div id="musician-text">Aspiring Musician </div>
       </div>

      <div className="fan"> 

        <img src={Jersey} alt="Jersey image" id="jersey" />

        <div id="fan-text">Avid Fan </div>
      </div>
    </div>

    <div className="about">
      <div className="greeting">Hey there! </div>
    </div>
    

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
