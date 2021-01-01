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
  return (
    <button
      className={cn(
        { 'button-warning': warning, 'button-primary': primary },
        classNames
      )}
      {...props}
    >
      {children}
    </button>
  );
};
