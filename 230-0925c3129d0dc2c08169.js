(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1033:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(0)),n=r(l(2)),i=r(l(5)),o=r(l(1057));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=i.default.bind(o.default),c={variant:n.default.oneOf(["light","dark"]),title:n.default.string},f=function(e){var t=e.variant,l=e.title,n=d(e,["variant","title"]),i=s(["placeholder",n.className]),o=s(["inner","is-".concat(t)]);return a.default.createElement("div",u({},n,{className:i}),a.default.createElement("div",{className:o},a.default.createElement("h2",null,l)))};f.propTypes=c,f.defaultProps={variant:"dark",title:""};var p=f;t.default=p},1057:function(e,t,l){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},2020:function(e,t,l){"use strict";var a=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(24)),i=a(l(25)),o=a(l(26)),r=a(l(27)),u=a(l(29)),d=a(l(28)),s=a(l(0)),c=a(l(59)),f=l(227),p=a(l(2021)),h=function(e){function t(e){var l;return(0,n.default)(this,t),(l=(0,o.default)(this,(0,r.default)(t).call(this,e))).disclose=l.disclose.bind((0,u.default)(l)),l}return(0,d.default)(t,e),(0,i.default)(t,[{key:"disclose",value:function(){this.props.disclosureManager.disclose({preferredType:"modal",content:{key:"DemoContainer",component:s.default.createElement(p.default,null)}})}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(c.default,{text:"Disclose",onClick:this.disclose,id:"disclose-modal"}))}}]),t}(s.default.Component);h.propTypes={disclosureManager:f.disclosureManagerShape};var m=(0,f.withDisclosureManager)(h);t.default=m},2021:function(e,t,l){"use strict";var a=l(13),n=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(l(24)),o=n(l(25)),r=n(l(26)),u=n(l(27)),d=n(l(29)),s=n(l(28)),c=n(l(0)),f=n(l(59)),p=l(227),h=n(l(132)),m=n(l(1033)),v=a(l(358)),g=function(){alert("You clicked confirm")},_={disclosureManager:p.disclosureManagerShape},y=function(e){function t(e){var l;return(0,i.default)(this,t),(l=(0,r.default)(this,(0,u.default)(t).call(this,e))).state={isOpen:!1},l.handleOpenModal=l.handleOpenModal.bind((0,d.default)(l)),l.handleCloseModal=l.handleCloseModal.bind((0,d.default)(l)),l.handlePopupButtonClick=l.handlePopupButtonClick.bind((0,d.default)(l)),l.handlePopupRequestClose=l.handlePopupRequestClose.bind((0,d.default)(l)),l}return(0,s.default)(t,e),(0,o.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"handlePopupButtonClick",value:function(){this.setState({open:!0})}},{key:"handlePopupRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(v.default,{variant:v.NotificationDialogVariants.ALERT,isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,title:"Make sure that the title relates directly to the choices.",startMessage:"The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim.",acceptAction:{text:"Confirm",onClick:g},rejectAction:{text:"Close",onClick:this.handleCloseModal},buttonOrder:"acceptFirst",emphasizedAction:"accept"}),c.default.createElement(f.default,{text:"Trigger NotificationDialog",onClick:this.handleOpenModal,id:"trigger-notification-dialog"}),c.default.createElement(f.default,{text:"Dismiss",onClick:this.props.disclosureManager.dismiss,id:"dismiss-modal"}),c.default.createElement(h.default,{isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handlePopupRequestClose,targetRef:function(){return document.getElementById("popup-in-modal")}},c.default.createElement(m.default,{title:"Popup Content"})),c.default.createElement(f.default,{id:"popup-in-modal",text:"Popup In Modal",onClick:this.handlePopupButtonClick}))}}]),t}(c.default.Component);y.propTypes=_;var k=(0,p.withDisclosureManager)(y);t.default=k},2306:function(e,t,l){"use strict";var a=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(0)),i=a(l(356)),o=a(l(2020)),r=function(){return n.default.createElement(i.default,null,n.default.createElement("p",null," Notification Dialog has the highest z-index of 9001. Click the button to trigger Notification Dialog "),n.default.createElement(o.default,null))};t.default=r}}]);
//# sourceMappingURL=230-0925c3129d0dc2c08169.js.map