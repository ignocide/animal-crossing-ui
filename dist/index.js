function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var cn = _interopDefault(require('classnames'));
require('react-dom');
require('react-transition-group');

var COLUMN_SIZE_MAP = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve'
};
var Column = function Column(_ref) {
  var classNames = _ref.classNames,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size;
  return React__default.createElement("div", {
    className: cn('columns', COLUMN_SIZE_MAP[size], classNames)
  }, children);
};

var Row = function Row(_ref) {
  var classNames = _ref.classNames,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children;
  return React__default.createElement("div", {
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

  return React__default.createElement("button", Object.assign({
    className: cn({
      'button-warning': warning,
      'button-primary': primary
    }, classNames)
  }, props), children);
};

var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, ["checked", "label"]);

  return React__default.createElement("label", {
    className: 'checkbox-container'
  }, label && React__default.createElement("span", {
    className: 'checkbox-label'
  }, label), React__default.createElement("input", Object.assign({
    type: 'checkbox',
    checked: checked
  }, props)), React__default.createElement("span", {
    className: 'checkbox'
  }, React__default.createElement("span", {
    className: 'material-icons checkmark'
  }, "check")));
};

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      label = _ref.label,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["checked", "label", "name"]);

  return React__default.createElement("label", {
    className: 'radio-container'
  }, label && React__default.createElement("span", {
    className: 'radio-label'
  }, label), React__default.createElement("input", Object.assign({
    type: 'radio',
    checked: checked,
    name: name
  }, props)), React__default.createElement("span", {
    className: 'material-icons radio-mark'
  }, checked ? 'radio_button_checked' : 'radio_button_unchecked'));
};

const Context = React__default.createContext({});

var ModalHeader = function ModalHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? null : _ref$right,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "right"]);

  return React__default.createElement("div", Object.assign({
    className: cn('modal-header', className)
  }, props), React__default.createElement("h4", null, children, right));
};
var ModalBody = function ModalBody(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? null : _ref2$className,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["className", "children"]);

  return React__default.createElement("div", Object.assign({
    className: cn('modal-body', className)
  }, props), children);
};
var ModalFooter = function ModalFooter(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["className", "children"]);

  return React__default.createElement("div", Object.assign({
    className: cn('modal-footer', className)
  }, props), children);
};
var ModalContainer = function ModalContainer(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["className", "children"]);

  return React__default.createElement("div", Object.assign({
    className: cn('modal-container', className)
  }, props), children);
};

var ButtonGroup = function ButtonGroup(_ref) {
  var classNames = _ref.classNames,
      _ref$stick = _ref.stick,
      stick = _ref$stick === void 0 ? false : _ref$stick,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["classNames", "stick", "children"]);

  return React__default.createElement("div", Object.assign({
    className: cn('button-group', {
      'button-stick-group': stick
    }, classNames)
  }, props), children);
};

var Icon = function Icon(_ref) {
  var classNames = _ref.classNames,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["primary", "warning", "classNames", "children", "name"]);

  return React__default.createElement("span", Object.assign({
    className: cn('material-icons', classNames)
  }, props), name);
};
var IconButton = function IconButton(_ref2) {
  var classNames = _ref2.classNames,
      name = _ref2.name,
      props = _objectWithoutPropertiesLoose(_ref2, ["primary", "warning", "classNames", "children", "name"]);

  return React__default.createElement(Button, Object.assign({
    classNames: cn('icon-button', classNames)
  }, props), React__default.createElement(Icon, {
    name: name
  }));
};

const FormFieldContainer = ({
  fullWidth = true,
  className,
  children,
  ...props
}) => {
  return React__default.createElement("div", Object.assign({
    className: cn('form-field-container', {
      'u-full-width': fullWidth
    }, className)
  }, props), children);
};

var FormInput = function FormInput(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "label", "type", "fullWidth"]);

  return React__default.createElement(FormFieldContainer, {
    fullWidth: fullWidth
  }, React__default.createElement("label", {
    htmlFor: id
  }, label), React__default.createElement("input", Object.assign({
    className: cn('u-full-width', className),
    type: type,
    id: id
  }, props)));
};

const Select = ({
  fullWidth = true,
  className,
  options,
  id,
  ...props
}) => {
  return React__default.createElement("div", {
    className: cn('select-container', {
      'u-full-width': fullWidth
    }, className)
  }, React__default.createElement("select", Object.assign({
    className: cn('u-full-width', className),
    id: id
  }, props), options.map(({
    value,
    label
  }) => React__default.createElement("option", {
    value: value,
    key: value
  }, label))), React__default.createElement("span", {
    className: 'material-icons select-arrow'
  }, "keyboard_arrow_down"));
};

var FormSelect = function FormSelect(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      options = _ref.options,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "label", "options", "fullWidth"]);

  return React__default.createElement(FormFieldContainer, {
    fullWidth: fullWidth
  }, React__default.createElement("label", {
    htmlFor: id
  }, label), React__default.createElement(Select, Object.assign({
    className: className,
    options: options,
    id: id,
    fullWidth: fullWidth
  }, props)));
};

var FormField = function FormField(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      children = _ref.children,
      fullWidth = _ref.fullWidth,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "label", "children", "fullWidth"]);

  return React__default.createElement(FormFieldContainer, {
    fullWidth: fullWidth
  }, React__default.createElement("label", {
    htmlFor: id
  }, label), React__default.createElement("div", Object.assign({
    className: cn('form-field', className)
  }, props), children));
};

var FormTextarea = function FormTextarea(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      fullWidth = _ref.fullWidth,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "id", "label", "fullWidth"]);

  return React__default.createElement(FormFieldContainer, {
    fullWidth: fullWidth
  }, React__default.createElement("label", {
    htmlFor: id
  }, label), React__default.createElement("textarea", Object.assign({
    className: cn('u-full-width', className),
    id: id
  }, props)));
};

var Appbar = function Appbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'fixed' : _ref$position,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className", "position"]);

  return React__default.createElement("header", Object.assign({}, props, {
    className: cn("appbar-" + position, className)
  }), React__default.createElement("div", {
    className: 'header'
  }, children));
};
var AppbarRightChildren = function AppbarRightChildren(_ref2) {
  var children = _ref2.children;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: 'app-bar-divider'
  }), React__default.createElement("div", {
    className: 'app-bar-right'
  }, children));
};

var Box = function Box(_ref) {
  var className = _ref.className,
      _ref$noShadow = _ref.noShadow,
      noShadow = _ref$noShadow === void 0 ? false : _ref$noShadow,
      _ref$rect = _ref.rect,
      rect = _ref$rect === void 0 ? false : _ref$rect,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "noShadow", "rect", "children"]);

  return React__default.createElement("div", Object.assign({
    className: cn('box', {
      'box-no-shadow': noShadow,
      'box-rect': rect
    }, className)
  }, props), children);
};

exports.Appbar = Appbar;
exports.AppbarRightChildren = AppbarRightChildren;
exports.Box = Box;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Checkbox = Checkbox;
exports.Column = Column;
exports.FormField = FormField;
exports.FormInput = FormInput;
exports.FormSelect = FormSelect;
exports.FormTextarea = FormTextarea;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.ModalBody = ModalBody;
exports.ModalContainer = ModalContainer;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Radio = Radio;
exports.Row = Row;
//# sourceMappingURL=index.js.map
