(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1029:function(e,n,l){"use strict";var a=l(6);Object.defineProperty(n,"__esModule",{value:!0}),n.SlidePanelPositions=n.default=void 0;var t=a(l(17)),i=a(l(22)),o=a(l(24)),d=a(l(25)),s=a(l(26)),u=a(l(27)),r=a(l(29)),p=a(l(28)),f=a(l(0)),c=a(l(2)),m=a(l(5)),_=a(l(1040)),h=m.default.bind(_.default),b={START:"start",END:"end"};n.SlidePanelPositions=b;var v={panelAriaLabel:c.default.string,mainAriaLabel:c.default.string,mainContent:c.default.node,panelContent:c.default.node,panelBehavior:c.default.oneOf(["overlay","squish"]),panelPosition:c.default.oneOf(["start","end"]),panelSize:c.default.oneOf(["small","large"]),isFullscreen:c.default.bool,isOpen:c.default.bool,fill:c.default.bool},P={panelBehavior:"overlay",panelPosition:b.END,panelSize:"small"},g=function(e){function n(e){var l;return(0,o.default)(this,n),(l=(0,s.default)(this,(0,u.default)(n).call(this,e))).setPanelNode=l.setPanelNode.bind((0,r.default)(l)),l.mainNode=f.default.createRef(),l}return(0,p.default)(n,e),(0,d.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,n=e.panelAriaLabel,l=e.mainAriaLabel,a=e.mainContent,o=e.panelContent,d=e.panelBehavior,s=e.panelPosition,u=e.panelSize,r=e.isFullscreen,p=e.isOpen,c=e.fill,m=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),_=h(["slide-panel",{"is-open":p},{"is-fullscreen":r},{fill:c},m.className]),v=f.default.createElement("div",{className:h(["panel"]),tabIndex:"-1","aria-label":n,"aria-hidden":p?"false":"true",ref:this.setPanelNode},o),P=f.default.createElement("div",{className:h("main"),tabIndex:"-1","aria-label":l,ref:this.mainNode},a),g=s===b.START?f.default.createElement(f.default.Fragment,null,v,P):f.default.createElement(f.default.Fragment,null,P,v);return f.default.createElement("div",(0,t.default)({},m,{className:_,"data-slide-panel-panel-behavior":d,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":u}),g)}}]),n}(f.default.Component);g.propTypes=v,g.defaultProps=P;var S=g;n.default=S},1040:function(e,n,l){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1125:function(e,n,l){e.exports={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___1FDjp","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___9DcFW","main-content":"SlidePanelDocCommon-test-module__main-content___25hpF","panel-content":"SlidePanelDocCommon-test-module__panel-content___3OmYU","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___1Zi-9",button:"SlidePanelDocCommon-test-module__button___3r3Sh"}},2340:function(e,n,l){"use strict";var a=l(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(l(24)),i=a(l(25)),o=a(l(26)),d=a(l(27)),s=a(l(29)),u=a(l(28)),r=a(l(0)),p=a(l(5)),f=a(l(1029)),c=a(l(1125)),m=p.default.bind(c.default),_=function(e){function n(e){var l;return(0,t.default)(this,n),(l=(0,o.default)(this,(0,d.default)(n).call(this,e))).state={panelIsOpen:!1},l.handlePanelToggle=l.handlePanelToggle.bind((0,s.default)(l)),l}return(0,u.default)(n,e),(0,i.default)(n,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return r.default.createElement("div",{className:m("content-wrapper-toggle")},r.default.createElement(f.default,{id:"test-slide",mainContent:r.default.createElement("div",{className:m("main-content")},r.default.createElement("button",{type:"button",id:"test-toggle",className:m("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:r.default.createElement("div",{id:"panel-content",className:m("panel-content")},r.default.createElement("button",{id:"focus-button",type:"button",className:m("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}]),n}(r.default.Component);n.default=_}}]);
//# sourceMappingURL=240-66854a0825c626a15f77.js.map