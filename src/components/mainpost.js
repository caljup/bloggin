import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const MainPost = () => (
    <StaticQuery query = {MainPostQuery} render= {(data) => (
        <div className = "lead-article">
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div>
                    <div className = 'lead-article-image'>
                    <Link to ={node.fields.slug}>
                        <Img className = "lead-article-image" fluid = {node.frontmatter.image.childImageSharp.fluid}/>
                    </Link>
                    </div>
                    <div className = "lead-article-description">
                        <Link to= {node.fields.slug}>
                            <h2>{node.frontmatter.title}</h2>
                        </Link>
                        <div>
                            <p>{node.excerpt}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )}/>
)

const MainPostQuery = graphql`
    query MainPostQuery {
        allMarkdownRemark (
            sort: { fields: [frontmatter___date], order: DESC}
            limit: 1
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        image{
                            childImageSharp {
                                fluid (quality: 90, maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    excerpt (pruneLength: 180)
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default MainPost