import React, { FC } from 'react';
import cn from 'classnames';
interface MainState {
  className?: string;
}

export const Main: FC<MainState> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('main-container flex-1 p-2 overflow-auto', className)}
      {...props}
    >
      {children}
    </div>
  );
};
