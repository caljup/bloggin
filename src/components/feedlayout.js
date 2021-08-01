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
import '../styles/index.scss'
import Footer from "./footer"
import { Row} from 'reactstrap'

const FeedLayout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query FeedTitleQuery {
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
        <div className="container" id="content">
        <h1 className = "rodeo-round-up">{pageTitle}</h1>
        <Row>
          {children}
        </Row>
        </div>
      <Footer/>
    </>
  )
}

FeedLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FeedLayout
