import React, { FC } from 'react';
import { Select, SelectProps } from '../Select';
import { FormFieldContainer } from '.';
interface FormSelectProps extends SelectProps {
  label: string;
}

export const FormSelect: FC<FormSelectProps> = ({
  className,
  id,
  label,
  options,
  fullWidth = true,
  ...props
}) => {
  return (
    <FormFieldContainer fullWidth={fullWidth}>
      <label htmlFor={id}>{label}</label>
      <Select
        className={className}
        options={options}
        id={id}
        fullWidth={fullWidth}
        {...props}
      />
    </FormFieldContainer>
  );
};
