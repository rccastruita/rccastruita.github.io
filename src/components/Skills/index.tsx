import React from 'react';

import Section, {SectionTitle, SectionContent} from '../Section';
import Card, {CardIcon, CardTitle} from '../Card';
import Icon from '../Icon';

import ML from '../MultiLanguage';

import style from './Skills.module.css';

const Skills = () => {
    return (
        <Section Secondary>
            <SectionTitle>
                <ML language="en">My Skills</ML>
                <ML language="es">Mis Skills</ML>
            </SectionTitle>
            <SectionContent>
                <div className={style.cards_container}>
                    <Card>
                        <CardIcon>
                            <Icon frontend />
                        </CardIcon>
                        <CardTitle>Frontend</CardTitle>
                    </Card>
                    <Card>
                        <CardIcon>
                            <Icon backend />
                        </CardIcon>
                        <CardTitle>Backend</CardTitle>
                    </Card>
                    <Card>
                        <CardIcon>
                            <Icon testing />
                        </CardIcon>
                        <CardTitle>
                            <ML language='en'>Testing</ML>
                            <ML language='es'>Pruebas</ML>
                        </CardTitle>
                    </Card>
                    <Card>
                        <CardIcon>
                            <Icon automation />
                        </CardIcon>
                        <CardTitle>
                            <ML language='en'>Automation</ML>
                            <ML language='es'>Automatización</ML>
                        </CardTitle>
                    </Card>
                </div>
            </SectionContent>
        </Section>
    );
};

export default Skills;