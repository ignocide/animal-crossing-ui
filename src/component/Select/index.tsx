import React, { FC, SelectHTMLAttributes } from 'react';
import cn from 'classnames';

export interface SelectProps extends SelectHTMLAttributes<any> {
  options: {
    value: any;
    label: string;
  }[];
}
export const Select: FC<SelectProps> = ({
  className,
  options,
  id,
  ...props
}) => {
  return (
    <select
      className={cn(
        'block w-full py-2 px-3 border-gray-300 bg-white rounded-md border-2 shadow-sm focus:outline-none focus:border-blue-300 sm:text-sm',
        className,
      )}
      id={id}
      {...props}
    >
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
