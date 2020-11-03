/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Isha Cabs & Logistics",
    titleTemplate: "%s | Logistics for future !",
    description: "A simple one-page site for new businesses that uses GatsbyJS",
    author: "Siva Ramakrishnan",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://www.linkedin.com/in/info4siva",
    twitterUsername: "@twitter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
