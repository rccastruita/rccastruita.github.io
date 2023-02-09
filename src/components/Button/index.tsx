import { ReactNode } from "react";

import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  white?: boolean;
}

const Button = ({children, white}: ButtonProps) => {
  return (
    <button className={`${styles.button} ${white && styles['button--white']}`}>
      {children}
    </button>
  );
};

export default Button;