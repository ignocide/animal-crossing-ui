import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

interface IProps {
  children: any;
  requestClose: () => void;
  modalContext?: any;
}

class ModalPortal extends React.Component<IProps, any> {
  static defaultProps = {
    requestClose: function () {},
  };

  el: HTMLElement;
  modalRoot: HTMLElement | null;
  duration = 225;
  modalKey: number | null = null;

  state = {
    isOpen: false,
  };

  constructor(props: any) {
    super(props);
    this.modalRoot = document.getElementById('modal-container');
    if (!this.modalRoot) {
      const root = document.createElement('div');
      root.id = 'modal-container';
      document.body.append(root);
      this.modalRoot = root;
    }
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'modal');
  }

  componentDidMount() {
    const { modalContext } = this.props;
    this.modalRoot?.appendChild(this.el);
    // @ts-ignore
    document.body.style['overflow-y'] = 'hidden';
    this.modalKey = modalContext.push();

    this.changeOpenState(true);
  }

  componentWillUnmount() {
    const { modalContext } = this.props;
    this.modalRoot?.removeChild(this.el);
    // @ts-ignore
    document.body.style['overflow-y'] = null;
    modalContext.removeKey(this.modalKey);
  }

  changeOpenState = (bool: boolean, callback: any = null) => {
    this.setState(
      {
        isOpen: bool,
      },
      () => {
        if (callback) {
          setTimeout(() => {
            callback();
          }, this.duration);
        }
      },
    );
  };

  requestClose = () => {
    this.changeOpenState(false, this.props.requestClose);
  };

  prevent = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { isOpen } = this.state;
    const { children, modalContext } = this.props;
    const { isRender } = modalContext;
    return ReactDOM.createPortal(
      <div
        id={'modal-blur'}
        onClick={this.requestClose}
        style={{
          display: (!isRender(this.modalKey) as boolean) ? 'none' : undefined,
        }}
      >
        <CSSTransition
          in={isOpen && isRender(this.modalKey)}
          timeout={this.duration}
          classNames="fade"
        >
          <div id="modal-wrapper">
            <div id="modal-main" onClick={this.prevent} className={'modal'}>
              {children}
            </div>
          </div>
        </CSSTransition>
      </div>,
      this.el,
    );
  }
}

export default ModalPortal;
