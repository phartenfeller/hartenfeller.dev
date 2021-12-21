import React from 'react';
import LinkButton from '../LinkButton';
import SectionHeader from '../SectionHeader';

const Contact = () => (
  <div className="py-16" style={{ background: '#bcaaa4' }}>
    <SectionHeader section="Contact" />
    <address className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow not-italic md:grid-cols-2 w-3/4 lg:w-1/2 m-auto">
      <div className="border-t border-zinc-300 md:border-0 md:border-l">
        <div className="px-4 py-5 sm:p-6 text-center text-xl">
          <div className="mb-6">Reach out to me on Twitter:</div>
          <LinkButton type="twitter" link="https://twitter.com/phartenfeller" />
        </div>
      </div>
      <div className="border-t border-zinc-300 md:border-0 md:border-l">
        <div className="px-4 py-5 sm:p-6 text-center text-xl">
          <div className="mb-6">Send me an E-Mail:</div>
          <LinkButton type="email" link="mailto:contact@hartenfeller.dev" />
        </div>
      </div>
    </address>
  </div>
);

export default Contact;
