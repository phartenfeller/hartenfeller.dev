import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PostPreviewHome from './blog/PostPreviewHome';
import SectionHeader from './SectionHeader';

const LatestBlogposts = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allStrapiHartenfellerDevBlogs(
        sort: { fields: PublishDate, order: DESC }
        limit: 2
      ) {
        nodes {
          Title
          Slug
          PublishDateFormattedMonth: PublishDate(formatString: "MMM")
          PublishDateFormattedDay: PublishDate(formatString: "DD")
          PublishDate
          Description
          tags {
            Tag
          }
        }
      }
    }
  `);

  const posts = data.posts.nodes;

  return (
    <div className="my-12 lg:my-32">
      <SectionHeader section="My Blog" />
      <div className="mx-8 lg:mx-48 lg:grid lg:grid-cols-2 hd:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostPreviewHome post={post} key={post.Slug} />
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
