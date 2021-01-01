import React from 'react';

const Context: any = React.createContext({}); // Context 를 만듭니다.

// Context 안에는 Provider 와 Consumer 라는게 존재합니다.
// 이 둘은, Context 를 이용하기 위해 필요한 컴포넌트들입니다.
// Consumer 는 나중에 내보내줄 때 편하도록 FormConsumer 라고 부르도록 설정했습니다.
const { Provider, Consumer } = Context;

// Provider 에서 state 를 사용하기 위해서 컴포넌트를 새로 만들어줍니다.
class ModalProvider extends React.Component<any, any> {
  static nextKey = 0;

  generateKey = () => {
    const key = ModalProvider.nextKey;
    ModalProvider.nextKey++;
    return key;
  };

  state: { stack: number[] } = {
    stack: [],
  };

  push = () => {
    const { stack } = this.state;
    const key = this.generateKey();
    stack.push(key);

    this.setState({
      stack,
    });
    return key;
  };

  pop = () => {
    this.state.stack.pop();
    this.setState({
      stack: [...this.state.stack],
    });
  };

  removeKey = (key: number) => {
    let { stack } = this.state;
    stack = stack.filter((value) => {
      return value !== key;
    });

    this.setState({
      stack,
    });
  };

  isRender = (key: number) => {
    const { stack } = this.state;
    return key === stack[stack.length - 1];
  };

  render() {
    const { state, push, removeKey, isRender } = this;
    const { stack } = state;
    const value = { stack, push, removeKey, isRender };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

const ModalConsumer = Consumer;
export { ModalProvider, ModalConsumer };
