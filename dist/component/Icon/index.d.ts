import { FC, HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<any> {
    classNames?: string;
    children?: any;
    disabled?: boolean;
    primary?: boolean;
    warning?: boolean;
    name: string;
}
export declare const Icon: FC<Props>;
export declare const IconButton: FC<Props>;
export {};
