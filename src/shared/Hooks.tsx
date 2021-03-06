import React, { useEffect, useState } from "react";

interface MyHooksProps {
    title: string;
    id?: string;
}



export const MyHooks = ({ title, id }: MyHooksProps) => {
    // useEffect(() => {
    //     console.log('componentDidMount');
    //     console.log('componentWillUpdate');
    // })

    // useEffect(() => {
    //     console.log('componentDidMount');
    //     return () => {
    //         console.log('componentWillUnmount')
    //     }
    // }, [])

    // useEffect(() => {
    //     console.log('componentWillReceiveProps', title);
    // }, [title])

    const [isMounted] = useIsMounted();

    useEffect(() => {
        console.log(isMounted);
    }, [isMounted])

    return <div>{title} {id}</div>
}

export function useIsMounted() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return [isMounted];
}