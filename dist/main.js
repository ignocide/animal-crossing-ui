function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var cn = _interopDefault(require('classnames'));
var ReactDOM = _interopDefault(require('react-dom'));
var reactTransitionGroup = require('react-transition-group');

var Grid = function Grid(_ref) {
  var className = _ref.className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size,
      gap = _ref.gap;
  return React.createElement("div", {
    className: cn('grid', "grid-cols-" + size, className, gap ? "gap-" + gap : null)
  }, children);
};
var Column = function Column(_ref2) {
  var className = _ref2.className,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      start = _ref2.start,
      end = _ref2.end,
      span = _ref2.span;
  return React.createElement("div", {
    className: cn(start ? "col-start-" + start : null, end ? "col-end-" + end : null, span ? "col-span-" + span : null, className)
  }, children);
};

var Row = function Row(_ref) {
  var classNames = _ref.classNames,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children;
  return React.createElement("div", {
    className: cn('row', classNames)
  }, children);
};

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Button = function Button(_ref) {
  var _ref$primary = _ref.primary,
      primary = _ref$primary === void 0 ? true : _ref$primary,
      _ref$warning = _ref.warning,
      warning = _ref$warning === void 0 ? false : _ref$warning,
      classNames = _ref.classNames,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      props = _objectWithoutPropertiesLoose(_ref, ["primary", "warning", "classNames", "children"]);

  var color = 'white';

  if (primary) {
    color = 'blue';
  } else if (warning) {
    color = 'read';
  }

  return React.createElement("button", Object.assign({
    className: cn('inline-flex', 'justify-center', 'py-2 px-4 align-bottom', 'border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none', "bg-" + color + "-300 hover:bg-" + color + "-400 text-gray-100", classNames)
  }, props), children);
};

var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      id = _ref.id,
      props = _objectWithoutPropertiesLoose(_ref, ["checked", "label", "id"]);

  return React.createElement("label", {
    htmlFor: id,
    className: 'flex items-center h-10 px-3 py-2'
  }, React.createElement("div", {
    className: 'flex items-center h-5'
  }, React.createElement("input", Object.assign({
    checked: checked,
    id: id
  }, props, {
    type: "checkbox",
    className: "focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
  }))), label && React.createElement("span", {
    className: 'ml-3 text-sm'
  }, label));
};

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      id = _ref.id,
      props = _objectWithoutPropertiesLoose(_ref, ["checked", "label", "name", "id"]);

  return React.createElement("label", {
    htmlFor: id,
    className: 'flex items-center h-10 px-3 py-2'
  }, React.createElement("div", {
    className: 'flex items-center h-5'
  }, React.createElement("input", Object.assign({
    checked: checked,
    id: id
  }, props, {
    type: "radio",
    className: "focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
  }))), label && React.createElement("span", {
    className: 'ml-3 text-sm'
  }, label));
};

var Context = React.createContext({});
var Provider = Context.Provider,
    Consumer = Context.Consumer;

var ModalProvider = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalProvider, _React$Component);

  function ModalProvider() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.generateKey = function () {
      var key = ModalProvider.nextKey;
      ModalProvider.nextKey++;
      return key;
    };

    _this.state = {
      stack: []
    };

    _this.push = function () {
      var stack = _this.state.stack;

      var key = _this.generateKey();

      stack.push(key);

      _this.setState({
        stack: stack
      });

      return key;
    };

    _this.pop = function () {
      _this.state.stack.pop();

      _this.setState({
        stack: [].concat(_this.state.stack)
      });
    };

    _this.removeKey = function (key) {
      var stack = _this.state.stack;
      stack = stack.filter(function (value) {
        return value !== key;
      });

      _this.setState({
        stack: stack
      });
    };

    _this.isRender = function (key) {
      var stack = _this.state.stack;
      return key === stack[stack.length - 1];
    };

    return _this;
  }

  var _proto = ModalProvider.prototype;

  _proto.render = function render() {
    var state = this.state,
        push = this.push,
        removeKey = this.removeKey,
        isRender = this.isRender;
    var stack = state.stack;
    var value = {
      stack: stack,
      push: push,
      removeKey: removeKey,
      isRender: isRender
    };
    return React.createElement(Provider, {
      value: value
    }, this.props.children);
  };

  return ModalProvider;
}(React.Component);

ModalProvider.nextKey = 0;
var ModalConsumer = Consumer;

