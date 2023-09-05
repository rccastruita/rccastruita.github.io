import { ReactNode } from "react";

import styles from './Section.module.css';

type SectionProps = {
  children: ReactNode;
  /*title: string;*/
}

const Section = ({children}: SectionProps) => {
  return (
    <section className={styles.section}>
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