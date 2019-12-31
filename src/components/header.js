import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2c2e2d`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        textAlign: `center`,
        padding: `1.45rem 1.0875rem 1.8rem`,
        
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#e4e9ec`,
            textDecoration: `none`,
            fontFamily: `Montserrat`,
            fontSize: `20px`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
