(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1078:function(e,l,a){"use strict";var t=a(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=t(a(17)),d=t(a(22)),i=t(a(0)),u=t(a(228)),n=t(a(2)),s=t(a(5)),r=t(a(1088)),_=s.default.bind(r.default),c={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},m={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(c)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},f=function(e){var l=e.header,a=e.footer,t=e.children,n=e.onRequestClose,s=e.isOpen,r=e.ariaLabel,m=e.width,f=e.closeOnOutsideClick,h=e.rootSelector,g=(0,d.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]);if(!s)return null;var p=["dialog-modal-wrapper"];return m in c?p.push("width-".concat(c[m])):p.push("width-1120"),i.default.createElement(u.default,{ariaLabel:r,role:"dialog",classNameModal:_(p),isOpen:s,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:f,rootSelector:h},i.default.createElement("div",(0,o.default)({},g,{className:_("dialog-modal-inner-wrapper",g.className)}),i.default.createElement("div",{className:_("dialog-modal-container")},i.default.createElement("div",null,l),i.default.createElement("div",{className:_("dialog-modal-body")},t),i.default.createElement("div",null,a))))};f.propTypes=m,f.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var h=f;l.default=h},1088:function(e,l,a){e.exports={"dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3L6PG","width-320":"DialogModal-module__width-320___1SJka","width-480":"DialogModal-module__width-480___2dOBX","width-560":"DialogModal-module__width-560___3zVv8","width-640":"DialogModal-module__width-640___2PEtl","width-800":"DialogModal-module__width-800___2rG5D","width-960":"DialogModal-module__width-960___wkRF0","width-1120":"DialogModal-module__width-1120___qNLsc","width-1280":"DialogModal-module__width-1280___1bosK","width-1440":"DialogModal-module__width-1440___1bYIL","width-1600":"DialogModal-module__width-1600___2Rb_O","width-1760":"DialogModal-module__width-1760___2xeul","width-1920":"DialogModal-module__width-1920___1Vq72","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___3kstA","dialog-modal-container":"DialogModal-module__dialog-modal-container___10XP8","dialog-modal-header":"DialogModal-module__dialog-modal-header___vojqY","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___2S67Y","dialog-modal-body":"DialogModal-module__dialog-modal-body___xtsrz"}},2015:function(e,l,a){e.exports={header:"DialogModalWithCustomHeaderAndCustomFooter-test-module__header___8-gP8",footer:"DialogModalWithCustomHeaderAndCustomFooter-test-module__footer___2st92","close-button":"DialogModalWithCustomHeaderAndCustomFooter-test-module__close-button___o8FK4"}},2227:function(e,l,a){"use strict";var t=a(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=t(a(24)),d=t(a(25)),i=t(a(26)),u=t(a(27)),n=t(a(29)),s=t(a(28)),r=t(a(0)),_=t(a(59)),c=t(a(5)),m=t(a(1078)),f=t(a(2015)),h=c.default.bind(f.default),g=function(e){function l(){var e;return(0,o.default)(this,l),(e=(0,i.default)(this,(0,u.default)(l).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,n.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,n.default)(e)),e}return(0,s.default)(l,e),(0,d.default)(l,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement(m.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:r.default.createElement("div",{className:h("header")},"Custom Header",r.default.createElement(_.default,{id:"close-dialog-modal",text:"Close",className:h("close-button"),onClick:this.handleCloseModal})),footer:r.default.createElement("div",{className:h("footer")},"Custom Footer")},r.default.createElement("p",null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."])),r.default.createElement(_.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),l}(r.default.Component);l.default=g}}]);
//# sourceMappingURL=223-b43b16008f904a487a4e.js.map