import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import SkillSet from './components/SkillSet';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
// import ClientReviews from './components/ClientReviews';

const Divider = () => (
  <div style={{ width: '100%', height: '3px', background: '#f3f3f3', margin: '48px auto', maxWidth: '1200px', borderRadius: '2px' }} />
);

function App() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Divider />
      <SkillSet />
      <Divider />
      <Services />
      <Divider />
      <WorkShowcase />
      <Divider />
      <GetInTouch />
      <Footer />
      {/* <ClientReviews /> */}
    </>
  );
}

export default App;
