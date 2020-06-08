import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { postType } from '../components/blog/Blogpost';
import Gist from '../components/blog/Gist';
import TagsDisplay from '../components/blog/TagsDisplay';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/blog.css';

export const query = graphql`
  query($id: String!) {
    post: strapiHartenfellerDevBlogs(id: { eq: $id }) {
      Title
      TitleImage {
        sharp: childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
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

const getMeta = (imgSrc, imgAlt) => [
  {
    name: `twitter:image`,
    content: `https://hartenfeller.dev${imgSrc}`,
  },
  {
    name: `twitter:image:alt`,
    content: imgAlt,
  },
];

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
        default:
          return <pre>{value}</pre>;
      }
    },
  };

  return (
    <Layout>
      <SEO
        title={post.Title}
        description={post.Description}
        meta={getMeta(post.TitleImage.sharp.fluid.src, post.PhotoAlt)}
      />
      <div className="md:w-5/6 xl:w-4/6 hd:w-1/2 m-auto shadow-sm">
        <Image
          className="h-100 object-cover"
          fluid={post.TitleImage.sharp.fluid}
          alt={post.PhotoAlt}
        />
        <div className="bg-white px-8 pb-8">
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
          <ReactMarkdown
            source={post.Body}
            escapeHtml={false}
            renderers={renderers}
            className="blog-body mt-6 text-lg leading-8 text-gray-900 font-raleway"
          />
          <div>
            <ReactMarkdown
              source={post.PhotoSource}
              className="text-gray-700 font-light mt-8 hover:text-gray-800 hover:underline"
            />
          </div>
          <div className="text-center mt-8 text-xl text">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

BlogPageTemplate.propTypes = {
  data: PropTypes.shape(postType).isRequired,
};

export default BlogPageTemplate;
