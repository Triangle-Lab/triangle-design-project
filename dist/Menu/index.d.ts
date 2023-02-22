import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
export interface BaseMenuProps {
    /**默认 active 的菜单项的索引值 */
    defaultIndex?: string;
    className?: string;
    /**菜单类型 横向或者纵向 */
    mode?: MenuMode;
    style?: React.CSSProperties;
    /**点击菜单项触发的回掉函数 */
    onSelect?: (selectedIndex: string) => void;
    /**设置子菜单的默认打开 只在纵向模式下生效 */
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare type NativeMenuProps = BaseMenuProps & React.HTMLAttributes<HTMLElement>;
export declare type MenuProps = Partial<NativeMenuProps>;
export declare const Menu: React.FC<MenuProps>;
export default Menu;
