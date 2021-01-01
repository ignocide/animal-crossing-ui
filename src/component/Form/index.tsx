import React, { FC } from 'react';
import cn from 'classnames';
import { FullWidthProps } from '..';

export const FormFieldContainer: FC<FullWidthProps> = ({
  fullWidth = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'form-field-container',
        { 'u-full-width': fullWidth },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
