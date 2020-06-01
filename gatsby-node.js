exports.createPages = async ({ actions, graphql }) => {
  const recipeData = await graphql(`
    {
      posts: allStrapiHartenfellerDevBlogs {
        nodes {
          id
          Slug
        }
      }
    }
  `);

  const pages = recipeData.data.posts.nodes;

  pages.forEach((page) => {
    actions.createPage({
      path: `/blog/${page.Slug.replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/blog-page-template.jsx'),
      context: {
        id: page.id,
      },
    });
  });

  const tagData = await graphql(`
    {
      tags: allStrapiHartenfellerDevTags {
        nodes {
          Tag
        }
      }
    }
  `);

  const tags = tagData.data.tags.nodes;

  tags.forEach((page) => {
    actions.createPage({
      path: `/blog/tags/${page.Tag.toLowerCase().replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/blog-tag-page-template.jsx'),
      context: {
        tag: page.Tag,
      },
    });
  });
};
