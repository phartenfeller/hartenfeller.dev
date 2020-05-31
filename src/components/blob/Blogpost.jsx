import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import svg from '../../images/svg';

const Blogpost = ({ post }) => {
  return (
    <div className="group mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
      <div className="flex flex-col rounded-lg overflow-hidden">
        <Link to={post.Slug} className="flex-shrink-0">
          <Image
            className="transform duration-300 ease-in-out overflow-hidden h-64 w-full object-cover group-hover:scale-110"
            fluid={post.TitleImage.sharp.fluid}
            alt={post.PhotoAlt}
          />
        </Link>
        <div className="flex-1 border-2 border-t-0 rounded-t-none border-dashed border-red-400 pt-6 flex flex-col justify-between bg-white">
          <Link to={post.Slug} className="px-6">
            <div className="flex-1">
              <div className="block">
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {post.Title}
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-700">
                  {post.Description}
                </p>
              </div>
            </div>
          </Link>
          <div className="grid sm:grid-cols-2 gap-2 mt-8 text-sm leading-5 font-medium text-gray-700 bg-gray-100 px-6 py-3 border-t-2 border-solid border-gray-200">
            <div className="inline-flex ml-1">
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={svg.tag} />
              </svg>
              {post.tags.map(({ Tag }, i) => {
                return (
                  <span key={Tag} className="mr-2">
                    <Link className="hover:underline" to={`/blog/tags/${Tag}`}>
                      {Tag}
                    </Link>
                    {i < post.tags.length - 1 ? ',' : null}
                  </span>
                );
              })}
            </div>
            <div>
              <time className="float-right" dateTime={post.PublishDate}>
                {post.PublishDateFormatted}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const postType = {
  post: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Slug: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    PublishDateFormatted: PropTypes.string.isRequired,
    PublishDate: PropTypes.string.isRequired,
    PhotoAlt: PropTypes.string.isRequired,
    TitleImage: PropTypes.shape({
      sharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired
      }).isRequired
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({ Tag: PropTypes.string }))
  }).isRequired
};

Blogpost.propTypes = postType;

export default Blogpost;
