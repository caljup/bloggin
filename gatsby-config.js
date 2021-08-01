const siteMetadata = {
  title: `Rodeo Round`,
  description: `The Rootin-Tootin Blog by Caleb Upson That Contains Reviews, Essays, Recipies, Stories, and Strange Banter.`,
  image: `${__dirname}/src/images/tootin.jpg`,
  siteUrl: `https://rodeoround.com`,
  siteLanguage: `en`,
  siteLocale: `en_us`,
  twitterUsername: `@CalebUpson`,
  authorName: `Caleb Upson`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://rodeoround.com',
        sitemap: 'https://rodeoround.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/'}]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-posts`,
        path: `${__dirname}/src/pages/markdown-posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/styles/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cowboy.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
