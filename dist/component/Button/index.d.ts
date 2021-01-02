import { ButtonHTMLAttributes, FC } from 'react';
interface Props extends ButtonHTMLAttributes<any> {
    classNames?: string;
    children?: any;
    disabled?: boolean;
    primary?: boolean;
    warning?: boolean;
}
export declare const Button: FC<Props>;
export {};
