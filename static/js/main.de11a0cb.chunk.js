(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__ftPLs",button:"ContactForm_button__1zKwz",input:"ContactForm_input__3p7Vm"}},16:function(t,e,n){t.exports={list:"ContactList_list__NI83L",item:"ContactList_item__17jMX",button:"ContactList_button__f2hXz"}},17:function(t,e,n){t.exports={heading:"Filter_heading__maaM3",input:"Filter_input__20QDx",label:"Filter_label__2j3f3"}},21:function(t,e,n){t.exports={heading:"App_heading__tFsGk"}},35:function(t,e,n){t.exports={loader:"loader_loader__tM2Bn"}},68:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(14),c=n.n(r),o=n(22),u=n(32),i=n(33),s=n(37),l=n(36),d=n(10),b=n.n(d),f=n(1),j=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:b.a.form,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("h3",{children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.props.onChangeInputHandler,className:b.a.input})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("h3",{children:"Tel. number "}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.props.onChangeInputHandler,className:b.a.input})]}),Object(f.jsx)("button",{type:"button",className:b.a.button,onClick:this.props.addContactHandler,children:"Add Contact"})]})})}}]),n}(a.Component),p=n(16),h=n.n(p);var O=function(t){var e=t.filteredContacts,n=t.deleteContact;return Object(f.jsx)("ul",{className:h.a.list,children:e.map((function(t){return Object(f.jsxs)("li",{className:h.a.item,children:[t.name," : ",t.number,Object(f.jsx)("button",{onClick:function(){return n(t.id)},className:h.a.button,children:" Delete "})]},t.id)}))})},m=n(17),C=n.n(m),x=n(5),g=Object(x.b)("contactsFilter"),_=n(8);var v=Object(_.b)(null,(function(t){return{contactsFilter:function(e){return t(g(e.target.value))}}}))((function(t){t.value;var e=t.contactsFilter;return Object(f.jsxs)("label",{className:C.a.label,children:[Object(f.jsx)("h3",{className:C.a.heading,children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",onChange:e,className:C.a.input})]})})),w=n(21),A=n.n(w),k=n(6),y=n.n(k),N=n(18),F=n(11),z=n.n(F);z.a.defaults.baseURL="https://6198f0e0164fa60017c23248.mockapi.io";var L=Object(x.c)("contact/addContact",function(){var t=Object(N.a)(y.a.mark((function t(e){var n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.a.post("./contacts",e).catch((function(t){return console.log(t)}));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Z=Object(x.c)("contact/getContact",Object(N.a)(y.a.mark((function t(){var e,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.a.get("./contacts").catch((function(t){return console.log(t)}));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))),H=Object(x.c)("contact/deleteContact",function(){var t=Object(N.a)(y.a.mark((function t(e){var n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.a.delete("/contacts/".concat(e)).catch((function(t){return console.log(t)}));case 2:return n=t.sent,a=n.data.id,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),M=function(t){return t.contacts},B=function(t){return t.filter},I=function(t){return t.loader},J=n(35),q=n.n(J);function S(){return Object(f.jsx)("div",{className:q.a.loader,children:Object(f.jsx)("h2",{children:"Loading..."})})}var D,P,T=Object(_.b)((function(t){return{contactsArr:M(t),filter:B(t),loader:I(t)}}),(function(t){return{getContact:function(){return t(Z())},onAddContact:function(e,n){return t(L({name:e,number:n}))},deleteContact:function(e){return t(H(e))}}}))((function(t){var e=t.onAddContact,n=t.deleteContact,r=t.contactsArr,c=t.filter,u=t.getContact,i=t.loader;Object(a.useEffect)((function(){return u()}),[u]);var s=Object(a.useState)(""),l=Object(o.a)(s,2),d=l[0],b=l[1],p=Object(a.useState)(""),h=Object(o.a)(p,2),m=h[0],C=h[1],x=function(t){if(r.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts")),!0},g=r.length>0?r.filter((function(t){return t.name.toLowerCase().includes(c.toLowerCase())})):[];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:A.a.heading,children:"PhoneBook"}),Object(f.jsx)(j,{onChangeInputHandler:function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":b(a);break;case"number":C(a);break;default:return}},addContactHandler:function(t){x(d)||e(d,m)}}),Object(f.jsx)("h3",{className:A.a.heading,children:"Contacts"}),Object(f.jsx)(v,{}),i&&Object(f.jsx)(S,{}),Object(f.jsx)(O,{filteredContacts:g,deleteContact:n})]})})),X=n(3),$=n(23),E=n(7),G=Object(x.d)([],(D={},Object(X.a)(D,Z.fulfilled,(function(t,e){return e.payload})),Object(X.a)(D,L.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object($.a)(t),[n])})),Object(X.a)(D,H.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),K=Object(x.d)("",Object(X.a)({},g,(function(t,e){return e.payload}))),Q=Object(x.d)(!1,(P={},Object(X.a)(P,Z.pending,(function(){return!0})),Object(X.a)(P,Z.fulfilled,(function(){return!1})),Object(X.a)(P,Z.rejected,(function(){return!1})),Object(X.a)(P,L.pending,(function(){return!0})),Object(X.a)(P,L.fulfilled,(function(){return!1})),Object(X.a)(P,L.rejected,(function(){return!1})),Object(X.a)(P,H.pending,(function(){return!0})),Object(X.a)(P,H.fulfilled,(function(){return!1})),Object(X.a)(P,H.rejected,(function(){return!1})),P)),R=Object($.a)(Object(x.e)({serializableCheck:{ignoredActions:[E.a,E.f,E.b,E.c,E.d,E.e]}})),U=Object(x.a)({reducer:{contacts:G,filter:K,loader:Q},middleware:R,devTools:!1});c.a.render(Object(f.jsx)(_.a,{store:U,children:Object(f.jsx)(T,{})}),document.querySelector("#root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.de11a0cb.chunk.js.map