import { FC, InputHTMLAttributes } from 'react';
import { FullWidthProps } from '..';
interface FormInputProps extends FullWidthProps, InputHTMLAttributes<any> {
    label: string;
}
export declare const FormInput: FC<FormInputProps>;
export {};
