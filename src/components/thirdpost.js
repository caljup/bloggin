import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const ThirdPost = () => (
    <StaticQuery query = {ThirdPostQuery} render= {(data) => (
        <div className = "associated-articles">
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div className = "fillout-associated">
                    <div className = "associated-articles-image">
                        <Link to ={node.fields.slug}>
                            <Img className = "associated-articles-image" fluid = {node.frontmatter.image.childImageSharp.fluid}/>
                        </Link>
                    </div>
                    <div className = "associated-articles-descriptions">
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

const ThirdPostQuery = graphql`
    query ThirdPostQuery {
        allMarkdownRemark (
            sort: { fields: [frontmatter___date], order: DESC}
            limit: 1
            skip: 2
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
                    excerpt (pruneLength: 250)
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default ThirdPost