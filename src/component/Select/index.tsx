import React, { FC, SelectHTMLAttributes } from 'react';
import cn from 'classnames';
import { FullWidthProps } from '..';

export interface SelectProps extends FullWidthProps, SelectHTMLAttributes<any> {
  options: {
    value: any;
    label: string;
  }[];
}
export const Select: FC<SelectProps> = ({
  fullWidth = true,
  className,
  options,
  id,
  ...props
}) => {
  return (
    <div
      className={cn(
        'select-container',
        { 'u-full-width': fullWidth },
        className
      )}
    >
      <select className={cn('u-full-width', className)} id={id} {...props}>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      <span className='material-icons select-arrow'>keyboard_arrow_down</span>
    </div>
  );
};
