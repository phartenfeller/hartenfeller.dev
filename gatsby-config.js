require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Philipp Hartenfeller`,
    description: `Portfolio of software developer Philipp Hartenfeller`,
    author: `Philipp Hartenfeller`,
    siteUrl: `https://hartenfeller.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blogposts`,
        name: `blogposts`,
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/imprint', '/privacy'],
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => 'https://hartenfeller.dev',
        serialize: ({ allSitePage }) =>
          allSitePage.nodes.map((node) => ({
            url: `https://hartenfeller.dev${node.path}`,
            changefreq: `weekly`,
            priority: node.path !== '/' ? 0.7 : 1,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-acronyms`,
            options: {
              acronyms: {
                APEX: `Application Express`,
                JS: `JavaScript`,
                CSS: `Cascading Style Sheets`,
                HTML: `Hypertext Markup Language`,
                UX: `User Experience`,
                UI: `User Interface`,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://hartenfeller.dev/`,
      },
    },
    `gatsby-plugin-image`,
  ],
};
