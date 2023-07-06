import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Blogpost, { postType } from '../components/blog/Blogpost';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      nodes {
        frontmatter {
          title
          date
          formattedDate: date(formatString: "MMMM DD, YYYY")
          year: date(formatString: "YYYY")
          description
          slug
          titleImage {
            sharp: childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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
  const groupedByYear = blogposts.reduce((accumulator, currentValue) => {
    const year = parseInt(currentValue.frontmatter.year, 10);
    accumulator[year] = accumulator[year] || [];
    accumulator[year].push(currentValue);
    return accumulator;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <Layout header>
      <SEO title="Blog" description="Blog posts from Philipp Hartenfeller" />
      <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h1 className="brown-header-text text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10">
              Philipp Hartenfeller&apos;s Blog
            </h1>
          </div>
          {years.map((year) => (
            <div key={year}>
              <h2 className="mb-8 mt-16 text-center text-3xl font-light text-zinc-800">
                {year}
              </h2>
              <div className="mx-6 lg:m-auto lg:grid lg:w-2/3 lg:grid-cols-2 lg:gap-6">
                {groupedByYear[year].map(({ frontmatter }) => (
                  <Blogpost postData={frontmatter} key={frontmatter.slug} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text my-16 text-center text-xl">
          <Link to="/" className="text-zinc-600  hover:underline">
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
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: postType.postData,
        }).isRequired
      ),
    }).isRequired,
  }).isRequired,
};

export default Blog;
