import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
interface Props extends HTMLAttributes<any> {
  noShadow?: boolean;
  rect?: boolean;
}

export const Box: FC<Props> = ({
  className,
  noShadow = false,
  rect = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white overflow-hidden px-4 py-5 container mx-auto',
        {
          shadow: !noShadow,
          'sm:rounded-lg': !rect,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
