import React from 'react';
export declare enum DrawerPosition {
    Left = "left",
    Right = "right"
}
export interface DrawerDefaultProps {
    position?: DrawerPosition;
    width?: number;
    close?: boolean;
    title?: string;
    mask?: boolean;
    maskClosable?: boolean;
    extra?: React.ReactNode;
    children?: React.ReactNode;
    isShow: boolean;
    headerClass?: string;
    titleClass?: string;
    extraClass?: string;
    bodyClass?: string;
    onClose?: () => void;
}
declare type NativeDrawerProps = DrawerDefaultProps & React.HTMLAttributes<HTMLElement>;
export declare type DrawerProps = Partial<NativeDrawerProps>;
declare function Drawer(props: DrawerProps): JSX.Element;
declare namespace Drawer {
    var defaultProps: {
        position: DrawerPosition;
        width: number;
        close: boolean;
        mask: boolean;
        maskClosable: boolean;
        isShow: boolean;
    };
}
export default Drawer;
