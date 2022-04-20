import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PostPreviewHome from '../blog/PostPreviewHome';
import SectionHeader from '../SectionHeader';

const LatestBlogposts = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMdx(
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
      <Link
        to="/blog"
        className="grid hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <SectionHeader section="My Blog" />
      </Link>
      <div className="mx-8 lg:mx-48 lg:grid lg:grid-cols-2 hd:grid-cols-3 gap-4">
        {posts.map(({ frontmatter }) => (
          <PostPreviewHome postData={frontmatter} key={frontmatter.slug} />
        ))}
        <Link
          to="/blog"
          className="w-full inline-flex items-center justify-center border-2 border-red-300 border-dashed rounded-lg my-4 lg:col-span-2 hd:col-span-1 p-6 text-2xl text-zinc-900 uppercase hover:border-red-500 focus:outline-none focus:border-solid"
        >
          All posts
        </Link>
      </div>
    </div>
  );
};

LatestBlogposts.propTypes = {};

export default LatestBlogposts;
