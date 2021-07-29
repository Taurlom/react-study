import React from 'react';

import styles from './CardUser.scss';

export interface CardUserProps {
    name: string;
}

const CardUser = ({ name }: CardUserProps) => (
    <div className={styles.user}>
        <div className={styles.avatar} />
        <a href='#' className={styles.userName}>{ name }</a>
    </div>
);

export default CardUser;