import React from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

const height = '5px';

const ScrollTracker = () => {
  const scrollY = useScrollYPosition();
  return (
    <div
      id="scroll-tracker"
      className="sticky top-0 bg-red-500 max-w-full shadow"
      style={{
        height,
        width: `${
          (scrollY / (document.body.clientHeight - window.innerHeight)) * 100
        }%`,
        marginBottom: `-${height}`,
      }}
    />
  );
};

export default ScrollTracker;
