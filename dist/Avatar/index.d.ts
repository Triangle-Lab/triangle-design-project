import React from 'react';
export declare enum AvatarSize {
    Large = "lg",
    Small = "sm"
}
export declare enum AvatarType {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Default = "default",
    Danger = "danger",
    Warning = "warning"
}
interface BaseAvatarProps {
    className?: string;
    avatarType?: AvatarType;
    size?: AvatarSize;
    src?: string;
    alt?: string;
    circle?: boolean;
    text?: string;
}
declare type NativeAvatarProps = BaseAvatarProps & React.HTMLAttributes<HTMLElement>;
export declare type AvatarProps = Partial<NativeAvatarProps>;
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
