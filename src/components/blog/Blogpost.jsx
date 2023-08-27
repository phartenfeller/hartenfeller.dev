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
    <div className="">
      <Link
        key={slug}
        to={`/blog/${slug}`}
        className="inline-flex w-full items-center rounded-md bg-white shadow transition-colors hover:bg-zinc-100 focus:outline-none focus:ring focus:ring-red-500"
      >
        <div className="flex flex-wrap py-4 md:flex-nowrap md:space-x-3">
          <div className="m-auto md:pl-4">
            <GatsbyImage
              image={titleImage.sharp.gatsbyImageData}
              className="aspect-video max-w-[250px] rounded"
              alt={titleImageAlt}
              sizes="33vw"
              style={{ width: '250px' }}
            />
          </div>
          <div className="mx-4 mt-4 flex flex-col pl-4 pr-4 md:mx-0 md:mt-0 md:flex-grow md:pl-0">
            <h2 className="title-font mb-2 text-lg font-medium text-zinc-900 md:text-xl lg:text-2xl">
              {title}
            </h2>
            <p className="hidden flex-grow text-xs leading-relaxed text-zinc-600 md:block lg:text-lg">
              {description}
            </p>
            <div className="md:text-md flex items-center justify-end pr-4 text-xs">
              <time dateTime={date}>{formattedDate}</time>
            </div>
          </div>
        </div>
      </Link>
      <div className="py-1 md:py-2">
        <TagsDisplay tags={tags} />
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
