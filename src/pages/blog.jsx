import { FilterIcon } from '@heroicons/react/solid';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BlogPostList from '../components/blog/BlogPostList';
import { postType } from '../components/blog/Blogpost';
import FilterSlideover from '../components/blog/FilterSlideover';
import TagOverview from '../components/blog/TagOverview';
import { tagInfo } from '../components/blog/_proptypes';
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
              gatsbyImageData(
                layout: CONSTRAINED
                width: 250
                formats: [AUTO, WEBP, AVIF]
                breakpoints: [180, 250]
              )
            }
          }
          titleImageAlt
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

const Blog = ({ data }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const blogposts = data.posts.nodes;
  const groupedByYear = blogposts.reduce((accumulator, currentValue) => {
    const year = parseInt(currentValue.frontmatter.year, 10);
    accumulator[year] = accumulator[year] || [];
    accumulator[year].push(currentValue);
    return accumulator;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <Layout header stickyHeader>
      <SEO title="Blog" description="Blog posts from Philipp Hartenfeller" />
      <div className="flex">
        <div className="m-4 hidden w-[26ch] lg:fixed lg:flex lg:flex-col">
          <TagOverview tags={data.tagInfo.nodes} years={data.yearInfo.nodes} />
        </div>
        <div className="lg:pl-[26ch]">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center xl:mb-16">
              <h1 className="brown-header-text mt-6 text-xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:mt-10 md:text-3xl lg:mt-16">
                Philipp Hartenfeller&apos;s Blog
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

            {years.map((year, i) => (
              <BlogPostList
                posts={groupedByYear[year]}
                header={year}
                headerCount={
                  i < 2
                    ? null
                    : data.yearInfo.nodes.find((y) => y.name === year)
                        .totalCount
                }
                closed={i >= 2}
              />
            ))}
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

Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: postType,
        }).isRequired
      ),
    }).isRequired,
    tagInfo: PropTypes.shape({
      nodes: PropTypes.arrayOf(tagInfo.isRequired),
    }).isRequired,
    yearInfo: PropTypes.shape({
      nodes: PropTypes.arrayOf(tagInfo.isRequired),
    }).isRequired,
  }).isRequired,
};

export default Blog;
