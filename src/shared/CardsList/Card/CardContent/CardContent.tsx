import React from 'react';

import styles from './CardContent.scss';

interface ICardContent {
    children?: React.ReactNode;
}

const CardContent = ({ children }: ICardContent) => (
    <div className={styles.content}>
        { children }
    </div>
);

export default CardContent;