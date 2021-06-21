import React from 'react';

import styles from './Header.scss';
import SearchBlock from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";

const Header = () => (
    <header className={styles.header}>
        <ThreadTitle title={'Личный кабинет'} />
        <SearchBlock />
        <SortBlock />
    </header>
);

export default Header;