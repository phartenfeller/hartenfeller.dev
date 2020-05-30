import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Blogpost, { postType } from '../components/blob/Blogpost';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  {
    posts: allStrapiHartenfellerDevBlogs(
      sort: { fields: PublishDate, order: DESC }
    ) {
      nodes {
        Title
        TitleImage {
          sharp: childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Slug
        PublishDateFormatted: PublishDate(formatString: "MMMM DD, YYYY")
        PublishDate
        Description
        PhotoAlt
        tags {
          Tag
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
              Blog | Philipp Hartenfeller
            </h1>
          </div>
          <div className="mx-6 lg:m-auto lg:w-2/3 xl:w-1/2 mt-8">
            {blogposts.map(post => (
              <Blogpost post={post} key={post.Slug} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(postType.post)
    }).isRequired
  }).isRequired
};

export default Blog;
