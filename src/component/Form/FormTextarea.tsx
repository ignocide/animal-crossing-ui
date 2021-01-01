import React, { FC, TextareaHTMLAttributes } from 'react';
import { FormFieldContainer } from '.';
import { FullWidthProps } from '..';
import cn from 'classnames';

interface FormTextareaProps
  extends FullWidthProps,
    TextareaHTMLAttributes<any> {
  label: string;
}

export const FormTextarea: FC<FormTextareaProps> = ({
  className,
  id,
  label,
  fullWidth,
  ...props
}) => {
  return (
    <FormFieldContainer fullWidth={fullWidth}>
      <label htmlFor={id}>{label}</label>
      <textarea className={cn('u-full-width', className)} id={id} {...props} />
    </FormFieldContainer>
  );
};
