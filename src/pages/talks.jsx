import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';
import SEO from '../components/seo';

const talks = [
  {
    year: 2022,
    conference: 'APEX Connect 2022',
    place: 'Brühl',
    title: 'APEX Security Grundlagen',
    language: '🇩🇪',
    slides:
      '/slides/APEX_Connect-2022-APEX-Security-Grundlagen-Hartenfeller.pdf',
  },
  {
    year: 2021,
    conference: 'DOAG 2021',
    place: 'online',
    title: 'Wird JavaScript abgelöst? Einblicke in WebAssembly',
    language: '🇩🇪',
    slides: '/slides/DOAG2021-WebAssembly-Hartenfeller.pdf',
  },
  {
    year: 2021,
    conference: 'APEX Connect 2021',
    place: 'online',
    title: 'APEX mit WebComponents erweitern',
    language: '🇩🇪',
    slides: '/slides/APEX-Connect-2021-Web-Components-APEX.pdf',
  },
  {
    year: 2020,
    conference: 'DOAG 2020',
    place: 'online',
    title: 'Dokumentengenerierung in APEX',
    language: '🇩🇪',
    slides: '/slides/DOAG2020-Dokumentengenerierung-APEX.pdf',
  },
  {
    year: 2020,
    conference: 'DOAG.tv ',
    place: 'online',
    title: 'Datenschnittstellen mit GraphQL',
    language: '🇩🇪',
    recording:
      'https://www.doag.org/de/home/news/aufgezeichnet-datenschnittstellen-mit-graphql/detail/',
  },
  {
    year: 2020,
    conference: 'APEX Connect 2020',
    place: 'online',
    title: 'Advanced AOP Templates',
    language: '🇩🇪',
    recording: 'https://www.youtube.com/watch?v=S6XSVb_PHNQ',
  },
  {
    year: 2019,
    conference: 'DOAG 2019',
    place: 'Nürnberg',
    title: 'One API to rule them all - Schnittstellen-Fusion mit GraphQL',
    language: '🇩🇪',
  },
  {
    year: 2019,
    conference: 'APEX Connect 2019',
    place: 'Bonn',
    title: 'Dokumentengenerierung in APEX',
    language: '🇩🇪',
  },
  {
    year: 2018,
    conference: 'DOAG 2018',
    place: 'Nürnberg',
    title: 'Material Design: professionelle User Interfaces im Web',
    language: '🇩🇪',
  },
  {
    year: 2018,
    conference: 'DOAG 2018',
    place: 'Nürnberg',
    title: 'Dokumentengenerierung in APEX',
    language: '🇩🇪',
  },
];

const publications = [
  {
    year: 2020,
    magazine: 'Red Stack Magazin',
    pages: '67 - 70',
    title: 'Schnittstellenbündelung mit GraphQL',
    language: '🇩🇪',
    link: 'https://backoffice.doag.org/formes/pubfiles/12309827/docs/Publikationen/DOAGNews/2020/04-2020/04_2020-Red_Stack_Magazin-WEB.pdf',
  },
  {
    year: 2022,
    magazine: 'Red Stack Magazin',
    pages: '47 - 51',
    title: 'APEX-Security-Grundlagen',
    language: '🇩🇪',
    link: 'https://backoffice.doag.org/formes/pubfiles/14512917/docs/Publikationen/Red-Stack-Magazin-inkl-Business-News/2022/04-2022/04_2022-Red_Stack_Magazin-Philipp_Hartenfeller-APEX-Security-Grundlagen.pdf',
  },
];

const talkData = talks.map((t) => ({
  year: t.year,
  medium: `${t.conference} (${t.place})`,
  title: `${t.title} (${t.language})`,
  linkComp: (
    <>
      {t.slides ? <LinkButton type="slides" link={t.slides} newWindow /> : null}
      {t.recording ? (
        <LinkButton
          type="video"
          link={t.recording}
          text="Recording"
          newWindow
        />
      ) : null}
      {!t.slides && !t.recording ? <span>-</span> : null}
    </>
  ),
}));

const pubData = publications.map((p) => ({
  year: p.year,
  medium: `${p.magazine} (pp. ${p.pages})`,
  title: `${p.title} (${p.language})`,
  linkComp: (
    <>
      <a
        href={p.link}
        className="px-2 py-1 rounded text-red-700 hover:text-red-500 focus:outline-none focus:ring focus:ring-red-300"
      >
        Link
      </a>
    </>
  ),
}));

const PubList = ({ data }) => (
  <div className="shadow overflow-hidden border-b border-zinc-200 sm:rounded-lg">
    <ul className="min-w-full divide-y divide-zinc-200">
      {data.map((d, i) => (
        <li
          key={`${d.year}-${d.title}`}
          className={`text-zinc-500 text-md grid grid-cols-1 md:grid-cols-3 xl:grid-cols-8 ${
            i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
          }`}
        >
          <span className="px-6 py-4 hidden xl:block">{d.year}</span>

          <span className="px-6 py-4 xl:col-span-2" title="conference">
            {d.medium}
          </span>

          <span
            className="font-medium text-zinc-700 px-6 py-4 xl:col-span-3"
            title="title"
          >
            {d.title}
          </span>

          <div className="px-6 py-4 text-center xl:col-span-2">
            {d.linkComp}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

PubList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      medium: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      linkComp: PropTypes.node.isRequired,
    })
  ).isRequired,
};

const Talks = () => (
  <Layout header>
    <SEO
      title="Talks and Publications"
      description="List of conference talks and publications"
    />
    <div className="relative pt-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-3xl leading-9 brown-header-text font-extrabold sm:text-4xl lg:text-5xl sm:leading-10">
            List of conference talks and publications
          </h1>
        </div>
        <div className="mb-24">
          <h2 className="text-3xl brown-header-text font-extrabold mb-8">
            Conference Talks
          </h2>
          <PubList data={talkData} />
        </div>
        <div className="pb-32">
          <h2 className="text-3xl brown-header-text font-extrabold mb-8">
            Publications
          </h2>
          <PubList data={pubData} />
        </div>
      </div>
    </div>
  </Layout>
);

export default Talks;
