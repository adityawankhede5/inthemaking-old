(this.webpackJsonpinthemaking=this.webpackJsonpinthemaking||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(29),o=n.n(i),s=(n(42),n(43),n(30)),u=n.n(s),d="https://api.instagram.com/",h=function(){var t={client_id:"198632529103286",redirect_uri:"https://adityawankhede5.github.io/inthemaking/insta-auth",scope:"user_profile,user_media",response_type:"code"},e=new URLSearchParams;for(var n in t)e.append(n,t[n]);var a=d+"oauth/authorize?"+e.toString(),c=document.createElement("a");c.href=a,c.click()},l=n(14),p=n(2),j="/inthemaking",m="/",b="/insta-auth",g=n(36),f=n(37),x=n(31),v=n(32),O="#005CE6",k="#FFFFFF",_={small:"4px",normal:"8px",large:"16px"},w={small:"4px",normal:"8px",large:"16px"},F=n(1),C=["onClick"],y=v.a.button(a||(a=Object(x.a)(["\n    padding: ",";\n    margin: ",";\n    background-color: ",";\n    color: ",";\n    border: none;\n    border-radius: ",";\n    cursor: pointer;\n    font-weight: 500;\n"])),_.normal,w.small,O,k,"4px");function S(t){var e=t.onClick,n=Object(f.a)(t,C);return Object(F.jsx)(y,Object(g.a)({onClick:function(t){e&&e(t)}},n))}var I=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(S,{onClick:h,children:"Authorize with Instagram"}),Object(F.jsx)(S,{children:"Get Data"}),Object(F.jsx)(l.b,{to:b,children:"Insta auth"})]})},L=function(t){console.log(t);var e=document.createElement("span");e.innerText=t,e.classList.add("toast");var n=document.getElementById("toast-wrapper");n.appendChild(e),setTimeout((function(){n.removeChild(e)}),3e3)};var z=function(){var t=new URLSearchParams(window.location.search).get("code"),e=Object(p.f)();return t&&function(t){var e={client_id:"198632529103286",client_secret:"51dea94793a37f388ba75c13b1993476",grant_type:"authorization_code",redirect_uri:"https://adityawankhede5.github.io/inthemaking/insta-auth",code:t},n=new FormData;for(var a in e)n.append(a,e[a]);return u.a.post("https://api.instagram.com/oauth/access_token",n).then((function(t){var e=t.data,n=e.access_token,a=e.user_id;return localStorage.setItem("instagram",JSON.stringify({access_token:n,user_id:a})),{success:!0}})).catch((function(t){return console.error(t),{success:!1}}))}(t).then((function(t){var n=t.success;L(n?"Successfully authorized":"Authorization unsuccessful"),e.push(m)})),Object(F.jsx)("div",{children:"Loading..."})};var E=function(){return Object(F.jsx)("div",{id:"toast-wrapper"})};var P=function(){return Object(F.jsxs)(l.a,{basename:j,children:[Object(F.jsx)(E,{}),Object(F.jsxs)(p.c,{children:[Object(F.jsx)(p.a,{exact:!0,path:b,children:Object(F.jsx)(z,{})}),Object(F.jsx)(p.a,{exact:!0,path:m,children:Object(F.jsx)(I,{})})]})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(P,{})}),document.getElementById("root")),T()}},[[67,1,2]]]);
//# sourceMappingURL=main.2d565be4.chunk.js.map