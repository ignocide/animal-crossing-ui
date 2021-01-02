import { FC, SelectHTMLAttributes } from 'react';
import { FullWidthProps } from '..';
export interface SelectProps extends FullWidthProps, SelectHTMLAttributes<any> {
    options: {
        value: any;
        label: string;
    }[];
}
export declare const Select: FC<SelectProps>;
