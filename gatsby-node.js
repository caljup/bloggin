const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
        node,
        name: 'slug',
        value: slugFromTitle,
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagPosts: path.resolve('src/templates/tags-posts.js')
    }

    return graphql (`
        {
            allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC})
            {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        //Create single page posts
        posts.forEach(({node}, index) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    // Passing slug for template to use to get post
                    slug: node.fields.slug,
                    prev: index === 0 ? null : posts[index - 1].node,
                    next: index === (posts.length - 1) ? null : posts[index + 1].node
                },
            })
        })

        //Get all tags
        let tags = []
        _.forEach(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })

        //Removes duplicate tags
        tags = _.uniq(tags)


        //Create Pages for Tag Posts
        tags.forEach(tag => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag,
                },
            })
        })
    })
}