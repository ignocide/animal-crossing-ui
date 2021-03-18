import React, { FC, TextareaHTMLAttributes } from 'react';
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
    <div className={className}>
      <label htmlFor={id} className={'block text-sm font-medium text-gray-700'}>
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <textarea
          className={cn(
            'py-2 px-3 focus:border-blue-300 block w-full rounded-none rounded-md sm:text-sm border-gray-300 border-2',
          )}
          id={id}
          {...props}
        />
      </div>
    </div>
  );
};
