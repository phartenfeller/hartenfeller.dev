import React from 'react';
import { Link } from 'gatsby';
import BlogGifGetter from './BlogGifGetter';
import BlogImageGetter from './BlogImageGetter';
import BlogVideoGetter from './BlogVideoGetter';
import CodeHandler from './CodeHandler';
import LinkedH3 from './LinkedH3';
import Gist from './Gist';
import InfoBox from './InfoBox';
import WarningBox from './WarningBox';
import LinkedH2 from './LinkedH2';
import YouTubeEmbed from './YouTubeEmbed';
import classNames from '../../util/classNames';
import SeriesTeaser from './SeriesTeaser';
import LinkedH4 from './LinkedH4';

const components = {
  code: CodeHandler,
  // eslint-disable-next-line react/prop-types
  pre: ({ children }) => children, // handled by codeh
  h2: LinkedH2,
  h3: LinkedH3,
  h4: LinkedH4,
  ul: ({ children }) => (
    <div className="ml-5">
      <ul>{children}</ul>
    </div>
  ),
  Gist,
  // eslint-disable-next-line react/prop-types
  BlogImg: ({ filename, alt, noShadow = false, maxWidthPx }) => (
    <BlogImageGetter
      filename={filename}
      classes={classNames('object-contain', noShadow ? null : 'shadow-md')}
      alt={alt}
      maxWidthPx={maxWidthPx}
    />
  ),
  // eslint-disable-next-line react/prop-types
  BlogGif: ({ filename, alt }) => (
    <BlogGifGetter
      filename={filename}
      alt={alt}
      classes="object-contain my-12 mx-auto shadow-md xxl:w-3/4"
    />
  ),
  BlogVideo: BlogVideoGetter,
  YouTubeEmbed,
  InfoBox,
  WarningBox,
  Link,
  SeriesTeaser,
};

export default components;
