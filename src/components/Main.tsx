import React, { useState, useEffect } from 'react';

import useNavScrollEvents from '../hooks/useNavScrollEvents';

import Hero from "./Hero";
import Navbar from "./Navbar";
import Section, {SectionTitle, SectionContent} from "./Section";

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
          <SectionTitle>About me</SectionTitle>
          <img src={AboutImage} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod dolor soluta dicta asperiores praesentium consectetur sit placeat sed necessitatibus recusandae in nulla optio animi at dolore, tempora quisquam quae.
        </Section>
        <Section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio dolor non. Alias cumque ducimus pariatur blanditiis quisquam eaque sapiente facilis, inventore laboriosam corporis tenetur dolor nulla magnam quibusdam optio?
        </Section>
      </main>
    </div>
  );
};

export default Main;