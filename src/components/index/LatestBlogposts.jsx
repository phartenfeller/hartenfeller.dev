import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PostPreviewHome from '../blog/PostPreviewHome';
import SectionHeader from '../SectionHeader';

const LatestBlogposts = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 2
      ) {
        nodes {
          frontmatter {
            title
            date
            dateFormattedMonth: date(formatString: "MMM")
            dateFormattedDay: date(formatString: "DD")
            description
            slug
            tags
          }
        }
      }
    }
  `);

  const posts = data.posts.nodes;

  return (
    <div className="my-12 lg:my-32 mx-auto xxl:w-2/3">
      <SectionHeader section="My Blog" />
      <div className="mx-8 lg:mx-48 lg:grid lg:grid-cols-2 hd:grid-cols-3 gap-4">
        {posts.map(({ frontmatter }) => (
          <PostPreviewHome postData={frontmatter} key={frontmatter.slug} />
        ))}
        <div className="flex border-2 border-red-500 border-dashed rounded-lg my-4">
          <Link
            to="/blog"
            className="p-6 text-2xl text-red-700 m-auto uppercase hover:text-red-900 hover:underline"
          >
            All posts
          </Link>
        </div>
      </div>
    </div>
  );
};

LatestBlogposts.propTypes = {};

export default LatestBlogposts;
