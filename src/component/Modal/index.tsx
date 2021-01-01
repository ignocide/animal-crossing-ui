import React, { FC } from 'react';
import { ModalConsumer } from './context';
import ModalPortal from './ModalPortal';
import cn from 'classnames';

const Modal = (props: any) => {
  return (
    <ModalConsumer>
      {(value: any) => {
        return <ModalPortal {...props} modalContext={value} />;
      }}
    </ModalConsumer>
  );
};

export const ModalHeader: FC<any> = ({
  className,
  children,
  right = null,
  ...props
}) => {
  return (
    <div className={cn('modal-header', className)} {...props}>
      <h4>
        {children}
        {right}
      </h4>
    </div>
  );
};

export const ModalBody: FC<any> = ({
  className = null,
  children,
  ...props
}) => {
  return (
    <div className={cn('modal-body', className)} {...props}>
      {children}
    </div>
  );
};

export const ModalFooter: FC<any> = ({ className, children, ...props }) => {
  return (
    <div className={cn('modal-footer', className)} {...props}>
      {children}
    </div>
  );
};

export const ModalContainer: FC<any> = ({ className, children, ...props }) => {
  return (
    <div className={cn('modal-container', className)} {...props}>
      {children}
    </div>
  );
};

export default Modal;
