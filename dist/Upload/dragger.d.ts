import React, { FC } from 'react';
interface BaseDraggerProps {
    onFile: (files: FileList) => void;
}
declare type NativeDraggerProps = BaseDraggerProps & React.HTMLAttributes<HTMLElement>;
export declare type DraggerProps = Partial<NativeDraggerProps>;
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
