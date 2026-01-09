import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import FeaturedProjects from '../components/FeaturedProjects';
import Members from '../components/Members';
import Library from '../components/Library';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Programs />
      <FeaturedProjects />
      <Members />
      <Library />
    </>
  );
};

export default HomePage;
