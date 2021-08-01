import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import '../styles/index.scss'
import Footer from "./footer"

const PostLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query PostLayoutQuery {
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
      <div className = 'sideeye'>
        <div className="container" id="content">
          {children}
        </div>
      </div>
      <Footer/>
    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout
