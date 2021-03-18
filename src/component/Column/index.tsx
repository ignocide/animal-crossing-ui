import React, { FC } from 'react';
import cn from 'classnames';

interface GridProps {
  className?: string;
  children?: any;
  size: number;
  gap?: number;
}

export const Grid: FC<GridProps> = ({
  className,
  children = null,
  size = 12,
  gap,
}) => {
  return (
    <div
      className={cn(
        'grid',
        `grid-cols-${size}`,
        className,
        gap ? `gap-${gap}` : null,
      )}
    >
      {children}
    </div>
  );
};

interface ColumnProps {
  className?: string;
  children?: any;
  start?: number;
  end?: number;
  span?: number;
}

export const Column: FC<ColumnProps> = ({
  className,
  children = null,
  start,
  end,
  span,
}) => {
  return (
    <div
      className={cn(
        start ? `col-start-${start}` : null,
        end ? `col-end-${end}` : null,
        span ? `col-span-${span}` : null,
        className,
      )}
    >
      {children}
    </div>
  );
};
