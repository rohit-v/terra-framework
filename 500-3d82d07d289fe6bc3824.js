(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{1149:function(t,e,i){"use strict";var a=i(13),n=i(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i(94)),r=a(i(0)),c=n(i(59)),l=n(i(2)),u=a(i(358)),d=function(){alert("You clicked confirm")},f={variant:l.default.oneOf(Object.values(u.NotificationDialogVariants))},s=function(t){var e=(0,r.useState)(!1),i=(0,o.default)(e,2),a=i[0],n=i[1],l=t.variant;return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,{variant:l,isOpen:a,title:"Make sure that the title relates directly to the choices.",startMessage:"The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim.",acceptAction:{text:"Confirm",onClick:d},rejectAction:{text:"Close",onClick:function(){n(!1)}},buttonOrder:"acceptFirst",emphasizedAction:"accept"}),r.default.createElement(c.default,{id:"trigger-notification-dialog",text:"Trigger NotificationDialog",onClick:function(){n(!0)}}))};s.propTypes=f;var p=s;e.default=p}}]);
//# sourceMappingURL=500-3d82d07d289fe6bc3824.js.map