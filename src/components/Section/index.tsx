import { ReactNode } from "react";

import styles from './Section.module.css';

type SectionProps = {
  children: ReactNode;
  title: string;
}

const Section = ({children, title}: SectionProps) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Section;