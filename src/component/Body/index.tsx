import React, { FC } from 'react';
import cn from 'classnames';

interface BodyState {
  className?: string;
}
export const Body: FC<BodyState> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('flex flex-col overflow-hidden max-h-screen', className)}
      {...props}
    >
      {children}
    </div>
  );
};
