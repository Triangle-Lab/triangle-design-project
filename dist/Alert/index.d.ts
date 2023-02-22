import React from 'react';
export declare enum AlertType {
    Success = "success",
    Default = "default",
    Danger = "danger",
    Warning = "warning"
}
interface BaseAlertProps {
    className?: string;
    alertType?: AlertType;
    title?: string;
    description?: string;
    closeable?: boolean;
    position?: 'left' | 'right';
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
declare type NativeAlertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>;
export declare type AlertProps = Partial<NativeAlertProps>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
