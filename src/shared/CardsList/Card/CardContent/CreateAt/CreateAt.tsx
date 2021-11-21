import React from 'react';

import styles from './CreateAt.scss';

interface CreateAtProps {
    date: number;
}

const CreateAt = ({ date }: CreateAtProps) => {
    const dateFormated = new Date(date * 1000);

    return (
        <div className={styles.createAt}>
            <span className={styles.prefix}>опубликовано&nbsp;</span>{dateFormated.toLocaleString('ru')}
        </div>
    );
};

export default CreateAt;