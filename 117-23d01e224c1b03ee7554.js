(window.webpackJsonp=window.webpackJsonp||[]).push([[117,118,119],{1005:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),r=d(a(2)),n=d(a(5)),o=d(a(1006));function d(e){return e&&e.__esModule?e:{default:e}}var _=n.default.bind(o.default),u={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.name,a=e.url,r=e.version;return l.default.createElement("div",{className:_("badge-container")},l.default.createElement("a",{className:_("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},l.default.createElement("span",{className:_("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:_("badge-version")},"v".concat(r))))};s.propTypes=u;var c=s;t.default=c},1006:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1007:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),r=d(a(2)),n=d(a(5)),o=d(a(1012));function d(e){return e&&e.__esModule?e:{default:e}}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t,a){return t&&c(e.prototype,t),a&&c(e,a),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=n.default.bind(o.default),f={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){function t(e){var a,l,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l=this,(a=!(r=u(t).call(this,e))||"object"!==_(r)&&"function"!=typeof r?s(l):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(s(a)),a.handleCodeToggle=a.handleCodeToggle.bind(s(a)),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),i(t,null,[{key:"renderHeader",value:function(e){return e?l.default.createElement("div",{className:m("header")},l.default.createElement("h2",{className:m("title")},e)):null}},{key:"renderDescription",value:function(e){return e?l.default.createElement("div",{className:m("description")},e):null}}]),i(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,a=e.example,r=e.exampleSrc,n=e.title,o=e.description,d=this.state,_=d.isExpanded,u=d.isBackgroundTransparent;return l.default.createElement("div",{className:m("template")},t.renderHeader(n),l.default.createElement("div",{className:m("content",{"dynamic-content":u})},t.renderDescription(o),a),r&&l.default.createElement("div",{className:m("footer")},l.default.createElement("div",{className:m("button-container")},l.default.createElement("button",{type:"button",className:m("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),l.default.createElement("button",{type:"button",className:m("code-toggle"),onClick:this.handleCodeToggle},l.default.createElement("span",{className:m("chevron-left")}),l.default.createElement("span",null,"Code"),l.default.createElement("span",{className:m("chevron-right")}))),_&&l.default.createElement("div",{className:m("code")},r)))}}]),t}(l.default.Component);b.propTypes=f,b.defaultProps={isExpanded:!1};var g=b;t.default=g},1012:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1013:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),r=d(a(2)),n=d(a(5)),o=d(a(1021));function d(e){return e&&e.__esModule?e:{default:e}}var _=n.default.bind(o.default),u={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},s=function(e){var t=e.rows;return l.default.createElement("table",{className:_("table")},l.default.createElement("thead",null,l.default.createElement("tr",{className:_("tr")},l.default.createElement("th",{className:_("th")},"Prop Name"),l.default.createElement("th",{className:_("th")},"Type"),l.default.createElement("th",{className:_("th")},"Is Required"),l.default.createElement("th",{className:_("th")},"Default Value"),l.default.createElement("th",{className:_("th")},"Description"))),l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{className:_(["tr","props-tr"]),key:e.name},l.default.createElement("td",{className:_(["td","strong","props-td"])},e.name),l.default.createElement("td",{className:_(["td","props-td"])},e.type()),l.default.createElement("td",{className:_(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),l.default.createElement("td",{className:_(["td","props-td"])},e.defaultValue),l.default.createElement("td",{className:_(["td","props-td"])},e.description()))}))))};s.propTypes=u;var c=s;t.default=c},1021:function(e,t,a){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1033:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),r=d(a(2)),n=d(a(5)),o=d(a(1057));function d(e){return e&&e.__esModule?e:{default:e}}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.default.bind(o.default),c={variant:r.default.oneOf(["light","dark"]),title:r.default.string},i=function(e){var t=e.variant,a=e.title,r=u(e,["variant","title"]),n=s(["placeholder",r.className]),o=s(["inner","is-".concat(t)]);return l.default.createElement("div",_({},r,{className:n}),l.default.createElement("div",{className:o},l.default.createElement("h2",null,a)))};i.propTypes=c,i.defaultProps={variant:"dark",title:""};var p=i;t.default=p},1057:function(e,t,a){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}}}]);
//# sourceMappingURL=117-23d01e224c1b03ee7554.js.map