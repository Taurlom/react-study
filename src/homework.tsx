import React from 'react';

// 1 ===
type ConcatFn = (str1: string, str2: string) => string;

// 2 ===
interface MyHomeTask {
    howIDoIt: string;
    simeArray: [string, string, number];
    withData: [{
        howIDoIt: string;
        simeArray: [string, number];
    }];
}

// 3 ===
interface MyArray<T> {
    [key: number]: T;

    reduce<U>(fn: (acc: U, el: T, index?: number, arr?: T[]) => U, initial?: U): U;
}

// 4 ===
type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

// 5 ===
type MyType<T> = T extends React.ComponentType<infer R> ? R : T;

// 6 ===
type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];
