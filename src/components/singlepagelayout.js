import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import '../styles/index.scss'
import Footer from "./footer"

const SinglePageLayout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SinglePageQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className = "guy old-man fillout">
        <div className="container" id="content">
          <h1 className = "rodeo-round-up">{pageTitle}</h1>
          {children}
        </div>
      </div>
      <div className = "backyard">
          <h2 className = "about-me-coloring" >My name is Caleb.</h2>
          <p className = "about-me-coloring">Welcome to my site. I like to write and make things.</p>
      </div>
      <div className = "tomb fillout take-a-seat">
      </div>      
      <Footer/>
    </>
  )
}

SinglePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SinglePageLayout
