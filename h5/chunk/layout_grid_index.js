(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"267":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(50),i=_interopRequireDefault(n(268)),u=_interopRequireDefault(n(51)),l=_interopRequireDefault(n(54)),c=_interopRequireDefault(n(66)),f=_interopRequireDefault(n(65)),s=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(279);var p=function(e){function AtGrid(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtGrid);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=AtGrid.__proto__||Object.getPrototypeOf(AtGrid)).call.apply(e,[this].concat(a))),n.handleClick=function(e,t,r){for(var a=arguments.length,o=Array(a>3?a-3:0),i=3;i<a;i++)o[i-3]=arguments[i];var u=n.props,l=u.onClick,f=u.columnNum;if((0,c.default)(l)){var s=r*f+t;l.apply(void 0,[e,s].concat(o))}},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtGrid,s.default),r(AtGrid,[{"key":"render","value":function render(){var e=this,t=this.props,n=t.data,r=t.mode,u=t.columnNum,c=t.hasBorder;if(Array.isArray(n)&&0===n.length)return null;var s=(0,i.default)(n,u),p=(0,l.default)(["at-grid__flex-item","at-grid-item","at-grid-item--"+r],{"at-grid-item--no-border":!c});return a.default.createElement(o.View,{"className":(0,l.default)("at-grid",this.props.className)},s.map(function(t,n){return a.default.createElement(o.View,{"className":"at-grid__flex","key":n},t.map(function(t,r){return a.default.createElement(o.View,{"key":r,"className":p,"onClick":e.handleClick.bind(e,t,r,n)},a.default.createElement(o.View,{"className":"at-grid-item__content"},a.default.createElement(o.View,{"className":"at-grid-item__content-inner"},a.default.createElement(o.View,{"className":"content-inner__icon"},t.image&&a.default.createElement(o.Image,{"className":"content-inner__img","src":t.image,"mode":"scaleToFill"}),t.icon&&!t.image&&a.default.createElement(f.default,{"value":t.icon,"color":t.iconColor,"size":t.iconSize})),a.default.createElement(o.Text,{"className":"content-inner__text"},t.value))))}))}))}}]),AtGrid}();t.default=p,p.defaultProps={"data":[],"columnNum":3,"mode":"square","hasBorder":!0},p.propTypes={"mode":u.default.string,"onClick":u.default.func,"hasBorder":u.default.bool,"columnNum":u.default.oneOf([u.default.string,u.default.number]),"data":u.default.arrayOf(u.default.shape({"icon":u.default.string,"image":u.default.string,"value":u.default.string,"iconSize":u.default.number,"iconColor":u.default.string}))}},"268":function(e,t,n){var r=n(269),a=n(270),o=n(275),i=Math.ceil,u=Math.max;e.exports=function chunk(e,t,n){t=(n?a(e,t,n):void 0===t)?1:u(o(t),0);var l=null==e?0:e.length;if(!l||t<1)return[];for(var c=0,f=0,s=Array(i(l/t));c<l;)s[f++]=r(e,c,c+=t);return s}},"269":function(e,t){e.exports=function baseSlice(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(n=n>a?a:n)<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+t];return o}},"270":function(e,t,n){var r=n(271),a=n(272),o=n(274),i=n(70);e.exports=function isIterateeCall(e,t,n){if(!i(n))return!1;var u=typeof t;return!!("number"==u?a(n)&&o(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},"271":function(e,t){e.exports=function eq(e,t){return e===t||e!=e&&t!=t}},"272":function(e,t,n){var r=n(66),a=n(273);e.exports=function isArrayLike(e){return null!=e&&a(e.length)&&!r(e)}},"273":function(e,t){var n=9007199254740991;e.exports=function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},"274":function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function isIndex(e,t){var a=typeof e;return!!(t=null==t?n:t)&&("number"==a||"symbol"!=a&&r.test(e))&&e>-1&&e%1==0&&e<t}},"275":function(e,t,n){var r=n(276);e.exports=function toInteger(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},"276":function(e,t,n){var r=n(277),a=1/0,o=1.7976931348623157e308;e.exports=function toFinite(e){return e?(e=r(e))===a||e===-a?(e<0?-1:1)*o:e==e?e:0:0===e?e:0}},"277":function(e,t,n){var r=n(70),a=n(278),o=NaN,i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function toNumber(e){if("number"==typeof e)return e;if(a(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||c.test(e)?f(e.slice(2),n?2:8):u.test(e)?o:+e}},"278":function(e,t,n){var r=n(60),a=n(80),o="[object Symbol]";e.exports=function isSymbol(e){return"symbol"==typeof e||a(e)&&r(e)==o}},"279":function(e,t,n){},"281":function(e,t,n){},"36":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(50),i=_interopRequireDefault(n(267)),u=_interopRequireDefault(n(53));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(281);var l=function(e){function GridPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GridPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GridPage.__proto__||Object.getPrototypeOf(GridPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(e,t){console.log(e,t)},e.state={"data":[{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","value":"领取中心"},{"image":"https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png","value":"找折扣"},{"image":"https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png","value":"领会员"},{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png","value":"新品首发"},{"image":"https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png","value":"领京豆"},{"image":"https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png","value":"手机馆"}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GridPage,a.default.Component),r(GridPage,[{"key":"render","value":function render(){return a.default.createElement(o.View,{"className":"page"},a.default.createElement(u.default,{"title":"Grid 栅格"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"正方形案例"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(i.default,{"data":this.state.data,"onClick":this.handleClick})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"矩形案例"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(i.default,{"mode":"rect","data":this.state.data})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"没有边框"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(i.default,{"mode":"rect","data":this.state.data,"hasBorder":!1}))))))}}]),GridPage}();t.default=l},"59":function(e,t,n){var r=n(61).Symbol;e.exports=r},"60":function(e,t,n){var r=n(59),a=n(63),o=n(64),i="[object Null]",u="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?u:i:l&&l in Object(e)?a(e):o(e)}},"61":function(e,t,n){var r=n(62),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},"62":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"63":function(e,t,n){var r=n(59),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,u=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=o.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var a=i.call(e);return r&&(t?e[u]=n:delete e[u]),a}},"64":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"66":function(e,t,n){var r=n(60),a=n(70),o="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";e.exports=function isFunction(e){if(!a(e))return!1;var t=r(e);return t==i||t==u||t==o||t==l}},"70":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"80":function(e,t){e.exports=function isObjectLike(e){return null!=e&&"object"==typeof e}}}]);