import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Corona from '../Corona';
import { DataCards } from '../DataCards';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection/>
      <Cards data = {DataCards}/>
      <Corona/>
     </>         
  );
}

export default Home;
     