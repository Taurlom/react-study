import React from 'react';

import styles from './Header.scss';
import SearchBlock from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";
import UserBlock from "./UserBlock/UserBlock";

const Header = () => (
    <header className={styles.header}>
        <ThreadTitle title={'Личный кабинет'} />
        <SearchBlock />
        <UserBlock />
        <SortBlock />
    </header>
);

export default Header;