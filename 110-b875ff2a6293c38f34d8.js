(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n(0)),a=c(n(2)),l=c(n(5)),u=c(n(1006));function c(e){return e&&e.__esModule?e:{default:e}}var o=l.default.bind(u.default),r={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},s=function(e){var t=e.name,n=e.url,a=e.version;return i.default.createElement("div",{className:o("badge-container")},i.default.createElement("a",{className:o("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},i.default.createElement("span",{className:o("badge-name")},n?"package":"npm"),i.default.createElement("span",{className:o("badge-version")},"v".concat(a))))};s.propTypes=r;var d=s;t.default=d},1006:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1033:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n(0)),a=c(n(2)),l=c(n(5)),u=c(n(1057));function c(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.default.bind(u.default),d={variant:a.default.oneOf(["light","dark"]),title:a.default.string},m=function(e){var t=e.variant,n=e.title,a=r(e,["variant","title"]),l=s(["placeholder",a.className]),u=s(["inner","is-".concat(t)]);return i.default.createElement("div",o({},a,{className:l}),i.default.createElement("div",{className:u},i.default.createElement("h2",null,n)))};m.propTypes=d,m.defaultProps={variant:"dark",title:""};var p=m;t.default=p},1057:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},1090:function(e,t,n){e.exports={placeholder:"InfiniteListDocExampleCommon-module__placeholder___3oD89","item-content":"InfiniteListDocExampleCommon-module__item-content___19iKr","main-content":"InfiniteListDocExampleCommon-module__main-content___1JBWw"}},1116:function(e,t,n){"use strict";var i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(5)),u=i(n(1090)),c=l.default.bind(u.default),o=function(e){var t=e.children;return a.default.createElement("div",{className:c("main-content")},t)};t.default=o},1137:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(0),a=n.n(i),l=n(1005),u=n.n(l),c=function(e){var t=e.url;return a.a.createElement(u.a,{name:"terra-infinite-list",version:"3.27.0",url:t})}},1896:function(e,t,n){"use strict";var i=n(13),a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),u=i(n(364)),c=a(n(1033)),o=a(n(5)),r=a(n(1897)),s=a(n(1116)),d=a(n(1090)),m=o.default.bind(d.default),p=function(e){var t=[l.default.createElement(u.SubsectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,l.default.createElement(u.Item,{key:n.key},l.default.createElement(c.default,{title:n.title,className:m("placeholder")}))));var n})),t},f=function(e){return e.map((function(e){return function(e){var t=[l.default.createElement(u.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push(p(e))})),t}(e)}))},h=function(){return l.default.createElement(s.default,null,l.default.createElement(u.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Subsection"},f(r.default)))};t.default=h},1897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-0-0-0"},{title:"Item 0-0-1",key:"unique-0-0-1"},{title:"Item 0-0-2",key:"unique-0-0-2"},{title:"Item 0-0-3",key:"unique-0-0-3"},{title:"Item 0-0-4",key:"unique-0-0-4"},{title:"Item 0-0-5",key:"unique-0-0-5"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-0-1-0"},{title:"Item 0-1-1",key:"unique-0-1-1"},{title:"Item 0-1-2",key:"unique-0-1-2"},{title:"Item 0-1-3",key:"unique-0-1-3"},{title:"Item 0-1-4",key:"unique-0-1-4"},{title:"Item 0-1-5",key:"unique-0-1-5"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-1-0-0"},{title:"Item 1-0-1",key:"unique-1-0-1"},{title:"Item 1-0-2",key:"unique-1-0-2"},{title:"Item 1-0-3",key:"unique-1-0-3"},{title:"Item 1-0-4",key:"unique-1-0-4"},{title:"Item 1-0-5",key:"unique-1-0-5"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-1-1-0"},{title:"Item 1-1-1",key:"unique-1-1-1"},{title:"Item 1-1-2",key:"unique-1-1-2"},{title:"Item 1-1-3",key:"unique-1-1-3"},{title:"Item 1-1-4",key:"unique-1-1-4"},{title:"Item 1-1-5",key:"unique-1-1-5"}]}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Subsection 2-0",key:"unique-key-2-0",childItems:[{title:"Item 2-0-0",key:"unique-2-0-0"},{title:"Item 2-0-1",key:"unique-2-0-1"},{title:"Item 2-0-2",key:"unique-2-0-2"},{title:"Item 2-0-3",key:"unique-2-0-3"},{title:"Item 2-0-4",key:"unique-2-0-4"},{title:"Item 2-0-5",key:"unique-2-0-5"}]},{title:"Subsection 2-1",key:"unique-key-2-1",childItems:[{title:"Item 2-1-0",key:"unique-2-1-0"},{title:"Item 2-1-1",key:"unique-2-1-1"},{title:"Item 2-1-2",key:"unique-2-1-2"},{title:"Item 2-1-3",key:"unique-2-1-3"},{title:"Item 2-1-4",key:"unique-2-1-4"},{title:"Item 2-1-5",key:"unique-2-1-5"}]}]}];t.default=i},2068:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var i=n(17),a=n.n(i),l=n(22),u=n.n(l),c=(n(0),n(354)),o=n(1137),r=n(1896),s=n.n(r),d={};function m(e){var t=e.components,n=u()(e,["components"]);return Object(c.mdx)("wrapper",a()({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(o.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-infinitelist---subsections"},"Terra InfiniteList - Subsections"),Object(c.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",Object(c.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," and ",Object(c.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),Object(c.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),Object(c.mdx)("p",null,"So in our first step a ",Object(c.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),Object(c.mdx)("pre",null,Object(c.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),Object(c.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child sub sections for the section appending them to the initial array."),Object(c.mdx)("pre",null,Object(c.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createSection(childItem)));\n    return section;\n  };\n")),Object(c.mdx)("h2",{id:"map-subsection-structure"},"Map Subsection Structure"),Object(c.mdx)("p",null,"So in our first step a ",Object(c.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in following steps."),Object(c.mdx)("pre",null,Object(c.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  return section;\n};\n")),Object(c.mdx)("p",null,"Next we'll create an array with the first item being our subsection header, and then loop through the associated child items for the section appending them to the initial array."),Object(c.mdx)("pre",null,Object(c.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  subsectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n  return section;\n};\n")),Object(c.mdx)("h2",{id:"unpack-data"},"Unpack Data"),Object(c.mdx)("p",null,"We can then implement the unpack of our data into our list items."),Object(c.mdx)("pre",null,Object(c.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),Object(c.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(c.mdx)("pre",null,Object(c.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),Object(c.mdx)("p",null,"Using these steps we get the following example:"),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(s.a,{title:"Sections Header Infinite List",mdxType:"InfiniteListSubsection"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=110-b875ff2a6293c38f34d8.js.map