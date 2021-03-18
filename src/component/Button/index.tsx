import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<any> {
  classNames?: string;
  children?: any;
  disabled?: boolean;
  primary?: boolean;
  warning?: boolean;
}

export const Button: FC<Props> = ({
  primary = true,
  warning = false,
  classNames,
  children = null,
  ...props
}) => {
  let color = 'white';
  if (primary) {
    color = 'blue';
  } else if (warning) {
    color = 'read';
  }
  return (
    <button
      className={cn(
        'inline-flex',
        'justify-center',
        'py-2 px-4 align-bottom',
        'border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none',
        `bg-${color}-300 hover:bg-${color}-400 text-gray-100`,
        classNames,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
