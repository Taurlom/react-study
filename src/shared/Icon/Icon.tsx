import React from "react";
import styles from './Icon.scss';

import {
    iconComments,
    iconCancel,
    iconMenuButton,
    iconSave,
    iconShare,
    iconWarning,
    iconLogin
} from "./Icons/Icons";

const icons = {
    comments: iconComments,
    cancel: iconCancel,
    menubtn: iconMenuButton,
    save: iconSave,
    share: iconShare,
    warning: iconWarning,
    login: iconLogin
};

export interface IconProps {
    name: keyof typeof icons,
    size?: number
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