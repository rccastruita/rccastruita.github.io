import { useState, useEffect, ReactNode } from 'react';

import useLanguage from '../../hooks/useLanguage';
import Collapse, { CollapseContent, CollapseTitle } from '../Collapse';
import Dropdown, { 
  DropdownItem, DropdownStatus, DropdownAnchor, DropdownButton
} from '../Dropdown';
import ML from '../MultiLanguage';

import { LanguageKey } from '../../types';

import styles from './Navbar.module.css';

type NavProps = {
  hide: boolean;
}

const Navbar = ({hide}: NavProps) => {
  const [dropdownStatus, setDropdownStatus] = useState(DropdownStatus.Hidden);
  const [currentLanguage, setLanguage] = useLanguage();
  const [languageCollapsed, setLanguageCollapsed] = useState(true);

  useEffect(() => {
    // Hide the dropdown menu when showing the nav
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

  const changeLanguage = (key: LanguageKey) => {
    if( key !== currentLanguage ) {
      setLanguage(key);
    }
  };

  const toggleLanguageCollapsed = () => {
    setLanguageCollapsed(!languageCollapsed);
  };

  const menuActive = dropdownStatus !== DropdownStatus.Active 
    ? styles['navigation__menu--hidden'] : null;

  return (
    <nav 
      className={`${styles.navigation} ${ hide && styles['navigation--hidden']}`}
    >
      <ul>
        <li>
          <ML language="en">
            About me
          </ML>
          <ML language="es">
            Sobre mí
          </ML>
        </li>
        <li>
          <ML language="en">My Skills</ML>
          <ML language="es">Mis Skills</ML>
        </li>
        <li>
          <ML language="en">
            Contact
          </ML>
          <ML language="es">
            Contacto
          </ML>
        </li>
        <li className={styles.navigation__span}></li>
        <li className={`${styles.navigation__menu} ${menuActive}`}>
          <NavButton onClick={handleMenuClick}>
            <span className="material-symbols-outlined">
              { // TODO: Animate toggle
                dropdownStatus === DropdownStatus.Active ? 'close' : 'menu'
              }
            </span>
          </NavButton>
          <Dropdown top left status={dropdownStatus}>
            <DropdownAnchor>
              <ML language="en">About me</ML>
              <ML language="es">Sobre mí</ML>
            </DropdownAnchor>
            <DropdownAnchor>
              <ML language="en">Skills</ML>
              <ML language="es">Skills</ML>
            </DropdownAnchor>
            <DropdownAnchor>
              <ML language="en">Contact</ML>
              <ML language="es">Contacto</ML>
            </DropdownAnchor>

            <DropdownItem> {/* Language menu */}
              <Collapse>
                <CollapseTitle onClick={toggleLanguageCollapsed}>
                  <ML language="en">Language</ML>
                  <ML language="es">Idioma</ML>
                </CollapseTitle>
                <CollapseContent maxHeight="7rem" hidden={languageCollapsed}>
                  <DropdownButton onClick={() => changeLanguage('en')}>
                    <ML language="en">English</ML>
                    <ML language="es">Inglés</ML>
                  </DropdownButton>
                  <DropdownButton onClick={() => changeLanguage('es')}>
                    <ML language="en">Spanish</ML>
                    <ML language="es">Español</ML>
                  </DropdownButton>
                </CollapseContent>
              </Collapse>
            </DropdownItem> {/* -------- Language Menu */}


            <DropdownItem>
              <Collapse>
                <CollapseTitle onClick={() => console.log('theme')}>
                  <ML language="en">Theme</ML>
                  <ML language="es">Tema</ML>
                </CollapseTitle>
              </Collapse>
              
            </DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
};

type NavButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const NavButton = ({ children, onClick }: NavButtonProps) => {
  return (
    <button className={styles['nav-button']} onClick={onClick}>
      {children}
    </button>
  );
};

export default Navbar;