import React, { useEffect } from "react";

interface MyHooksProps {
    title: string;
    id?: string;
}



export const MyHooks = ({ title, id }: MyHooksProps) => {
    // useEffect(() => {
    //     console.log('componentDidMount');
    //     console.log('componentWillUpdate');
    // })

    useEffect(() => {
        console.log('componentDidMount');
        return () => {
            console.log('componentWillUnmount')
        }
    }, [])

    // useEffect(() => {
    //     console.log('componentWillReceiveProps', title);
    // }, [title])



    return <div>{title} {id}</div>
}