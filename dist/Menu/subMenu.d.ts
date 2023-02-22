import React from 'react';
export interface BaseSubMenuProps {
    index?: string;
    title: string;
    className?: string;
}
declare type NativeSubMenuProps = BaseSubMenuProps & React.HTMLAttributes<HTMLElement>;
export declare type SubMenuProps = Partial<NativeSubMenuProps>;
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
