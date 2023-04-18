require('dotenv').config({
  path: `.env`,
});

const siteUrl = `https://hartenfeller.dev`;

module.exports = {
  siteMetadata: {
    title: `Philipp Hartenfeller`,
    description: `Blog and Portfolio of software developer Philipp Hartenfeller`,
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
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
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
              maxWidth: 800,
              linkImagesToOriginal: false,
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
                HTTP: `Hypertext Transfer Protocol`,
                HTTPS: `Hypertext Transfer Protocol Secure`,
                SSL: `Secure Sockets Layer`,
                CRUD: `Create, Read, Update, Delete`,
                DB: `Database`,
                BLOB: `Binary Large Object`,
              },
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     // CommonMark mode (default: true)
    //     commonmark: true,
    //     // Footnotes mode (default: true)
    //     footnotes: true,
    //     // Pedantic mode (default: true)
    //     pedantic: true,
    //     // GitHub Flavored Markdown mode (default: true)
    //     gfm: true,
    //     // Plugins configs
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 630,
    //         },
    //       },
    //       `gatsby-remark-copy-linked-files`,
    //       `gatsby-remark-smartypants`,
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://hartenfeller.dev/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                title: edge.node.frontmatter.title,
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                enclosure: {
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.titleImage.childImageSharp.fixed.src,
                  type: 'image/jpeg',
                  length: null,
                },
              })),
            query: `
              {
                allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 20) {
                  edges {
                    node {
                      frontmatter {
                        title
                        description
                        date
                        titleImage {
                          childImageSharp {
                            fixed(toFormat: JPG, jpegQuality: 50) {
                              src
                            }
                          }
                        }
                      }
                      slug
                    }
                  }
                }
              }            
            `,
            output: '/rss.xml',
            title: 'Philipp Hartenfeller Blog RSS Feed',
          },
        ],
      },
    },
    'gatsby-plugin-uninline-styles',
  ],
};
