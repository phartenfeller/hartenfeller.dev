import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/font.css';
import Hero from '../components/hero';
import SocialLinks from '../components/SocialLinks';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SocialLinks />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
