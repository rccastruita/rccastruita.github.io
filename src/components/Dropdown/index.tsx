import React, { ReactNode } from 'react';

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
      <ul>
        {children}
      </ul>
    </div>
  )
};

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const DropdownButton = ({ children, onClick }: ButtonProps) => {
  return (
    <li className={styles['dropdown-button']}>
      <button onClick={onClick}>
        {children}
      </button>
    </li>
  )
};

type AnchorProps = {
  children: ReactNode;
};

export const DropdownAnchor = ({ children }: AnchorProps) => {
  return (
    <li className={`${styles['dropdown-item']} ${styles['dropdown-anchor']}`}>
      <a>{children}</a>
    </li>
  )
};

type ItemProps = {
  children: ReactNode;
  button?: boolean;
  anchor?: boolean;
};

/* TODO: decide if implement unified component */
export const DropdownItem = ({children, button}: ItemProps) => {
  const modificator = button ? styles['dropdown-item--button'] : null;
  return (
    <li className={`${styles['dropdown-item']} ${modificator}`}>
      {children}
    </li>
  );
};

export default Dropdown;