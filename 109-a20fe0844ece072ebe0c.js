(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=o(n(2)),l=o(n(5)),r=o(n(1006));function o(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(r.default),u={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},d=function(e){var t=e.name,n=e.url,a=e.version;return i.default.createElement("div",{className:c("badge-container")},i.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},i.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),i.default.createElement("span",{className:c("badge-version")},"v".concat(a))))};d.propTypes=u;var s=d;t.default=s},1006:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1033:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=o(n(2)),l=o(n(5)),r=o(n(1057));function o(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.default.bind(r.default),s={variant:a.default.oneOf(["light","dark"]),title:a.default.string},m=function(e){var t=e.variant,n=e.title,a=u(e,["variant","title"]),l=d(["placeholder",a.className]),r=d(["inner","is-".concat(t)]);return i.default.createElement("div",c({},a,{className:l}),i.default.createElement("div",{className:r},i.default.createElement("h2",null,n)))};m.propTypes=s,m.defaultProps={variant:"dark",title:""};var p=m;t.default=p},1057:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},1090:function(e,t,n){e.exports={placeholder:"InfiniteListDocExampleCommon-module__placeholder___3oD89","item-content":"InfiniteListDocExampleCommon-module__item-content___19iKr","main-content":"InfiniteListDocExampleCommon-module__main-content___1JBWw"}},1116:function(e,t,n){"use strict";var i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(5)),r=i(n(1090)),o=l.default.bind(r.default),c=function(e){var t=e.children;return a.default.createElement("div",{className:o("main-content")},t)};t.default=c},1137:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0),a=n.n(i),l=n(1005),r=n.n(l),o=function(e){var t=e.url;return a.a.createElement(r.a,{name:"terra-infinite-list",version:"3.27.0",url:t})}},1894:function(e,t,n){"use strict";var i=n(13),a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=i(n(364)),o=a(n(1033)),c=a(n(5)),u=a(n(1895)),d=a(n(1116)),s=a(n(1090)),m=c.default.bind(s.default),p=function(e){var t=[l.default.createElement(r.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,l.default.createElement(r.Item,{key:n.key},l.default.createElement(o.default,{title:n.title,className:m("placeholder")}))));var n})),t},f=function(){return l.default.createElement(d.default,null,l.default.createElement(r.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Section"},u.default.map((function(e){return p(e)}))))};t.default=f},1895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"},{title:"Item 0-3",key:"unique-0-3"},{title:"Item 0-4",key:"unique-0-4"},{title:"Item 0-5",key:"unique-0-5"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique-1-1"},{title:"Item 1-2",key:"unique-1-2"},{title:"Item 1-3",key:"unique-1-3"},{title:"Item 1-4",key:"unique-1-4"},{title:"Item 1-5",key:"unique-1-5"}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Item 3-0",key:"unique-3-0"},{title:"Item 3-1",key:"unique-3-1"},{title:"Item 3-2",key:"unique-3-2"},{title:"Item 3-3",key:"unique-3-3"},{title:"Item 3-4",key:"unique-3-4"},{title:"Item 3-5",key:"unique-3-5"}]},{title:"Section 4",key:"unique-key-4",childItems:[{title:"Item 4-0",key:"unique-4-0"},{title:"Item 4-1",key:"unique-4-1"},{title:"Item 4-2",key:"unique-4-2"},{title:"Item 4-3",key:"unique-4-3"},{title:"Item 4-4",key:"unique-4-4"},{title:"Item 4-5",key:"unique-4-5"}]}];t.default=i},2067:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var i=n(17),a=n.n(i),l=n(22),r=n.n(l),o=(n(0),n(354)),c=n(1137),u=n(1894),d=n.n(u),s={};function m(e){var t=e.components,n=r()(e,["components"]);return Object(o.mdx)("wrapper",a()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(c.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-infinitelist---sections"},"Terra InfiniteList - Sections"),Object(o.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",Object(o.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),Object(o.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),Object(o.mdx)("p",null,"So in our first step a ",Object(o.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),Object(o.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child items for the section appending them to the initial array."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n    return section;\n  };\n")),Object(o.mdx)("h2",{id:"unpack-data"},"Unpack Data"),Object(o.mdx)("p",null,"We can then implement the unpack of our data into our list items."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),Object(o.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)("h2",{id:"example"},"Example"),Object(o.mdx)(d.a,{title:"Sections Header Infinite List",mdxType:"InfiniteListSection"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=109-a20fe0844ece072ebe0c.js.map