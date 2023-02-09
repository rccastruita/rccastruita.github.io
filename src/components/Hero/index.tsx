import styles from './Hero.module.css';
import { TextEntry } from '../../types';
import useTextEntry from '../../hooks/useTextEntry';

const texts: Array<TextEntry> = [
  {
    key: 'NAME',
    values: {
      en: 'Rafael Carmona',
      es: 'Rafael Carmona'
    }
  }, {
    key: 'SUBTITLE',
    values: {
      en: 'If it needs code, you need me',
      es: 'Si necesitas programarlo, me necesitas a mí'
    }
  }
];

const Hero = () => {
  const getText = useTextEntry(texts);
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{getText('NAME')}</h1>
      <h2 className={styles.subtitle}>If it needs code, you need <strong>me</strong></h2>
    </div>
  )
};

export default Hero;