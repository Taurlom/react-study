import React from "react";

export type GenericListItem = {
    value?: React.ReactNode,
    id: string,
    onClick?: (id: string) => void,
    className?: 'string',
    As?: 'a' | 'li' | 'button' | 'div',
    href?: string
}

export interface GenericListProps {
    list: GenericListItem[]
}

export function GenericList({ list }: GenericListProps) {
    return (
        <>
            {list.map(({
                           As= 'div',
                           value,
                           onClick,
                           className,
                           id,
                           href}) => (
                <As
                    className={className}
                    onClick={() => onClick && onClick(id)}
                    key={id}
                    href={href}
                >
                    {value}
                </As>
            ))}
        </>
    )
}