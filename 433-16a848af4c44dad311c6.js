(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{2024:function(t,e,n){t.exports={"test-popup-area":"ArrowSmallTargetLeftPopup-test-module__test-popup-area___ZddUy","popup-text":"ArrowSmallTargetLeftPopup-test-module__popup-text___3gpnA","popup-button":"ArrowSmallTargetLeftPopup-test-module__popup-button___3Kc0b"}},2313:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(24)),u=o(n(25)),d=o(n(26)),s=o(n(27)),l=o(n(29)),p=o(n(28)),r=o(n(0)),i=o(n(5)),f=o(n(132)),c=o(n(2024)),h=i.default.bind(c.default),N=function(t){function e(t){var n;return(0,a.default)(this,e),(n=(0,d.default)(this,(0,s.default)(e).call(this,t))).handleButtonClick=n.handleButtonClick.bind((0,l.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,l.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,l.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,l.default)(n)),n.setParentNode=n.setParentNode.bind((0,l.default)(n)),n.getParentNode=n.getParentNode.bind((0,l.default)(n)),n.state={open:!0},n}return(0,p.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return r.default.createElement("div",{id:"test-popup-area",className:h("test-popup-area"),ref:this.setParentNode},r.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:"top left",contentHeight:"120",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},r.default.createElement("p",{className:h("popup-text")},"This popup was adjusted because the target was smaller than the arrow position allowed.")),r.default.createElement("button",{type:"button",id:"offset-button",className:h("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},""))}}]),e}(r.default.Component);e.default=N}}]);
//# sourceMappingURL=433-16a848af4c44dad311c6.js.map