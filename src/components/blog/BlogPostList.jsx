import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import React from 'react';
import Blogpost, { postType } from './Blogpost';

const BlogPostList = ({
  posts,
  header = null,
  headerCount = null,
  closed = false,
}) => {
  if (!closed)
    return (
      <div>
        {header && (
          <h2 className="mb-6 mt-9 text-center text-xl font-light text-zinc-800 md:text-3xl">
            {header}
          </h2>
        )}
        <div className="mx-6 flex flex-col gap-4 md:gap-6 lg:m-auto lg:grid lg:w-2/3">
          {posts.map(({ frontmatter }) => (
            <Blogpost postData={frontmatter} key={frontmatter.slug} />
          ))}
        </div>
      </div>
    );

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="mx-auto mb-6  mt-9 flex items-center justify-between rounded-lg border border-zinc-100 bg-white px-4 py-2 text-left text-xl hover:border-zinc-300 focus:border-red-500 focus:outline-none md:text-3xl">
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : 'rotate-90'
                } mr-3 h-8 w-8 text-zinc-400 transition-transform ease-in-out`}
              />
              <h2 className="tfont-light text-center text-zinc-800 ">
                {header}
              </h2>
              {headerCount && (
                <span className="ml-3 font-extralight text-zinc-500">
                  {`(${headerCount})`}
                </span>
              )}
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className="mx-6 flex flex-col gap-4 md:gap-6 lg:m-auto lg:grid lg:w-2/3">
                {posts.map(({ frontmatter }) => (
                  <Blogpost postData={frontmatter} key={frontmatter.slug} />
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

BlogPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({ frontmatter: postType }))
    .isRequired,
  header: PropTypes.string,
  headerCount: PropTypes.number,
  closed: PropTypes.bool,
};

BlogPostList.defaultProps = {
  header: null,
  headerCount: null,
  closed: false,
};

export default BlogPostList;
