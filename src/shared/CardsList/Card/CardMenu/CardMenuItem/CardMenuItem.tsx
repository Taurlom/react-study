import React from "react";

import styles from "./CardMenuItem.scss";

export interface CardMenuItemProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: (id: string) => void;
    id: string;
    value?: React.ReactNode;
}

const CardMenuItem = (props: CardMenuItemProps) => {
    const { text, icon, onClick } = props;

    return (
        <div className={styles.item} onClick={() => onClick}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

export default CardMenuItem;

