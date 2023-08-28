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
}
export const SectionTitle = ({children}: ContentProps) => {
  return (
    <h1>{children}</h1>
  )
};
export const SectionContent = ({children}: ContentProps) => {
  return (
    <div>
      {children}
    </div>
  )
};


export default Section;