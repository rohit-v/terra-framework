(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(2)),o=l(n(5)),u=l(n(1006));function l(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(u.default),i={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.name,n=e.url,r=e.version;return a.default.createElement("div",{className:d("badge-container")},a.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(r))))};s.propTypes=i;var c=s;t.default=c},1006:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(2)),o=l(n(5)),u=l(n(1012));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=o.default.bind(u.default),_={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},f=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=i(t).call(this,e))||"object"!==d(r)&&"function"!=typeof r?s(a):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(s(n)),n.handleCodeToggle=n.handleCodeToggle.bind(s(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:b("header")},a.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:b("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,r=e.exampleSrc,o=e.title,u=e.description,l=this.state,d=l.isExpanded,i=l.isBackgroundTransparent;return a.default.createElement("div",{className:b("template")},t.renderHeader(o),a.default.createElement("div",{className:b("content",{"dynamic-content":i})},t.renderDescription(u),n),r&&a.default.createElement("div",{className:b("footer")},a.default.createElement("div",{className:b("button-container")},a.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:b("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:b("chevron-right")}))),d&&a.default.createElement("div",{className:b("code")},r)))}}]),t}(a.default.Component);f.propTypes=_,f.defaultProps={isExpanded:!1};var h=f;t.default=h},1012:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(2)),o=l(n(5)),u=l(n(1021));function l(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(u.default),i={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},s=function(e){var t=e.rows;return a.default.createElement("table",{className:d("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:d("tr")},a.default.createElement("th",{className:d("th")},"Prop Name"),a.default.createElement("th",{className:d("th")},"Type"),a.default.createElement("th",{className:d("th")},"Is Required"),a.default.createElement("th",{className:d("th")},"Default Value"),a.default.createElement("th",{className:d("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:d(["td","props-td"])},e.type()),a.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};s.propTypes=i;var c=s;t.default=c},1021:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1211:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(1005),u=n.n(o),l=function(e){var t=e.url;return r.a.createElement(u.a,{name:"terra-navigation-side-menu",version:"2.28.0",url:t})}},1932:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(24)),o=a(n(25)),u=a(n(26)),l=a(n(27)),d=a(n(29)),i=a(n(28)),s=a(n(0)),c=a(n(5)),m=a(n(1100)),p=a(n(1933)),b=c.default.bind(p.default),_=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,u.default)(this,(0,l.default)(t).call(this,e))).handleOnChange=n.handleOnChange.bind((0,d.default)(n)),n.resetMenuState=n.resetMenuState.bind((0,d.default)(n)),n.fakeRoutingBack=n.fakeRoutingBack.bind((0,d.default)(n)),n.state={selectedMenuKey:"menu",selectedChildKey:void 0},n}return(0,i.default)(t,e),(0,o.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?s.default.createElement("div",{className:b("content")},s.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),s.default.createElement("p",null,"Parent Route")):s.default.createElement(m.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),s.default.createElement("div",{className:b("content-wrapper")},e)}}]),t}(s.default.Component);t.default=_},1933:function(e,t,n){e.exports={content:"NavigationSideMenuExample-module__content___3w5fk","content-wrapper":"NavigationSideMenuExample-module__content-wrapper___2sz9G",toolbar:"NavigationSideMenuExample-module__toolbar___uM12J"}},2418:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(17),r=n.n(a),o=n(22),u=n.n(o),l=n(0),d=n.n(l),i=n(354),s=n(1211),c=n(1013),m=n.n(c),p=function(){return Object(i.mdx)(m.a,{rows:[{name:"menuItems",type:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"arrayOf"),Object(i.mdx)("pre",null,Object(i.mdx)("code",r()({parentName:"pre"},{className:"language-json"}),'{\n "name": "shape",\n "value": {\n  "childKeys": {\n   "name": "arrayOf",\n   "value": {\n    "name": "string"\n   },\n   "description": "Keys of menu items",\n   "required": false\n  },\n  "hasSubMenu": {\n   "name": "bool",\n   "description": "Used to match visual style of a menuItem with children on an item without children.",\n   "required": false\n  },\n  "isRootMenu": {\n   "name": "bool",\n   "description": "Whether or not the menu is the primary navigation links in small form factor.",\n   "required": false\n  },\n  "id": {\n   "name": "string",\n   "description": "ID to be applied to the menu item div.",\n   "required": false\n  },\n  "metaData": {\n   "name": "object",\n   "description": "Optional meta data to be returned along with the item key within the onChange.",\n   "required": false\n  },\n  "key": {\n   "name": "string",\n   "description": "Unique identifier that will be returned in the onChange callback when an endpoint is reached.",\n   "required": true\n  },\n  "text": {\n   "name": "string",\n   "description": "Text for the menu row and header title when selected.",\n   "required": true\n  }\n }\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"An array of configuration for each menu item."))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Callback function when a menu endpoint is reached.\nreturns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})"))}return t.isMDXComponent=!0,t({})}},{name:"routingStackBack",type:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Delegate prop showParent function that is provided by the terra-navigation-layout."))}return t.isMDXComponent=!0,t({})}},{name:"selectedChildKey",type:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Key of the currently selected child item on the selected menu page.\nThis is used when traveling back up the menu stack or when the child is an end point."))}return t.isMDXComponent=!0,t({})}},{name:"selectedMenuKey",type:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Key of the currently selected menu page."))}return t.isMDXComponent=!0,t({})}},{name:"toolbar",type:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=u()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"An optional toolbar to display below the side menu action header"))}return t.isMDXComponent=!0,t({})}}]})},b=n(1932),_=n.n(b),f={};function h(e){var t=e.components,n=u()(e,["components"]);return Object(i.mdx)("wrapper",r()({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu from 'terra-navigation-side-menu';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass NavigationSideMenuDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.resetMenuState = this.resetMenuState.bind(this);\n    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  resetMenuState() {\n    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined });\n  }\n\n  fakeRoutingBack() {\n    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });\n  }\n\n  render() {\n    let content;\n    if (this.state.selectedMenuKey === 'fake-parent') {\n      content = (\n        <div className={cx('content')}>\n          <button type=\"button\" onClick={this.resetMenuState}>\n            Child Route\n          </button>\n          <p>Parent Route</p>\n        </div>\n      );\n    } else {\n      content = (\n        <NavigationSideMenu\n          id=\"test-menu\"\n          menuItems={[\n            { key: 'menu', text: 'Menu', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },\n            {\n              key: 'submenu1', text: 'Sub Menu 1', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',\n            },\n            { key: 'submenu2', text: 'Sub Menu 2' },\n            { key: 'submenu3', text: 'Sub Menu 3' },\n            { key: 'submenu4', text: 'Sub Menu 4' },\n            { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' },\n            { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' },\n            { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' },\n          ]}\n          onChange={this.handleOnChange}\n          routingStackBack={this.fakeRoutingBack}\n          selectedMenuKey={this.state.selectedMenuKey}\n          selectedChildKey={this.state.selectedChildKey}\n        />\n      );\n    }\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default NavigationSideMenuDefault;\n\n")))}h.isMDXComponent=!0;var g=n(1007),y=n.n(g),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.a.createElement(y.a,{title:t||"Navigation Side Menu Example",description:n,example:d.a.createElement(_.a,null),exampleSrc:d.a.createElement(h,null),isExpanded:a})},v={};function O(e){var t=e.components,n=u()(e,["components"]);return Object(i.mdx)("wrapper",r()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(s.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-navigation-side-menu"},"Terra Navigation Side Menu"),Object(i.mdx)("p",null,"A structural component for nesting navigational items within the content section of the terra-menu-layout."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",r()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-side-menu"))))),Object(i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",r()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(i.mdx)("th",r()({parentName:"tr"},{align:null}),"Version"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",r()({parentName:"tr"},{align:null}),"react"),Object(i.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",r()({parentName:"tr"},{align:null}),"react-dom"),Object(i.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",r()({parentName:"tr"},{align:null}),"react-intl"),Object(i.mdx)("td",r()({parentName:"tr"},{align:null}),"^2.8.0")))),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("pre",null,Object(i.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import NavigationSideMenu from 'terra-navigation-side-menu';\n")),Object(i.mdx)("h2",{id:"component-features"},"Component Features"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(i.mdx)("p",null,Object(i.mdx)("a",r()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-side-menu"}),"View Component Source Code")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(x,{title:"Navigation Side Menu Example",mdxType:"NavigationSideMenuExample"}),Object(i.mdx)("h2",{id:"navigation-side-menu-props-table"},"Navigation Side Menu Props Table"),Object(i.mdx)(p,{mdxType:"NavigationSideMenuPropsTable"}))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=104-e9d658ebe4a122b29865.js.map