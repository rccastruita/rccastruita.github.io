import React, {ReactNode} from 'react';

import style from './Card.module.css';

type CardProps = {
    children: ReactNode
}

const Card = ({children}: CardProps) => {
    return (
        <div className={style.card_container}>
            {children}
        </div>
    );
};

type ChildrenProps = {
    children: ReactNode;
}

export const CardIcon = ({children}: ChildrenProps) => {
    return (
        <span className={style.icon}>
            {children}
        </span>
    );
};

export const CardTitle = ({children}: ChildrenProps) => {
    return (
        <h2 className={style.title}>{children}</h2>
    )
};

export default Card;