import {iconCancel, iconComments, iconSave, iconShare, iconWarning} from "../Icons/Icons";

export const CARD_MENU_DATA = [
    {
        text: 'Комментарии',
        icon: iconComments
    },
    {
        text: 'Поделиться',
        icon: iconShare
    },
    {
        text: 'Скрыть',
        icon: iconCancel
    },
    {
        text: 'Сохранить',
        icon: iconSave
    },
    {
        text: 'Пожаловаться',
        icon: iconWarning
    },
];

export type CardMenuItemType = {
    text: string,
    icon: React.ReactNode
}