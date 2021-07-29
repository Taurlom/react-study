import React from 'react';
import CardContent from "./CardContent/CardContent";
import CardPreview from "./CardPreview/CardPreview";
import CardMenu from "./CardMenu/CardMenu";
import CardControls from "./CardControls/CardControls";
import CardUser, { CardUserProps } from "./CardContent/CardUser/CardUser";
import CreateAt from "./CardContent/CreateAt/CreateAt";

import styles from './Card.scss';

import { CARD_MENU_DATA } from "../../Data/dropdowns";

interface CardProps {
    cardId: string;
    create: string;
    user: CardUserProps
}

const Card = ({ cardId, create, user }: CardProps) => (
    <div className={styles.card}>
        <CardContent>
            <div className={styles.metaData}>
                <CardUser name={user.name} />
                <CreateAt date={create} />
            </div>
            <div className={styles.title}>
                Flexbox (флексбокс) предназначен для вёрстки гибких макетов.
                Flexbox (флексбокс) предназначен для вёрстки гибких макетов.
                Flexbox (флексбокс) предназначен для вёрстки гибких макетов.
            </div>
        </CardContent>
        <CardPreview />
        <CardMenu data={CARD_MENU_DATA} cardId={cardId} />
        <CardControls />
    </div>
);

export default Card;