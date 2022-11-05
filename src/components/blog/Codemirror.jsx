import PropTypes from 'prop-types';
import React from 'react';
import useRocm from 'react-readonly-codemirror6';

const Codemirror = ({ lang, code }) => {
  const codeRef = useRocm({
    code,
    lang,
    fontSize: 14,
  });

  return <div className="max-w-[90vw]" ref={codeRef} />;
};

Codemirror.propTypes = {
  lang: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default Codemirror;
