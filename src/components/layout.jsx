/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
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
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
