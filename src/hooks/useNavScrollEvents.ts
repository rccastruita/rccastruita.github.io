import React, { TouchEventHandler, WheelEventHandler } from "react";

type NavEventsTuple = [WheelEventHandler, TouchEventHandler, TouchEventHandler];

const useNavScrollEvents = (
  lastY: number,
  setLastY: React.Dispatch<React.SetStateAction<number>>,
  hideNav: boolean,
  setHideNav: React.Dispatch<React.SetStateAction<boolean>>
): NavEventsTuple => {
  const handleTouchMove = (e: React.TouchEvent) => {
    const MIN_SCROLL = 50;
    
    const newY = e.changedTouches.item(0)?.screenY ?? -100;

    if (newY < 0)
      return;

    const dY = newY - lastY;

    if(dY > MIN_SCROLL && !hideNav) {
      setLastY(newY);
    }
    else if (dY < -MIN_SCROLL && hideNav) {
      setLastY(newY);
    }

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
    setLastY(e.changedTouches.item(0)?.screenY ?? 0);
  }

  return [handleWheel, handleTouchStart, handleTouchMove];
};

export default useNavScrollEvents;