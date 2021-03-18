import React, { FC, InputHTMLAttributes } from 'react';
// import { FormFieldContainer } from '.';
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
    <div className={className}>
      <label htmlFor={id} className={'block text-sm font-medium text-gray-700'}>
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          className={cn(
            'py-2 px-3 focus:border-blue-300 block w-full rounded-md sm:text-sm border-gray-300 border-2',
          )}
          type={type}
          id={id}
          {...props}
        />
      </div>
    </div>
  );
};
