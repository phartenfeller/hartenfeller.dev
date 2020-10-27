import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import TagsDisplay, { tagsProps } from './TagsDisplay';

const Blogpost = ({ postData }) => {
  const {
    title,
    date,
    formattedDate,
    description,
    slug,
    tags,
    titleImage,
    titleImageAlt,
  } = postData;

  return (
    <div className="group mt-12 max-w-lg mx-auto lg:max-w-none">
      <div className="flex flex-col rounded-lg overflow-hidden h-full">
        <Link to={`/blog/${slug}`} className="flex-shrink-0">
          <Image
            className="transform duration-300 ease-in-out overflow-hidden h-64 w-full object-cover group-hover:scale-110"
            fluid={titleImage.sharp.fluid}
            alt={titleImageAlt}
          />
        </Link>
        <div className="flex-1 border-2 border-t-0 rounded-t-none border-dashed border-red-400 pt-6 flex flex-col justify-between bg-white">
          <Link to={`/blog/${slug}`} className="px-6">
            <div className="flex-1">
              <div className="block">
                <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-6 text-gray-700">
                  {description}
                </p>
              </div>
            </div>
          </Link>
          <div className="grid sm:grid-cols-2 gap-2 mt-8 text-sm leading-5 font-medium text-gray-700 bg-gray-100 px-6 py-3 border-t-2 border-solid border-gray-200">
            <TagsDisplay tags={tags} />
            <div>
              <time className="float-right" dateTime={date}>
                {formattedDate}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const postType = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired,
    titleImage: PropTypes.shape({
      sharp: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    titleImageAlt: PropTypes.string.isRequired,
    tags: tagsProps,
  }).isRequired,
};

Blogpost.propTypes = postType;

export default Blogpost;
