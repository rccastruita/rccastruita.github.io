import { ReactNode } from 'react';

import styles from './Dropdown.module.css';

export enum DropdownStatus {
  Hidden,
  Active,
  ToggledOff
}

type DropdownProps = {
  children: ReactNode;
  className?: string;
  status: DropdownStatus;

  top?: boolean;
  left?: boolean;
};

const Dropdown = ({status, children, className, top, left}: DropdownProps) => {
  const positionBlock = top ? styles['dropdown--top'] : styles['dropdown--bottom'];
  const positionInline = left ? styles['dropdown--left'] : styles['dropdown--right'];

  const position = `${positionBlock} ${positionInline}`;

  let stateClass: string;

  switch(status) {
    case DropdownStatus.Active:
      stateClass = styles['dropdown--active'];
      break;
    case DropdownStatus.Hidden:
      stateClass = styles['dropdown--hidden'];
      break;
    case DropdownStatus.ToggledOff:
      stateClass = styles['dropdown--toggled'];
      break;
  }

  return (
    <div className={`${styles.dropdown} ${stateClass} ${position} ${className}`}>
      <ul className={styles.dropdown__ul}>
        {children}
      </ul>
    </div>
  )
};

type ButtonProps = {
  children: ReactNode;
  status: DropdownStatus;
  onClick: () => void;
};

export const DropdownButton = ({ children, status, onClick }: ButtonProps) => {
  const classNames = 
    `${styles['dropdown-button']} ${status === DropdownStatus.ToggledOff && styles['dropdown-button--toggled']}`;

  return (
    <button className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
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