function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var cn = _interopDefault(require('classnames'));
require('react-dom');
require('react-transition-group');

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

const Context = React.createContext({});

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
    className: cn("sticky top-0 bg-yellow-200 h-16", className)
  }), React.createElement("div", {
    className: 'mx-auto px-4 py-2 h-full align-middle flex items-center text-lg flex items-center justify-between'
  }, React.createElement("div", {
    className: 'flex items-center justify-between h-16"'
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

exports.Appbar = Appbar;
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
exports.ModalBody = ModalBody;
exports.ModalContainer = ModalContainer;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Radio = Radio;
exports.Row = Row;
//# sourceMappingURL=main.js.map
