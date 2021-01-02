import { FC } from 'react';
declare const COLUMN_SIZE_MAP: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
};
interface Props {
    classNames?: string;
    children?: any;
    size: keyof typeof COLUMN_SIZE_MAP;
}
export declare const Column: FC<Props>;
export {};