var ModalPortal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalPortal, _React$Component);

  function ModalPortal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.duration = 225;
    _this.modalKey = null;
    _this.state = {
      isOpen: false
    };

    _this.changeOpenState = function (bool, callback) {
      if (callback === void 0) {
        callback = null;
      }

      _this.setState({
        isOpen: bool
      }, function () {
        if (callback) {
          setTimeout(function () {
            callback();
          }, _this.duration);
        }
      });
    };

    _this.requestClose = function () {
      _this.changeOpenState(false, _this.props.requestClose);
    };

    _this.prevent = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    _this.modalRoot = document.getElementById('modal-container');

    if (!_this.modalRoot) {
      var root = document.createElement('div');
      root.id = 'modal-container';
      document.body.append(root);
      _this.modalRoot = root;
    }

    _this.el = document.createElement('div');

    _this.el.setAttribute('id', 'modal');

    return _this;
  }

  var _proto = ModalPortal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$modalRoot;

    var modalContext = this.props.modalContext;
    (_this$modalRoot = this.modalRoot) === null || _this$modalRoot === void 0 ? void 0 : _this$modalRoot.appendChild(this.el);
    document.body.style['overflow-y'] = 'hidden';
    this.modalKey = modalContext.push();
    this.changeOpenState(true);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$modalRoot2;

    var modalContext = this.props.modalContext;
    (_this$modalRoot2 = this.modalRoot) === null || _this$modalRoot2 === void 0 ? void 0 : _this$modalRoot2.removeChild(this.el);
    document.body.style['overflow-y'] = null;
    modalContext.removeKey(this.modalKey);
  };

  _proto.render = function render() {
    var isOpen = this.state.isOpen;
    var _this$props = this.props,
        children = _this$props.children,
        modalContext = _this$props.modalContext;
    var isRender = modalContext.isRender;
    return ReactDOM.createPortal(React.createElement("div", {
      id: 'modal-blur',
      onClick: this.requestClose,
      style: {
        display: !isRender(this.modalKey) ? 'none' : undefined
      }
    }, React.createElement(reactTransitionGroup.CSSTransition, {
      in: isOpen && isRender(this.modalKey),
      timeout: this.duration,
      classNames: "fade"
    }, React.createElement("div", {
      id: "modal-wrapper"
    }, React.createElement("div", {
      id: "modal-main",
      onClick: this.prevent,
      className: 'modal'
    }, children)))), this.el);
  };

  return ModalPortal;
}(React.Component);

ModalPortal.defaultProps = {
  requestClose: function requestClose() {}
};

var Modal = function Modal(props) {
  return React.createElement(ModalConsumer, null, function (value) {
    return React.createElement(ModalPortal, Object.assign({}, props, {
      modalContext: value
    }));
  });
};
var ModalHeader = function ModalHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "right"]);

  return React.createElement("div", Object.assign({
    className: cn('px-3 py-2', className)
  }, props), children);
};
var ModalBody = function ModalBody(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? null : _ref2$className,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["className", "children"]);

  return React.createElement("div", Object.assign({
    className: cn('px-3 py-2', className)
  }, props), children);
};
var ModalFooter = function ModalFooter(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["className", "children"]);

  return React.createElement("div", Object.assign({
    className: cn('px-3 py-2', className)
  }, props), children);
};
var ModalContainer = function ModalContainer(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["className", "children"]);

  return React.createElement("div", Object.assign({
    className: cn('bg-white overflow-hidden relative rounded-md border-1 border-gray-300', className),
    style: {
      minWidth: 300
    }
  }, props), children);
};

var ButtonGroup = function ButtonGroup(_ref) {
  var classNames = _ref.classNames,
      _ref$stick = _ref.stick,
      stick = _ref$stick === void 0 ? false : _ref$stick,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["classNames", "stick", "children"]);

  return React.createElement("div", Object.assign({
    className: cn('button-group', {
      'button-stick-group': stick
    }, classNames)
  }, props), children);
};

var Icon = function Icon(_ref) {
  var classNames = _ref.classNames,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["primary", "warning", "classNames", "children", "name"]);

  return React.createElement("span", Object.assign({
    className: cn('material-icons', classNames)
  }, props), name);
};
var IconButton = function IconButton(_ref2) {
  var classNames = _ref2.classNames,
      name = _ref2.name,
      props = _objectWithoutPropertiesLoose(_ref2, ["primary", "warning", "classNames", "children", "name"]);

  return React.createElement(Button, Object.assign({
    classNames: cn('', classNames)
  }, props), React.createElement(Icon, {
    name: name
  }));
};

