import { MDXProvider } from '@mdx-js/react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import BlogGifGetter from '../components/blog/BlogGifGetter';
import BlogImageGetter from '../components/blog/BlogImageGetter';
import BlogImagePopup from '../components/blog/BlogImagePopup';
import { postType } from '../components/blog/Blogpost';
import CodeHandler from '../components/blog/CodeHandler';
import Comments from '../components/blog/Comments';
import CustomH3 from '../components/blog/CustomH3';
import Gist from '../components/blog/Gist';
import InfoBox from '../components/blog/InfoBox';
import LinkedH2 from '../components/blog/LinkedH2';
import OtherPosts from '../components/blog/OtherPosts';
import ScrollTracker from '../components/blog/ScrollTracker';
import TagsDisplay from '../components/blog/TagsDisplay';
import YouTubeEmbed from '../components/blog/YouTubeEmbed';
import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';
import SEO from '../components/seo';
import '../styles/blog.css';
import classNames from '../util/classNames';

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
            gatsbyImageData(layout: FULL_WIDTH)
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
  const { frontmatter, body, fileAbsolutePath, id } = post;
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

  const components = {
    code: CodeHandler,
    // eslint-disable-next-line react/prop-types
    pre: ({ children }) => <>{children}</>, // handled by codeh
    h2: LinkedH2,
    h3: CustomH3,
    Gist,
    // eslint-disable-next-line react/prop-types
    BlogImg: ({ filename, alt, noShadow = false }) => (
      <BlogImageGetter
        filename={filename}
        classes={classNames(
          'object-contain my-12 mx-auto xxl:w-3/4 cursor-zoom-in',
          noShadow ? null : 'shadow-md'
        )}
        alt={alt}
      />
    ),
    // eslint-disable-next-line react/prop-types
    BlogGif: ({ filename, alt }) => (
      <BlogGifGetter
        filename={filename}
        alt={alt}
        classes="object-contain my-12 mx-auto shadow-md xxl:w-3/4"
      />
    ),
    YouTubeEmbed,
    InfoBox,
  };

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
    <Layout>
      <SEO title={title} description={description} meta={meta} />
      <ScrollTracker />
      <article className="md:w-5/6 xl:w-4/6 hd:w-1/2 m-auto shadow-sm">
        <GatsbyImage
          image={titleImage.childImageSharp.gatsbyImageData}
          className="h-100 object-cover"
          alt={titleImageAlt}
        />
        <div className="bg-white px-4 md:px-8 pb-8">
          <header>
            <h1 className="text-2xl md:text-3xl lg:text-4xl leading-12 brown-header-text font-extrabold pt-8">
              {title}
            </h1>
            <div className="mt-6 text-sm leading-5 font-medium text-gray-700">
              <TagsDisplay tags={tags} />
              <time className="float-right" dateTime={date}>
                {formattedDate}
              </time>
            </div>
            {lastUpdate ? (
              <div className="mb-5">
                <a
                  href={gitHubUrl}
                  className="float-right text-sm leading-5 font-medium text-gray-700 underline hover:text-gray-400 focus:outline-none rounded focus:ring focus:ring-red-300"
                >
                  <span>Last updated: </span>
                  <time dateTime={lastUpdate}>{lastUpdateFormatted}</time>
                </a>
              </div>
            ) : null}
            <div className="mt-12 mb-16 text-base md:text-lg lg:text-xl text-warmGray-600 leading-8 font-raleway">
              {description}
            </div>
          </header>
          <main className="blog-body mt-6 leading-8 font-raleway font-semibold text-warmGray-600 text-base md:text-lg lg:text-xl">
            <MDXProvider components={components}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </main>
          {titleImageSource.text && titleImageSource.href ? (
            <div>
              <a
                href={titleImageSource.href}
                className="text-gray-700 font-light mt-8 hover:text-gray-800 hover:underline"
              >
                {titleImageSource.text}
              </a>
            </div>
          ) : null}

          <div className="my-8">
            <OtherPosts postId={id} />
          </div>

          <div className="my-12">
            <div className="pt-4 pb-16 text-center">
              <LinkButton
                type="twitter"
                link={`https://twitter.com/intent/tweet?text=https://hartenfeller.dev/blog/${slug}`}
                text="Tweet about this"
                newWindow
              />
              <LinkButton type="rss" link="/rss.xml" newWindow />
            </div>
            <h2 className="mb-8 text-2xl brown-header-text font-semibold">
              Comments
            </h2>
            <Comments ghCommentsIssueId={ghCommentsIssueId} />
          </div>
          <footer className="text-center mt-8 text-xl text">
            <Link to="/" className="text-blueGray-600 hover:underline">
              Homepage
            </Link>
            <span className="mx-4 text-blueGray-900">•</span>
            <Link to="/blog/" className="text-blueGray-600 hover:underline">
              All Blogposts
            </Link>
          </footer>
        </div>
      </article>
      <BlogImagePopup />
    </Layout>
  );
};

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({ post: postType.isRequired }).isRequired,
};

export default BlogPageTemplate;
