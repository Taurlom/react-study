import React, { useContext } from 'react';

import styles from './CardsList.scss';
import Card from "./Card/Card";
import { CardUserProps } from "./Card/CardContent/CardUser/CardUser";
import { postsContext } from '../context/postsContext';

type CardsListItem = {
    id: string,
    create: string
    user: CardUserProps
}

interface CardsListProps {
    cards: CardsListItem[]
}

const CardsList = ({ cards }: CardsListProps) => {
    const postsData = useContext(postsContext);

    if (postsData) {
        return (
            <div className={styles.cardList}>
                {postsData.map((post: any) =>
                    <Card
                        key={post.data.id}
                        cardId={post.data.id}
                        create={post.data.created}
                        user={{name: post.data.author}}
                        title={post.data.title}
                        preview={post.data.thumbnail}
                        href={post.data.permalink}
                    />
                )}
            </div>
        );
    } else {
        return <div>Посты не загружены</div>
    }
};

export default CardsList;