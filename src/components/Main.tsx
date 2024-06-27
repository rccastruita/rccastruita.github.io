import React, { useState, useEffect } from 'react';

import useNavScrollEvents from '../hooks/useNavScrollEvents';

import Hero from "./Hero";
import Navbar from "./Navbar";
import Section, {SectionTitle, SectionContent} from "./Section";
import About from './About';
import Skills from './Skills';

import ML from './MultiLanguage';

const Main = () => {
  const [hideNav, setHideNav] = useState(false);
  const [lastY, setLastY] = useState(0);

  const [handleWheel, handleTouchStart, handleTouchMove, handleKeyDown] = useNavScrollEvents(
    lastY, setLastY, hideNav, setHideNav
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    const cleanup = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

    return cleanup;
  }, []);

  return (
    <div
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      /* TODO: detect scroll with keyboard */
    >
      <Hero />
      <Navbar hide={hideNav} />
      <main>
        <About />
        <Skills />
        <Section>
          <SectionTitle>
            <ML language="en">Contact</ML>
            <ML language="es">Contacto</ML>
          </SectionTitle>
          <SectionContent>
            <h2>Email</h2>
            <p>rccastruita@gmail.com</p>
            
          </SectionContent>
        </Section>
      </main>
    </div>
  );
};

export default Main;