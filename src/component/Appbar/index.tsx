import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<any> {
  right?: any;
}
export const Appbar: FC<Props> = ({
  children,
  className,
  right = null,
  ...props
}) => {
  return (
    <header
      {...props}
      className={cn(`flex /*bg-yellow-200*/ bg-whtie h-16`, className)}
    >
      <div
        className={
          'mx-auto px-4 py-2 h-full align-middle text-lg flex items-center justify-between w-full shadow-md z-20'
        }
      >
        <div className={'flex items-center justify-between h-16'}>
          {children}
        </div>
        <div className={'ml-4 flex items-center md:ml-6'}>{right}</div>
      </div>
    </header>
  );
};
