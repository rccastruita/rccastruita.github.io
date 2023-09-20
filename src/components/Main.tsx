import React, { useState, useEffect } from 'react';

import useNavScrollEvents from '../hooks/useNavScrollEvents';

import Hero from "./Hero";
import Navbar from "./Navbar";
import Section, {SectionTitle, SectionContent} from "./Section";
import ML from './MultiLanguage';

import AboutImage from '../img/novicio_1.jpg';
import style from './Main.module.css';

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
      <main className={style.main}>
        <Section>
          <SectionTitle>
            <ML language="en">About me</ML>
            <ML language="es">Acerca de mí</ML>
          </SectionTitle>
          <SectionContent>
            <div className={style.about}>
              <img src={AboutImage} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod dolor soluta dicta asperiores praesentium consectetur sit placeat sed necessitatibus recusandae in nulla optio animi at dolore, tempora quisquam quae.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta praesentium doloribus aspernatur molestiae pariatur, vitae atque maxime repellendus laudantium, odit qui earum suscipit nemo sunt numquam consectetur magni eos accusamus?
              </p>
            </div>
          </SectionContent>
        </Section>
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