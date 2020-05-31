import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { postType } from '../components/blog/Blogpost';
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
          fluid {
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

const BlogPageTemplate = ({ data }) => {
  const { post } = data;

  return (
    <Layout>
      <SEO title={post.Title} description={post.Description} />
      <div className="w-1/2 m-auto shadow-sm">
        <Image
          className="h-100 object-cover"
          fluid={post.TitleImage.sharp.fluid}
          alt={post.PhotoAlt}
        />
        <div className="bg-white px-8 pb-8">
          <h1 className="text-4xl leading-9 brown-header-text font-extrabold pt-8">
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
            className="blog-body mt-6 text-lg leading-8 text-gray-900 font-raleway"
          />
          <div>
            <ReactMarkdown
              source={post.PhotoSource}
              className="text-gray-600 photo-source"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

BlogPageTemplate.propTypes = {
  data: PropTypes.shape(postType).isRequired
};

export default BlogPageTemplate;
