(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{2282:function(e,t,l){"use strict";var n=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(24)),u=n(l(25)),d=n(l(26)),i=n(l(27)),c=n(l(29)),s=n(l(28)),o=n(l(0)),f=n(l(2)),r=n(l(359)),h={isSelectableMenu:f.default.bool},S=function(e){function t(e){var l;return(0,a.default)(this,t),(l=(0,d.default)(this,(0,i.default)(t).call(this,e))).state={isSelected:!1},l.handleSelection=l.handleSelection.bind((0,c.default)(l)),l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"handleSelection",value:function(e,t){this.setState({isSelected:t})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("div",{id:"isSelected"},o.default.createElement("h3",null,"Item is selected:",this.state.isSelected?"yes":"no")),o.default.createElement("ul",{role:"menu"},o.default.createElement(r.default.Item,{text:"Selectable Menu Item",key:"1",className:"TestSelectableItem",isSelectable:!0,onChange:this.handleSelection})))}}]),t}(o.default.Component);S.childContextTypes=h;var m=S;t.default=m}}]);
//# sourceMappingURL=481-7b1ff147f42ca9a32fe1.js.map