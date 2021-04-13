(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{144:function(t,e,n){t.exports={phonebook:"ContactForm_phonebook__Koi5b",phonebook__form:"ContactForm_phonebook__form__2gu6a",phonebook__field:"ContactForm_phonebook__field__2XcQp",phonebook__name:"ContactForm_phonebook__name__3jGc1",phonebook__tel:"ContactForm_phonebook__tel__3MB-W",phonebook__btn:"ContactForm_phonebook__btn__3Zlxu"}},145:function(t,e,n){t.exports={contacts:"ContactList_contacts__3DOkV"}},146:function(t,e,n){t.exports={phonebook__filter:"Filter_phonebook__filter__2XogG",phonebook__btn:"Filter_phonebook__btn__1UE3M",phonebook__icon:"Filter_phonebook__icon__1THez"}},147:function(t,e,n){t.exports={contacts__list:"ContactItem_contacts__list__3DoQ_",contacts__item:"ContactItem_contacts__item__1cTU7",deleteBtn:"ContactItem_deleteBtn__HmUyw",loader:"ContactItem_loader__1HJE6"}},156:function(t,e,n){"use strict";n.r(e);var o=n(29),r=n(30),c=n(32),a=n(31),i=n(0),s=n(12),l=n(136),u=n(20),b=n.n(u),h=n(144),j=n.n(h),d=n(157),p=n(24),_=n.n(p),f=n(7),m=function(){return function(t){t(Object(f.i)()),_.a.get("/contacts").then((function(e){var n=e.data;return t(Object(f.j)(n))})).catch((function(e){return t(Object(f.h)(e.message))}))}},O=function(t,e){return function(n){var o={name:t,number:e};n(Object(f.b)()),_.a.post("/contacts",o).then((function(t){var e=t.data;return n(Object(f.c)(e))})).catch((function(t){return n(Object(f.a)(t.message))}))}},g=function(t){return function(e){e(Object(f.f)()),_.a.delete("/contacts/".concat(t)).then((function(n){n.data;return e(Object(f.g)(t))})).catch((function(t){return e(Object(f.e)(t.message))}))}},x=n(38),k=function(t){return t.state.contacts},v=function(t){return t.state.filter},C={getContacts:k,getError:function(t){return t.state.error},getName:function(t){return t.state.name},getNumber:function(t){return t.state.number},getFilter:v,getLoading:function(t){return t.state.loading},getvisibleContacts:Object(x.a)([k,v],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).sort((function(t,e){return t.name!==e.name?t.name<e.name?-1:1:0}))}))},y=(n(50),n(10)),N=n(2),F=Object(d.a)(),S=Object(d.a)(),w=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleSubmit=function(e){e.preventDefault();var n=t.props,o=n.contacts,r=n.name,c=n.number;0===o.filter((function(t){return t.name===r})).length?t.props.addContact(r,c):alert("This contact already exist"),t.props.resetValue("")},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.number,o=t.handleChange;return Object(N.jsxs)("div",{className:j.a.phonebook,children:[Object(N.jsx)("h1",{children:this.props.title}),Object(N.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.phonebook__form,children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:j.a.phonebook__field,children:[Object(N.jsx)(l.a,{style:{color:b.a[500],fontSize:20},children:"perm_identity"}),Object(N.jsx)("input",{type:"text",name:"name",value:e,id:F,onChange:o}),Object(N.jsx)("label",{className:j.a.phonebook__name,children:"Name"})]}),Object(N.jsxs)("div",{className:j.a.phonebook__field,children:[Object(N.jsx)(l.a,{style:{color:b.a[500],fontSize:20},children:"phone"}),Object(N.jsx)("input",{type:"tel",name:"number",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"111-22-33",value:n,id:S,onChange:o}),Object(N.jsx)("label",{htmlFor:S,className:j.a.phonebook__tel,children:"Phone"})]})]}),Object(N.jsx)("button",{type:"submit",className:j.a.phonebook__btn,children:Object(N.jsx)(l.a,{style:{color:b.a[50],fontSize:40},children:"add_circle"})})]})]})}}]),n}(i.Component);w.defaultProps={title:"Phonebook"};var L=Object(s.b)((function(t){return{contacts:C.getContacts(t),name:C.getName(t),number:C.getNumber(t),error:y.d.getError(t)}}),(function(t){return{addContact:function(e,n){return t(O(e,n))},handleChange:function(e){return t(Object(f.d)(e.target.name,e.target.value))},resetValue:function(e){return t(y.a.resetValue(e))}}}))(w),z=n(5),B=n.n(z),V=n(145),P=n.n(V),T=function(t){var e=t.title,n=t.children;return Object(N.jsxs)("div",{className:P.a.contacts,children:[e&&Object(N.jsx)("h2",{children:e}),n]})};T.propType={title:B.a.string};var D=T,E=n(146),H=n.n(E),I=Object(d.a)(),K=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.handleChange,o=t.resetValue;return Object(N.jsxs)("label",{htmlFor:I,className:H.a.phonebook__filter,children:[Object(N.jsx)("button",{className:H.a.phonebook__btn,onClick:function(){return o("")},children:Object(N.jsx)(l.a,{style:{color:b.a[800],fontSize:20},children:"search"})}),Object(N.jsx)("input",{type:"text",name:"filter",value:e,id:I,onChange:n,placeholder:" Find contacts by name"})]})}}]),n}(i.Component);K.defaultProps={filter:""};var J=Object(s.b)((function(t){return{filter:C.getFilter(t)}}),(function(t){return{handleChange:function(e){return t(Object(f.d)(e.target.name,e.target.value))},resetValue:function(e){return t(Object(f.k)(e))}}}))(K),M=n(147),U=n.n(M),A=n(150),G=n(151),Q=n(158),W=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.deleteContact;return Object(N.jsx)(A.a,{defaultActiveKey:"0",children:e.map((function(t){var e=t.id,o=t.name,r=t.number;return Object(N.jsxs)(G.a,{style:{backgroundColor:"rgb(39, 36, 36)",borderRadius:"10px"},children:[Object(N.jsxs)(A.a.Toggle,{as:G.a.Header,eventKey:e,style:{borderBottom:"1px solid grey",paddingLeft:"5px"},children:[Object(N.jsx)(Q.a,{style:{width:"25px",height:"25px",fontSize:"13px",color:"black",fontWeight:"bolder",fontStyle:"italic"},children:o.substr(0,2)}),Object(N.jsx)("p",{children:o})]}),Object(N.jsx)("button",{type:"button",className:U.a.deleteBtn,onClick:function(){return n(e)},children:Object(N.jsx)(l.a,{style:{color:b.a[50],fontSize:26},children:"delete_forever"})}),Object(N.jsx)(A.a.Collapse,{eventKey:e,children:Object(N.jsx)(G.a.Body,{style:{padding:"3px",marginLeft:"60px"},children:r})})]},e)}))})}}]),n}(i.Component),X=Object(s.b)((function(t){return{contacts:C.getvisibleContacts(t)}}),(function(t){return{deleteContact:function(e){return t(g(e))}}}))(W),R=n(61),Z=function(t){Object(c.a)(n,t);var e=Object(a.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(L,{title:"Phonebook"}),Object(N.jsxs)(D,{title:"Contacts",children:[Object(N.jsxs)("div",{className:"filter_container",children:[Object(N.jsx)(J,{}),this.props.isLoading&&Object(N.jsx)(R.a,{})]}),Object(N.jsx)(X,{})]})]})}}]),n}(i.Component);e.default=Object(s.b)((function(t){return{isLoading:C.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(m())}}}))(Z)}}]);
//# sourceMappingURL=phonebook-page.069ad09c.chunk.js.map