(this.webpackJsonpinthemaking=this.webpackJsonpinthemaking||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(28),o=n.n(i),s=(n(42),n(43),n(29)),u=n.n(s),d="https://api.instagram.com/",h=function(){var e={client_id:"198632529103286",redirect_uri:"https://adityawankhede5.github.io/inthemaking/insta-auth",scope:"user_profile,user_media",response_type:"code"},t=new URLSearchParams;for(var n in e)t.append(n,e[n]);var a=d+"oauth/authorize?"+t.toString(),c=document.createElement("a");c.href=a,c.click()},l=n(35),p=n(1),j="/inthemaking",m="/",b="/insta-auth",g=n(36),f=n(37),x=n(30),v=n(31),O="#005CE6",k="#FFFFFF",_={small:"4px",normal:"8px",large:"16px"},w={small:"4px",normal:"8px",large:"16px"},F=n(2),C=["onClick"],y=v.a.button(a||(a=Object(x.a)(["\n    padding: ",";\n    margin: ",";\n    background-color: ",";\n    color: ",";\n    border: none;\n    border-radius: ",";\n    cursor: pointer;\n    font-weight: 500;\n"])),_.normal,w.small,O,k,"4px");function S(e){var t=e.onClick,n=Object(f.a)(e,C);return Object(F.jsx)(y,Object(g.a)({onClick:function(e){t&&t(e)}},n))}var L=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(S,{onClick:h,children:"Authorize with Instagram"}),Object(F.jsx)(S,{children:"Get Data"})]})},z=function(e){console.log(e);var t=document.createElement("span");t.innerText=e,t.classList.add("toast");var n=document.getElementById("toast-wrapper");n.appendChild(t),setTimeout((function(){n.removeChild(t)}),3e3)};var E=function(){var e=new URLSearchParams(window.location.search).get("code"),t=Object(p.f)();return e&&function(e){var t={client_id:"198632529103286",client_secret:"51dea94793a37f388ba75c13b1993476",grant_type:"authorization_code",redirect_uri:"https://adityawankhede5.github.io/inthemaking/insta-auth",code:e},n=new FormData;for(var a in t)n.append(a,t[a]);return u.a.post("https://api.instagram.com/oauth/access_token",n).then((function(e){var t=e.data,n=t.access_token,a=t.user_id;return localStorage.setItem("instagram",JSON.stringify({access_token:n,user_id:a})),{success:!0}})).catch((function(e){return console.error(e),{success:!1}}))}(e).then((function(e){var n=e.success;z(n?"Successfully authorized":"Authorization unsuccessful"),t.push(m)})),Object(F.jsx)("div",{children:"Loading..."})};var I=function(){return Object(F.jsx)("div",{id:"toast-wrapper"})};var P=function(){return Object(F.jsxs)(l.a,{basename:j,children:[Object(F.jsx)(I,{}),Object(F.jsxs)(p.c,{children:[Object(F.jsx)(p.a,{exact:!0,path:b,children:Object(F.jsx)(E,{})}),Object(F.jsx)(p.a,{exact:!0,path:m,children:Object(F.jsx)(L,{})})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(P,{})}),document.getElementById("root")),T()}},[[67,1,2]]]);
//# sourceMappingURL=main.f7516403.chunk.js.map