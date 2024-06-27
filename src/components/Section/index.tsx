import React, { ReactNode } from "react";

import styles from './Section.module.css';

export enum SectionStyle {
  Primary,
  Secondary,
  Tertiary,
  White,
  Black
}

type SectionProps = {
  children: ReactNode;
  sectionStyle?: SectionStyle;
  /*title: string;*/
}

const Section = ({children, sectionStyle}: SectionProps) => {
  let type;
  switch (sectionStyle) {
    case SectionStyle.Primary:
      type = styles['section--primary'];
      break;
    case SectionStyle.Secondary:
      type = styles['section--secondary'];
      break;
    case SectionStyle.Tertiary:
      type = styles['section--tertiary'];
      break;
    case SectionStyle.Black:
      type = styles['section--black'];
      break;
    case SectionStyle.White:
    default:
      type = styles['section--white'];
      break;
  }
  return (
    <section className={`${styles.section} ${type}`}>
      {children}
    </section>
  );
};

type ContentProps = {
  children: ReactNode;
  className?: string;
}
export const SectionTitle = ({children}: ContentProps) => {
  return (
    <h1 className={styles['section-title']}>{children}</h1>
  )
};
export const SectionContent = ({children, className}: ContentProps) => {
  return (
    <div className={`${styles['section-content']} ${className}`}>
      {children}
    </div>
  )
};


export default Section;