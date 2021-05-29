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
import Gist from '../components/blog/Gist';
import LinkedH2 from '../components/blog/LinkedH2';
import ScrollTracker from '../components/blog/ScrollTracker';
import TagsDisplay from '../components/blog/TagsDisplay';
import YouTubeEmbed from '../components/blog/YouTubeEmbed';
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
  const { frontmatter, body } = post;
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
  } = frontmatter;

  const components = {
    code: CodeHandler,
    // eslint-disable-next-line react/prop-types
    pre: ({ children }) => <>{children}</>, // handled by codeh
    h2: LinkedH2,
    Gist,
    // eslint-disable-next-line react/prop-types
    BlogImg: ({ filename, alt }) => (
      <BlogImageGetter
        filename={filename}
        classes="object-contain my-12 mx-auto shadow-md xxl:w-3/4 cursor-zoom-in"
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
  };

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
        <div className="bg-white px-8 pb-8">
          <header>
            <h1 className="text-4xl leading-12 brown-header-text font-extrabold pt-8">
              {title}
            </h1>
            <div className="mt-6 text-sm leading-5 font-medium text-gray-700">
              <TagsDisplay tags={tags} />
              <time className="float-right" dateTime={date}>
                {formattedDate}
              </time>
            </div>
            <div className="mt-6 mb-16 text-lg text-gray-700 font-light leading-8 font-raleway">
              {description}
            </div>
          </header>
          <main className="blog-body mt-6 text-lg leading-8 text-gray-900 font-raleway">
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
