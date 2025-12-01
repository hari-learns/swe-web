import React from 'react';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Accomplishments } from './sections/Accomplishments/Accomplishments';
import { Education } from './sections/Education/Education';
import { Contact } from './sections/Contact/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Accomplishments />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
