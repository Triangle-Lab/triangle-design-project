import React from 'react';
export interface BaseMenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare type NativeMenuItemProps = BaseMenuItemProps & React.HTMLAttributes<HTMLElement>;
export declare type MenuItemProps = Partial<NativeMenuItemProps>;
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
