import svg from '../src/images/svg';

const links = {
  youtube: {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCGVCQ939MmXPjyccfrrA-Yg',
    path: svg.youtube.path,
  },
  blog: {
    name: 'Blog',
    href: '/blog',
    path: svg.pencil.path,
  },
  linkedin: {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/phartenfeller/',
    path: svg.linkedin.path,
  },
  mastodon: {
    name: 'Mastodon',
    href: 'https://mastodon.social/@phartenfeller',
    path: svg.mastodon.path,
  },
  bluesky: {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/hartenfeller.dev',
    path: svg.bluesky.path,
  },
  twitter: {
    name: 'Twitter',
    href: 'https://twitter.com/phartenfeller',
    path: svg.twitter.path,
  },
  github: {
    name: 'GitHub',
    href: 'https://github.com/phartenfeller',
    path: svg.github.path,
  },
  talks: {
    name: 'List of my Talks',
    href: '/talks',
    path: svg.microphone.path,
  },
};

export default links;
