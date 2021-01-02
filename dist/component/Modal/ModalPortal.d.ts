import React from 'react';
interface IProps {
    children: any;
    requestClose: () => void;
    modalContext?: any;
}
declare class ModalPortal extends React.Component<IProps, any> {
    static defaultProps: {
        requestClose: () => void;
    };
    el: HTMLElement;
    modalRoot: HTMLElement | null;
    duration: number;
    modalKey: number | null;
    state: {
        isOpen: boolean;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    changeOpenState: (bool: boolean, callback?: any) => void;
    requestClose: () => void;
    prevent: (e: any) => void;
    render(): React.ReactPortal;
}
export default ModalPortal;
