import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

interface FormFieldIdProps extends HTMLAttributes<any> {
  label: string;
}

export const FormField: FC<FormFieldIdProps> = ({
  className,
  label,
  children,
  ...props
}) => {
  return (
    <div>
      <label className={'block text-sm font-medium text-gray-700'}>
        {label}
      </label>
      <div className={cn('mt-1', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
