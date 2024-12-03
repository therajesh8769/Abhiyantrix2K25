import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Stars } from './components/Stars';
import { Navbar } from './components/Navbar';
import { Sponsors } from './components/Sponsors';
function App() {
  return (
    <div className="relative">
      <Stars />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="events" style={{ position: 'relative', zIndex: 10 }}>
        <Events />
      </section>
      <section id="sponsors" style={{ position: 'relative', zIndex: 8 }}>
        <Sponsors />
      </section>
    </div>
  );
}

export default App;