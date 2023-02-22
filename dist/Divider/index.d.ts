import React from 'react';
export declare enum DividerStyle {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Default = "default",
    Danger = "danger",
    Warning = "warning"
}
export interface DividerDefaultProps {
    style?: DividerStyle;
    text?: string;
}
declare type NativeDividerProps = DividerDefaultProps & React.HTMLAttributes<HTMLElement>;
export declare type DividerProps = Partial<NativeDividerProps>;
declare const Divider: React.FC<DividerProps>;
export default Divider;
