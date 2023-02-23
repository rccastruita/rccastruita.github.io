import { useState, useEffect } from 'react';

import Dropdown, { DropdownItem } from '../Dropdown';

import styles from './Navbar.module.css';

type NavProps = {
  hide: boolean;
}

const Navbar = ({hide}: NavProps) => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (!hide) {
      setMenuActive(false);
    }
  }, [hide]);

  return (
    <nav 
      className={`${styles.navigation} ${ hide && styles['navigation--hidden']}`}
    >
      <ul>
        <li>About me</li>
        <li>My work</li>
        <li>Contact</li>
        <li className={styles.navigation__span}></li>
        <li 
          className={`${styles['burger-menu']} ${menuActive && styles['burger-menu--active']}`}
        >
          <span className="material-symbols-outlined"
            onClick={() => setMenuActive(!menuActive)}
          >
            menu
          </span>
          <Dropdown top left active={menuActive}>
            <DropdownItem>About me</DropdownItem>
            <DropdownItem>My work</DropdownItem>
            <DropdownItem>Contact</DropdownItem>
            <DropdownItem>Language</DropdownItem>
            <DropdownItem>Theme</DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;