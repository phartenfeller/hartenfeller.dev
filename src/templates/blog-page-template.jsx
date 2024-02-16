import { ArrowUpIcon, ClockIcon, RssIcon } from '@heroicons/react/outline';
import { MDXProvider } from '@mdx-js/react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import LinkButton from '../components/LinkButton';
import AuthorShowcase from '../components/blog/AuthorShowcase';
import BlogImagePopup from '../components/blog/BlogImagePopup';
import OtherPosts from '../components/blog/OtherPosts';
import ScrollTracker from '../components/blog/ScrollTracker';
import TagsDisplay from '../components/blog/TagsDisplay';
import BlogAPEXSidebar from '../components/blog/blogAPEXSidebar';
import getComponents from '../components/blog/blogComponents';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/blog.css';
import lazyLoad from '../util/lazy';

const Comments = lazyLoad(() => import('../components/blog/Comments'), 1);

export const query = graphql`
  query ($id: String!, $relativeDirectory: String!) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        formattedDate: date(formatString: "MMMM DD, YYYY")
        lastUpdate
        lastUpdateFormatted: lastUpdate(formatString: "MMMM DD, YYYY")
        description
        slug
        titleImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1140
              formats: [AUTO, WEBP, AVIF]
              breakpoints: [500, 900, 1140]
            )
          }
        }
        fixedTitleImage: titleImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        titleImageAlt
        titleImageSource {
          text
          href
        }
        tags
        ghCommentsIssueId
      }
      body
      id
      fileAbsolutePath
      timeToRead
      tableOfContents
    }
    blogImages: allFile(
      filter: {
        extension: { regex: "/(jpg|jpeg|png)/" }
        relativeDirectory: { eq: $relativeDirectory }
        sourceInstanceName: { eq: "blogposts" }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 760
            formats: [AUTO, WEBP, AVIF]
            breakpoints: [500, 630, 760]
          )
          original {
            height
            width
            src
          }
        }
      }
    }
  }
`;

const getMeta = ({ imgSrc, imgAlt, publishISO, tags, imgHeight, imgWidth }) => {
  const meta = [
    {
      name: `twitter:image`,
      content: `https://hartenfeller.dev${imgSrc}`,
    },
    {
      name: `twitter:image:alt`,
      content: imgAlt,
    },
    {
      name: `og:image`,
      content: `https://hartenfeller.dev${imgSrc}`,
    },
    {
      name: `og:image:width`,
      content: imgWidth,
    },
    {
      name: `og:image:height`,
      content: imgHeight,
    },
    {
      name: `og:image:alt`,
      content: imgAlt,
    },
    {
      name: `article:published_time`,
      content: publishISO,
    },
    {
      name: `article:author`,
      content: 'Philipp Hartenfeller',
    },
    {
      name: `monetization`,
      content: `$ilp.uphold.com/dhUZx4rikrgf`,
    },
  ];

  tags.forEach((tag) => {
    meta.push({
      name: `article:tag`,
      content: tag,
    });
  });

  return meta;
};

