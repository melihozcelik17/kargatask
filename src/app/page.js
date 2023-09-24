import React from 'react';
import Home from '../components/Home/Home';
import Services from '../components/OurServices/page';
import Team from '../components/Team/page';
import StartProject from '../components/Start_Project/page';
import FAQ from '../components/FAQ/page';
import Contact from '../components/Contact/page';
import Feedback from '../components/Feedback/page';
import Link from 'next/link';
import Mobile from './Mobile/LeftPane';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <main>
      <Home />
      <Services />
      <Team />
      <Feedback />
      <StartProject />
      <FAQ />
      <Contact />
      <Footer />


    </main>
  )
}