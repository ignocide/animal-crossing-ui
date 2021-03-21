import React, { FC } from 'react';
import cn from 'classnames';

interface SidebarState {
  className?: string;
}
export const Sidebar: FC<SidebarState> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'sidebar shadow-sm bg-white overflow-auto shadow-md z-10 ',
        className,
      )}
      {...props}
    >
      <div className={'p-2'}>{children}</div>
    </div>
  );
};
