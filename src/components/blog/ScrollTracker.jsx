import React, { useLayoutEffect, useRef } from 'react';

const height = '5px';

let fiftyPct = false;
let hundredPct = false;

const ScrollTracker = () => {
  const scrollBarEle = useRef(null);

  const scrollHandler = () => {
    const { scrollY } = window;
    const scrollPct = Math.round(
      (scrollY / (document.body.clientHeight - window.innerHeight)) * 100
    );
    scrollBarEle.current.style.width = `${scrollPct}%`;
    if (scrollPct >= 50 && !fiftyPct) {
      try {
        window.plausible('blog-50-pct');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('plausible not reachable', e);
      }
      fiftyPct = true;
    }
    // actually 85% because of the footer
    if (scrollPct >= 85 && !hundredPct) {
      try {
        window.plausible('blog-100-pct');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('plausible not reachable', e);
      }
      hundredPct = true;
    }
  };

  useLayoutEffect(() => {
    window.plausible =
      window.plausible ??
      // eslint-disable-next-line func-names
      function () {
        // eslint-disable-next-line prefer-rest-params
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };

    document.addEventListener('scroll', scrollHandler, { passive: true });
    return function cleanup() {
      document.removeEventListener('scroll', scrollHandler, { passive: true });
    };
  }, []);

  return (
    <div
      ref={scrollBarEle}
      id="scroll-tracker"
      className="delay-50 sticky top-0 z-50 max-w-full bg-red-500 shadow duration-150 ease-in-out"
      style={{
        width: '0%',
        height,
        marginBottom: `-${height}`,
        transitionProperty: 'width',
      }}
    />
  );
};

export default ScrollTracker;
