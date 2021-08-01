import React from 'react'
import FeedLayout from '../components/feedlayout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import RoundUpFeed from '../components/roundupfeed'

const tagPosts = ({ data, pageContext})  => {
    const { tag } = pageContext

    return (
        <FeedLayout pageTitle = {tag}>
        <SEO title= {tag}/>
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
        </FeedLayout>
    )
}

export const tagQuery = graphql`
    query blogPostTags($tag: String!){
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag]}} }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        tags
                        image {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 1200) {
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


export default tagPosts