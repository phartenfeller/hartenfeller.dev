import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';
import classNames from '../../util/classNames';

const postShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
});

const PostDisplay = ({ last = false, post }) => {
  const text = last ? 'Last Post' : 'Next Post';

  if (!post) {
    return (
      <div
        className={classNames(
          'p-4 flex items-center select-none cursor-not-allowed',
          !last ? 'justify-end' : null
        )}
      >
        {last && (
          <ChevronDoubleLeftIcon className="h-6 w-6 text-gray-100 mr-6" />
        )}
        <div className="text-gray-400 font-light">No {text}</div>
        {!last && (
          <ChevronDoubleRightIcon className="h-6 w-6 text-gray-100 ml-6" />
        )}
      </div>
    );
  }

  return (
    <a
      href={`/blog/${post.frontmatter.slug}`}
      className={classNames(
        'p-4 rounded hover:bg-red-50 focus:outline-none focus:ring focus:ring-red-300 flex items-center justify-between select-none'
      )}
    >
      {last && (
        <ChevronDoubleLeftIcon className="h-4 w-4 lg:h-6 lg:w-6 text-gray-300 mr-3 lg:mr-6 flex-shrink-0" />
      )}
      <div className="flex-grow">
        <div className="font-semibold">{text}</div>
        <div className="text-gray-500">{post.frontmatter.title}</div>
        <div className="text-gray-500">{post.frontmatter.formattedDate}</div>
      </div>
      {!last && (
        <ChevronDoubleRightIcon className="h-4 w-4 lg:h-6 lg:w-6 text-gray-300 ml-3 lg:ml-6 flex-shrink-0" />
      )}
    </a>
  );
};

PostDisplay.propTypes = {
  last: PropTypes.bool.isRequired,
  post: postShape.isRequired,
};

const OtherPosts = ({ postId }) => {
  const data = useStaticQuery(graphql`
    {
      allPosts: allMdx(sort: { fields: frontmatter___date }) {
        nodes {
          id
          frontmatter {
            formattedDate: date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  `);

  const currIndex = data.allPosts.nodes.findIndex((p) => p.id === postId);
  const lastPost = currIndex === 0 ? null : data.allPosts.nodes[currIndex - 1];
  const nextPost =
    currIndex === data.allPosts.nodes.length
      ? null
      : data.allPosts.nodes[currIndex + 1];

  return (
    <div className="grid grid-cols-2 border border-gray-300 rounded">
      <PostDisplay last post={lastPost} />
      <PostDisplay post={nextPost} />
    </div>
  );
};

OtherPosts.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default OtherPosts;
