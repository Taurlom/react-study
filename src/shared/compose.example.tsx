import React from "react";
import { getValue } from "../utils/react/pickFromSyntheticEvent";
import { stopPropagation } from "../utils/react/stopPropagation";
import { preventDefault } from "../utils/react/preventDefault";

function InputExample({value, onChange}: any) {
    return (
        <input
            value={value}
            onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
        />
    )
}

function compose<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => fns.reduceRight((prev, fn) => fn(prev), initialValue);
}

function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => fns.reduce((prev, fn) => fn(prev), initialValue);
}

function Pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop];
}

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right
}