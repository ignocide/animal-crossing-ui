import React, { FC } from 'react';
import { Select, SelectProps } from '../Select';
interface FormSelectProps extends SelectProps {
  label: string;
}

export const FormSelect: FC<FormSelectProps> = ({
  className,
  id,
  label,
  options,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className={'block text-sm font-medium text-gray-700'}>
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <Select options={options} id={id} {...props} />
      </div>
    </div>
  );
};
