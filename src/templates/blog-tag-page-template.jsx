import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Blogpost, { postType } from '../components/blog/Blogpost';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query($tag: String!) {
    posts: allStrapiHartenfellerDevBlogs(
      sort: { fields: PublishDate, order: DESC }
      filter: { tags: { elemMatch: { Tag: { eq: $tag } } } }
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

const BlogTagTemplate = ({ data, pageContext }) => {
  const blogposts = data.posts.nodes;

  const { tag } = pageContext;

  return (
    <Layout>
      <SEO
        title={`Blog | ${tag}`}
        description={`Blogposts tagged with: ${tag}`}
      />
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-3xl leading-9 brown-header-text font-extrabold sm:text-4xl sm:leading-10">
              <span>
                Blogposts tagged with:{' '}
                <span className="text-red-700">{tag}</span>
              </span>
            </h1>
          </div>
          <div className="mx-6 lg:m-auto lg:w-2/3 xl:w-1/2 mt-8">
            {blogposts.map((post) => (
              <Blogpost post={post} key={post.Slug} />
            ))}
          </div>
          <div className="text-center mt-8 text-xl text">
            <Link
              to="/"
              className="text-purple-600 hover:text-purple-800 hover:underline"
            >
              Homepage
            </Link>
            <span className="mx-4 text-gray-700">•</span>
            <Link
              to="/blog/"
              className="text-purple-600 hover:text-purple-800 hover:underline"
            >
              Other Blogposts
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

BlogTagTemplate.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(postType.post),
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogTagTemplate;
