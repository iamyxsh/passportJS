(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{72:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),c=n(38),u=n(12),s=n(18),o=n.n(s),i=n(23),j=n(22),l=n(115),b=n(120),p=n(121),O=function(){var e=Object(i.a)(o.a.mark((function e(t,n,a,r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://192.168.56.1:5000","/api/").concat(t),{method:"".concat(n),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:a?"Bearer ".concat(a):"Bearer"},body:r?JSON.stringify(r):null}).then((function(e){return e.json()}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),f=Object(j.a)(s,2),d=f[0],h=f[1],m=Object(r.useState)(""),x=Object(j.a)(m,2),v=x[0],y=x[1],S=Object(r.useState)(!1),g=Object(j.a)(S,2),w=g[0],k=g[1],C=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O("signup","POST",null,{name:n,email:d,password:v});case 3:"success"===e.sent.status&&k(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return w?Object(a.jsx)(u.a,{to:"/signin"}):Object(a.jsx)(l.a,{children:Object(a.jsxs)("form",{onSubmit:function(e){return C(e)},children:[Object(a.jsx)(b.a,{value:n,onChange:function(e){return c(e.target.value)},label:"Name"}),Object(a.jsx)(b.a,{value:d,onChange:function(e){return h(e.target.value)},label:"Email",type:"email"}),Object(a.jsx)(b.a,{value:v,onChange:function(e){return y(e.target.value)},label:"Password",type:"password"}),Object(a.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})]})})},d=n(26),h=function(e){return{type:"UPDATE_NUM",payload:e}},m=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),f=Object(j.a)(s,2),h=f[0],m=f[1],x=Object(r.useState)(!1),v=Object(j.a)(x,2),y=v[0],S=v[1],g=Object(d.b)(),w=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O("signin","POST",null,{email:n,password:h});case 3:"success"===(a=e.sent).status&&(g({type:"USER_LOGIN_SUCCESS",payload:a.payload}),S(!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y?Object(a.jsx)(u.a,{to:"/home"}):Object(a.jsx)(l.a,{children:Object(a.jsxs)("form",{onSubmit:function(e){return w(e)},children:[Object(a.jsx)(b.a,{value:n,onChange:function(e){return c(e.target.value)},label:"Email",type:"email"}),Object(a.jsx)(b.a,{value:h,onChange:function(e){return m(e.target.value)},label:"Password",type:"password"}),Object(a.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})]})})},x=n(119),v=function(){var e=Object(d.c)((function(e){return e.user.num})),t=Object(d.c)((function(e){return e.user.token})),n=Object(d.b)(),r=function(){var e=Object(i.a)(o.a.mark((function e(a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("inc"!==a){e.next=5;break}return e.next=3,O("inc","POST",t,null);case 3:"success"===(r=e.sent).status&&n(h(r.payload));case 5:if("dec"!==a){e.next=10;break}return e.next=8,O("dec","POST",t,null);case 8:"success"===(c=e.sent).status&&n(h(c.payload));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(x.a,{variant:"h1",children:e}),Object(a.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return r("inc")},children:"Increment"}),Object(a.jsx)(p.a,{variant:"contained",color:"secondary",onClick:function(){return r("dec")},children:"Decrement"})]})};t.default=function(){return Object(a.jsx)(c.a,{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",component:f}),Object(a.jsx)(u.b,{exact:!0,path:"/signin",component:m}),Object(a.jsx)(u.b,{exact:!0,path:"/home",component:v})]})})}},88:function(e,t,n){"use strict";n.r(t);var a=n(7),r=(n(0),n(10)),c=n.n(r),u=(n(72),n(87).default);var s=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u,{})})},o=n(26),i=n(28),j=n(49),l=Object(i.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"USER_LOGIN_SUCCESS":return{num:a.num,token:a.token};case"UPDATE_NUM":return Object(j.a)(Object(j.a)({},e),{},{num:a});default:return e}}}),b=n(61),p=Object(i.createStore)(l,{},Object(b.composeWithDevTools)());c.a.render(Object(a.jsx)(o.a,{store:p,children:Object(a.jsx)(s,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.4c545a3c.chunk.js.map