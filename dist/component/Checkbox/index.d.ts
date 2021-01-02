import { FC, InputHTMLAttributes } from 'react';
interface Props extends InputHTMLAttributes<any> {
    checked: boolean;
    label?: string;
}
export declare const Checkbox: FC<Props>;
export {};
