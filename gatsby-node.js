exports.createPages = async ({ actions, graphql }) => {
  const tagSet = new Set();
  const yearSet = new Set();

  const blogposts = await graphql(`
    {
      posts: allMdx(filter: { frontmatter: { published: { ne: false } } }) {
        nodes {
          frontmatter {
            slug
            tags
          }
          fields {
            year
          }
          id
          parent {
            ... on File {
              relativeDirectory
              sourceInstanceName
            }
          }
        }
      }
    }
  `);

  const pages = blogposts.data.posts.nodes;

  pages.forEach((page) => {
    page.frontmatter.tags.forEach((tag) => tagSet.add(tag));
    yearSet.add(page.fields.year);

    actions.createPage({
      path: `/blog/${page.frontmatter.slug.replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/blog-page-template.jsx'),
      context: {
        id: page.id,
        relativeDirectory: page.parent.relativeDirectory,
      },
    });
  });

  tagSet.forEach((tag) => {
    actions.createPage({
      path: `/blog/tags/${tag.toLowerCase().replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/blog-tag-page-template.jsx'),
      context: {
        tag,
      },
    });
  });

  yearSet.forEach((year) => {
    actions.createPage({
      path: `/blog/tags/${year}`,
      component: require.resolve('./src/templates/blog-year-page-template.jsx'),
      context: {
        year,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type BlogTag implements Node {
      name: String!
      totalCount: Int!
    }
  `);

  createTypes(`
    type BlogYear implements Node {
      name: String!
      totalCount: Int!
    }
  `);
};

exports.sourceNodes = ({ actions, getNodesByType }) => {
  const tagsMap = new Map();
  const yearMap = new Map();

  const { createNode } = actions;

  // Get all Mdx nodes
  const allMdxNodes = getNodesByType('Mdx');

  // Compute the tag counts
  allMdxNodes.forEach((node) => {
    const { tags, published, date } = node.frontmatter;
    if (published === false) return;

    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        if (!tagsMap.has(tag)) {
          tagsMap.set(tag, 1);
        } else {
          tagsMap.set(tag, tagsMap.get(tag) + 1);
        }
      });
    }

    const year = new Date(date).getFullYear();
    if (!yearMap.has(year)) {
      yearMap.set(year, 1);
    } else {
      yearMap.set(year, yearMap.get(year) + 1);
    }
  });

  const tagArr = Array.from(tagsMap, ([name, totalCount]) => ({
    name,
    totalCount,
  }));

  const yearArr = Array.from(yearMap, ([name, totalCount]) => ({
    name,
    totalCount,
  }));

  // Create BlogTag nodes
  tagArr.forEach(({ name, totalCount }) => {
    createNode({
      id: `BlogTag-${name}`,
      name,
      totalCount,
      internal: {
        type: 'BlogTag',
        contentDigest: JSON.stringify({ name, totalCount }),
      },
    });
  });

  // Create BlogYear nodes
  yearArr.forEach(({ name, totalCount }) => {
    createNode({
      id: `BlogYear-${name}`,
      name,
      totalCount,
      internal: {
        type: 'BlogYear',
        contentDigest: JSON.stringify({ name, totalCount }),
      },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const year = new Date(node.frontmatter.date).getFullYear();
    createNodeField({
      node,
      name: 'year',
      value: year,
    });
  }
};
