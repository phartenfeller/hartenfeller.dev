import React, { useEffect, useRef } from 'react';

const height = '5px';

const ScrollTracker = () => {
  const scrollBarEle = useRef(null);

  const scrollHandler = () => {
    const { scrollY } = window;
    const scrollPct = Math.round(
      (scrollY / (document.body.clientHeight - window.innerHeight)) * 100
    );
    scrollBarEle.current.style.width = `${scrollPct}%`;
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler, { passive: true });
    return function cleanup() {
      document.removeEventListener('scroll', scrollHandler, { passive: true });
    }
  }, []);

  return (
    <div
      ref={scrollBarEle}
      id="scroll-tracker"
      className="sticky top-0 bg-red-500 max-w-full shadow delay-50 duration-150 ease-in-out z-50"
      style={{
        height,
        marginBottom: `-${height}`,
        transitionProperty: 'width',
      }}
    />
  );
};

export default ScrollTracker;
