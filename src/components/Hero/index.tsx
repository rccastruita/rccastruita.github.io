import styles from './Hero.module.css';

import { TextEntry } from '../../types';
import useTextEntry from '../../hooks/useTextEntry';
import useLanguage from '../../hooks/useLanguage';

import Button from '../Button';

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
      en: 'If it needs code, you need',
      es: 'Si necesitas programarlo, me necesitas a'
    }
  }, {
    key: 'STRONG',
    values: {
      en: 'me.',
      es: 'mí.'
    }
  }
];

const Hero = () => {
  const getText = useTextEntry(texts);
  const [lan] = useLanguage();

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{getText('NAME')}</h1>
      <h2 className={styles.subtitle}>
        {
          lan === 'en' &&
          <>
            If it needs code, <br /> you need <strong>me</strong>.
          </>
        } {
          lan === 'es' &&
          <>
            Si necesitas programarlo, <br /> me necesitas a <strong>mí</strong>.
          </>
        }
      </h2>
      <div className={styles['button-group']}>
        <Button white>Contact me</Button>
        <Button>See my work</Button>
      </div>
    </div>
  )
};

export default Hero;