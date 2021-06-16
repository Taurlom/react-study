import React from 'react';
import { hot } from 'react-hot-loader/root';

import styles from './header.scss';

const HeaderComponent = () => (
    <header className={styles.example}>
        <h1>Hello React</h1>
    </header>
);

const Header = hot(HeaderComponent);

export default Header;