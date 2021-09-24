import React from 'react';
import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';
import SEO from '../components/seo';

const talks = [
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

const TalkList = () => (
  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <ul className="min-w-full divide-y divide-gray-200">
      {talks.map((talk, i) => (
        <li
          key={`${talk.year}-${talk.title}`}
          className={`text-gray-500 text-md grid grid-cols-1 md:grid-cols-3 xl:grid-cols-8 ${
            i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <span className="px-6 py-4 hidden xl:block">{talk.year}</span>

          <span
            className="px-6 py-4 xl:col-span-2"
            title="conference"
          >{`${talk.conference} (${talk.place})`}</span>

          <span
            className="font-medium text-gray-700 px-6 py-4 xl:col-span-3"
            title="title"
          >
            {`${talk.title} (${talk.language})`}
          </span>

          <div className="px-6 py-4 text-center xl:col-span-2">
            {talk.slides ? (
              <LinkButton type="slides" link={talk.slides} newWindow />
            ) : null}
            {talk.recording ? (
              <LinkButton
                type="video"
                link={talk.recording}
                text="Recording"
                newWindow
              />
            ) : null}
            {!talk.slides && !talk.recording ? <span>-</span> : null}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Talks = () => (
  <Layout header>
    <SEO title="Talks" description="List of conference talks" />
    <div className="relative pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-100 to-red-50">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-3xl leading-9 brown-header-text font-extrabold sm:text-4xl sm:leading-10">
            List of conference talks
          </h1>
        </div>
        <TalkList />
      </div>
    </div>
  </Layout>
);

export default Talks;
