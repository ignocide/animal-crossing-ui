import { FC, SelectHTMLAttributes } from 'react';
export interface SelectProps extends SelectHTMLAttributes<any> {
    options: {
        value: any;
        label: string;
    }[];
}
export declare const Select: FC<SelectProps>;
