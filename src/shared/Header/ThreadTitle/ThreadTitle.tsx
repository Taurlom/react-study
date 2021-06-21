import React from 'react';

import styles from './ThreadTitle.scss';

interface ITreadTitleProps {
    title?: string;
}

const ThreadTitle = ({ title }: ITreadTitleProps) => (
    <div className={styles.title}>
        { title }
    </div>
);

export default ThreadTitle;