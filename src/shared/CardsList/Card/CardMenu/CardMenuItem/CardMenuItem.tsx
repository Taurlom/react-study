import React from "react";
import Icon, { IconProps } from "../../../../Icon/Icon";

import styles from "./CardMenuItem.scss";

export interface CardMenuItemProps {
    text: string;
    icon?: IconProps['name'];
    onClick?: (id: string) => void;
    id: string;
    value?: React.ReactNode;
}

const CardMenuItem = (props: CardMenuItemProps) => {
    const { text, icon, onClick, id } = props;

    const handleClick = (id: string) => {
        onClick && onClick(id);
    };

    return (
        <div className={styles.item} onClick={() => handleClick(id)}>
            {icon && <div className={styles.icon}><Icon name={icon} /></div>}
            <div className={styles.text}>{text}</div>
        </div>
    )
};

export default CardMenuItem;