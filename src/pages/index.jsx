import { Link } from 'gatsby';
import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Projects from '../components/Projects';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';
import svg from '../images/transition.svg';
import '../styles/font.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SocialLinks />
    <Projects />
    <div
      style={{
        backgroundImage: `url(${svg})`,
        height: '24px'
      }}
    />
    <Contact />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
