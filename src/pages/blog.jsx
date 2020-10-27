import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Blogpost, { postType } from '../components/blog/Blogpost';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  {
    posts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date
          formattedDate: date(formatString: "MMMM DD, YYYY")
          description
          slug
          titleImage {
            sharp: childImageSharp {
              fluid(maxWidth: 1400) {
                src
              }
            }
          }
          titleImageAlt
          tags
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const blogposts = data.posts.nodes;

  return (
    <Layout>
      <SEO title="Blog" description="Blog posts from Philipp Hartenfeller" />
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-3xl leading-9 brown-header-text font-extrabold sm:text-4xl sm:leading-10">
              Philipp Hartenfeller&apos;s Blog
            </h1>
          </div>
          <div className="mx-6 lg:m-auto lg:w-2/3 xl:w-1/2 mt-8 lg:grid lg:gap-6 lg:grid-cols-2">
            {blogposts.map(({ frontmatter }) => (
              <Blogpost postData={frontmatter} key={frontmatter.slug} />
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-xl text">
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-800 hover:underline"
          >
            Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(postType.post),
    }).isRequired,
  }).isRequired,
};

export default Blog;
