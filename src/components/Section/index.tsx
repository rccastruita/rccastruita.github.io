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
  Primary?: boolean;
  Secondary?: boolean;
  Tertiary?: boolean;
  White?: boolean;
  Black?: boolean;
}

const Section = (props: SectionProps) => {
  let type;
  if(props.Primary)
    type = styles['section--primary'];
  else if (props.Secondary)
    type = styles['section--secondary'];
  else if (props.Tertiary)
    type = styles['section--tertiary'];
  else if (props.Black)
    type = styles['section--black'];
  else
    type = styles['section--white'];

  return (
    <section className={`${styles.section} ${type}`}>
      {props.children}
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