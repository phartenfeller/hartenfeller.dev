/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import '../styles/layout.css';

function flattenToc(toc, level = 0) {
  return toc.items.reduce((acc, item) => {
    const newItem = { ...item, level };
    if (item.items) {
      return [...acc, newItem, ...flattenToc(item, level + 1)];
    }
    return [...acc, newItem];
  }, []);
}

const indentClass = (level) => `${level * 2 + 2}ch`;
const levelStyles = (level) => {
  switch (level) {
    case 0:
      return 'font-bold';
    case 1:
      return 'font-medium text-opacity-80';
    default:
      return 'font-extralight text-opacity-70';
  }
};

const Layout = ({ children, header = false, toc }) => (
  <div className="ite flex min-h-screen flex-col">
    {header ? (
      <header
        className={`flex select-none items-center justify-between bg-title-brown-light py-3 lg:px-4 ${
          toc ? 'sticky top-0 z-40' : ''
        }`}
      >
        <div className="flex items-center">
          <Link
            tabIndex="-1"
            to="/"
            className="mr-4 hidden rounded px-2 font-extrabold text-white hover:bg-cappuccino/50 focus:outline-none focus:ring-2 focus:ring-red-400 md:block lg:mr-12 lg:text-2xl"
          >
            hartenfeller.dev
          </Link>
          <Link
            to="/"
            className="mr-2 rounded px-2 text-red-100 hover:bg-cappuccino/50 focus:outline-none focus:ring-2 focus:ring-red-400 lg:mr-5 lg:text-xl"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="rounded px-2 text-red-100 hover:bg-cappuccino/50 focus:outline-none focus:ring-2 focus:ring-red-400 lg:text-xl"
          >
            Blog
          </Link>
        </div>
        <div>
          {toc ? (
            <Menu as="div" className="flex">
              {({ open }) => (
                <>
                  <Menu.Button className="flex items-center rounded px-4 py-2 align-middle text-red-100 text-opacity-60 focus:outline-none focus:ring focus:ring-red-400">
                    <MenuAlt1Icon className="h-4 w-4" />
                    <span className="hidden pl-2 text-red-100 text-opacity-80 lg:block">
                      Table of Contents
                    </span>
                  </Menu.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className={`absolute right-0 z-50 mt-8 ml-2 origin-top-right overflow-hidden
              overflow-y-scroll rounded-md bg-white py-4 text-base text-zinc-600 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                      style={{ maxHeight: '50vh' }}
                    >
                      {flattenToc(toc).map((h) => (
                        <Menu.Item key={h.value}>
                          {({ active }) => (
                            <a
                              href={h.url}
                              className={`${
                                active ? 'bg-zinc-100 text-black' : null
                              } flex focus:outline-none focus:ring focus:ring-inset focus:ring-red-400`}
                            >
                              <div
                                className="px-2"
                                style={{ width: indentClass(h.level) }}
                              />
                              <div
                                className={`select-none py-2 pr-9 ${levelStyles(
                                  h.level
                                )}`}
                              >
                                {h.title}
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          ) : null}
        </div>
      </header>
    ) : null}
    <main className="flex-grow">{children}</main>
    <footer className="md:text-md grid grid-cols-2 bg-title-brown-light py-4 px-8 text-sm text-white shadow-lg md:grid-cols-3 md:font-semibold lg:grid-cols-5">
      <div className="my-4 lg:my-0">{`© ${new Date().getFullYear()} Philipp Hartenfeller`}</div>
      <div className="my-4 lg:my-0 lg:text-center">
        <Link className="py-2 pr-2 underline" to="/imprint">
          Imprint
        </Link>
      </div>

      <div className="my-4 lg:my-0 lg:text-center">
        This website does not use cookies
      </div>
      <div className="my-4 lg:my-0 lg:text-center">
        <Link className="py-2 pr-2 underline" to="/privacy">
          Privacy Policy
        </Link>
      </div>
      <div className="my-4 lg:my-0 lg:text-right">
        <a
          className="underline"
          href="https://github.com/phartenfeller/hartenfeller.dev"
        >
          Check out the code on GitHub
        </a>
      </div>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
  toc: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    items: PropTypes.arrayOf(PropTypes.object),
  }),
};

Layout.defaultProps = {
  header: false,
  toc: null,
};

export default Layout;
