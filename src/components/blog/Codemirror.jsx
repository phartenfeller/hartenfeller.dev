import PropTypes from 'prop-types';
import React from 'react';
import useRocm from 'react-readonly-codemirror6';

const Codemirror = ({ lang, code }) => {
  const codeRef = useRocm({
    code,
    lang,
    fontSize: 14,
  });

  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="max-w-[90vw]" ref={codeRef}>
      {!isMounted && <code>{code}</code>}
    </div>
  );
};

Codemirror.propTypes = {
  lang: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default Codemirror;
