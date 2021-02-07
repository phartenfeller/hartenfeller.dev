import React from 'react';
import svg from '../images/topography.svg';

const Hero = () => (
  <header
    style={{
      background: `#F25D48`,
      backgroundImage: `url(${svg})`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="pt-16 pb-64">
      <div className="text-center">
        <h1 className="inline-block text-2xl sm:text-4xl md:text-5xl lg:text-6xl m-0 brown-header-text milky-bg py-4 px-6">
          Philipp Hartenfeller
        </h1>
      </div>
    </div>
  </header>
);

export default Hero;
