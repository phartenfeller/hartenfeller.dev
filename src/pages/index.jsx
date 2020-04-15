import { Link } from 'gatsby';
import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Projects from '../components/Projects';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';
import '../styles/font.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SocialLinks />
    <Projects />
    <Contact />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
