import { FC, HTMLAttributes, PropsWithChildren } from 'react';
interface Props extends HTMLAttributes<any> {
    position?: 'fixed' | 'relative' | 'absolute';
}
export declare const Appbar: FC<Props>;
export declare const AppbarRightChildren: FC<PropsWithChildren<{}>>;
export {};
