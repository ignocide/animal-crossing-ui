import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<any> {
  classNames?: string;
  children?: any;
  stick?: boolean;
}

export const ButtonGroup: FC<Props> = ({
  classNames,
  stick = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'button-group',
        {
          'button-stick-group': stick,
        },
        classNames
      )}
      {...props}
    >
      {children}
    </div>
  );
};
