import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BlogGifGetter from '../components/blog/BlogGifGetter';
import BlogImageGetter from '../components/blog/BlogImageGetter';
import { postType } from '../components/blog/Blogpost';
import Gist from '../components/blog/Gist';
import ScrollTracker from '../components/blog/ScrollTracker';
import TagsDisplay from '../components/blog/TagsDisplay';
import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';
import SEO from '../components/seo';
import '../styles/blog.css';

export const query = graphql`
  query($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        formattedDate: date(formatString: "MMMM DD, YYYY")
        description
        slug
        titleImage {
          sharp: childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        titleImageAlt
        titleImageSource {
          text
          href
        }
        tags
      }
      rawMarkdownBody
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
  const { frontmatter, rawMarkdownBody } = post;
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
  } = frontmatter;

  const renderers = {
    // eslint-disable-next-line react/prop-types
    code: ({ language, value }) => {
      switch (language) {
        case 'gist':
          return (
            <div className="my-6">
              <Gist id={value} />
            </div>
          );
        case 'html-embed':
          return (
            // eslint-disable-next-line react/no-danger
            <div className="my-6" dangerouslySetInnerHTML={{ __html: value }} />
          );
        case 'img-name': {
          const { filename, alt } = JSON.parse(value);

          return (
            <BlogImageGetter
              filename={filename}
              classes="object-contain my-6 shadow-md"
              alt={alt}
            />
          );
        }
        case 'gif-name': {
          const { filename, alt } = JSON.parse(value);
          return (
            <BlogGifGetter
              filename={filename}
              alt={alt}
              classes="object-contain my-6 shadow-md"
            />
          );
        }
        default:
          return (
            <SyntaxHighlighter language={language} style={coy}>
              {value}
            </SyntaxHighlighter>
            // <code>
            //   <pre className="text-sm xl:text-lg">{value}</pre>
            // </code>
          );
      }
    },
  };

  const meta = getMeta({
    imgSrc: titleImage.sharp.fluid.src,
    imgAlt: titleImageAlt,
    publishISO: post.PublishDate,
    tags,
    imgWidth: titleImage.sharp.fluid.presentationWidth,
    imgHeight: titleImage.sharp.fluid.presentationHeight,
  });

  return (
    <Layout>
      <SEO title={title} description={description} meta={meta} />
      <ScrollTracker />
      <article className="md:w-5/6 xl:w-4/6 hd:w-1/2 m-auto shadow-sm">
        <Image
          className="h-100 object-cover"
          fluid={titleImage.sharp.fluid}
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
            <div className="mt-6 text-lg text-gray-700 font-light leading-8 font-raleway">
              {description}
            </div>
          </header>
          <main>
            <ReactMarkdown
              source={rawMarkdownBody}
              escapeHtml={false}
              renderers={renderers}
              className="blog-body mt-6 text-lg leading-8 text-gray-900 font-raleway"
            />
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
          <footer className="text-center mt-8 text-xl text">
            <div className="pb-4">
              <LinkButton
                type="twitter"
                link={`https://twitter.com/intent/tweet?text=https://hartenfeller.dev/blog/${slug}`}
                text="Tweet"
                newWindow
              />
            </div>
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
          </footer>
        </div>
      </article>
    </Layout>
  );
};

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({ post: postType.isRequired }).isRequired,
};

export default BlogPageTemplate;
