import React from 'react';
import styles from './Hero.module.css';

import Button from '../Button';
import ML from '../MultiLanguage';


const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Rafael Carmona</h1>
      
      <h2 className={styles.subtitle}>
        <ML language="en">
          If it needs code, <br /> you need <strong>me</strong>.
        </ML>
        <ML language="es">
        Si necesitas programarlo, <br /> me necesitas a <strong>mí</strong>.
        </ML>
      </h2>
      <div className={styles['button-group']}>
        <Button secondary>
          <ML language="en">Contact me</ML>
          <ML language="es">Contacto</ML>
        </Button>
        <Button>
          <ML language="en">See my work</ML>
          <ML language="es">Mira mi trabajo</ML>
        </Button>
      </div>
    </div>
  )
};

export default Hero;