var FormInput = function FormInput(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "label", "type", "fullWidth"]);

  return React.createElement("div", {
    className: className
  }, React.createElement("label", {
    htmlFor: id,
    className: 'block text-sm font-medium text-gray-700'
  }, label), React.createElement("div", {
    className: "mt-1 flex rounded-md shadow-sm"
  }, React.createElement("input", Object.assign({
    className: cn('py-2 px-3 focus:border-blue-300 block w-full rounded-md sm:text-sm border-gray-300 border-2'),
    type: type,
    id: id
  }, props))));
};

var Select = function Select(_ref) {
  var className = _ref.className,
      options = _ref.options,
      id = _ref.id,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "options", "id"]);

  return React.createElement("select", Object.assign({
    className: cn('block w-full py-2 px-3 border-gray-300 bg-white rounded-md border-2 shadow-sm focus:outline-none focus:border-blue-300 sm:text-sm', className),
    id: id
  }, props), options.map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return React.createElement("option", {
      value: value,
      key: value
    }, label);
  }));
};

var FormSelect = function FormSelect(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "label", "options"]);

  return React.createElement("div", {
    className: className
  }, React.createElement("label", {
    htmlFor: id,
    className: 'block text-sm font-medium text-gray-700'
  }, label), React.createElement("div", {
    className: "mt-1 flex rounded-md shadow-sm"
  }, React.createElement(Select, Object.assign({
    options: options,
    id: id
  }, props))));
};

var FormField = function FormField(_ref) {
  var className = _ref.className,
      label = _ref.label,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "label", "children"]);

  return React.createElement("div", null, React.createElement("label", {
    className: 'block text-sm font-medium text-gray-700'
  }, label), React.createElement("div", Object.assign({
    className: cn('mt-1', className)
  }, props), children));
};

var FormTextarea = function FormTextarea(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "label", "fullWidth"]);

  return React.createElement("div", {
    className: className
  }, React.createElement("label", {
    htmlFor: id,
    className: 'block text-sm font-medium text-gray-700'
  }, label), React.createElement("div", {
    className: "mt-1 flex rounded-md shadow-sm"
  }, React.createElement("textarea", Object.assign({
    className: cn('py-2 px-3 focus:border-blue-300 block w-full rounded-none rounded-md sm:text-sm border-gray-300 border-2'),
    id: id
  }, props))));
};

var Appbar = function Appbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? null : _ref$right,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className", "right"]);

  return React.createElement("header", Object.assign({}, props, {
    className: cn("flex /*bg-yellow-200*/ bg-whtie h-16", className)
  }), React.createElement("div", {
    className: 'mx-auto px-4 py-2 h-full align-middle text-lg flex items-center justify-between w-full shadow-md z-20'
  }, React.createElement("div", {
    className: 'flex items-center justify-between h-16'
  }, children), React.createElement("div", {
    className: 'ml-4 flex items-center md:ml-6'
  }, right)));
};

var Box = function Box(_ref) {
  var className = _ref.className,
      _ref$noShadow = _ref.noShadow,
      noShadow = _ref$noShadow === void 0 ? false : _ref$noShadow,
      _ref$rect = _ref.rect,
      rect = _ref$rect === void 0 ? false : _ref$rect,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "noShadow", "rect", "children"]);

  return React.createElement("div", Object.assign({
    className: cn('bg-white overflow-hidden px-4 py-5 container mx-auto', {
      shadow: !noShadow,
      'sm:rounded-lg': !rect
    }, className)
  }, props), children);
};

var Layout = function Layout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", Object.assign({
    className: cn('bg-gray-100 flex flex-1 overflow-hidden', className)
  }, props), children);
};

var Body = function Body(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", Object.assign({
    className: cn('flex flex-col overflow-hidden max-h-screen', className)
  }, props), children);
};

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", Object.assign({
    className: cn('sidebar shadow-sm bg-white overflow-auto shadow-md z-10 ', className)
  }, props), React.createElement("div", {
    className: 'p-2'
  }, children));
};

var Main = function Main(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("div", Object.assign({
    className: cn('main-container flex-1 p-2 overflow-auto', className)
  }, props), children);
};

exports.Appbar = Appbar;
exports.Body = Body;
exports.Box = Box;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Checkbox = Checkbox;
exports.Column = Column;
exports.FormField = FormField;
exports.FormInput = FormInput;
exports.FormSelect = FormSelect;
exports.FormTextarea = FormTextarea;
exports.Grid = Grid;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Layout = Layout;
exports.Main = Main;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalConsumer = ModalConsumer;
exports.ModalContainer = ModalContainer;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalProvider = ModalProvider;
exports.Radio = Radio;
exports.Row = Row;
exports.Sidebar = Sidebar;
//# sourceMappingURL=main.js.map
