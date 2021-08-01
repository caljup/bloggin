import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

const ThreePost = () => (
    <StaticQuery query = {ThreeBlockQuery} render= {(data) => (
        <div className = "associated-articles">
            <div className = "fillout-additional-articles">
            <h6>Psst, Hey Kid. Wanna Read Some More?</h6 >
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div className = "associated-articles-descriptions">
                    <ul className = "arrow">
                        <li>
                            <Link to= {node.fields.slug}>
                                <h4>{node.frontmatter.title}</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            ))}
            </div>
        </div>
    )}/>
)

const ThreeBlockQuery = graphql`
    query ThreeBlockQuery{
        allMarkdownRemark (
            sort: { fields: [frontmatter___date], order: DESC}
            limit: 3
            skip: 3
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default ThreePost