import React from 'react';
import CardContent from "./CardContent/CardContent";
import CardPreview from "./CardPreview/CardPreview";
import CardMenu from "./CardMenu/CardMenu";
import CardControls from "./CardControls/CardControls";
import CardUser, { CardUserProps } from "./CardContent/CardUser/CardUser";
import CreateAt from "./CardContent/CreateAt/CreateAt";

import styles from './Card.scss';

import { CARD_MENU_DATA } from "../../Data/dropdowns";
import {IconProps} from "../../Icon/Icon";

type CardMenuDataType = {
    text: string,
    icon: IconProps['name']
}

interface CardProps {
    title: string;
    cardId: string;
    create: number;
    user: CardUserProps;
    preview: string;
    href: string;
}

const Card = (props: CardProps) => {
    const {title, cardId, create, user, preview, href} = props;

    return (
        <a href={`https://www.reddit.com${href}`} className={styles.card}>
            <CardContent>
                <div className={styles.metaData}>
                    <CardUser name={user.name}/>
                    <CreateAt date={create}/>
                </div>
                <div className={styles.title}>{title}</div>
            </CardContent>
            <CardPreview url={preview}/>
            <CardMenu data={CARD_MENU_DATA as CardMenuDataType[]} cardId={cardId}/>
            <CardControls/>
        </a>
    );
};

export default Card;