import { MDXProvider } from '@mdx-js/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import { ClockIcon } from '@heroicons/react/outline';
import AuthorShowcase from '../components/blog/AuthorShowcase';
import components from '../components/blog/blogComponents';
import BlogImagePopup from '../components/blog/BlogImagePopup';
import Comments from '../components/blog/Comments';
import OtherPosts from '../components/blog/OtherPosts';
import ScrollTracker from '../components/blog/ScrollTracker';
import TagsDisplay from '../components/blog/TagsDisplay';
import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';
import SEO from '../components/seo';
import '../styles/blog.css';

export const query = graphql`
  query ($id: String!) {
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

  return (
    <Layout header toc={tableOfContents}>
      <SEO title={title} description={description} meta={meta} />
      <ScrollTracker />
      <article className="flex max-w-[100vw] flex-col overflow-hidden">
        <div className="m-auto bg-white shadow-sm ">
          <GatsbyImage
            image={titleImage.childImageSharp.gatsbyImageData}
            className="lg:max-w-[calc(75ch + 300px)] h-100 object-cover"
            alt={titleImageAlt}
          />
          <div className="flex space-x-8 px-4 pb-8 md:px-8">
            <div className="flex-grow lg:max-w-[75ch]">
              <header>
                <h1 className="leading-12 brown-header-text pt-8 text-2xl font-extrabold md:text-3xl lg:text-4xl">
                  {title}
                </h1>
                <div className="mt-6 max-w-[90vw] text-sm font-medium leading-5 text-zinc-700">
                  <TagsDisplay tags={tags} />
                  <time className="float-right" dateTime={date}>
                    {formattedDate}
                  </time>
                </div>
                {lastUpdate ? (
                  <div className="mb-5">
                    <a
                      href={gitHubUrl}
                      className="float-right rounded text-sm font-medium leading-5 text-zinc-700 underline hover:text-zinc-400 focus:outline-none focus:ring focus:ring-red-300"
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

                    <Comments ghCommentsIssueId={ghCommentsIssueId} />
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
            <aside className="my-5 hidden grow-0 border-l border-zinc-300 py-5 pl-8 lg:block lg:w-[280px]">
              <div className="mb-12 flex items-center text-stone-700">
                <ClockIcon className="mr-1 h-4 w-4 text-stone-400" />
                Time to read:{' '}
                <span className="mx-1 font-bold">{timeToRead}</span> min
              </div>
              <AuthorShowcase />
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
  }).isRequired,
};

export default BlogPageTemplate;
