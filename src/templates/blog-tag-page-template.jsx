import { FilterIcon } from '@heroicons/react/solid';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { tagInfo } from '../components/blog/_proptypes';
import { postType } from '../components/blog/Blogpost';
import BlogPostList from '../components/blog/BlogPostList';
import FilterSlideover from '../components/blog/FilterSlideover';
import TagOverview from '../components/blog/TagOverview';
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
              gatsbyImageData(
                layout: CONSTRAINED
                width: 250
                formats: [AUTO, WEBP, AVIF]
                breakpoints: [180, 250]
              )
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
    tagInfo: allBlogTag(sort: { fields: totalCount, order: DESC }) {
      nodes {
        name
        totalCount
      }
    }
    yearInfo: allBlogYear(sort: { fields: name, order: DESC }) {
      nodes {
        name
        totalCount
      }
    }
  }
`;

const BlogTagTemplate = ({ data, pageContext }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const blogposts = data.posts.nodes;

  const { tag } = pageContext;

  return (
    <Layout header>
      <SEO
        title={`Blog | ${tag}`}
        description={`Blogposts tagged with: ${tag}`}
      />
      <div className="flex">
        <div className="m-4 hidden w-[26ch] lg:fixed lg:flex lg:flex-col">
          <TagOverview tags={data.tagInfo.nodes} years={data.yearInfo.nodes} />
        </div>
        <div className="lg:pl-[26ch]">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center xl:mb-16">
              <h1 className="brown-header-text mt-6 text-xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:mt-10 md:text-3xl lg:mt-16">
                <span>
                  Blogposts tagged with{' '}
                  <span className="text-red-500">{tag}</span>
                </span>
              </h1>
            </div>

            <button
              type="button"
              className="mx-auto flex w-[20ch] items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <FilterIcon
                className="-ml-0.5 h-5 w-5 text-zinc-400"
                aria-hidden="true"
              />
              Filters
            </button>

            <BlogPostList posts={blogposts} />
          </div>

          <button
            type="button"
            className="mx-auto mt-12 flex w-[20ch] items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FilterIcon
              className="-ml-0.5 h-5 w-5 text-zinc-400"
              aria-hidden="true"
            />
            Filters
          </button>
          <div className="text my-16 text-center text-xl">
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
      <FilterSlideover
        tags={data.tagInfo.nodes}
        years={data.yearInfo.nodes}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Layout>
  );
};

BlogTagTemplate.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: postType,
        })
      ),
    }).isRequired,
    tagInfo: PropTypes.shape({
      nodes: PropTypes.arrayOf(tagInfo.isRequired),
    }).isRequired,
    yearInfo: PropTypes.shape({
      nodes: PropTypes.arrayOf(tagInfo.isRequired),
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogTagTemplate;
