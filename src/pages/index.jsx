import React from 'react';
import Hero from '../components/hero';
import About from '../components/index/About';
import Contact from '../components/index/Contact';
import LatestBlogposts from '../components/index/LatestBlogposts';
import ProjectsPreview from '../components/index/ProjectsPreview';
import SocialLinks from '../components/index/SocialLinks';
import Layout from '../components/layout';
import SEO from '../components/seo';
import svg from '../images/transition.svg';
import '../styles/font.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SocialLinks />
    <About />
    <LatestBlogposts />
    <ProjectsPreview />
    <div
      style={{
        backgroundImage: `url(${svg})`,
        height: '24px',
      }}
    />
    <Contact />
  </Layout>
);

export default IndexPage;
