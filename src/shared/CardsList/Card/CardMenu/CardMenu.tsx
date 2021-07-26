import React, { useState } from 'react';
import { generateId } from "../../../../utils/ts/generateRandomIndex";
import { compose } from "../../../../utils/ts/compose";
import Dropdown from "../../../Dropdown/Dropdown";
import CardMenuItem, { CardMenuItemProps } from "./CardMenuItem";
import { stopPropagation } from "../../../../utils/react/stopPropagation";

import styles from './CardMenu.scss';

import { iconMenuButton } from "../../../Icons/Icons";
import {GenericList, GenericListItem} from "../../../Dropdown/GenericList";
import {CardMenuItemType} from "../../../Data/dropdowns";

function setItemsId(items: CardMenuItemType[]) {
    return items.map(generateId);
}

function getListItems(items: CardMenuItemProps[]) {
    items.map((item) => {
        item.value = <CardMenuItem id={item.id} text={item.text} icon={item.icon}/>
    });
    return items;
}

const cardMenuItems = compose<GenericListItem[]>(setItemsId, getListItems);

interface CardMenuProps {
    data: CardMenuItemType[];
}

const CardMenu = ({ data }: CardMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const button = <button className={styles.menuButton} onClick={stopPropagation(() => setIsOpen(true))}>{iconMenuButton}</button>;

    return (
        <div className={styles.menu}>
            <Dropdown button={button} isOpen={isOpen}>
                <div className={styles.menuBox}>
                    <GenericList list={cardMenuItems(data)}/>
                    <button className={styles.buttonClose} onClick={() => setIsOpen(false)}>Закрыть</button>
                </div>
            </Dropdown>
        </div>
    )
};

export default CardMenu;