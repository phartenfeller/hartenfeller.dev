import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';
import SEO from '../components/seo';

const talks = [
  {
    year: 2025,
    conference: 'Kscope 2025',
    place: 'Grapevine, TX, USA',
    title:
      'APEX Security Basics (Co-prented with Kevin Thyssen, 🏆️ voted best APEX talk)',
    language: '🇬🇧',
    slides: '/slides/apex-security-kscope25/',
  },
  {
    year: 2025,
    conference: 'Kscope 2025',
    place: 'Grapevine, TX, USA',
    title: 'APEX UX: treat your users as you like to be treated',
    language: '🇬🇧',
    slides: '/slides/apex-ux-kscope25/',
  },
  {
    year: 2025,
    conference: 'Kscope 2025',
    place: 'Grapevine, TX, USA',
    title: 'CSS Variables: The Secret Sauce of APEX Styling',
    language: '🇬🇧',
    slides: '/slides/apex-css-vars-kscope25/',
  },
  {
    year: 2025,
    conference: 'APEX Connect 2025',
    place: 'Rust, DE',
    title: 'Non APEX App Development with JSON Duality Views',
    language: '🇬🇧',
    slides: '',
  },
  {
    year: 2025,
    conference: 'APEX Connect 2025',
    place: 'Rust, DE',
    title:
      'Behind the Scenes - The new AI Assistant in apex.world 2.0 (Co-prented with Wolf Beckmann)',
    language: '🇬🇧',
    slides: '',
  },
  {
    year: 2025,
    conference: 'APEX Connect 2025',
    place: 'Rust, DE',
    title: 'CSS Variables: The Secret Sauce of APEX Styling',
    language: '🇬🇧',
    slides: '',
  },
  {
    year: 2025,
    conference: 'APEX World 2025',
    place: 'Ede, NL',
    title: 'APEX UX: treat your users as you like to be treated',
    language: '🇬🇧',
    slides: '/slides/apex-world-2025-apex-ux',
  },
  {
    year: 2025,
    conference: 'APEX World 2025',
    place: 'Ede, NL',
    title: 'CSS Variables: The Secret Sauce of APEX Styling',
    language: '🇬🇧',
    slides: '/slides/apex-world-2025-apex-css-vars',
  },
  {
    year: 2024,
    conference: 'KScope 2024',
    place: 'Nashville, TN, USA',
    title: 'Step-by-Step Creation of an Offline APEX App with Plug-Ins',
    language: '🇬🇧',
    slides: '/slides/kscope-2024-offline-apex.html',
  },
  {
    year: 2024,
    conference: 'KScope 2024',
    place: 'Nashville, TN, USA',
    title: 'Oracle 23c unleashed: App Development with JSON Duality Views',
    language: '🇬🇧',
    slides: '/slides/kscope-2024-json-duality-views.html',
  },
  {
    year: 2024,
    conference: 'KScope 2024',
    place: 'Nashville, TN, USA',
    title:
      'From Concept to Component: efficient Template Component development',
    language: '🇬🇧',
    slides: '/slides/kscope-2024-template-components.html',
  },
  {
    year: 2024,
    conference: 'APEX Connect 2024',
    place: 'Düsseldorf, DE',
    title: 'Step-by-Step Creation of an Offline APEX App with Plug-Ins',
    language: '🇬🇧',
    slides: '/slides/apex-conn-24-offline-apex.html',
  },
  {
    year: 2024,
    conference: 'APEX World 2024',
    place: 'Amersfoort, NL',
    title: 'Step-by-Step Creation of an Offline APEX App with Plug-Ins',
    language: '🇬🇧',
    // slides: '/slides/apex_world24_apex_offline.pdf',
  },
  {
    year: 2024,
    conference: 'APEX World 2024',
    place: 'Amersfoort, NL',
    title:
      'From Concept to Component: efficient Template Component development',
    language: '🇬🇧',
    slides: '/slides/apex_world24_template_components.pdf',
  },
  {
    year: 2023,
    conference: 'DOAG 2023',
    place: 'Nürnberg, DE',
    title: 'Offline data manipulations for everyone with Plug-Ins and SQLite',
    language: '🇬🇧',
    slides: '/slides/DOAG-2023-P_Hartenfeller-apex-off-grid.pdf',
  },
  {
    year: 2023,
    conference: 'UKOUG 2023',
    place: 'Reading, UK',
    title: 'APEX UI Testing: Best Practices and Pitfalls',
    language: '🇬🇧',
    slides: '/slides/UKOUG2023-apex-testing-Hartenfeller.pdf',
  },
  {
    year: 2023,
    conference: 'Kscope 2023',
    place: 'Aurora, CO, USA',
    title: 'Offline data manipulations for everyone with Plug-Ins and SQLite',
    language: '🇬🇧',
  },
  {
    year: 2023,
    conference: 'APEX Connect 2023',
    place: 'Berlin, DE',
    title: 'Offline data manipulations for everyone with Plug-Ins and SQLite',
    language: '🇬🇧',
  },
  {
    year: 2023,
    conference: 'APEX World 2023',
    place: 'Zeist, NL',
    title: 'Offline data manipulations for everyone with Plug-Ins and SQLite',
    language: '🇬🇧',
  },
  {
    year: 2022,
    conference: 'DOAG 2022',
    place: 'Nürnberg, DE',
    title: 'Immersive Analytics: Datenvisualisierung mit VR',
    language: '🇩🇪',
  },
  {
    year: 2022,
    conference: 'DOAG 2022',
    place: 'Nürnberg, DE',
    title: 'APEX Security Grundlagen',
    language: '🇩🇪',
    slides: '/slides/DOAG-2022-APEX-Security-Grundlagen-Hartenfeller.pdf',
  },
  {
    year: 2022,
    conference: 'APEX Connect 2022',
    place: 'Brühl, DE',
    title: 'APEX Security Grundlagen',
    language: '🇩🇪',
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
    conference: 'APEX Connect 2020',
    place: 'online',
    title: 'Advanced AOP Templates',
    language: '🇩🇪',
    recording: 'https://www.youtube.com/watch?v=S6XSVb_PHNQ',
  },
  {
    year: 2019,
    conference: 'DOAG 2019',
    place: 'Nürnberg, DE',
    title: 'One API to rule them all - Schnittstellen-Fusion mit GraphQL',
    language: '🇩🇪',
  },
  {
    year: 2019,
    conference: 'APEX Connect 2019',
    place: 'Bonn, DE',
    title: 'Dokumentengenerierung in APEX',
    language: '🇩🇪',
  },
  {
    year: 2018,
    conference: 'DOAG 2018',
    place: 'Nürnberg, DE',
    title: 'Material Design: professionelle User Interfaces im Web',
    language: '🇩🇪',
  },
  {
    year: 2018,
    conference: 'DOAG 2018',
    place: 'Nürnberg, DE',
    title: 'Dokumentengenerierung in APEX',
    language: '🇩🇪',
  },
];

