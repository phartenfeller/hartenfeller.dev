import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Blogpost, { postType } from '../components/blog/Blogpost';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query ($tag: String!) {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag }, published: { ne: false } } }
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          titleImageAlt
          titleImageSource {
            text
            href
          }
          tags
        }
      }
    }
  }
`;

const BlogTagTemplate = ({ data, pageContext }) => {
  const blogposts = data.posts.nodes;

  const { tag } = pageContext;

  return (
    <Layout header>
      <SEO
        title={`Blog | ${tag}`}
        description={`Blogposts tagged with: ${tag}`}
      />
      <div className="relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h1 className="brown-header-text text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10">
              <span>
                Blogposts tagged with:{' '}
                <span className="text-red-700">{tag}</span>
              </span>
            </h1>
          </div>
          <div className="mx-6 mt-8 lg:m-auto lg:grid lg:w-2/3 lg:grid-cols-2 lg:gap-6">
            {blogposts.map(({ frontmatter }) => (
              <Blogpost postData={frontmatter} key={frontmatter.slug} />
            ))}
          </div>
          <div className="text mt-8 text-center text-xl">
            <Link to="/" className="text-zinc-600 hover:underline">
              Homepage
            </Link>
            <span className="mx-4 text-zinc-900">•</span>
            <Link to="/blog/" className="text-zinc-600 hover:underline">
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
