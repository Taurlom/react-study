import React from 'react';

import styles from './CardsList.scss';
import Card from "./Card/Card";

const CardsList = () => (
    <div className={styles.cardList}>
        <Card />
        <Card />
        <Card />
    </div>
);

export default CardsList;