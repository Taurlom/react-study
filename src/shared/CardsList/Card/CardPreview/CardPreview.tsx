import React from 'react';

import styles from './CardPreview.scss';

const CardPreview = ({url}: {url: string}) => (
    <div className={styles.preview}>
        <img src={url} alt="image" />
    </div>
);

export default CardPreview;