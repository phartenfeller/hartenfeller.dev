import React, { useState, useEffect } from 'react';
import LinkButton from '../LinkButton';
import SectionHeader from '../SectionHeader';

const Contact = () => {
  const [email, setEmail] = useState('');

  const encodedEmail =
    '97-71-86-115-98-71-57-65-97-71-70-121-100-71-86-117-90-109-86-115-98-71-86-121-76-109-82-108-100-103-61-61';
  function decode(encoded) {
    const ascii = encoded.split('-');
    const str = String.fromCharCode(...ascii);
    return atob(str);
  }

  useEffect(() => {
    setTimeout(() => {
      setEmail(decode(encodedEmail));
    }, 2000);
  }, [setEmail]);

  return (
    <div className="py-16" style={{ background: '#bcaaa4' }}>
      <SectionHeader section="Contact" />
      <address className="m-auto mt-5 grid w-3/4 grid-cols-1 overflow-hidden rounded-lg bg-white not-italic shadow md:grid-cols-3 lg:w-3/4">
        <div className="border-t border-zinc-300 md:border-0 md:border-l">
          <div className="px-4 py-5 text-center text-xl sm:p-6">
            <div className="mb-6">Send me an E-Mail:</div>
            <LinkButton
              type="email"
              link={email ? `mailto:${email}` : '#loading'}
              text={!email ? 'Loading...' : email}
            />
          </div>
        </div>
        <div className="border-t border-zinc-300 md:border-0 md:border-l">
          <div className="px-4 py-5 text-center text-xl sm:p-6">
            <div className="mb-6">Message me on Signal:</div>
            <div>ID: hartenfellerdev.01</div>
          </div>
        </div>
        <div className="border-t border-zinc-300 md:border-0 md:border-l">
          <div className="px-4 py-5 text-center text-xl sm:p-6">
            <div className="mb-6">Message me on Threma:</div>
            <div>ID: hartenfellerdev</div>
          </div>
        </div>
      </address>
    </div>
  );
};

export default Contact;
