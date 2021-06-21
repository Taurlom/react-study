import React from 'react';

import styles from './CreateAt.scss';

const CreateAt = () => (
    <div className={styles.createAt}>
        <span className={styles.prefix}>опубликовано&nbsp;</span>4 часа назад
    </div>
);

export default CreateAt;