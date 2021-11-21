import React, { useContext } from 'react';
import UserBlock from './UserBlock/UserBlock'
import styles from './SearchBlock.scss';
import { userContext } from "../../context/userContext";

const SearchBlock = () => {
    const { iconImg, name } = useContext(userContext);

    return (
        <div className={styles.box}>
            <div>searchBlock</div>
            <UserBlock avatar={iconImg} username={name} />
        </div>
    );
};

export default SearchBlock;