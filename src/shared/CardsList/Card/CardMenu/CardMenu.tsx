import React, { useState } from 'react';
import { generateId } from "../../../../utils/ts/generateRandomIndex";
import Dropdown from "../../../Dropdown/Dropdown";
import CardMenuItem from "./CardMenuItem";
import { stopPropagation } from "../../../../utils/react/stopPropagation";
import Icon, { IconProps } from "../../../Icon/Icon";

import styles from './CardMenu.scss';

interface CardMenuProps {
    cardId: string;
    data: {
        text: string,
        icon: IconProps['name']
    }[];
}

const CardMenu = ({ data }: CardMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const button = <button className={styles.menuButton} onClick={stopPropagation(() => setIsOpen(true))}><Icon name="menubtn" /></button>;
    const withId = data.map(generateId);

    return (
        <div className={styles.menu}>
            <Dropdown button={button} isOpen={isOpen}>
                <div className={styles.menuBox}>
                    {withId.map((item) => <CardMenuItem key={item.id} id={item.id} text={item.text} icon={item.icon} onClick={() => setIsOpen(false)}/>)}
                    <button className={styles.buttonClose} onClick={() => setIsOpen(false)}>Закрыть</button>
                </div>
            </Dropdown>
        </div>
    )
};

export default CardMenu;