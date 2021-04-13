(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[2],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return E})),n.d(e,"b",(function(){return z})),n.d(e,"d",(function(){return T}));var r,c,a,o,u=n(4),s=Object(u.b)("auth/registerRequest"),i=Object(u.b)("auth/registerSuccess"),b=Object(u.b)("auth/registerError"),l=Object(u.b)("auth/loginRequest"),j=Object(u.b)("auth/loginSuccess"),d=Object(u.b)("auth/loginError"),f={registerRequest:s,registerSuccess:i,registerError:b,logoutRequest:Object(u.b)("auth/logoutRequest"),logoutSuccess:Object(u.b)("auth/logoutSuccess"),logoutError:Object(u.b)("auth/logoutError"),loginRequest:l,loginSuccess:j,loginError:d,getCurrentUserRequest:Object(u.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(u.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(u.b)("auth/getCurrentUserError"),addValue:function(t,e){return{type:"auth/add".concat(t),payload:e}},resetValue:Object(u.b)("values/reset"),resetError:Object(u.b)("error/reset")},O=n(3),p=n(9),h=n(5),g={name:null,email:null},m=Object(u.c)(g,(r={},Object(O.a)(r,f.registerSuccess,(function(t,e){return e.payload.user})),Object(O.a)(r,f.loginSuccess,(function(t,e){return e.payload.user})),Object(O.a)(r,f.logoutSuccess,(function(){return g})),Object(O.a)(r,f.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),_=Object(u.c)(null,(c={},Object(O.a)(c,f.registerSuccess,(function(t,e){return e.payload.token})),Object(O.a)(c,f.loginSuccess,(function(t,e){return e.payload.token})),Object(O.a)(c,f.logoutSuccess,(function(){return null})),c)),v=function(t,e){return e.payload},x=Object(u.c)(null,(a={},Object(O.a)(a,f.registerError,v),Object(O.a)(a,f.loginError,v),Object(O.a)(a,f.logoutError,v),Object(O.a)(a,f.getCurrentUserError,v),Object(O.a)(a,h.h,v),Object(O.a)(a,h.a,v),Object(O.a)(a,h.e,v),Object(O.a)(a,f.resetError,(function(t,e){return e.payload})),a)),y=Object(u.c)(null,(o={},Object(O.a)(o,f.registerSuccess,(function(){return!0})),Object(O.a)(o,f.loginSuccess,(function(){return!0})),Object(O.a)(o,f.getCurrentUserRequest,(function(){return!0})),Object(O.a)(o,f.getCurrentUserSuccess,(function(){return!0})),Object(O.a)(o,f.registerError,(function(){return!1})),Object(O.a)(o,f.loginError,(function(){return!1})),Object(O.a)(o,f.getCurrentUserError,(function(){return!1})),Object(O.a)(o,f.logoutSuccess,(function(){return!1})),o)),k=Object(u.c)("",Object(O.a)({"auth/addname":function(t,e){return e.payload}},f.resetValue,(function(t,e){return e.payload}))),C=Object(u.c)("",Object(O.a)({"auth/addemail":function(t,e){return e.payload}},f.resetValue,(function(t,e){return e.payload}))),A=Object(u.c)("",Object(O.a)({"auth/addpassword":function(t,e){return e.payload}},f.resetValue,(function(t,e){return e.payload}))),E=Object(p.c)({user:m,token:_,error:x,isLogin:y,name:k,email:C,password:A}),N=n(27),S=n.n(N),w=n(33),U=n(16),L=n.n(U);L.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var R=function(t){L.a.defaults.headers.common.Authorization="Bearer ".concat(t)},q=function(){L.a.defaults.headers.common.Authorization=""},z={register:function(t){return function(){var e=Object(w.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(f.registerRequest()),e.prev=1,e.next=4,L.a.post("/users/signup",t);case 4:r=e.sent,R(r.data.token),n(f.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(f.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(w.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(f.logoutRequest()),t.prev=1,t.next=4,L.a.post("/users/logout");case 4:q(),e(f.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(f.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(w.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(f.loginRequest()),e.prev=1,e.next=4,L.a.post("/users/login",t);case 4:r=e.sent,R(r.data.token),n(f.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(f.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(w.a)(S.a.mark((function t(e,n){var r,c,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.userAuth.token){t.next=3;break}return t.abrupt("return");case 3:return R(c),e(f.getCurrentUserRequest()),t.prev=5,t.next=8,L.a.get("/users/current");case 8:a=t.sent,e(f.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(f.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},T={getIsAuthenticated:function(t){return t.userAuth.isLogin},getUsername:function(t){return t.userAuth.user.name},getName:function(t){return t.userAuth.name},getEmail:function(t){return t.userAuth.email},getPassword:function(t){return t.userAuth.password},getError:function(t){return t.userAuth.error}}},123:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(35),o=n.n(a),u=(n(73),n(60)),s=n(20),i=n(21),b=n(23),l=n(22),j=(n(74),n(7)),d=n(12),f=n(18),O=n(135),p=n(25),h=n.n(p),g=n(30),m=n.n(g),_=n(19),v=n(10),x=n(2),y=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsx)("nav",{children:Object(x.jsxs)("div",{className:m.a.home_link,children:[Object(x.jsxs)(f.c,{exact:!0,to:_.a.home,className:m.a.link,activeClassName:m.a.activeLink,children:[Object(x.jsx)(O.a,{style:{color:h.a[50],fontSize:25},children:"home"}),Object(x.jsx)("span",{className:m.a.prompt,children:"Home"})]}),Object(x.jsxs)(f.c,{exact:!0,to:_.a.contacts,className:m.a.link,activeClassName:m.a.activeLink,children:[Object(x.jsx)(O.a,{style:{color:h.a[50],fontSize:25},children:"contacts"}),Object(x.jsx)("span",{className:m.a.prompt,children:this.props.isAuthenticated?"Contacts":"Blocked"})]})]})})}}]),n}(r.Component),k=Object(d.b)((function(t){return{isAuthenticated:v.d.getIsAuthenticated(t)}}))(y),C=n(32),A=n.n(C),E=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)(f.c,{to:_.a.register,className:A.a.link,activeClassName:A.a.activeLink,children:[Object(x.jsx)(O.a,{style:{color:h.a[50],fontSize:25},children:"person_add"}),Object(x.jsx)("span",{className:A.a.prompt,children:"Register"})]}),Object(x.jsxs)(f.c,{to:_.a.login,className:A.a.link,activeClassName:A.a.activeLink,children:[Object(x.jsx)(O.a,{style:{color:h.a[50],fontSize:25},children:"exit_to_app"}),Object(x.jsx)("span",{className:A.a.prompt,children:"Login"})]})]})},N=n(34),S=n.n(N),w=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:S.a.user_menu,children:[Object(x.jsxs)("span",{className:S.a.username,children:["Welcome, ",this.props.name]}),Object(x.jsxs)("button",{type:"button",className:S.a.btn_logout,onClick:this.props.onLogout,children:[Object(x.jsx)(O.a,{style:{color:h.a[50],fontSize:25},children:"logout"}),Object(x.jsx)("span",{className:S.a.prompt,children:"Logout"})]})]})}}]),n}(r.Component),U={onLogout:v.b.logOut},L=Object(d.b)((function(t){return{name:v.d.getUsername(t)}}),U)(w),R=n(62),q=n.n(R),z=Object(d.b)((function(t){return{isAuthenticated:v.d.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(x.jsxs)("header",{className:q.a.header,children:[Object(x.jsx)(k,{}),e?Object(x.jsx)(L,{}):Object(x.jsx)(E,{})]})})),T=n(58),I=n(59),M=n(29),B=n(40),V=Object(d.b)((function(t){return{isAuthenticated:v.d.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(B.a)(t,["component","isAuthenticated","redirectTo"]);return Object(x.jsx)(j.b,Object(M.a)(Object(M.a)({},c),{},{render:function(t){return n?Object(x.jsx)(e,Object(M.a)({},t)):Object(x.jsx)(j.a,{to:r})}}))})),G=Object(d.b)((function(t){return{isAuthenticated:v.d.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(B.a)(t,["component","isAuthenticated","redirectTo"]);return Object(x.jsx)(j.b,Object(M.a)(Object(M.a)({},c),{},{render:function(t){return n&&c.restricted?Object(x.jsx)(j.a,{to:r}):Object(x.jsx)(e,Object(M.a)({},t))}}))})),P=(n(118),n(67),function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).onclic=function(){t.props.resetError("")},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.error;return Object(x.jsxs)("div",{className:"msg_error msg_error_active",children:[Object(x.jsx)("h3",{children:"Attention!!!"}),Object(x.jsx)("p",{children:t}),Object(x.jsx)("button",{className:"close_btn",onClick:this.onclic,children:Object(x.jsx)(O.a,{style:{color:h.a[500],fontSize:20},children:"close"})})]})}}]),n}(r.Component)),K=Object(d.b)(null,(function(t){return{resetError:function(e){return t(v.a.resetError(e))}}}))(P),D=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,158))})),Q=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(4)]).then(n.bind(null,155))})),F=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,159))})),J=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,160))})),X=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,154))})),Y=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurretnUser()}},{key:"render",value:function(){var t=_.a.home,e=_.a.contacts,n=_.a.register,c=_.a.login,a=this.props.error;return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(z,{}),Boolean(a)&&Object(x.jsx)(K,{error:a}),Object(x.jsx)(r.Suspense,{fallback:Object(x.jsx)(I.a,{}),children:Object(x.jsxs)(j.d,{children:[Object(x.jsx)(G,{exact:!0,path:t,component:D}),Object(x.jsx)(V,{path:e,redirectTo:"/login",component:Q}),Object(x.jsx)(G,{path:n,restricted:!0,redirectTo:"/",component:J}),Object(x.jsx)(G,{path:c,restricted:!0,redirectTo:"/contacts",component:F}),Object(x.jsx)(G,{component:X})]})})]})})}}]),n}(r.Component),H={onGetCurretnUser:v.b.getCurrentUser},W=Object(d.b)((function(t){return{error:v.d.getError(t)}}),H)(Y),Z=(n(119),n(39)),$=n(4),tt=n(28),et=n(66),nt=n.n(et),rt=(n(122),n(38)),ct=Object(Z.a)(Object($.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})),at={key:"userAuth",storage:nt.a,whitelist:["token"]},ot=Object($.a)({reducer:{state:rt.a,userAuth:Object(tt.g)(at,v.c)},middleware:ct,devTools:!1}),ut={store:ot,persistor:Object(tt.h)(ot)};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(d.a,{store:ut.store,children:Object(x.jsx)(u.a,{loading:null,persistor:ut.persistor,children:Object(x.jsx)(f.a,{children:Object(x.jsx)(W,{})})})})}),document.getElementById("root"))},19:function(t,e,n){"use strict";e.a={home:"/",contacts:"/contacts",register:"/register",login:"/login"}},30:function(t,e,n){t.exports={link:"Navigation_link__NGPKr",prompt:"Navigation_prompt__1w2kn",activeLink:"Navigation_activeLink__g0Bnr Navigation_link__NGPKr",user_menu:"Navigation_user_menu__5n8ny"}},32:function(t,e,n){t.exports={link:"userAuth_link__2xp54",prompt:"userAuth_prompt__39hD6",activeLink:"userAuth_activeLink__flc98 userAuth_link__2xp54",user_menu:"userAuth_user_menu__2O24D"}},34:function(t,e,n){t.exports={user_menu:"userMenu_user_menu__dYp9V",username:"userMenu_username__bEh4v",prompt:"userMenu_prompt__24PKn",btn_logout:"userMenu_btn_logout__IAXYX"}},38:function(t,e,n){"use strict";var r,c,a=n(3),o=n(39),u=n(9),s=n(4),i=n(5),b=Object(s.c)([],(r={},Object(a.a)(r,i.j,(function(t,e){return e.payload})),Object(a.a)(r,i.c,(function(t,e){var n=e.payload;return[].concat(Object(o.a)(t),[n])})),Object(a.a)(r,i.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),l=Object(s.c)(!1,(c={},Object(a.a)(c,i.i,(function(){return!0})),Object(a.a)(c,i.j,(function(){return!1})),Object(a.a)(c,i.h,(function(){return!1})),Object(a.a)(c,i.b,(function(){return!0})),Object(a.a)(c,i.c,(function(){return!1})),Object(a.a)(c,i.a,(function(){return!1})),Object(a.a)(c,i.f,(function(){return!0})),Object(a.a)(c,i.g,(function(){return!1})),Object(a.a)(c,i.e,(function(){return!1})),c)),j=Object(s.c)("",Object(a.a)({"values/addname":function(t,e){return e.payload}},i.k,(function(t,e){return e.payload}))),d=Object(s.c)("",Object(a.a)({"values/addnumber":function(t,e){return e.payload}},i.k,(function(t,e){return e.payload}))),f=Object(s.c)("",Object(a.a)({"values/addfilter":function(t,e){return e.payload}},i.k,(function(t,e){return e.payload})));e.a=Object(u.c)({contacts:b,loading:l,name:j,number:d,filter:f})},5:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return d})),n.d(e,"k",(function(){return f}));var r=n(4),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),o=Object(r.b)("contacts/fetchContactsError"),u=Object(r.b)("contacts/addContactsRequest"),s=Object(r.b)("contacts/addContactsSuccess"),i=Object(r.b)("contacts/addContactsError"),b=Object(r.b)("contacts/deleteContactsRequest"),l=Object(r.b)("contacts/deleteContactsSuccess"),j=Object(r.b)("contacts/deleteContactsError"),d=function(t,e){return{type:"values/add".concat(t),payload:e}},f=Object(r.b)("values/reset")},58:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(63),c=n.n(r),a=n(2);function o(t){var e=t.children;return Object(a.jsx)("div",{className:c.a.container,children:e})}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(20),c=n(21),a=n(23),o=n(22),u=n(0),s=n(64),i=n.n(s),b=n(65),l=n.n(b),j=n(2),d=function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)(i.a,{type:"BallTriangle",color:"white",secondaryColor:"grey",height:20,width:20,className:l.a.loader})}}]),n}(u.Component)},62:function(t,e,n){t.exports={header:"AppBar_header__3GceQ"}},63:function(t,e,n){t.exports={container:"Container_container__MmhGE",loader:"Container_loader__1rQKh",Container__top:"Container_Container__top__3ssMo",Container__bottom:"Container_Container__bottom__3FQoP"}},65:function(t,e,n){t.exports={loader:"Loader_loader__2-VzN"}},67:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return b})),n.d(e,"a",(function(){return a.d})),n.d(e,"c",(function(){return a.k}));var r=n(16),c=n.n(r),a=n(5),o={fetchContacts:function(){return function(t){t(Object(a.i)()),c.a.get("/contacts").then((function(e){var n=e.data;return t(Object(a.j)(n))})).catch((function(e){return t(Object(a.h)(e.message))}))}},addContact:function(t,e){return function(n){var r={name:t,number:e};n(Object(a.b)()),c.a.post("/contacts",r).then((function(t){var e=t.data;return n(Object(a.c)(e))})).catch((function(t){return n(Object(a.a)(t.message))}))}},deleteContact:function(t){return function(e){e(Object(a.f)()),c.a.delete("/contacts/".concat(t)).then((function(n){n.data;return e(Object(a.g)(t))})).catch((function(t){return e(Object(a.e)(t.message))}))}}},u=n(37),s=function(t){return t.state.contacts},i=function(t){return t.state.filter},b={getContacts:s,getError:function(t){return t.state.error},getName:function(t){return t.state.name},getNumber:function(t){return t.state.number},getFilter:i,getLoading:function(t){return t.state.loading},getvisibleContacts:Object(u.a)([s,i],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).sort((function(t,e){return t.name!==e.name?t.name<e.name?-1:1:0}))}))};n(38)},73:function(t,e,n){},74:function(t,e,n){}},[[123,6,7]]]);
//# sourceMappingURL=main.2a226caa.chunk.js.map