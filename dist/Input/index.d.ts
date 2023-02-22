import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import { type ChangeEvent, type FC, type InputHTMLAttributes, type ReactElement } from 'react';
declare type InputSize = 'lg' | 'sm' | 'default';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: FC<InputProps>;
export default Input;
