import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';

import { Stars } from './components/Stars';
import { Navbar } from './components/Navbar';
import { Sponsors } from './components/Sponsors';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Events } from './components/Events';
import { Schedule } from './components/Schedule';
import { Workshops } from './components/Workshops';
import { IndustrialAlumniMeet } from './components/IndustrialAlumniMeet';
import { FAQ } from './components/FAQ';
function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Stars />
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="relative z-10 snap-start">
          <About />
        </section>


        <section id="events" className="relative mb-20 snap-start">
          <Events />
        </section>
        <section id="schedule" className="relative z-10 snap-start">
          <Schedule />
        </section>
        <section id="workshops" className="relative z-10 snap-start">
          <Workshops />
        </section>
        <section id="industrial-alumni-meet" className="relative z-10 snap-start">
          <IndustrialAlumniMeet />
        </section>
        <section id="gallery" className="relative z-10 mt-20 snap-start">
          <Gallery />
        </section>
        <section id="sponsors" className="relative z-10 snap-start">
          <Sponsors />
        </section>
        <section id="faq" className="relative z-10 snap-start">
          <FAQ />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

