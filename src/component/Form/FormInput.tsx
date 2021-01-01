import React, { FC, InputHTMLAttributes } from 'react';
import { FormFieldContainer } from '.';
import cn from 'classnames';
import { FullWidthProps } from '..';
interface FormInputProps extends FullWidthProps, InputHTMLAttributes<any> {
  label: string;
}

export const FormInput: FC<FormInputProps> = ({
  className,
  id,
  label,
  type = 'text',
  fullWidth = true,
  ...props
}) => {
  return (
    <FormFieldContainer fullWidth={fullWidth}>
      <label htmlFor={id}>{label}</label>
      <input
        className={cn('u-full-width', className)}
        type={type}
        id={id}
        {...props}
      />
    </FormFieldContainer>
  );
};
