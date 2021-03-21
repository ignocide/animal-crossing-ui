import React, { FC } from 'react';
import cn from 'classnames';

interface LayoutState {
  className?: string;
}
export const Layout: FC<LayoutState> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('bg-gray-100 flex flex-1 overflow-hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
};
