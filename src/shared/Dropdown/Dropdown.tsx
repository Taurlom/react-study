import React, { useState, useEffect } from "react";
import noop from '../../utils/ts/noop';

import styles from "./Dropdown.scss";

interface DropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const Dropdown = (props: DropdownProps) => {
    const { children, button, isOpen, onClose = noop, onOpen = noop } = props;
    const [opened, setOpened] = useState(isOpen);

    useEffect(() => setOpened(isOpen), [isOpen]);
    useEffect(() => {
        opened ? onOpen() : onClose()
    }, [opened])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setOpened(!opened);
        }
     }

    const handleClose = () => {
        if (isOpen === undefined) {
            setOpened(false);
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>{button}</div>
            {opened && (
                <div className={styles.listContainer}>
                    <div onClick={handleClose} className={styles.list}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;