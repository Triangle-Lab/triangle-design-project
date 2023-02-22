import React from 'react';
export interface BreadcrumbObjectsType {
    link: string;
    text: string;
}
export interface BreadcrumbItemProps {
    objects: BreadcrumbObjectsType[];
    target?: '_blank' | '_self';
}
declare type NativeBreadcrumbProps = BreadcrumbItemProps & React.HTMLAttributes<HTMLElement>;
export declare type BreadcrumbProps = Partial<NativeBreadcrumbProps>;
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
