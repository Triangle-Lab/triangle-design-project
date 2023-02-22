import React from 'react';
export interface data<T> {
    value: T;
    label: string;
}
interface inputProps<T> {
    data: Array<data<T>>;
    itemColor?: string;
    width?: string;
    height?: string;
    defaultShow?: boolean;
    placeholder?: string;
    deleteItem?: (value: T) => void;
    showTree?: (showTree: boolean) => void;
    inputRef?: React.RefObject<HTMLDivElement>;
}
declare function TreeSelectInput<T>(props: inputProps<T>): JSX.Element;
declare namespace TreeSelectInput {
    var defaultProps: {
        itemColor: string;
        width: string;
        height: string;
        placeholder: string;
    };
}
export default TreeSelectInput;
