(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1464:function(t,e,o){t.exports={"test-popup-area":"AutomaticHeightAndResizedContentCommon-module__test-popup-area___-X6wf","popup-text":"AutomaticHeightAndResizedContentCommon-module__popup-text____2uj3","popup-button":"AutomaticHeightAndResizedContentCommon-module__popup-button___32RLB"}},2319:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(o(24)),a=n(o(25)),d=n(o(26)),l=n(o(27)),i=n(o(29)),s=n(o(28)),p=n(o(0)),c=n(o(5)),f=n(o(132)),r=n(o(1464)),h=c.default.bind(r.default),m=function(t){function e(t){var o;return(0,u.default)(this,e),(o=(0,d.default)(this,(0,l.default)(e).call(this,t))).handleButtonClick=o.handleButtonClick.bind((0,i.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,i.default)(o)),o.setButtonNode=o.setButtonNode.bind((0,i.default)(o)),o.getButtonNode=o.getButtonNode.bind((0,i.default)(o)),o.state={open:!0},o}return(0,s.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return p.default.createElement("div",{id:"test-popup-area",className:h("test-popup-area")},p.default.createElement(f.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"auto",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},p.default.createElement("p",{className:h("popup-text")},"This is popup content with a automatic height of 400px.")),p.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),e}(p.default.Component);e.default=m}}]);
//# sourceMappingURL=439-3935dc41f3c3bafbf58e.js.map