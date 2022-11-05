import { Link } from 'gatsby';
import React from 'react';
import svg from '../../images/svg';
import ImageGetter from '../ImageGetter';

const AuthorShowcase = () => (
  <div>
    <div className="text-center font-semibold mb-3">Author</div>
    <div className="grid grid-cols-5 items-center gap-3">
      <div className="lg:m-2 col-span-2">
        <ImageGetter
          filename="profile-pic.jpg"
          alt="Philipp Hartenfeller portrait photo"
          classes="object-cover shadow-md shadow-red-100 rounded-full select-none border-4 border-red-300/75"
        />
      </div>
      <div className="col-span-3 text-xl text-stone-600">
        <p>Philipp</p>
        <p>Hartenfeller</p>
      </div>
    </div>
    <div className="mt-3">
      <div className="flex space-x-3">
        <a
          href="https://twitter.com/phartenfeller"
          className="text-stone-400 transition-colors duration-500 ease-in-out hover:text-[#1DA1F2] border border-white hover:border-red-200 p-2 rounded-lg"
          aria-label="Twitter"
          title="Twitter"
        >
          <svg
            className="h-4 w-4 md:h-6 md:w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <path d={svg.twitter.path} />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/phartenfeller/"
          className="text-stone-400 transition-colors duration-500 ease-in-out hover:text-[#0e76a8] border border-white hover:border-red-200 p-2 rounded-lg"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg
            className="h-4 w-4 md:h-6 md:w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <path d={svg.linkedin.path} />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCGVCQ939MmXPjyccfrrA-Yg"
          className="text-stone-400 transition-colors duration-500 ease-in-out hover:text-[#FF0000] border border-white hover:border-red-200 p-2 rounded-lg"
          aria-label="YouTube"
          title="YouTube"
        >
          <svg
            className="h-4 w-4 md:h-6 md:w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <path d={svg.youtube.path} />
          </svg>
        </a>
        <a
          href="https://github.com/phartenfeller"
          className="text-stone-400 transition-colors duration-500 ease-in-out hover:text-[#333] border border-white hover:border-red-200 p-2 rounded-lg"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg
            className="h-4 w-4 md:h-6 md:w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <path d={svg.github.path} />
          </svg>
        </a>
      </div>
      <div className="mt-5 text-stone-600">
        <p>
          I am a Senior IT-Consultant mainly working with Oracle APEX. I
          regularly give{' '}
          <Link to="/talks" className="underline hover:text-black">
            talks
          </Link>{' '}
          at conferences and{' '}
          <Link to="/blog" className="underline hover:text-black">
            blog
          </Link>{' '}
          about interesting topics I stumble upon in my work.
        </p>
      </div>
      <div className="mt-5 opacity-75">
        <a href="https://ace.oracle.com/pls/apex/r/ace_program/oracle-aces/ace?ace_id=2317">
          <ImageGetter
            filename="ace-logo.png"
            alt="Philipp Hartenfeller portrait photo"
            classes="object-cover select-none max-w-[200px] mx-auto"
          />
        </a>
      </div>
    </div>
  </div>
);

export default AuthorShowcase;
