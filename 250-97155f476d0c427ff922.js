(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1460:function(t,e,n){var u=n(1461),o=n(1462),a=n(1463);t.exports=function(t){return u(t)||o(t)||a()}},1461:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},1462:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},1463:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},2270:function(t,e,n){"use strict";var u=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(1460)),a=u(n(24)),i=u(n(25)),l=u(n(26)),d=u(n(27)),r=u(n(29)),s=u(n(28)),f=u(n(0)),c=u(n(359)),m=function(t){function e(t){var n;return(0,a.default)(this,e),(n=(0,l.default)(this,(0,d.default)(e).call(this,t))).handleButtonClick=n.handleButtonClick.bind((0,r.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,r.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,r.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,r.default)(n)),n.addMenuItems=n.addMenuItems.bind((0,r.default)(n)),n.removeMenuItems=n.removeMenuItems.bind((0,r.default)(n)),n.state={open:!1,items:[0]},n}return(0,s.default)(e,t),(0,i.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"addMenuItems",value:function(){this.setState((function(t){return{items:[].concat((0,o.default)(t.items),[t.items.length])}}))}},{key:"removeMenuItems",value:function(){this.setState((function(t){var e=t.items.slice();return e.pop(),{items:e}}))}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(c.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},this.state.items.map((function(t){return f.default.createElement(c.default.Item,{key:t,text:"Menu Item ".concat(t),id:"TestContent".concat(t)})}))),f.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"),f.default.createElement("br",null),f.default.createElement("button",{type:"button",id:"add-button",onClick:this.addMenuItems},"Add Menu Item"),f.default.createElement("button",{type:"button",id:"remove-button",onClick:this.removeMenuItems},"Remove Menu Item"))}}]),e}(f.default.Component);e.default=m}}]);
//# sourceMappingURL=250-97155f476d0c427ff922.js.map