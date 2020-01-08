/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle='YEKWON PARK' />
      <div
        style={{
          
        }}
      >
        <main>{children}</main>
      </div>

      <footer
          style={{
            background: `#2c2e2d`,
            //position: `absolute`,
            right: `0`,
            left: `0`,
            bottom: `0`,
            width: `100%`,
            height: `2.5rem`,
           }} 
       >
          <div
            style={{
              padding: `0.5rem`,
              textAlign: `center`,
              fontFamily: `Montserrat`,
              fontSize: `8pt`,
              color: `#e4e9ec`,
            }}
          > 
            © 2019 Yekwon Park
          </div>
      </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
