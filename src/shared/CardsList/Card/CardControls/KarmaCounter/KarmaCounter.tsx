import React from 'react';

import styles from './KarmaCounter.scss';

const CardMenu = () => (
    <div className={styles.box}>
        <button className={styles.buttonUp}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                <path d="M9.5 0L0 10H19L9.5 0Z" fill="currentColor"/>
            </svg>
        </button>
        <div className={styles.counter}>346</div>
        <button className={styles.buttonDown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="currentColor"/>
            </svg>
        </button>
    </div>
);

export default CardMenu;