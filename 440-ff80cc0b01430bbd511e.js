(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{2030:function(t,e,n){t.exports={"test-popup-area":"AutomaticWidthBoundedPopup-test-module__test-popup-area___HR45D","popup-text":"AutomaticWidthBoundedPopup-test-module__popup-text___2wwb1"}},2320:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(24)),a=o(n(25)),d=o(n(26)),s=o(n(27)),i=o(n(29)),l=o(n(28)),p=o(n(0)),r=o(n(5)),f=o(n(132)),c=o(n(2030)),h=r.default.bind(c.default),N=function(t){function e(t){var n;return(0,u.default)(this,e),(n=(0,d.default)(this,(0,s.default)(e).call(this,t))).handleButtonClick=n.handleButtonClick.bind((0,i.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,i.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,i.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,i.default)(n)),n.setParentNode=n.setParentNode.bind((0,i.default)(n)),n.getParentNode=n.getParentNode.bind((0,i.default)(n)),n.state={open:!0},n}return(0,l.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return p.default.createElement("div",{id:"test-popup-area",className:h("test-popup-area"),ref:this.setParentNode},p.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentWidth:"auto",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},p.default.createElement("p",{className:h("popup-text")},"This is popup content with a automatic width of 400px, but is bounded by the parent width of 200px.")),p.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),e}(p.default.Component);e.default=N}}]);
//# sourceMappingURL=440-ff80cc0b01430bbd511e.js.map