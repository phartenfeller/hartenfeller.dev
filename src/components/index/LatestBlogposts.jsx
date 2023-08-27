import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import TagsDisplay from '../blog/TagsDisplay';
import SectionHeader from '../SectionHeader';

const PostPreview = ({ frontmatter }) => (
  <li className="mb-3">
    <Link
      className="group focus:outline-none "
      to={`/blog/${frontmatter.slug}`}
    >
      <h4 className="mt-1 rounded p-1 text-base font-semibold text-gray-800 transition-colors duration-150 ease-in-out group-hover:bg-red-200/40 group-hover:text-title-brown group-focus:ring-2 group-focus:ring-red-300 md:text-lg">
        {frontmatter.title}
      </h4>
      <div className="mt-1 px-1 text-xs text-gray-500 md:text-base ">
        <p className="line-clamp-1">{frontmatter.description}</p>
      </div>
    </Link>
    <div className="mt-1 flex items-center px-1  text-xs text-gray-500 md:text-sm">
      <time dateTime={frontmatter.datetime}>{frontmatter.dateReadable}</time>
      <span className="mx-2 hidden text-xl text-gray-400 md:block">•</span>
      <span className="hidden md:block">
        <TagsDisplay tags={frontmatter.tags} icon={false} />
      </span>
    </div>
  </li>
);

PostPreview.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    dateReadable: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const MoreLink = ({ target, text }) => (
  <div className="mb-3 mt-8 text-center">
    <Link
      to={target}
      className="transform select-none rounded-md border border-zinc-200 bg-white px-12 py-2 text-lg font-semibold text-zinc-700 duration-150 ease-in-out hover:scale-105 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-300 motion-reduce:transition-none motion-reduce:translate-z-0"
    >
      {text}
    </Link>
  </div>
);

MoreLink.propTypes = {
  target: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const tabs = ['Latest', 'Oracle APEX', 'Oracle', 'WebDev'];

const LatestBlogposts = () => {
  const data = useStaticQuery(graphql`
    {
      latest: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 6
      ) {
        nodes {
          frontmatter {
            title
            date
            dateTime: date(formatString: "YYYY-MM-DD")
            dateReadable: date(formatString: "MMM DD, YY")
            description
            slug
            tags
          }
        }
      }
      apex: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
        filter: {
          frontmatter: { tags: { in: "APEX" }, published: { ne: false } }
        }
      ) {
        nodes {
          frontmatter {
            title
            date
            dateTime: date(formatString: "YYYY-MM-DD")
            dateReadable: date(formatString: "MMM DD, YY")
            description
            slug
            tags
          }
        }
      }
      oracle: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
        filter: {
          frontmatter: { tags: { in: "Oracle" }, published: { ne: false } }
        }
      ) {
        nodes {
          frontmatter {
            title
            date
            dateTime: date(formatString: "YYYY-MM-DD")
            dateReadable: date(formatString: "MMM DD, YY")
            description
            slug
            tags
          }
        }
      }
      webDev: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
        filter: {
          frontmatter: {
            tags: { in: "Web-Development" }
            published: { ne: false }
          }
        }
      ) {
        nodes {
          frontmatter {
            title
            date
            dateTime: date(formatString: "YYYY-MM-DD")
            dateReadable: date(formatString: "MMM DD, YY")
            description
            slug
            tags
          }
        }
      }
    }
  `);

  const latestPosts = data.latest.nodes;
  const apexPosts = data.apex.nodes;
  const oraclePosts = data.oracle.nodes;
  const webDevPosts = data.webDev.nodes;

  return (
    <div className="mx-auto my-12 lg:my-32 xxl:w-2/3">
      <Link
        to="/blog"
        className="grid hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <SectionHeader section="My Blog" />
      </Link>

      <div className="mx-auto max-w-6xl rounded-lg bg-white p-3 shadow-lg shadow-red-200/30 md:p-6 xl:p-9">
        <Tab.Group
          as="div"
          vertical
          className="flex flex-col md:flex-row md:space-x-16"
        >
          <div className="w-[12ch] flex-none">
            <h3 className="mb-5 hidden text-2xl font-semibold text-gray-900 md:block">
              Topics
            </h3>

            <Tab.List className="">
              <div className="flex w-full flex-row md:flex-col">
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      `border-b-2 px-4 py-1 text-left transition-colors duration-150 ease-in-out hover:bg-gray-100 md:border-b-0 md:border-l-4 md:px-2 md:py-4 ${
                        selected
                          ? `border-red-500 font-bold`
                          : 'border-transparent'
                      }`
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </div>
            </Tab.List>
          </div>
          <div className="mt-6 flex-grow md:mt-0">
            <h3 className="mb-5 text-2xl font-semibold text-gray-900">Posts</h3>

            <ul className="mt-4">
              <Tab.Panels>
                <Tab.Panel>
                  {latestPosts.map(({ frontmatter }) => (
                    <PostPreview
                      key={frontmatter.slug}
                      frontmatter={frontmatter}
                    />
                  ))}
                  <MoreLink target="/blog" text="More Posts" />
                </Tab.Panel>
                <Tab.Panel>
                  {apexPosts.map(({ frontmatter }) => (
                    <PostPreview
                      key={frontmatter.slug}
                      frontmatter={frontmatter}
                    />
                  ))}
                  <MoreLink target="/blog/tags/apex" text="More APEX Posts" />
                </Tab.Panel>
                <Tab.Panel>
                  {oraclePosts.map(({ frontmatter }) => (
                    <PostPreview
                      key={frontmatter.slug}
                      frontmatter={frontmatter}
                    />
                  ))}
                  <MoreLink
                    target="/blog/tags/oracle"
                    text="More Oracle Posts"
                  />
                </Tab.Panel>
                <Tab.Panel>
                  {webDevPosts.map(({ frontmatter }) => (
                    <PostPreview
                      key={frontmatter.slug}
                      frontmatter={frontmatter}
                    />
                  ))}
                  <MoreLink
                    target="/blog/tags/web-development"
                    text="More WebDev Posts"
                  />
                </Tab.Panel>
              </Tab.Panels>
            </ul>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

LatestBlogposts.propTypes = {};

export default LatestBlogposts;
