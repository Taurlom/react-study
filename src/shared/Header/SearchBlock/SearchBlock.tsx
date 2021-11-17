import React, { useContext } from 'react';
import UserBlock from './UserBlock/UserBlock'
import styles from './SearchBlock.scss';
import { userContext } from "../../context/userContext";
import { usePostsData } from '../../../hooks/usePostsData'

const SearchBlock = () => {
    const { iconImg, name } = useContext(userContext);
    const [ data ] = usePostsData();

    console.log('PostsData');
    console.log(data);

    return (
        <div className={styles.box}>
            <div>searchBlock</div>
            <UserBlock avatar={iconImg} username={name} />
        </div>
    );
};

export default SearchBlock;