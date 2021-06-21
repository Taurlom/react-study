import React from 'react';

import styles from './CardUser.scss';

const CardUser = () => (
    <div className={styles.user}>
        <div className={styles.avatar} />
        <a href='#' className={styles.userName}>Станислав Грачев</a>
    </div>
);

export default CardUser;