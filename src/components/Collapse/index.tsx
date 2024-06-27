import React, { MouseEventHandler, ReactNode } from "react";

import styles from "./Collapse.module.css";

type CollapseProps = {
  children: ReactNode
};

const Collapse = ( {children}: CollapseProps ) => {
  return (
    <div className={styles['collapse']}>
      {children}
    </div>
  );
};

type CollapseTitleProps = {
  children: ReactNode;
  onClick: MouseEventHandler;
};

export const CollapseTitle = ( {children, onClick}: CollapseTitleProps ) => {
  return (
    <button className={styles['collapse-title']} onClick={onClick}>
      {children}
    </button>
  )
};

type CollapseContentProps = {
  children: ReactNode;
  maxHeight?: string;
  hidden: boolean;
};

export const CollapseContent = ( {children, maxHeight, hidden}: CollapseContentProps ) => {
  const style = maxHeight ? {
    maxHeight
  } : {};

  return (
    <div className={`${styles['collapse-content']} ${hidden && styles['collapse-content--hidden']}`}
      style={style}
    >
      {children}
    </div>
  )
};

export default Collapse;