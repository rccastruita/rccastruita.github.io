import React, { useState } from 'react';

import useNavScrollEvents from '../hooks/useNavScrollEvents';

import Hero from "./Hero";
import Navbar from "./Navbar";
import Section from "./Section";

const Main = () => {
  const [hideNav, setHideNav] = useState(false);
  const [lastY, setLastY] = useState(0);

  const [handleWheel, handleTouchStart, handleTouchMove] = useNavScrollEvents(
    lastY, setLastY, hideNav, setHideNav
  );

  return (
    <div
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      <Hero />
      <Navbar hide={false} />
      <main>
        <Section title="About">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod dolor soluta dicta asperiores praesentium consectetur sit placeat sed necessitatibus recusandae in nulla optio animi at dolore, tempora quisquam quae.
        </Section>
        <Section title="Contact">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio dolor non. Alias cumque ducimus pariatur blanditiis quisquam eaque sapiente facilis, inventore laboriosam corporis tenetur dolor nulla magnam quibusdam optio?
        </Section>
      </main>
    </div>
  );
};

export default Main;