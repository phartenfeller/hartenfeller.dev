import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import TagsDisplay, { tagsProps } from './TagsDisplay';

const Blogpost = ({ post }) => {
  return (
    <div className="group mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
      <div className="flex flex-col rounded-lg overflow-hidden">
        <Link to={`/blog/${post.Slug}`} className="flex-shrink-0">
          <Image
            className="transform duration-300 ease-in-out overflow-hidden h-64 w-full object-cover group-hover:scale-110"
            fluid={post.TitleImage.sharp.fluid}
            alt={post.PhotoAlt}
          />
        </Link>
        <div className="flex-1 border-2 border-t-0 rounded-t-none border-dashed border-red-400 pt-6 flex flex-col justify-between bg-white">
          <Link to={`/blog/${post.Slug}`} className="px-6">
            <div className="flex-1">
              <div className="block">
                <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {post.Title}
                </h2>
                <p className="mt-3 text-base leading-6 text-gray-700">
                  {post.Description}
                </p>
              </div>
            </div>
          </Link>
          <div className="grid sm:grid-cols-2 gap-2 mt-8 text-sm leading-5 font-medium text-gray-700 bg-gray-100 px-6 py-3 border-t-2 border-solid border-gray-200">
            <TagsDisplay tags={post.tags} />
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
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    tags: tagsProps,
  }).isRequired,
};

Blogpost.propTypes = postType;

export default Blogpost;
