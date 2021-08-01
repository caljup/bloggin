import React from 'react'
import PostLayout from '../components/postlayout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import { IconContext } from 'react-icons'
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share'

const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter
    //URL from current page
    const baseUrl = 'https://rodeoround.com/'
    const {next, prev} = pageContext

    return (
        <PostLayout pageTitle = {post.title}>
            <SEO title = {post.title} description = {data.markdownRemark.excerpt} image = {post.image.childImageSharp.sizes.src} pathname = {data.markdownRemark.slug}/>
            <div>
                <Img className = "post-image" fluid = {post.image.childImageSharp.fluid}/>
            </div>
            <div>
                <h1 className = "rodeo-round-up">{post.title}</h1>
                <div className = "text-center post-tagging">
                    <ul className = "post-tags">
                        {post.tags.map(tag => (
                            <li key = {tag}>
                                <Link to = {`/tag/${slugify(tag)}`}>
                                    <Badge color = "dark">{tag}</Badge>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className = "text-center">
                    <span className = "text-info">{post.date}</span> by{' '}
                    <span className = "text-info">{post.author}</span>
                </div>
            </div>
            <div className="post-text" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
            <h5 className="text-center">
                Share this post
            </h5>
            <div className = "text-center">
                <ul className = "sharing-list-social">
                    <li>
                        <FacebookShareButton url = {baseUrl + pageContext.slug}>
                            <IconContext.Provider value={{size: "2em", className: "facebook"}}>
                                <IoLogoFacebook/>
                            </IconContext.Provider>
                        </FacebookShareButton>
                    </li>
                    <li>
                        <TwitterShareButton url = {baseUrl + pageContext.slug}>
                            <IconContext.Provider value={{size: "2em", className: "twitter"}}>
                                <IoLogoTwitter/>
                            </IconContext.Provider>
                        </TwitterShareButton>
                    </li>
                    <li>
                        <LinkedinShareButton url = {baseUrl + pageContext.slug}>
                            <IconContext.Provider value={{size: "2em", className: "linkedin"}}>
                                <IoLogoLinkedin/>
                            </IconContext.Provider>
                        </LinkedinShareButton>
                    </li>
                </ul>
            </div>
            <div className = "post-navigation little-rodeo-round-up">
                <div className = "prev-navigation">
                    {prev && 
                    <Link to= {`/${prev.fields.slug}`}>
                        Prev
                    </Link>}
                </div>
                <div className = "next-navigation">
                    {next && 
                    <Link to= {`/${next.fields.slug}`}>
                        Next
                    </Link>}
                </div>
            </div>


        </PostLayout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug}}) {
            id
            html
            frontmatter {
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image {
                    childImageSharp {
                        sizes {
                            src
                        }
                        fluid(quality: 90, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            excerpt(pruneLength: 180)
            fields {
                slug
            }
        }
    }
`

export default SinglePost