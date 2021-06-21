import React from 'react';

import styles from './Content.scss';

interface IContentProps {
    children?: React.ReactNode;
}

const Content = ({ children }: IContentProps) => (
    <main className={styles.content}>
        {children}
    </main>
);

export default Content;