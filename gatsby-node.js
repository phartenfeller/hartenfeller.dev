const path = require('path');

const blogPageTemplate = path.resolve(`./src/templates/blog-page-template.jsx`);
const tagPageTemplate = path.resolve(
  `./src/templates/blog-tag-page-template.jsx`
);

let defContentFilePath = '';

exports.createPages = async ({ actions, graphql }) => {
  const tagSet = new Set();

  const blogposts = await graphql(`
    {
      posts: allMdx {
        nodes {
          frontmatter {
            slug
            tags
          }
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  const pages = blogposts.data.posts.nodes;

  pages.forEach((page, i) => {
    if (i === 0) {
      defContentFilePath = page.internal.contentFilePath;
    }
    page.frontmatter.tags.forEach((tag) => tagSet.add(tag));

    actions.createPage({
      path: `/blog/${page.frontmatter.slug.replace(/ /g, '-')}`,
      component: `${blogPageTemplate}?__contentFilePath=${page.internal.contentFilePath}`,
      context: {
        id: page.id,
      },
    });
  });

  tagSet.forEach((tag) => {
    actions.createPage({
      path: `/blog/tags/${tag.toLowerCase().replace(/ /g, '-')}`,
      component: `${tagPageTemplate}?__contentFilePath=${defContentFilePath}`,
      context: {
        tag,
      },
    });
  });
};
