(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1065:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],a=n.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function r(e,t){t=t||{};var n,r,c,l=[],s=[],p=e.querySelectorAll(a);for(t.includeContainer&&o.call(e,a)&&(p=Array.prototype.slice.apply(p)).unshift(e),n=0;n<p.length;n++)u(r=p[n])&&(0===(c=i(r))?l.push(r):s.push({documentOrder:n,tabIndex:c,node:r}));return s.sort(d).map((function(e){return e.node})).concat(l)}function u(e){return!(!c(e)||function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||i(e)<0)}function c(e){return!(e.disabled||function(e){return s(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}r.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,a)&&u(e)},r.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,l)&&c(e)};var l=n.concat("iframe").join(",");function i(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function s(e){return"INPUT"===e.tagName}e.exports=r},2293:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=n(83),u=a(n(1099)),c={header:{"/":{path:"/",component:{default:{componentClass:function(){return o.default.createElement("div",null,o.default.createElement("div",{className:"test-header"},"Header"),o.default.createElement(r.Link,{to:"/page1",className:"page-1-link"},"Page 1"),o.default.createElement(r.Link,{to:"/page2",className:"page-2-link"},"Page 2"),o.default.createElement(r.Link,{to:"/page3",className:"page-3-link"},"Page 3"))}}}}},menu:{"/page1":{path:"/page1",component:{tiny:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Tiny Menu")}},medium:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Medium Menu")}},huge:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Huge Menu")}}}},"/page2":{path:"/page2",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Menu")}},huge:{componentClass:function(){return o.default.createElement("div",{className:"test-menu-huge"},"Huge Menu")}}}}},content:{"/page1":{path:"/page1",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"page-1-content"},"Page 1 Content")}}}},"/page2":{path:"/page2",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"page-2-content"},"Page 2 Content")}}}},"/page3":{path:"/page3",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"page-3-content"},"Page 3 Content")}}}}}},l=function(){return o.default.createElement(r.MemoryRouter,{initialEntries:["/page1","/page2","/page3"],initialIndex:0},o.default.createElement(u.default,{config:c,menuText:"Menu",id:"test-root"}))};t.default=l}}]);
//# sourceMappingURL=469-e9640e14d14db7ea5e43.js.map