import React from 'react';
import CardContent from "./CardContent/CardContent";
import CardPreview from "./CardPreview/CardPreview";
import CardMenu from "./CardMenu/CardMenu";
import CardControls from "./CardControls/CardControls";
import CardUser from "./CardContent/CardUser/CardUser";
import CreateAt from "./CardContent/CreateAt/CreateAt";

import styles from './Card.scss';

const Card = () => (
    <div className={styles.card}>
        <CardContent>
            <div className={styles.metaData}>
                <CardUser />
                <CreateAt />
            </div>
            <div className={styles.title}>
                Flexbox (флексбокс) предназначен для вёрстки гибких макетов.
                Flexbox (флексбокс) предназначен для вёрстки гибких макетов.
                Flexbox (флексбокс) предназначен для вёрстки гибких макетов.
            </div>
        </CardContent>
        <CardPreview />
        <CardMenu />
        <CardControls />
    </div>
);

export default Card;