import { FC, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<any> {
    checked: boolean;
    label?: string;
    name: string;
}
export declare const Radio: FC<Props>;
export {};
