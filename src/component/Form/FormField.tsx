import React, { FC, HTMLAttributes } from 'react';
import { FormFieldContainer } from '.';
import { FullWidthProps } from '..';
import cn from 'classnames';

interface FormFieldIdProps extends FullWidthProps, HTMLAttributes<any> {
  label: string;
}

export const FormField: FC<FormFieldIdProps> = ({
  className,
  id,
  label,
  children,
  fullWidth,
  ...props
}) => {
  return (
    <FormFieldContainer fullWidth={fullWidth}>
      <label htmlFor={id}>{label}</label>
      <div className={cn('form-field', className)} {...props}>
        {children}
      </div>
    </FormFieldContainer>
  );
};
