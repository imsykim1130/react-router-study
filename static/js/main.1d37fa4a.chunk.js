(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),s=n.n(r),i=n(7),o=n(2),j=n(1),l=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"\ub79c\ub529 \ud398\uc774\uc9c0"}),Object(j.jsx)(i.b,{to:"/login",children:"\ub85c\uadf8\uc778"}),Object(j.jsx)(i.b,{to:"/register",children:"\ud68c\uc6d0\uac00\uc785"})]})},u=n(9),d=function(e){var t=e.history,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),l=o[0],d=o[1],b=document.querySelector(".warning");return Object(j.jsxs)("form",{action:"",children:[Object(j.jsx)("h1",{children:"Log in"}),Object(j.jsx)("input",{type:"text",name:"",id:"",placeholder:"id",value:r,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("input",{type:"password",name:"",id:"",placeholder:"password",value:l,onChange:function(e){d(e.target.value)}}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault();try{var n=JSON.parse(localStorage.getItem(r)).password;l===n?t.push("/main?id=".concat(r)):(b.innerText="\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4.",d(""))}catch(e){b.innerText="\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.",s(""),d("")}},children:"log in"}),Object(j.jsx)("p",{className:"warning"})]})},b=function(e,t){localStorage.setItem(e,JSON.stringify(t))},h=function(e){var t=e.history,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),l=o[0],d=o[1],h=document.querySelector(".warning");return Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"\ud68c\uc6d0\uac00\uc785 \ud558\uc138\uc694"}),Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("input",{type:"password",value:l,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("button",{onClick:function(e){if(e.preventDefault(),localStorage.getItem(r))h.innerText="\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc544\uc774\ub514 \uc785\ub2c8\ub2e4.";else{var n={};n.password=l.toString(),b(r,n),t.push("/")}},children:"\uac00\uc785"}),Object(j.jsx)("div",{className:"warning"})]})},O=n(17),p=n.n(O),x=function(e){var t=e.location,n=(p.a.parse(t.search)||"\ube44\ud68c\uc6d0").id;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:["\ud658\uc601\ud569\ub2c8\ub2e4 ",n," \ub2d8!"]}),Object(j.jsx)(i.b,{to:"/",children:"\ub85c\uadf8\uc544\uc6c3"})]})},g=function(){return Object(j.jsxs)("header",{className:"main-header",children:[Object(j.jsx)("div",{className:"logo",children:"Logo"}),Object(j.jsx)("div",{className:"menu",children:"menu"})]})};n(32);var m=function(){var e=[{id:"one",password:"1"},{id:"two",password:"2"}];return Object(c.useEffect)((function(){localStorage.clear(),e.forEach((function(e){var t={};t.password=e.password,b(e.id,t)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{}),Object(j.jsx)("main",{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:l}),Object(j.jsx)(o.a,{path:"/login",component:d}),Object(j.jsx)(o.a,{path:"/register",component:h}),Object(j.jsx)(o.a,{path:"/main",component:x})]})})})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1d37fa4a.chunk.js.map