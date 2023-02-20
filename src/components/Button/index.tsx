import { ReactNode } from "react";

import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  white?: boolean;
  secondary?: boolean;
}

const Button = ({children, white, secondary}: ButtonProps) => {
  const modifier = secondary ? styles['button--secondary']
    : white ? styles['button--white'] : null;
  return (
    <button className={`${styles.button} ${modifier}`}>
      {children}
    </button>
  );
};

export default Button;