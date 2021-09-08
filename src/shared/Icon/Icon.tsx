import React from "react";
import styles from './Icon.scss';

import {
    iconComments,
    iconCancel,
    iconMenuButton,
    iconSave,
    iconShare,
    iconWarning
} from "./Icons/Icons";

const icons = {
    comments: iconComments,
    cancel: iconCancel,
    menubtn: iconMenuButton,
    save: iconSave,
    share: iconShare,
    warning: iconWarning
};

export interface IconProps {
    name: keyof typeof icons,
    size?: number,
    tag?: string
}

const Icon = (props: IconProps) => {
    const { name, size = 16 } = props;

    return (
        <span className={styles.root} style={{width: size, height: size}}>
            {icons[name]}
        </span>
    );
};

export default Icon;