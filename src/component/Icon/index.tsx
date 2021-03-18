import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Button } from '../Button';

interface Props extends HTMLAttributes<any> {
  classNames?: string;
  children?: any;
  disabled?: boolean;
  primary?: boolean;
  warning?: boolean;
  name: string;
}

export const Icon: FC<Props> = ({
  primary = true,
  warning = false,
  classNames,
  children = null,
  name,
  ...props
}) => {
  return (
    <span className={cn('material-icons', classNames)} {...props}>
      {name}
    </span>
  );
};

export const IconButton: FC<Props> = ({
  primary = true,
  warning = false,
  classNames,
  children = null,
  name,
  ...props
}) => {
  return (
    <Button classNames={cn('', classNames)} {...props}>
      <Icon name={name} />
    </Button>
  );
};
