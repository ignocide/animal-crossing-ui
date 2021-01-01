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
        'box',
        {
          'box-no-shadow': noShadow,
          'box-rect': rect,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
