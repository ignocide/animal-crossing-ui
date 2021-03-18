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
      className={cn(`sticky top-0 bg-yellow-200 h-16`, className)}
    >
      <div
        className={
          'mx-auto px-4 py-2 h-full align-middle flex items-center text-lg flex items-center justify-between'
        }
      >
        <div className={'flex items-center justify-between h-16"'}>
          {children}
        </div>
        <div className={'ml-4 flex items-center md:ml-6'}>{right}</div>
      </div>
    </header>
  );
};
