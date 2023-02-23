import { ReactNode } from 'react';

import styles from './Dropdown.module.css';

type DropdownProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;

  top?: boolean;
  left?: boolean;
};

const Dropdown = ({children, className, active, top, left}: DropdownProps) => {
  const positionBlock = top ? styles['dropdown--top'] : styles['dropdown--bottom'];
  const positionInline = left ? styles['dropdown--left'] : styles['dropdown--right'];

  const position = `${positionBlock} ${positionInline}`;

  const state = active ? styles['dropdown--active'] : styles['dropdown--hidden'];

  return (
    <div className={`${styles.dropdown} ${state} ${position} ${className}`}>
      <ul className={styles.dropdown__ul}>
        {children}
      </ul>
    </div>
  )
};

type ItemProps = {
  children: ReactNode;
};

export const DropdownItem = ({children}: ItemProps) => {
  return (
    <li className={styles['dropdown-item']}>
      <div className={styles['dropdown-item__content']}>{children}</div>
    </li>
  );
};

export default Dropdown;