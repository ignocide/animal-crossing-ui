import { FC, TextareaHTMLAttributes } from 'react';
import { FullWidthProps } from '..';
interface FormTextareaProps extends FullWidthProps, TextareaHTMLAttributes<any> {
    label: string;
}
export declare const FormTextarea: FC<FormTextareaProps>;
export {};
