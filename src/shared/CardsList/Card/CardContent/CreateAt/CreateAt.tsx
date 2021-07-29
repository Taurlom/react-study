import React from 'react';

import styles from './CreateAt.scss';

interface CreateAtProps {
    date: string;
}

const CreateAt = ({ date }: CreateAtProps) => (
    <div className={styles.createAt}>
        <span className={styles.prefix}>опубликовано&nbsp;</span>{date}
    </div>
);

export default CreateAt;