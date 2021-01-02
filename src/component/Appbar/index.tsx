import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<any> {
  position?: 'fixed' | 'relative' | 'absolute';
}
export const Appbar: FC<Props> = ({
  children,
  className,
  position = 'fixed',
  ...props
}) => {
  return (
    <header {...props} className={cn(`appbar-${position}`, className)}>
      <div className={'header'}>{children}</div>
    </header>
  );
};

export const AppbarRightChildren: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <div className={'app-bar-divider'} />
      <div className={'app-bar-right'}>{children}</div>
    </React.Fragment>
  );
};
