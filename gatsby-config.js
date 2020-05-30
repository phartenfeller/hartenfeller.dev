require('dotenv').config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `Philipp Hartenfeller`,
    description: `Portfolio of software developer Philipp Hartenfeller`,
    author: `Philipp Hartenfeller`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#544242`,
        theme_color: `#544242`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000,
        contentTypes: [`hartenfeller-dev-blogs`, `hartenfeller-dev-tags`],
        singleTypes: [],
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PASSWORD
        }
      }
    }
  ]
};
