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
    <div className={cn('px-3 py-2', className)} {...props}>
      {children}
    </div>
  );
};

export const ModalBody: FC<any> = ({
  className = null,
  children,
  ...props
}) => {
  return (
    <div className={cn('px-3 py-2', className)} {...props}>
      {children}
    </div>
  );
};

export const ModalFooter: FC<any> = ({ className, children, ...props }) => {
  return (
    <div className={cn('px-3 py-2', className)} {...props}>
      {children}
    </div>
  );
};

export const ModalContainer: FC<any> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white overflow-hidden relative rounded-md border-1 border-gray-300',
        className,
      )}
      style={{
        minWidth: 300,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Modal;
