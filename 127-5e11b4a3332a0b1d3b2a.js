(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1054:function(e,t,n){e.exports={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___fWXaX","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___2iJks","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___2Qmwn","tab-content":"TabsTemplate-module__tab-content___1qjIg"}},1064:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(5)),i=r(n(2)),l=r(n(1054)),u=o.default.bind(l.default),s={isLabelHidden:i.default.bool,label:i.default.string,id:i.default.string},d=function(e){var t=e.isLabelHidden,n=e.label,r=e.id;return a.default.createElement("div",{className:u("tab-content"),id:r},t?a.default.createElement("h3",{className:"truncationHeader"},n):null,"Content for"," ",a.default.createElement("i",null,n))};d.propTypes=s;var f=d;t.default=f},1067:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var r=u(n(0)),a=u(n(2)),o=u(n(169)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(230));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var m={children:a.default.node,onChange:a.default.func,onResize:a.default.func,tiny:a.default.element,small:a.default.element,medium:a.default.element,large:a.default.element,huge:a.default.element,enormous:a.default.element,responsiveTo:a.default.oneOf(["window","parent"])},b=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(r=f(t).call(this))||"object"!==s(r)&&"function"!=typeof r?c(n):r).state={element:null},e.setContainer=e.setContainer.bind(c(e)),e.handleResize=e.handleResize.bind(c(e)),e.handleWindowResize=e.handleWindowResize.bind(c(e)),e.animationFrameID=null,e}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new o.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,a=t.tiny,o=t.small,l=t.medium,u=t.large,s=t.huge,d=t.enormous;r&&r(e);var f,c=(0,i.activeBreakpointForSize)(e);n&&c!==this.breakpoint&&n(c),this.breakpoint=c,(a||o||l||u||s||d)&&(f=e>=i.default.enormous&&d?"enormous":e>=i.default.huge&&s?"huge":e>=i.default.large&&u?"large":e>=i.default.medium&&l?"medium":e>=i.default.small&&o?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.default.createElement(r.default.Fragment,null,"parent"===n&&!this.container&&r.default.createElement("div",{ref:this.setContainer}),t)}}])&&d(n.prototype,a),l&&d(n,l),t}(r.default.Component);b.propTypes=m,b.defaultProps={responsiveTo:"parent"};var h=b;t.default=h},1460:function(e,t,n){var r=n(1461),a=n(1462),o=n(1463);e.exports=function(e){return r(e)||a(e)||o()}},1461:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},1462:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},1463:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},2350:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(1460)),o=r(n(24)),i=r(n(25)),l=r(n(26)),u=r(n(27)),s=r(n(29)),d=r(n(28)),f=r(n(0)),c=r(n(1089)),p=r(n(1064)),m=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,l.default)(this,(0,u.default)(t).call(this,e))).state={tabKeys:(0,a.default)(Array(5).keys())},n.addMoreTabPanes=n.addMoreTabPanes.bind((0,s.default)(n)),n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"createTabPanes",value:function(){return this.state.tabKeys.map((function(e){return f.default.createElement(c.default.Pane,{label:"Tab ".concat(e),key:e,id:e},f.default.createElement(p.default,{label:"Tab ".concat(e),id:"Tab ".concat(e)}))}))}},{key:"addMoreTabPanes",value:function(){this.setState({tabKeys:(0,a.default)(Array(20).keys())})}},{key:"render",value:function(){var e=5===this.state.tabKeys.length?"tabsWrapper-5":20===this.state.tabKeys.length?"tabsWrapper-20":"tabsWrapper";return f.default.createElement("div",null,f.default.createElement("button",{type:"button",onClick:this.addMoreTabPanes},"Add Tabs"),f.default.createElement(c.default,{id:e},this.createTabPanes()))}}]),t}(f.default.Component);t.default=m}}]);
//# sourceMappingURL=127-5e11b4a3332a0b1d3b2a.js.map