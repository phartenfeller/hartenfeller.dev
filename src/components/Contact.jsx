import React from 'react';
import LinkButton from './LinkButton';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <div className="py-16" style={{ background: '#bcaaa4' }}>
      <SectionHeader section="Contact" />
      <div className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-2 w-3/4 lg:w-1/2 m-auto">
        <div className="border-t border-gray-300 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6 text-center text-xl">
            <div className="mb-6">Reach out to me on Twitter:</div>
            <LinkButton
              type="twitter"
              link="https://twitter.com/phartenfeller"
            />
          </div>
        </div>
        <div className="border-t border-gray-300 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6 text-center text-xl">
            <div className="mb-6">Send me an E-Mail:</div>
            <LinkButton type="email" link="mailto:contact@hartenfeller.dev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
