import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import GitalkComponent from 'gitalk/dist/gitalk-component';
import 'gitalk/dist/gitalk.css';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
    post: strapiHartenfellerDevBlogs(id: { eq: $id }) {
      Title
      TitleImage {
        sharp: childImageSharp {
          fluid(maxWidth: 1400) {
            aspectRatio
            base64
            sizes
            src
            srcSet
            presentationWidth
            presentationHeight
          }
        }
      }
      Slug
      PublishDateFormatted: PublishDate(formatString: "MMMM DD, YYYY")
      PublishDate
      Description
      PhotoAlt
      PhotoSource
      tags {
        Tag
      }
      Body
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

  tags.forEach(({ Tag }) => {
    meta.push({
      name: `article:tag`,
      content: Tag,
    });
  });

  return meta;
};
const BlogPageTemplate = ({ data }) => {
  const { post } = data;

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
        case 'img-name':
          // eslint-disable-next-line no-case-declarations
          const { filename, alt } = JSON.parse(value);
          return (
            <BlogImageGetter
              filename={filename}
              classes="object-contain my-6"
              alt={alt}
            />
          );
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
    imgSrc: post.TitleImage.sharp.fluid.src,
    imgAlt: post.PhotoAlt,
    publishISO: post.PublishDate,
    tags: post.tags,
    imgWidth: post.TitleImage.sharp.fluid.presentationWidth,
    imgHeight: post.TitleImage.sharp.fluid.presentationHeight,
  });

  return (
    <Layout>
      <SEO title={post.Title} description={post.Description} meta={meta} />
      <ScrollTracker />
      <article className="md:w-5/6 xl:w-4/6 hd:w-1/2 m-auto shadow-sm">
        <Image
          className="h-100 object-cover"
          fluid={post.TitleImage.sharp.fluid}
          alt={post.PhotoAlt}
        />
        <div className="bg-white px-8 pb-8">
          <header>
            <h1 className="text-4xl leading-12 brown-header-text font-extrabold pt-8">
              {post.Title}
            </h1>
            <div className="mt-6 text-sm leading-5 font-medium text-gray-700">
              <TagsDisplay tags={post.tags} />
              <time className="float-right" dateTime={post.PublishDate}>
                {post.PublishDateFormatted}
              </time>
            </div>
            <div className="mt-6 text-lg text-gray-700 font-light leading-8 font-raleway">
              {post.Description}
            </div>
          </header>
          <main>
            <ReactMarkdown
              source={post.Body}
              escapeHtml={false}
              renderers={renderers}
              className="blog-body mt-6 text-lg leading-8 text-gray-900 font-raleway"
            />
          </main>
          <div>
            <ReactMarkdown
              source={post.PhotoSource}
              className="text-gray-700 font-light mt-8 hover:text-gray-800 hover:underline"
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-merriweather text-gray-700 mb-2">
              Comments:
            </h3>
            <GitalkComponent
              options={{
                clientID: process.env.GH_CLIENT_ID,
                clientSecret: process.env.GH_CLIENT_SECRET,
                repo: 'hartenfeller.dev-comments',
                owner: 'phartenfeller',
                admin: ['phartenfeller'],
                id: post.Slug,
                title: post.Title,
              }}
            />
          </div>
          <footer className="text-center mt-8 text-xl text">
            <div className="pb-4">
              <LinkButton
                type="twitter"
                link={`https://twitter.com/intent/tweet?text=https://hartenfeller.dev/blog/${post.Slug}`}
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
  data: PropTypes.shape(postType).isRequired,
};

export default BlogPageTemplate;
