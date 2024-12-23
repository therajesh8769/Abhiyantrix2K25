import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';

import { Stars } from './components/Stars';
import { Navbar } from './components/Navbar';
import { Sponsors } from './components/Sponsors';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Events } from './components/Events';
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
       
        <section id="gallery" className="relative z-10 my-20 snap-start">
          <Gallery />
        </section>
        <section id="events" className="relative z-10 mb-20 snap-start">
          <Events />
        </section>
        <section id="sponsors" className="relative z-10 mt-16 snap-start">
          <Sponsors />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

