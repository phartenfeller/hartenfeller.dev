import React from 'react';
import About from '../components/About';
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
    <About />
    <Projects />
    <div
      style={{
        backgroundImage: `url(${svg})`,
        height: '24px'
      }}
    />
    <Contact />
  </Layout>
);

export default IndexPage;
