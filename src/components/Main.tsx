import React, { useState } from 'react';

import Hero from "./Hero";
import Navbar from "./Navbar";
import Section from "./Section";

const Main = () => {
  const [hideNav, setHideNav] = useState(false);
  const [lastY, setLastY] = useState(0);

  const handleTouchMove = (e: React.TouchEvent) => {
    const MIN_SCROLL = 5;
    
    const newY = e.changedTouches.item(0)?.screenY ?? -100;

    if (newY < 0)
      return;

    console.log(`onTouchMove: ${lastY}`);
    const dY = newY - lastY;

    if(dY > MIN_SCROLL && hideNav) {
      setHideNav(false);
      setLastY(newY);
      return;
    }

    if(dY < -MIN_SCROLL && !hideNav) {
      setHideNav(true);
      setLastY(newY);
      return;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && !hideNav)
      setHideNav(true);
    else if (e.deltaY < 0 && hideNav)
      setHideNav(false);
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    console.log('onTouchStart');
    setLastY(e.changedTouches.item(0)?.screenY ?? 0);
  }

  return (
    <div
      onTouchMove={handleTouchMove}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
    >
      <Hero />
      <Navbar hide={hideNav} />
      <div>
        <p>{lastY}</p>
      </div>
      <main>
        <Section title="About">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod dolor soluta dicta asperiores praesentium consectetur sit placeat sed necessitatibus recusandae in nulla optio animi at dolore, tempora quisquam quae.
        </Section>
      </main>
    </div>
  );
};

export default Main;