const BlogPageTemplate = ({ data }) => {
  const images = data.blogImages.nodes;
  const { post } = data;
  const {
    frontmatter,
    body,
    fileAbsolutePath,
    id,
    timeToRead,
    tableOfContents,
  } = post;
  const {
    title,
    date,
    formattedDate,
    description,
    slug,
    titleImage,
    titleImageAlt,
    titleImageSource,
    tags,
    ghCommentsIssueId,
    fixedTitleImage,
    lastUpdate,
    lastUpdateFormatted,
  } = frontmatter;

  const gitHubUrl = `https://github.com/phartenfeller/hartenfeller.dev/commits/master${fileAbsolutePath.substr(
    fileAbsolutePath.indexOf('/content')
  )}`;

  const meta = getMeta({
    imgSrc: fixedTitleImage.childImageSharp.gatsbyImageData.images.fallback.src,
    imgAlt: titleImageAlt,
    publishISO: date,
    tags,
    imgWidth: fixedTitleImage.childImageSharp.gatsbyImageData.width,
    imgHeight: fixedTitleImage.childImageSharp.gatsbyImageData.height,
  });

  const components = getComponents(images);

  return (
    <Layout header toc={tableOfContents}>
      <SEO title={title} description={description} meta={meta} />
      <ScrollTracker />
      <article className="flex max-w-[100vw] flex-col overflow-hidden scroll-smooth">
        <div className="m-auto bg-white shadow-sm ">
          <GatsbyImage
            image={titleImage.childImageSharp.gatsbyImageData}
            className="lg:max-w-[calc(75ch + 300px)] h-100 object-cover"
            alt={titleImageAlt}
          />
          <div className="flex space-x-8 px-4 pb-8 md:px-8">
            <div className="flex-grow lg:max-w-[75ch]">
              <header>
                <h1
                  id={slug}
                  className="leading-12 brown-header-text scroll-mt-32 pt-8 text-2xl font-extrabold md:text-3xl lg:text-4xl"
                >
                  {title}
                </h1>
                <div className="mt-6 flex  justify-between text-sm font-medium leading-5 text-zinc-700">
                  <TagsDisplay tags={tags} />
                  <time dateTime={date}>{formattedDate}</time>
                </div>
                {lastUpdate ? (
                  <div className="mb-5">
                    <a
                      href={gitHubUrl}
                      className="float-right rounded text-sm font-light leading-5 text-zinc-600 underline hover:text-zinc-400 focus:outline-none focus:ring focus:ring-red-300"
                    >
                      <span>Last updated: </span>
                      <time dateTime={lastUpdate}>{lastUpdateFormatted}</time>
                    </a>
                  </div>
                ) : null}
                <div className="font-raleway mb-16 mt-12 text-base leading-8 text-stone-600 md:text-lg lg:text-xl">
                  {description}
                </div>
              </header>
              <main className="blog-body font-raleway mt-6 max-w-[85vw] text-base font-semibold leading-8 text-stone-600 md:text-lg  lg:text-xl">
                <MDXProvider components={components}>
                  <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
              </main>
              {titleImageSource?.text && titleImageSource.href ? (
                <div>
                  <a
                    href={titleImageSource.href}
                    className="mt-8 font-light text-zinc-700 hover:text-zinc-800 hover:underline"
                  >
                    {titleImageSource.text}
                  </a>
                </div>
              ) : null}

              <div className="my-8 max-w-[90vw]">
                <OtherPosts postId={id} />
              </div>

              <div className="my-12">
                <div className="pb-16 pt-4 text-center">
                  <LinkButton
                    type="twitter"
                    link={`https://twitter.com/intent/tweet?text=https://hartenfeller.dev/blog/${slug}`}
                    text="Tweet about this"
                    newWindow
                  />
                  <LinkButton type="rss" link="/rss.xml" newWindow />
                </div>
                {ghCommentsIssueId && (
                  <>
                    <h2 className="brown-header-text mb-8 text-2xl font-semibold">
                      Comments
                    </h2>

                    <Suspense fallback={<div>Loading...</div>}>
                      <Comments ghCommentsIssueId={ghCommentsIssueId} />
                    </Suspense>
                  </>
                )}
              </div>
              <footer className="text mt-8 text-center text-xl">
                <Link to="/" className="text-slate-600 hover:underline">
                  Homepage
                </Link>
                <span className="mx-4 text-slate-900">•</span>
                <Link to="/blog/" className="text-slate-600 hover:underline">
                  All Blogposts
                </Link>
              </footer>
            </div>
            <aside className="my-5  hidden grow-0 justify-between border-l border-zinc-300 py-5 pl-8 lg:flex lg:w-[280px] lg:flex-col">
              <div>
                <div className="mb-12 flex items-center text-stone-700">
                  <ClockIcon className="mr-1 h-4 w-4 text-stone-400" />
                  Time to read:{' '}
                  <span className="mx-1 font-bold">{timeToRead}</span> min
                </div>
                <AuthorShowcase />
              </div>

              {tags.includes('APEX') ? <BlogAPEXSidebar /> : null}

              <div className="blog-sidebar">
                <a href="/rss.xml" className="mb-4 flex items-center">
                  <RssIcon className=" mr-3 h-5 w-5 text-red-300" />
                  RSS Feed
                </a>
                <a href={`#${slug}`} className="flex items-center">
                  <ArrowUpIcon className="mr-3 h-5 w-5 text-red-300" />
                  Back to top
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <BlogImagePopup />
    </Layout>
  );
};

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        formattedDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        titleImage: PropTypes.object.isRequired,
        titleImageAlt: PropTypes.string.isRequired,
        titleImageSource: PropTypes.shape({
          text: PropTypes.string,
          href: PropTypes.string,
        }),
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        ghCommentsIssueId: PropTypes.number,
        // eslint-disable-next-line react/forbid-prop-types
        fixedTitleImage: PropTypes.object.isRequired,
        lastUpdate: PropTypes.string,
        lastUpdateFormatted: PropTypes.string,
      }).isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      fileAbsolutePath: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
      tableOfContents: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        items: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
    }).isRequired,
    blogImages: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          childImageSharp: PropTypes.shape({
            // eslint-disable-next-line react/forbid-prop-types
            gatsbyImageData: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPageTemplate;
