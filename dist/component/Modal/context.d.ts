import React from 'react';
declare class ModalProvider extends React.Component<any, any> {
    static nextKey: number;
    generateKey: () => number;
    state: {
        stack: number[];
    };
    push: () => number;
    pop: () => void;
    removeKey: (key: number) => void;
    isRender: (key: number) => boolean;
    render(): JSX.Element;
}
declare const ModalConsumer: any;
export { ModalProvider, ModalConsumer };
