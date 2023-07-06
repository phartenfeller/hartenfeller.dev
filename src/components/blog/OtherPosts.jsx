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
          'flex cursor-not-allowed select-none items-center p-4',
          !last ? 'justify-end' : null
        )}
      >
        {last && (
          <ChevronDoubleLeftIcon className="mr-6 h-6 w-6 text-zinc-100" />
        )}
        <div className="font-light text-zinc-400">No {text}</div>
        {!last && (
          <ChevronDoubleRightIcon className="ml-6 h-6 w-6 text-zinc-100" />
        )}
      </div>
    );
  }

  return (
    <a
      href={`/blog/${post.frontmatter.slug}`}
      className={classNames(
        'flex select-none items-center justify-between rounded p-4 hover:bg-red-50 focus:outline-none focus:ring focus:ring-red-300'
      )}
    >
      {last && (
        <ChevronDoubleLeftIcon className="mr-3 h-4 w-4 flex-shrink-0 text-zinc-300 lg:mr-6 lg:h-6 lg:w-6" />
      )}
      <div className="flex-grow">
        <div className="font-semibold">{text}</div>
        <div className="text-zinc-500">{post.frontmatter.title}</div>
        <div className="text-zinc-500">{post.frontmatter.formattedDate}</div>
      </div>
      {!last && (
        <ChevronDoubleRightIcon className="ml-3 h-4 w-4 flex-shrink-0 text-zinc-300 lg:ml-6 lg:h-6 lg:w-6" />
      )}
    </a>
  );
};

PostDisplay.propTypes = {
  last: PropTypes.bool,
  post: postShape,
};

PostDisplay.defaultProps = {
  last: false,
  post: undefined,
};

const OtherPosts = ({ postId }) => {
  const data = useStaticQuery(graphql`
    {
      allPosts: allMdx(
        sort: { fields: frontmatter___date }
        filter: { frontmatter: { published: { ne: false } } }
      ) {
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
    <div className="grid rounded border border-zinc-300 sm:grid-cols-2">
      <PostDisplay last post={lastPost} />
      <PostDisplay post={nextPost} />
    </div>
  );
};

OtherPosts.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default OtherPosts;
