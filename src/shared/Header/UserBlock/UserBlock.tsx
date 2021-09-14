import React from 'react';
import Icon from "../../Icon/Icon";

import styles from './UserBlock.scss';

export interface UserBlockProps {
    username?: string;
    avatar?: string;
}

const UserBlock = (props: UserBlockProps) => {
    const { username, avatar } = props;

    return (
        <a
            href='https://www.reddit.com/api/v1/authorize?client_id=2H7-baP8lrAM4h-gZtP9_w&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
            className={styles.root}
        >
            <div className={styles.avatar}>
                {avatar
                    ? <img src={avatar} />
                    : <Icon name="login" size={50} />
                }
            </div>
            <div className={styles.username}>{username || 'Гость'}</div>
        </a>
    );
};

export default UserBlock;