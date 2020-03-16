(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),i=d(n(2)),l=d(n(5)),r=d(n(1006));function d(e){return e&&e.__esModule?e:{default:e}}var m=l.default.bind(r.default),o={name:i.default.string.isRequired,url:i.default.string,version:i.default.string.isRequired},c=function(e){var t=e.name,n=e.url,i=e.version;return a.default.createElement("div",{className:m("badge-container")},a.default.createElement("a",{className:m("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(i)},a.default.createElement("span",{className:m("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:m("badge-version")},"v".concat(i))))};c.propTypes=o;var p=c;t.default=p},1006:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1154:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),i=n.n(a),l=n(1005),r=n.n(l),d=function(e){var t=e.url;return i.a.createElement(r.a,{name:"terra-application-navigation",version:"1.23.0",url:t})}},2051:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(17),i=n.n(a),l=n(22),r=n.n(l),d=(n(0),n(354)),m=n(1154),o={};function c(e){var t=e.components,n=r()(e,["components"]);return Object(d.mdx)("wrapper",i()({},o,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(m.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-application-navigation"},"Terra Application Navigation"),Object(d.mdx)("p",null,"The Terra Application Navigation is a responsive, themeable layout for building applications."),Object(d.mdx)("p",null,"The Terra Application Navigation provides:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"A themeable, responsive application header, capable of rendering application-specific branding, tabular navigation, and user-centric utility controls"),Object(d.mdx)("li",{parentName:"ul"},"Responsive menu and content areas")),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",i()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-navigation"))))),Object(d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Version"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"react"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"^16.8.5")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"react-dom"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"^16.8.5")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"react-intl"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"^2.4.0")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"terra-application"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"^1.0.0")))),Object(d.mdx)("h2",{id:"component-features"},"Component Features"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",i()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",i()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",i()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",i()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("a",i()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support"))),Object(d.mdx)("p",null,Object(d.mdx)("a",i()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-application-navigation"}),"View component source code")),Object(d.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"The ApplicationNavigation requires the presence of a ",Object(d.mdx)("inlineCode",{parentName:"li"},"Application")," component (provided by ",Object(d.mdx)("inlineCode",{parentName:"li"},"terra-application"),") in its parent hierarchy. This provides essential utilities around i18n, context, and breakpoints.")),Object(d.mdx)("pre",null,Object(d.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Application from 'terra-application';\nimport ApplicationNavigation from 'terra-application-navigation';\n\nconst MyApp = () => (\n  <Application locale=\"en-US\">\n    <ApplicationNavigation\n      titleConfig={titleConfig}\n      utilityItems={utilityItems}\n      navigationItems={navigationItems}\n      extensionItems={extensionItems}\n      activeNavigationItemKey={activeKey}\n    >\n      {myContent}\n    </ApplicationNavigation>\n  </Application>\n);\n")),Object(d.mdx)("h2",{id:"props"},"Props"),Object(d.mdx)("h3",{id:"extensionitems"},"extensionItems"),Object(d.mdx)("h4",{id:"is-required-false"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"extensionItems")," prop allows consumers to render icons with an assocaited selection callback within the ApplicationNavigation's extensions region. The expectations for ",Object(d.mdx)("inlineCode",{parentName:"p"},"extensionItems")," is that they are to provide click actions and disclosures for the application level context. The ",Object(d.mdx)("inlineCode",{parentName:"p"},"extensionItems")," will rollup in various counts depending on the current breakpoint. If ",Object(d.mdx)("inlineCode",{parentName:"p"},"extensionItems")," are passed as props the associated ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectExtensionItem")," function callback should be passed as well."),Object(d.mdx)("p",null,"The value provided for ",Object(d.mdx)("inlineCode",{parentName:"p"},"extensionItems")," should be an array of objects with the following API:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Key Name"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Is Required"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"key")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"A key rendered to be used as a unique react key as well as returned with the onSelectExtensionItem.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"icon")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Element"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"A React element representing the themable icon for the extension.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"text")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"The text to either be set as an aria-label or display text.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"metaData")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Object"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"An object containing whatever additional identifying information to be returned with the onSelectExtensionItem.")))),Object(d.mdx)("pre",null,Object(d.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"const extensionItems = [{\n  key: 'extension_1',\n  icon: <Icon1 >,\n  text: 'Extension 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'extension_2',\n  icon: <Icon2 >,\n  text: 'Extension 2',\n  metaData: { myValue: value2 }\n}];\n")),Object(d.mdx)("h3",{id:"onselectextensionitem"},"onSelectExtensionItem"),Object(d.mdx)("h4",{id:"is-required-false-1"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectExtensionItem")," prop allows consumers to retrieve the information related to the extension that was clicked. The function callback will return the information in the format of ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectExtensionItem(key, metaData)"),"."),Object(d.mdx)("h3",{id:"navigationitems"},"navigationItems"),Object(d.mdx)("h4",{id:"is-required-false-2"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"navigationItems")," prop allows consumers to render high-level, primary navigation controls directly within the ApplicationNavigation. The expectation of ",Object(d.mdx)("inlineCode",{parentName:"p"},"navigationItems")," is that items will not be added/removed, as this would be detrimental to the user experience. Once selected, a navigational item is no longer actionable and cannot be reselected. Navigation items at the application level should have equivalent context levels. Navigation from one tab to another should not be influenced by content, as each navigational item should be a sandboxed concept."),Object(d.mdx)("p",null,"The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If ",Object(d.mdx)("inlineCode",{parentName:"p"},"navigationItems")," are passed as props the associated ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectNavigationItem")," function callback should be passed as well."),Object(d.mdx)("p",null,"The value provided for ",Object(d.mdx)("inlineCode",{parentName:"p"},"navigationItems")," should be an array of objects with the following API:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Key Name"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Is Required"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"key")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"A key rendered to be used as a unique react key as well as returned with the onSelectNavigationItem.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"text")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"The text to either be set as an aria-label or display text.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"metaData")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Object"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"An object containing whatever additional identifying information to be returned with the onSelectNavigationItem.")))),Object(d.mdx)("pre",null,Object(d.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"const navigationItems = [{\n  key: 'page_1',\n  text: 'Page 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'page_2',\n  text: 'Page 2',\n  metaData: { myValue: value2 }\n}];\n")),Object(d.mdx)("h3",{id:"onselectnavigationitem"},"onSelectNavigationItem"),Object(d.mdx)("h4",{id:"is-required-false-3"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectNavigationItem")," prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectNavigationItem(key, metaData)"),"."),Object(d.mdx)("h3",{id:"activenavigationitemkey"},"activeNavigationItemKey"),Object(d.mdx)("h4",{id:"is-required-false-4"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"activeNavigationItemKey")," prop allows consumers to set the currently selected navigation item. Accordingly, the ",Object(d.mdx)("inlineCode",{parentName:"p"},"activeNavigationItemKey")," value must have an associated entry within the ",Object(d.mdx)("inlineCode",{parentName:"p"},"navigationItems")," specification."),Object(d.mdx)("h3",{id:"utilityitems"},"utilityItems"),Object(d.mdx)("h4",{id:"is-required-false-5"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"utilityItems")," prop allows consuming applications to present an application-level custom utility items directly from the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If ",Object(d.mdx)("inlineCode",{parentName:"p"},"utilityItems")," are passed as props the associated ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectUtilityItem")," function callback should be passed as well."),Object(d.mdx)("p",null,"The value provided for ",Object(d.mdx)("inlineCode",{parentName:"p"},"utilityItems")," should be an array of objects with the following API:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Key Name"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Is Required"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"key")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"A key rendered to be used as a unique react key as well as returned with the onSelectUtilityItem.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"icon")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Element"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"A React element representing the themable icon for the utility item.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"text")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"The text to either be set as an aria-label or display text.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"metaData")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Object"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"An object containing whatever additional identifying information to be returned with the onSelectUtilityItem.")))),Object(d.mdx)("pre",null,Object(d.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"const utilityItems = [{\n  key: 'utility_1',\n  icon: <Icon1 >,\n  text: 'Utility 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'utility_2',\n  icon: <Icon2 >,\n  text: 'Utility 2',\n  metaData: { myValue: value2 }\n}];\n")),Object(d.mdx)("h3",{id:"onselectutilityitem"},"onSelectUtilityItem"),Object(d.mdx)("h4",{id:"is-required-false-6"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectUtilityItem")," prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectUtilityItem(key, metaData)"),"."),Object(d.mdx)("h3",{id:"onselectsettings"},"onSelectSettings"),Object(d.mdx)("h4",{id:"is-required-false-7"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectSettings")," prop allows consumers have first class support for a settings utility item. If the ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectSettings")," prop is not set a settings utility item will not be displayed."),Object(d.mdx)("h3",{id:"onselecthelp"},"onSelectHelp"),Object(d.mdx)("h4",{id:"is-required-false-8"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectHelp")," prop allows consumers have first class support for a help utility item. If the ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectHelp")," prop is not set a settings utility item will not be displayed."),Object(d.mdx)("h3",{id:"onselectlogout"},"onSelectLogout"),Object(d.mdx)("h4",{id:"is-required-false-9"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectLogout")," prop allows consumers have first class support for a logout utility button. If the ",Object(d.mdx)("inlineCode",{parentName:"p"},"onSelectLogout")," prop is not set a settings utility item will not be displayed."),Object(d.mdx)("h3",{id:"titleconfig"},"titleConfig"),Object(d.mdx)("h4",{id:"is-required-false-10"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"titleConfig")," prop allows consuming applications to add their own branding to the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Key Name"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Is Required"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"title")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Title to be displayed or set as the aria-label if a title element is passed.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"headline")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Super text to be display above the main title text.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"subline")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Sub text to be display below the main title text.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"element")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Element"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Element to use in place of title text. Typically a logo for branding.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"hideTitleWithinDrawerMenu")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Boolean"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Whether or not the title should be hidden when at the compact breakpoint.")))),Object(d.mdx)("pre",null,Object(d.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"const myTitleConfig = {\n  title: 'My Application',\n  subline: 'My Subline',\n  hideTitleWithinDrawerMenu: false,\n}\n")),Object(d.mdx)("h3",{id:"userconfig"},"userConfig"),Object(d.mdx)("h4",{id:"is-required-false-11"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"userConfig")," prop allows consumers to set a user associated to the current application context. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Key Name"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Is Required"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"name")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("strong",{parentName:"td"},"required")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"User name to be displayed for the user button and within utilities.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"detail")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Additional user details string.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"initials")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"User initials to be displayed within the avatar if no image is present.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"imageSrc")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Src to provide to the avatar component.")))),Object(d.mdx)("pre",null,Object(d.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"const myUserConfig = {\n  name: 'Name, User',\n  detail: 'Is a User',\n  initials: 'UN',\n  imageSrc: 'imageSrc',\n}\n")),Object(d.mdx)("h3",{id:"hero"},"hero"),Object(d.mdx)("h4",{id:"is-required-false-12"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"hero")," prop allows consumers to add a hero element within the utility popup and/or navigation drawer. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint."),Object(d.mdx)("h3",{id:"notifications"},"notifications"),Object(d.mdx)("h4",{id:"is-required-false-13"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"notifications")," prop allows consumers to display notification counts associated to navigationItems and extensionsItems. The props is made up of key/value pairs; the key is the associated entry within the ",Object(d.mdx)("inlineCode",{parentName:"p"},"navigationItems")," or ",Object(d.mdx)("inlineCode",{parentName:"p"},"extensionItems")," specification, and a numerical value. Depending on locations within the navigational structure and breakpoint the number of digits displayed may be limited."),Object(d.mdx)("pre",null,Object(d.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"const myNotifications = {\n  key1: 3,\n  extension2: 10,\n}\n")),Object(d.mdx)("h3",{id:"ondrawermenustatechange"},"onDrawerMenuStateChange"),Object(d.mdx)("h4",{id:"is-required-false-14"},"Is Required: ",Object(d.mdx)("inlineCode",{parentName:"h4"},"false")),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"onDrawerMenuStateChange")," callback allows the consumer to know state changes in Drawer Menu."),Object(d.mdx)("h2",{id:"responsive-design"},"Responsive Design"),Object(d.mdx)("p",null,"The ApplicationNavigation has two rendering modes: ",Object(d.mdx)("inlineCode",{parentName:"p"},"standard")," and ",Object(d.mdx)("inlineCode",{parentName:"p"},"compact"),"."),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"The ",Object(d.mdx)("inlineCode",{parentName:"li"},"standard")," rendering occurs at ",Object(d.mdx)("inlineCode",{parentName:"li"},"large"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"huge"),", and ",Object(d.mdx)("inlineCode",{parentName:"li"},"enormous")," breakpoints."),Object(d.mdx)("li",{parentName:"ul"},"The ",Object(d.mdx)("inlineCode",{parentName:"li"},"compact")," rendering occurs at ",Object(d.mdx)("inlineCode",{parentName:"li"},"tiny"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"small"),", ",Object(d.mdx)("inlineCode",{parentName:"li"},"medium")," breakpoints.")),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),"Prop"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"th"},"standard")," Rendering"),Object(d.mdx)("th",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"th"},"compact")," Rendering"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"userConfig")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's header."),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's navigation drawer.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"titleConfig")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's header."),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Same as ",Object(d.mdx)("inlineCode",{parentName:"td"},"standard"),".")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"hero")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's utility popup (as provided by ",Object(d.mdx)("inlineCode",{parentName:"td"},"terra-popup"),")."),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's navigation drawer.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"utilityItems")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's utility popup (as provided by ",Object(d.mdx)("inlineCode",{parentName:"td"},"terra-popup"),")."),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's navigation drawer.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"navigationItems")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within the ApplicationNavigation's header as tabs."),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's navigation drawer.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"extensionItems")),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Content is rendered within ApplicationNavigation's header."),Object(d.mdx)("td",i()({parentName:"tr"},{align:null}),"Same as ",Object(d.mdx)("inlineCode",{parentName:"td"},"standard"),".")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=265-e6b04eb01742d9752dd4.js.map