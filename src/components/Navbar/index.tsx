import styles from './Navbar.module.css';

type NavProps = {
  hide: boolean;
}

const Navbar = ({hide}: NavProps) => {
  return (
    <nav 
      className={`${styles.navigation} ${hide && styles['navigation--hidden']}`}
    >
      <ul>
        <li>About me</li>
        <li>My work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;