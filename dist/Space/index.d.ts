import React from 'react';
export declare enum SpaceingSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare enum Direction {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum Side {
    Left = "left",
    Right = "right",
    Center = "center"
}
interface BaseSpaceProps {
    size?: SpaceingSize;
    wrap?: boolean;
    side?: Side;
    direction?: Direction;
}
declare type NativeSpaceProps = BaseSpaceProps & React.HTMLAttributes<HTMLElement>;
export declare type SpaceProps = Partial<NativeSpaceProps>;
declare const Space: React.FC<SpaceProps>;
export default Space;
