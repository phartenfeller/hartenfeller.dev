/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/layout.css';

const Layout = ({ children, header = false }) => (
  <>
    <div className="min-h-screen flex flex-col">
      {header ? (
        <header className="bg-red-100 px-4 py-3 flex select-none">
          <Link
            tabIndex="-1"
            to="/"
            className="text-2xl brown-header-text font-extrabold mr-12 px-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            hartenfeller.dev
          </Link>
          <Link
            to="/"
            className="text-xl hover:bg-red-200 px-2 rounded mr-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-xl hover:bg-red-200 px-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Blog
          </Link>
        </header>
      ) : null}
      <main className="flex-grow">{children}</main>
      <footer
        className="py-4 px-8 text-white text-sm md:text-md md:font-semibold shadow-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        style={{ background: '#544242' }}
      >
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
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
};

Layout.defaultProps = {
  header: false,
};

export default Layout;
