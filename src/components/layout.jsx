/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types';
import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer
          className="py-4 px-8 text-orange-200 shadow-lg"
          style={{ background: '#544242' }}
        >
          <div className="md:inline-block">{`© ${new Date().getFullYear()} Philipp Hartenfeller`}</div>
          <div className="underline md:inline-block md:float-right">
            <a href="https://github.com/phartenfeller/hartenfeller.dev">
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
