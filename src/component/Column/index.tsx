import React, { FC } from 'react';
import cn from 'classnames';

const COLUMN_SIZE_MAP = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
};
interface Props {
  classNames?: string;
  children?: any;
  size: keyof typeof COLUMN_SIZE_MAP;
}

export const Column: FC<Props> = ({
  classNames,
  children = null,
  size = 12,
}) => {
  return (
    <div className={cn('columns', COLUMN_SIZE_MAP[size], classNames)}>
      {children}
    </div>
  );
};
