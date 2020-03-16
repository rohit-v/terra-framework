(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1027:function(e,t,r){"use strict";var n=r(13),i=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(165)),d=i(r(17)),l=i(r(22)),u=n(r(0)),o=i(r(2)),s=r(8),c=i(r(5)),f=i(r(168)),p=i(r(360)),m=i(r(167)),b=i(r(1038)),h=i(r(1034));function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=c.default.bind(h.default),v={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},w={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},I=function(e){var t=e.dayAttributes,r=e.disabled,n=e.displayFormat,i=e.error,a=e.help,o=e.hideRequired,c=e.isIncomplete,h=e.isInline,g=e.isInvalid,v=e.isLegendHidden,w=e.legend,I=e.legendAttributes,F=e.monthAttributes,O=(e.maxWidth,e.name),E=e.onBlur,A=e.onChange,T=e.onFocus,q=e.required,D=e.showOptional,j=e.value,x=e.yearAttributes,N=(0,l.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),P=(0,u.useRef)((0,f.default)()),L=y(["date-input-field",{"is-inline":h},N.className]),C=y(["legend",I.className]),R=a?"terra-date-input-field-description-help-".concat(P.current):"",B=g&&i?"terra-date-input-field-description-error-".concat(P.current):"",k="".concat(B," ").concat(R),H=F["aria-describedby"]?F["aria-describedby"]:"",M="".concat(k," ").concat(H),W=t["aria-describedby"]?t["aria-describedby"]:"",S="".concat(k," ").concat(W),J=x["aria-describedby"]?x["aria-describedby"]:"",Z="".concat(k," ").concat(J),G=u.default.createElement("legend",{className:y(["legend-group",{"legend-group-hidden":v}])},u.default.createElement("div",(0,d.default)({},I,{className:C}),g&&u.default.createElement("span",{className:y("error-icon")},u.default.createElement(p.default,null)),q&&(g||!o)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:y("required")},"*"),u.default.createElement(s.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return u.default.createElement(m.default,{text:e})}))),w,q&&!g&&o&&u.default.createElement("span",{className:y("required-hidden")},"*"),D&&!q&&u.default.createElement(s.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return u.default.createElement("span",{className:y("optional")},e)})),!g&&u.default.createElement("span",{className:y("error-icon-hidden")})));return u.default.createElement("fieldset",(0,d.default)({},N,{className:L}),G,u.default.createElement(b.default,{name:O,onChange:A,onBlur:E,onFocus:T,value:j,displayFormat:n,disabled:r,isInvalid:g,isIncomplete:c,required:q,monthAttributes:_({},F,{},{"aria-describedby":M}),dayAttributes:_({},t,{},{"aria-describedby":S}),yearAttributes:_({},x,{},{"aria-describedby":Z})}),g&&i&&u.default.createElement("div",{id:B,className:y("error-text")},i),a&&u.default.createElement("div",{id:R,className:y("help-text")},a))};I.propTypes=v,I.defaultProps=w;var F=I;t.default=F},1034:function(e,t,r){e.exports={"date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}},2167:function(e,t,r){"use strict";var n=r(13),i=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(94)),d=n(r(0)),l=i(r(1027)),u=function(){var e=(0,d.useState)("$5%g-ad-!f"),t=(0,a.default)(e,2),r=t[0],n=t[1];return d.default.createElement("div",null,d.default.createElement(l.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return n(t)},error:"Error message",help:"Help message"}),d.default.createElement("p",null,"DateInputField Value: ".concat(r)))};t.default=u},355:function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:d}catch(e){n=d}}();var u,o=[],s=!1,c=-1;function f(){s&&u&&(s=!1,u.length?o=u.concat(o):c=-1,o.length&&p())}function p(){if(!s){var e=l(f);s=!0;for(var t=o.length;t;){for(u=o,o=[];++c<t;)u&&u[c].run();c=-1,t=o.length}u=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===d||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new m(e,t)),1!==o.length||s||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);
//# sourceMappingURL=328-308859abd35a0b6cb930.js.map