import React from "react"
import FeedLayout from "../components/feedlayout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import RoundUpFeed from "../components/roundupfeed"

const RodeoRoundUp = () => (
  <FeedLayout pageTitle = "Rodeo Round Up">
    <SEO title="Rodeo Round Up" />
      <StaticQuery 
        query = {RoundUpQuery} 
        render = {data => {
          return (
            <div className = "column-feed">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <RoundUpFeed 
                  key={node.id}
                  title = {node.frontmatter.title}
                  slug = {node.fields.slug}
                  fluid = {node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
            </div>
          )
        }}
      />
  </FeedLayout>
)

const RoundUpQuery = graphql`
  query RoundUpQuery{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default RodeoRoundUp
