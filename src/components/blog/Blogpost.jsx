import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import TagsDisplay from './TagsDisplay';

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
    <div className="group mx-auto mt-12 max-w-lg lg:max-w-none">
      <div className="flex h-full flex-col overflow-hidden rounded-lg">
        <Link to={`/blog/${slug}`} className="flex-shrink-0">
          {titleImage?.sharp?.gatsbyImageData ? (
            <GatsbyImage
              image={titleImage.sharp.gatsbyImageData}
              className="h-64 w-full transform overflow-hidden object-cover duration-300 ease-in-out group-hover:scale-110"
              alt={titleImageAlt}
            />
          ) : (
            <div className="flex h-64 w-full bg-slate-200 text-xl">
              <div className="m-auto">No Image</div>
            </div>
          )}
        </Link>
        <div className="flex flex-1 flex-col justify-between rounded-t-none border-2 border-t-0 border-dashed border-red-400 bg-white pt-6">
          <Link to={`/blog/${slug}`} className="px-6">
            <div className="flex-1">
              <div className="block">
                <h2 className="mt-2 text-xl font-semibold leading-7 text-zinc-900">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-6 text-zinc-700">
                  {description}
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-8 grid gap-2 border-t-2 border-solid border-zinc-200 bg-zinc-100 px-6 py-3 text-sm font-medium leading-5 text-zinc-700 sm:grid-cols-2">
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

export const postType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  titleImage: PropTypes.object.isRequired,
  titleImageAlt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
});

Blogpost.propTypes = { postData: postType.isRequired };

export default Blogpost;
