import React from 'react';

import styles from './CardsList.scss';
import Card from "./Card/Card";
import { CardUserProps } from "./Card/CardContent/CardUser/CardUser";

type CardsListItem = {
    id: string,
    create: string
    user: CardUserProps
}

interface CardsListProps {
    cards: CardsListItem[]
}

const CardsList = ({ cards }: CardsListProps) => (
    <div className={styles.cardList}>
        {cards.map(card => <Card cardId={card.id} create={card.create} user={card.user} />)}
    </div>
);

export default CardsList;