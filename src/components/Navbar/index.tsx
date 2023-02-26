import { useState, useEffect } from 'react';

import Dropdown, { DropdownItem, DropdownButton, DropdownStatus } from '../Dropdown';

import styles from './Navbar.module.css';

type NavProps = {
  hide: boolean;
}

const Navbar = ({hide}: NavProps) => {
  const [dropdownStatus, setDropdownStatus] = useState(DropdownStatus.Hidden);

  useEffect(() => {
    // Hide the dropdown menu while showing the nav
    // if it was visible when the nav was hidden
    if (!hide && dropdownStatus === DropdownStatus.Active) {
      setDropdownStatus(DropdownStatus.Hidden);
    }
  }, [hide]);

  const handleMenuClick = () => {
    switch(dropdownStatus) {
      case DropdownStatus.Active:
        setDropdownStatus(DropdownStatus.ToggledOff);
        break;
      case DropdownStatus.Hidden:
      case DropdownStatus.ToggledOff:
        setDropdownStatus(DropdownStatus.Active);
        break;
    }
  };

  const menuActive = dropdownStatus !== DropdownStatus.Active 
    ? styles['navigation__menu--hidden'] : null;

  return (
    <nav 
      className={`${styles.navigation} ${ hide && styles['navigation--hidden']}`}
    >
      <ul>
        <li>About me</li>
        <li>My work</li>
        <li>Contact</li>
        <li className={styles.navigation__span}></li>
        <li className={`${styles.navigation__menu} ${menuActive}`}>
          <DropdownButton status={dropdownStatus}
            onClick={handleMenuClick}
          >
            <span className="material-symbols-outlined">
              { // TODO: Animate change
                dropdownStatus === DropdownStatus.Active ? 'close' : 'menu'
              }
            </span>
          </DropdownButton>
          <Dropdown top left status={dropdownStatus}>
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