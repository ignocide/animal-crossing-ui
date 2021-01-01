import React, { FC } from 'react';
import cn from 'classnames';
import './index.scss';

interface Props {
  classNames?: string;
  children?: any;
}

export const Row: FC<Props> = ({ classNames, children = null }) => {
  return <div className={cn('row', classNames)}>{children}</div>;
};
