import { FC, HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<any> {
    classNames?: string;
    children?: any;
    stick?: boolean;
}
export declare const ButtonGroup: FC<Props>;
export {};
