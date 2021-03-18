import { FC } from 'react';
interface GridProps {
    className?: string;
    children?: any;
    size: number;
    gap?: number;
}
export declare const Grid: FC<GridProps>;
interface ColumnProps {
    className?: string;
    children?: any;
    start?: number;
    end?: number;
    span?: number;
}
export declare const Column: FC<ColumnProps>;
export {};
