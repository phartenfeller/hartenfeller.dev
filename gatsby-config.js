require('dotenv').config({
  path: `.env`,
});

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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Philipp Hartenfeller's Blog`,
        short_name: `hartenfeller.dev`,
        start_url: `/blog`,
        background_color: `#fff2f2`,
        theme_color: `#544343`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
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
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
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
                APEX: `(Oracle) Application Express`,
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
                url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                enclosure: {
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.fixedTitleImage.childImageSharp
                      .gatsbyImageData.images.fallback.src,
                  type: 'image/jpeg',
                  length: null,
                },
              })),
            query: `
              {
                allMdx(
                  sort: {fields: frontmatter___date, order: DESC}  
                  filter: { frontmatter: { published: { ne: false } } } 
                  limit: 20
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        description
                        date
                        fixedTitleImage: titleImage {
                          childImageSharp {
                            gatsbyImageData(layout: FIXED)
                          }
                        }
                        slug
                      }
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
                description: `<p>${
                  edge.node.frontmatter.description
                }</p>${edge.node.html.replace(
                  /(?<!\.dev)\/blog\//g,
                  `${site.siteMetadata.siteUrl}/blog/`
                )}`,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                enclosure: {
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.fixedTitleImage.childImageSharp
                      .gatsbyImageData.images.fallback.src,
                  type: 'image/jpeg',
                  length: null,
                },
              })),
            query: `
              {
                allMdx(
                  sort: {fields: frontmatter___date, order: DESC}  
                  filter: {frontmatter: {published: {ne: false}, tags: {in: ["APEX", "Oracle"]}}}
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        description
                        date
                        fixedTitleImage: titleImage {
                          childImageSharp {
                            gatsbyImageData(layout: FIXED)
                          }
                        }
                        slug
                      }
                    }
                  }
                }
              }            
            `,
            output: '/orclapex-rss.xml',
            title: 'Philipp Hartenfeller #orclapex blog feed',
          },
        ],
      },
    },
    'gatsby-plugin-uninline-styles',
  ],
};
