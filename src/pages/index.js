import React from 'react';

import HeroSection from '../components/HeroSection';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage;