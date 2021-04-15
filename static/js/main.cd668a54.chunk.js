(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[2],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return C})),n.d(t,"b",(function(){return R})),n.d(t,"d",(function(){return q}));var r,c,o,a,s=n(4),u=Object(s.b)("auth/registerRequest"),i=Object(s.b)("auth/registerSuccess"),b=Object(s.b)("auth/registerError"),l=Object(s.b)("auth/loginRequest"),j=Object(s.b)("auth/loginSuccess"),d=Object(s.b)("auth/loginError"),O={registerRequest:u,registerSuccess:i,registerError:b,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:l,loginSuccess:j,loginError:d,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError"),resetError:Object(s.b)("error/reset")},h=n(3),f=n(9),p=n(12),g={name:null,email:null},m=Object(s.c)(g,(r={},Object(h.a)(r,O.registerSuccess,(function(e,t){return t.payload.user})),Object(h.a)(r,O.loginSuccess,(function(e,t){return t.payload.user})),Object(h.a)(r,O.logoutSuccess,(function(){return g})),Object(h.a)(r,O.getCurrentUserSuccess,(function(e,t){return t.payload})),r)),_=Object(s.c)(null,(c={},Object(h.a)(c,O.registerSuccess,(function(e,t){return t.payload.token})),Object(h.a)(c,O.loginSuccess,(function(e,t){return t.payload.token})),Object(h.a)(c,O.logoutSuccess,(function(){return null})),c)),x=function(e,t){return t.payload},v=Object(s.c)(null,(o={},Object(h.a)(o,O.registerError,x),Object(h.a)(o,O.loginError,x),Object(h.a)(o,O.logoutError,x),Object(h.a)(o,O.getCurrentUserError,x),Object(h.a)(o,p.h,x),Object(h.a)(o,p.a,x),Object(h.a)(o,p.e,x),Object(h.a)(o,O.resetError,(function(e,t){return t.payload})),o)),k=Object(s.c)(null,(a={},Object(h.a)(a,O.registerSuccess,(function(){return!0})),Object(h.a)(a,O.loginSuccess,(function(){return!0})),Object(h.a)(a,O.getCurrentUserRequest,(function(){return!0})),Object(h.a)(a,O.getCurrentUserSuccess,(function(){return!0})),Object(h.a)(a,O.registerError,(function(){return!1})),Object(h.a)(a,O.loginError,(function(){return!1})),Object(h.a)(a,O.getCurrentUserError,(function(){return!1})),Object(h.a)(a,O.logoutSuccess,(function(){return!1})),a)),C=Object(f.c)({user:m,token:_,error:v,isLogin:k}),y=n(22),S=n.n(y),N=n(30),A=n(24),E=n.n(A);E.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var w=function(e){E.a.defaults.headers.common.Authorization="Bearer ".concat(e)},U=function(){E.a.defaults.headers.common.Authorization=""},R={register:function(e){return function(){var t=Object(N.a)(S.a.mark((function t(n){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(O.registerRequest()),t.prev=1,t.next=4,E.a.post("/users/signup",e);case 4:r=t.sent,w(r.data.token),n(O.registerSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(O.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O.logoutRequest()),e.prev=1,e.next=4,E.a.post("/users/logout");case 4:U(),t(O.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(O.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(N.a)(S.a.mark((function t(n){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(O.loginRequest()),t.prev=1,t.next=4,E.a.post("/users/login",e);case 4:r=t.sent,w(r.data.token),n(O.loginSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(O.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(N.a)(S.a.mark((function e(t,n){var r,c,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(),c=r.userAuth.token){e.next=3;break}return e.abrupt("return");case 3:return w(c),t(O.getCurrentUserRequest()),e.prev=5,e.next=8,E.a.get("/users/current");case 8:o=e.sent,t(O.getCurrentUserSuccess(o.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(O.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},q={getIsAuthenticated:function(e){return e.userAuth.isLogin},getUsername:function(e){return e.userAuth.user.name},getError:function(e){return e.userAuth.error}}},12:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return o})),n.d(t,"h",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return d}));var r=n(4),c=Object(r.b)("contacts/fetchContactsRequest"),o=Object(r.b)("contacts/fetchContactsSuccess"),a=Object(r.b)("contacts/fetchContactsError"),s=Object(r.b)("contacts/addContactsRequest"),u=Object(r.b)("contacts/addContactsSuccess"),i=Object(r.b)("contacts/addContactsError"),b=Object(r.b)("contacts/deleteContactsRequest"),l=Object(r.b)("contacts/deleteContactsSuccess"),j=Object(r.b)("contacts/deleteContactsError"),d=Object(r.b)("values/addfilter");Object(r.b)("values/reset")},124:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(32),a=n.n(o),s=(n(74),n(62)),u=(n(75),n(6)),i=n(7),b=n(17),l=n(136),j=n(20),d=n.n(j),O=n(26),h=n.n(O),f=n(18),p=n(10),g=n(2);function m(){var e=Object(i.d)(p.d.getIsAuthenticated);return Object(g.jsx)("nav",{children:Object(g.jsxs)("div",{className:h.a.home_link,children:[Object(g.jsxs)(b.c,{exact:!0,to:f.a.home,className:h.a.link,activeClassName:h.a.activeLink,children:[Object(g.jsx)(l.a,{style:{color:d.a[50],fontSize:25},children:"home"}),Object(g.jsx)("span",{className:h.a.prompt,children:"Home"})]}),Object(g.jsxs)(b.c,{exact:!0,to:f.a.contacts,className:h.a.link,activeClassName:h.a.activeLink,children:[Object(g.jsx)(l.a,{style:{color:d.a[50],fontSize:25},children:"contacts"}),Object(g.jsx)("span",{className:h.a.prompt,children:e?"Contacts":"Blocked"})]})]})})}var _=n(28),x=n.n(_),v=function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)(b.c,{to:f.a.register,className:x.a.link,activeClassName:x.a.activeLink,children:[Object(g.jsx)(l.a,{style:{color:d.a[50],fontSize:25},children:"person_add"}),Object(g.jsx)("span",{className:x.a.prompt,children:"Register"})]}),Object(g.jsxs)(b.c,{to:f.a.login,className:x.a.link,activeClassName:x.a.activeLink,children:[Object(g.jsx)(l.a,{style:{color:d.a[50],fontSize:25},children:"exit_to_app"}),Object(g.jsx)("span",{className:x.a.prompt,children:"Login"})]})]})},k=n(31),C=n.n(k);function y(){var e=Object(i.c)(),t=Object(i.d)(p.d.getUsername);return Object(g.jsxs)("div",{className:C.a.user_menu,children:[Object(g.jsxs)("span",{className:C.a.username,children:["Welcome, ",t]}),Object(g.jsxs)("button",{type:"button",className:C.a.btn_logout,onClick:function(){console.log(1234),e(p.b.logOut())},children:[Object(g.jsx)(l.a,{style:{color:d.a[50],fontSize:25},children:"logout"}),Object(g.jsx)("span",{className:C.a.prompt,children:"Logout"})]})]})}var S=n(64),N=n.n(S);function A(){var e=Object(i.d)(p.d.getIsAuthenticated);return Object(g.jsxs)("header",{className:N.a.header,children:[Object(g.jsx)(m,{}),e?Object(g.jsx)(y,{}):Object(g.jsx)(v,{})]})}var E=n(60),w=n(61),U=n(25),R=n(36),q=Object(i.b)((function(e){return{isAuthenticated:p.d.getIsAuthenticated(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,r=e.redirectTo,c=Object(R.a)(e,["component","isAuthenticated","redirectTo"]);return Object(g.jsx)(u.b,Object(U.a)(Object(U.a)({},c),{},{render:function(e){return n?Object(g.jsx)(t,Object(U.a)({},e)):Object(g.jsx)(u.a,{to:r})}}))})),z=Object(i.b)((function(e){return{isAuthenticated:p.d.getIsAuthenticated(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,r=e.redirectTo,c=Object(R.a)(e,["component","isAuthenticated","redirectTo"]);return Object(g.jsx)(u.b,Object(U.a)(Object(U.a)({},c),{},{render:function(e){return n&&c.restricted?Object(g.jsx)(u.a,{to:r}):Object(g.jsx)(t,Object(U.a)({},e))}}))}));n(119);function L(e){var t=e.error,n=Object(i.c)();return Object(g.jsxs)("div",{className:"msg_error msg_error_active",children:[Object(g.jsx)("h3",{children:"Attention!!!"}),Object(g.jsx)("p",{children:t}),Object(g.jsx)("button",{className:"close_btn",onClick:function(){n(p.a.resetError(""))},children:Object(g.jsx)(l.a,{style:{color:d.a[500],fontSize:20},children:"close"})})]})}var T=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,159))})),M=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(4)]).then(n.bind(null,156))})),I=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,160))})),B=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,161))})),J=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,155))}));function H(){var e=f.a.home,t=f.a.contacts,n=f.a.register,c=f.a.login,o=Object(i.c)(),a=Object(i.d)(p.d.getError);return Object(r.useEffect)((function(){o(p.b.getCurrentUser())}),[o]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(E.a,{children:[Object(g.jsx)(A,{}),Boolean(a)&&Object(g.jsx)(L,{error:a}),Object(g.jsx)(r.Suspense,{fallback:Object(g.jsx)(w.a,{}),children:Object(g.jsxs)(u.d,{children:[Object(g.jsx)(z,{exact:!0,path:e,component:T}),Object(g.jsx)(q,{path:t,redirectTo:"/goit-react-hw-09-phonebook/login",component:M}),Object(g.jsx)(z,{path:n,restricted:!0,redirectTo:"/goit-react-hw-09-phonebook/",component:B}),Object(g.jsx)(z,{path:c,restricted:!0,redirectTo:"/goit-react-hw-09-phonebook/contacts",component:I}),Object(g.jsx)(q,{path:"/goit-react-hw-09-phonebook",redirectTo:"/",component:T}),Object(g.jsx)(z,{component:J})]})})]})})}n(120);var F=n(35),V=n(4),Y=n(23),Z=n(68),D=n.n(Z),G=(n(123),n(50)),K=Object(F.a)(Object(V.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),P={key:"userAuth",storage:D.a,whitelist:["token"]},W=Object(V.a)({reducer:{state:G.a,userAuth:Object(Y.g)(P,p.c)},middleware:K,devTools:!1}),X={store:W,persistor:Object(Y.h)(W)};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(i.a,{store:X.store,children:Object(g.jsx)(s.a,{loading:null,persistor:X.persistor,children:Object(g.jsx)(b.a,{children:Object(g.jsx)(H,{})})})})}),document.getElementById("root"))},18:function(e,t,n){"use strict";t.a={home:"/goit-react-hw-09-phonebook/",contacts:"/goit-react-hw-09-phonebook/contacts",register:"/goit-react-hw-09-phonebook/register",login:"/goit-react-hw-09-phonebook/login"}},26:function(e,t,n){e.exports={home_link:"Navigation_home_link__3tC_H",link:"Navigation_link__1owC9",prompt:"Navigation_prompt__1fMzb",activeLink:"Navigation_activeLink__34NMV Navigation_link__1owC9",user_menu:"Navigation_user_menu__2GsMa"}},28:function(e,t,n){e.exports={link:"userAuth_link__3a8yh",prompt:"userAuth_prompt__2Yslz",activeLink:"userAuth_activeLink__17otY userAuth_link__3a8yh",user_menu:"userAuth_user_menu__1vACZ"}},31:function(e,t,n){e.exports={user_menu:"userMenu_user_menu__3tFJ3",username:"userMenu_username__1jeus",prompt:"userMenu_prompt__3DV-V",btn_logout:"userMenu_btn_logout__2msle"}},50:function(e,t,n){"use strict";var r,c,o=n(3),a=n(35),s=n(9),u=n(4),i=n(12),b=Object(u.c)([],(r={},Object(o.a)(r,i.j,(function(e,t){return t.payload})),Object(o.a)(r,i.c,(function(e,t){var n=t.payload;return[].concat(Object(a.a)(e),[n])})),Object(o.a)(r,i.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),l=Object(u.c)(!1,(c={},Object(o.a)(c,i.i,(function(){return!0})),Object(o.a)(c,i.j,(function(){return!1})),Object(o.a)(c,i.h,(function(){return!1})),Object(o.a)(c,i.b,(function(){return!0})),Object(o.a)(c,i.c,(function(){return!1})),Object(o.a)(c,i.a,(function(){return!1})),Object(o.a)(c,i.f,(function(){return!0})),Object(o.a)(c,i.g,(function(){return!1})),Object(o.a)(c,i.e,(function(){return!1})),c)),j=Object(u.c)("",Object(o.a)({},i.d,(function(e,t){return t.payload})));t.a=Object(s.c)({contacts:b,loading:l,filter:j})},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(65),c=n.n(r),o=n(2);function a(e){var t=e.children;return Object(o.jsx)("div",{className:c.a.container,children:t})}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(44),c=n(45),o=n(48),a=n(47),s=n(0),u=n(66),i=n.n(u),b=n(67),l=n.n(b),j=n(2),d=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)(i.a,{type:"BallTriangle",color:"white",secondaryColor:"grey",height:20,width:20,className:l.a.loader})}}]),n}(s.Component)},64:function(e,t,n){e.exports={header:"AppBar_header__F-Ji5"}},65:function(e,t,n){e.exports={container:"Container_container__eTxiL",loader:"Container_loader__2HfZH",Container__top:"Container_Container__top__1apFj",Container__bottom:"Container_Container__bottom__2XjJm"}},67:function(e,t,n){e.exports={loader:"Loader_loader__1bw4K"}},74:function(e,t,n){},75:function(e,t,n){}},[[124,6,7]]]);
//# sourceMappingURL=main.cd668a54.chunk.js.map