import { FC, HTMLAttributes } from 'react';
import { FullWidthProps } from '..';
interface FormFieldIdProps extends FullWidthProps, HTMLAttributes<any> {
    label: string;
}
export declare const FormField: FC<FormFieldIdProps>;
export {};
