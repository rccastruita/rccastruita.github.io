import React from 'react';

import Section, {SectionTitle, SectionContent} from '../Section';
import ML from '../MultiLanguage';

import style from './About.module.css';

const About = () => {

    return (
        <Section>
          <SectionTitle>
            <ML language="en">About me</ML>
            <ML language="es">Acerca de mí</ML>
          </SectionTitle>
          <SectionContent>
            <div className={style.about}>
              <div className={style.flex}>
                <div className={style.picture__wrapper}>
                  <div className={style.picture}></div>
                </div>
                <div className={style.flex__text}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod dolor soluta dicta asperiores praesentium consectetur sit placeat sed necessitatibus recusandae in nulla optio animi at dolore, tempora quisquam quae.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta praesentium doloribus aspernatur molestiae pariatur, vitae atque maxime repellendus laudantium, odit qui earum suscipit nemo sunt numquam consectetur magni eos accusamus?
                  </p>
                </div>
              </div>
            </div>
          </SectionContent>
        </Section>
    );
};

export default About;