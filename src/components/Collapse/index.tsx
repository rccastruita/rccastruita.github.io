import { ReactNode } from "react";

import styles from "./Collapse.module.css";

const Collapse = ( {children}: CollapseProps ) => {
  return (
    <div className={styles['collapse']}>
      {children}
    </div>
  );
};

type CollapseProps = {
  children: ReactNode
}

export const CollapseTitle = ( {children}: CollapseProps ) => {
  return (
    <div className={styles['collapse-title']}>
      {children}
    </div>
  )
};

export const CollapseContent = ( {children}: CollapseProps ) => {
  return (
    <div className={styles['collapse-content']}>
      {children}
    </div>
  )
};

export default Collapse;