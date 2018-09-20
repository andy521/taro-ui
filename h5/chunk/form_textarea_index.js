(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"316":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(0)),l=n(50),i=_interopRequireDefault(n(51)),u=_interopRequireDefault(n(54)),c=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(317);var s=function defaultFunc(){},f=function(e){function AtTextarea(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTextarea),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTextarea.__proto__||Object.getPrototypeOf(AtTextarea)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTextarea,c.default),r(AtTextarea,[{"key":"handleInput","value":function handleInput(e){var t;(t=this.props).onChange.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleFocus","value":function handleFocus(e){var t;(t=this.props).onFocus.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleBlur","value":function handleBlur(e){var t;(t=this.props).onBlur.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleConfirm","value":function handleConfirm(e){var t;(t=this.props).onConfirm.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"handleLinechange","value":function handleLinechange(e){var t;(t=this.props).onLinechange.apply(t,[e].concat(Array.prototype.slice.call(arguments)))}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,r=e.value,i=e.cursorSpacing,c=e.placeholder,s=e.placeholderStyle,f=e.placeholderClass,p=e.maxlength,d=e.count,h=e.disabled,m=e.autoFocus,y=e.focus,b=e.showConfirmBar,_=e.selectionStart,v=e.selectionEnd,g=e.fixed,w=e.textOverflowForbidden,C=e.height,O=p;w||(O+=500);var x=C?"height:"+a.default.pxTransform(C):"";return o.default.createElement(l.View,{"className":(0,u.default)("at-textarea",n),"style":t},o.default.createElement(l.Textarea,{"style":x,"placeholderStyle":s,"placeholderClass":(0,u.default)("placeholder",f),"cursorSpacing":i,"className":"at-textarea__textarea","value":r,"confirmType":"完成","maxlength":O,"placeholder":c,"disabled":h,"autoFocus":m,"focus":y,"showConfirmBar":b,"selectionStart":_,"selectionEnd":v,"fixed":g,"onInput":this.handleInput.bind(this),"onFocus":this.handleFocus.bind(this),"onBlur":this.handleBlur.bind(this),"onConfirm":this.handleConfirm.bind(this),"onLinechange":this.handleLinechange.bind(this)}),d?o.default.createElement(l.View,{"className":(0,u.default)({"at-textarea__bottom":!0,"at-textarea--error":p<r.length})},r.length,"/",p):null)}}]),AtTextarea}();f.defaultProps={"customStyle":"","className":"","value":"","cursorSpacing":100,"maxlength":200,"placeholder":"","disabled":!1,"autoFocus":!1,"focus":!1,"showConfirmBar":!1,"selectionStart":-1,"selectionEnd":-1,"count":!0,"fixed":!1,"height":"","textOverflowForbidden":!0,"onLinechange":s,"onChange":s,"onFocus":s,"onBlur":s,"onConfirm":s},f.propTypes={"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string]),"value":i.default.string,"cursorSpacing":i.default.number,"maxlength":i.default.oneOfType([i.default.string,i.default.number]),"placeholderClass":i.default.string,"placeholderStyle":i.default.string,"placeholder":i.default.string,"disabled":i.default.bool,"autoFocus":i.default.bool,"focus":i.default.bool,"showConfirmBar":i.default.bool,"selectionStart":i.default.number,"selectionEnd":i.default.number,"count":i.default.bool,"textOverflowForbidden":i.default.bool,"fixed":i.default.bool,"height":i.default.string,"onLinechange":i.default.func,"onChange":i.default.func,"onFocus":i.default.func,"onBlur":i.default.func,"onConfirm":i.default.func},t.default=f},"317":function(e,t,n){},"319":function(e,t,n){},"44":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(50),l=_interopRequireDefault(n(316)),i=_interopRequireDefault(n(53));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(319);var u=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":"","value4":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),r(Index,[{"key":"handleChange","value":function handleChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t.target.value))}},{"key":"render","value":function render(){return a.default.createElement(o.View,{"className":"page"},a.default.createElement(i.default,{"title":"Textarea 多行文本框"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"基础"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(l.default,{"value":this.state.value1,"onChange":this.handleChange.bind(this,"value1"),"maxlength":"200","placeholder":"你的问题是..."})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"不显示字数"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(l.default,{"count":!1,"value":this.state.value2,"onChange":this.handleChange.bind(this,"value2"),"maxlength":"200","placeholder":"你的问题是..."})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"文字超出仍可输入"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(l.default,{"textOverflowForbidden":!1,"value":this.state.value3,"onChange":this.handleChange.bind(this,"value3"),"maxlength":"200","placeholder":"你的问题是..."})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"自定义高度"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(l.default,{"height":"300","value":this.state.value4,"onChange":this.handleChange.bind(this,"value4"),"maxlength":"200","placeholder":"你的问题是..."}))))))}}]),Index}();t.default=u},"51":function(e,t,n){e.exports=n(55)()},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);_interopRequireDefault(o),_interopRequireDefault(n(0));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function objectToString(e){if("object"===(void 0===e?"undefined":a(e))){var t="";return Object.keys(e).forEach(function(n){var r=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[n]+";"}),t}return e},i=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return l(e)+l(t)}},{"key":"getClassName","value":function getClassName(e){var t=this.props.className;if(!t)return e;var n=e,r=t;return Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]),n.concat(r)}}]),AtComponent}();i.options={"addGlobalClass":!0},t.default=i},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=(_interopRequireDefault(a),_interopRequireDefault(n(0))),l=_interopRequireDefault(n(51)),i=n(50);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(57);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(i.View,{"className":"doc-header"},o.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":l.default.string}},"55":function(e,t,n){"use strict";var r=n(56);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,o,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"56":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"57":function(e,t,n){}}]);