const publications = [
  {
    year: 2022,
    magazine: 'Red Stack Magazin',
    pages: '47 - 51',
    title: 'APEX-Security-Grundlagen',
    language: '🇩🇪',
    link: 'https://backoffice.doag.org/formes/pubfiles/14512917/docs/Publikationen/Red-Stack-Magazin-inkl-Business-News/2022/04-2022/04_2022-Red_Stack_Magazin-Philipp_Hartenfeller-APEX-Security-Grundlagen.pdf',
  },
  {
    year: 2020,
    magazine: 'Red Stack Magazin',
    pages: '67 - 70',
    title: 'Schnittstellenbündelung mit GraphQL',
    language: '🇩🇪',
    link: 'https://backoffice.doag.org/formes/pubfiles/12309827/docs/Publikationen/DOAGNews/2020/04-2020/04_2020-Red_Stack_Magazin-WEB.pdf',
  },
];

const other = [
  {
    year: 2020,
    type: 'Webinar',
    publication: 'DOAG.tv ',
    title: 'Datenschnittstellen mit GraphQL',
    language: '🇩🇪',
    link: 'https://www.doag.org/de/home/news/aufgezeichnet-datenschnittstellen-mit-graphql/detail/',
  },
  {
    year: 2022,
    type: 'Webcast',
    publication: 'apex.world for Dummies',
    title: 'The most important APEX Task (LCT Testing Framework for APEX)',
    language: '🇬🇧',
    link: 'https://www.youtube.com/watch?v=vM8s5IQ5AAI',
  },
  {
    year: 2022,
    type: 'Podcast',
    publication: 'Devs On Tape',
    title: 'Zu Gast: Philipp Hartenfeller - ChatGPT und Github Copilot',
    language: '🇩🇪',
    link: 'https://devsontape.podigee.io/27-philipp-hartenfeller',
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
    <a
      href={p.link}
      className="rounded px-2 py-1 text-red-700 hover:text-red-500 focus:outline-none focus:ring focus:ring-red-300"
    >
      Link
    </a>
  ),
}));

const otherData = other.map((o) => ({
  year: o.year,
  medium: `${o.type}: "${o.publication}"`,
  title: `${o.title} (${o.language})`,
  linkComp: (
    <a
      href={o.link}
      className="rounded px-2 py-1 text-red-700 hover:text-red-500 focus:outline-none focus:ring focus:ring-red-300"
    >
      Link
    </a>
  ),
}));

const PubList = ({ data }) => (
  <div className="overflow-hidden border-b border-zinc-200 shadow sm:rounded-lg">
    <ul className="min-w-full divide-y divide-zinc-200">
      {data.map((d, i) => (
        <li
          key={`${d.year}-${d.title}`}
          className={`text-md grid grid-cols-1 text-zinc-500 md:grid-cols-3 xl:grid-cols-8 ${
            i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
          }`}
        >
          <span className="hidden px-6 py-4 xl:block">{d.year}</span>

          <span className="px-6 py-4 xl:col-span-2" title="conference/medium">
            {d.medium}
          </span>

          <span
            className="px-6 py-4 font-medium text-zinc-700 xl:col-span-3"
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
    <div className="relative bg-white/50 px-4 pt-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h1 className="brown-header-text text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 lg:text-5xl">
            List of conference talks and publications
          </h1>
        </div>
        <div className="mb-24">
          <h2 className="brown-header-text mb-8 text-3xl font-extrabold">
            Conference Talks
          </h2>
          <PubList data={talkData} />
        </div>
        <div className="pb-32">
          <h2 className="brown-header-text mb-8 text-3xl font-extrabold">
            Publications
          </h2>
          <PubList data={pubData} />
        </div>
        <div className="pb-32">
          <h2 className="brown-header-text mb-8 text-3xl font-extrabold">
            Other
          </h2>
          <PubList data={otherData} />
        </div>
      </div>
    </div>
  </Layout>
);

export default Talks;
