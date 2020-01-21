import React from 'react';
import svg from '../images/topography.svg';

const Hero = () => (
  <header
    style={{
      background: `#F25D48`,
      backgroundImage: `url(${svg})`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        paddingTop: '128px',
        paddingBottom: '128px'
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(1.5px)',
          width: 'fit-content',
          margin: 'auto',
          padding: '16px 32px'
        }}
      >
        <h1
          style={{
            fontFamily: `'Merriweather', serif`,
            margin: 0,
            color: '#3e2121'
          }}
        >
          Philipp Hartenfeller
        </h1>
      </div>
    </div>
  </header>
);

export default Hero;
