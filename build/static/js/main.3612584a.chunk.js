(this["webpackJsonpnovi-frontend-assignment-frontend"]=this["webpackJsonpnovi-frontend-assignment-frontend"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={inputLiedBeheer:"LiedBeheerTableRow_inputLiedBeheer__1QjHJ","song-number":"LiedBeheerTableRow_song-number__2jyHA","song-title":"LiedBeheerTableRow_song-title__2hEhf"}},function(e,t,n){e.exports={inputAdminBeheer:"AccountBeheerTableRow_inputAdminBeheer__K7wQb",role:"AccountBeheerTableRow_role__1pwsW",username:"AccountBeheerTableRow_username__2MTho",pass:"AccountBeheerTableRow_pass__339AK"}},,function(e,t,n){e.exports={"nav-logo":"Header_nav-logo__2jzs9","nav-list":"Header_nav-list__pKRqC"}},,function(e,t,n){e.exports={footer:"Footer_footer__1yKqO","copyright-line":"Footer_copyright-line__1cUFp"}},function(e,t,n){e.exports={table:"Table_table__3cKwp",tbody:"Table_tbody__2YH_-","td-text":"Table_td-text__3rhIu",leftradius:"Table_leftradius__2lLjK"}},function(e,t,n){e.exports={"td-text":"OverviewRow_td-text__2BUGE"}},,,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports={"nav-link":"Link_nav-link__N6bZu","logout-link":"Link_logout-link__2FRPz"}},function(e,t,n){e.exports={"breadcrumb-box":"Breadcrumb_breadcrumb-box__2mIGA"}},function(e,t,n){e.exports={btn:"Button_btn__27GLa",danger:"Button_danger__VQZT0",warning:"Button_warning__CmfA0",success:"Button_success__G8WDk",info:"Button_info__uD3B2",noRadius:"Button_noRadius__1wzO5",rightRadius:"Button_rightRadius__1aezz"}},function(e,t,n){e.exports={messageBox:"MessageBox_messageBox__tbvGc"}},function(e,t,n){e.exports={thead:"TableHeader_thead__3_QCE"}},function(e,t,n){e.exports={"blue-bar":"BlueBar_blue-bar__2QIwX"}},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(24),o=n.n(s),i=n(2),u=n(6),l=new function e(){var t=this;Object(u.a)(this,e),this.compare=function(e,n){return void 0!==e&&void 0!==n&&(t._isObject(e)&&t._isObject(n)?t._obj(e,n):Array.isArray(e)&&Array.isArray(n)?t._arr(e,n):!t._isObject(e)&&!t._isObject(n)&&(!Array.isArray(e)&&!Array.isArray(n)&&e===n))},this._isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},this._arr=function(e,n){if(e.length!==n.length)return!1;for(var a=0;a<e.length;a++){var c=e[a],r=n[a];if(!1===t.compare(c,r))return!1}return!0},this._obj=function(e,n){var a=Object.keys(e),c=Object.keys(n);if(a.length!==c.length)return!1;for(var r=0;r<a.length;r++){var s=e[a[r]],o=n[a[r]];if(!1===t.compare(s,o))return!1}return!0}},d=n(9),j=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"init",value:function(){var e=this.__getCookie("token"),t=this.__getCookie("accountLvl");b.setToken(e),t>=0&&t<=2&&""!==t&&b.setAccountLvl(t)}},{key:"check",value:function(){return""!==this.get("token")&&""!==this.get("accountLvl")}},{key:"set",value:function(e,t){void 0===e?console.error("cant access a undefined cookie param"):void 0===t?console.error("cant write a cookie param with a undefined value"):this.__setCookie(e,t,365)}},{key:"get",value:function(e){void 0===e?console.error("cant access a undefined cookie param"):this.__getCookie(e)}},{key:"getAll",value:function(){return document.cookie}},{key:"destroyCookie",value:function(){this.__setCookie("token","",-2),this.__setCookie("accountLvl","",-2)}},{key:"__setCookie",value:function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var c="expires="+a.toUTCString();document.cookie=e+"="+t+";"+c+";path=/"}},{key:"__getCookie",value:function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return""}}]),e}()),b=new(function(){function e(){Object(u.a)(this,e),this.__HandleCookie=j,this.__reloadNr=0,this.__token="",this.__accountLvl=0,this.__reloadFunction=null,this.__urlVars={}}return Object(d.a)(e,[{key:"setToken",value:function(e){this.__token=e,this.__HandleCookie.set("token",e)}},{key:"getToken",value:function(){return this.__token}},{key:"setUrlVars",value:function(e){this.__urlVars=e}},{key:"getUrlVars",value:function(){return this.__urlVars}},{key:"setAccountLvl",value:function(e){(e=Math.floor(e))>=0&&e<=2&&""!==e?(this.__accountLvl=e,this.__HandleCookie.set("accountLvl",e)):console.error("tried to set a invalid accountLvl")}},{key:"getAccountLvl",value:function(){return this.__accountLvl}},{key:"reload",value:function(){"function"===typeof this.reloadFunction?(this.__reloadNr++,this.reloadFunction(this.__reloadNr)):console.error("tried to reload without having a reload function")}},{key:"setReloadFunc",value:function(e){this.reloadFunction=e}}]),e}()),h=n(3),p=n.n(h),f=n(4),v=n(25),O=n.n(v).a.create({baseURL:"https://novi-api.armaniimus-webdevelopment.nl/public/api",headers:{"content-type":"application/x-www-form-urlencoded"}}),m=function(e){void 0!==e.data?console.log("Apicall soft fail",e.data):console.log("Api critical failure ",e.data)},x=function(e){if(void 0!==e.data&&"failed"===e.data.auth){console.log("auth failed"),console.log("returning app to a loggedout state");var t=new PopStateEvent("popstate");window.history.pushState({},"","/logout"),window.dispatchEvent(t)}else m(e)},g=function(e){void 0!==e.data&&"failed"===e.data.auth?console.log("auth failed",e.data.messages):m(e)},w=n(26),_=n.n(w),k=function(){function e(t){Object(u.a)(this,e),this.styles=null,this.styles=t}return Object(d.a)(e,[{key:"get",value:function(e){if(void 0===e)console.error("no className was given");else{if(null!==this.styles){for(var t="",n=e.split(" "),a=0;a<n.length;a++){var c=this.styles[n[a]];void 0!==c&&(t+=" "+c)}return t}console.error("HandleModules.init needs to be called before Handle.retrieve can be uses")}}}]),e}(),N=new k(_.a),y=function(e){var t=e.className,n=e.href,c=e.children;t=void 0===t?"":t;var r=new PopStateEvent("popstate");return Object(a.jsx)("a",{onClick:function(e){e.metaKey||e.ctrlKey||(e.preventDefault(),window.history.pushState({},"",n),window.dispatchEvent(r))},href:n,className:N.get(t),children:c})},S=n(27),L=n.n(S),R=function(e){for(var t=e.data,n=e.className,c=[],s=t.length-1,o=0;o<t.length;o++)o<s&&(c[c.length]=Object(a.jsx)(y,{href:t[o].link,className:n,children:t[o].name}),c[c.length]=Object(a.jsx)("span",{children:" > "})),o===s&&(c[c.length]=Object(a.jsx)("span",{children:t[o].name}));var i=0,u=c.map((function(e){return Object(a.jsx)(r.a.Fragment,{children:e},i++)}));return Object(a.jsx)("div",{className:L.a["breadcrumb-box"]+" hor-center flexparent",children:Object(a.jsx)("div",{className:"flex-block",children:u})})},B=n(28),A=new k(n.n(B).a),C=function(e){var t=e.className,n=e.callback,c=e.children,r=e.type,s=A.get(t+" btn");return""===n&&(n=function(){}),Object(a.jsx)("button",{onClick:n,className:s,type:r,children:c})},E=n(29),T=n.n(E),F=function(e){var t=e.children;return""===t?Object(a.jsx)(r.a.Fragment,{}):Object(a.jsx)("div",{className:T.a.messageBox,children:t})},U=[{name:"Login",link:""}],I=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),h=Object(i.a)(j,2),v=h[0],m=h[1],x=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(""),t.preventDefault(),(a=new URLSearchParams).append("username",n),a.append("password",l),e.next=7,O.post("/login",a);case 7:200===(c=e.sent).status&&"success"===c.data.status?(b.setToken(c.data.token),"user"===c.data.role?b.setAccountLvl(1):"admin"===c.data.role&&b.setAccountLvl(2),b.reload(),r=new PopStateEvent("popstate"),window.history.pushState({},"","/overview"),window.dispatchEvent(r)):(void 0!==c.data&&"failed"===c.data.auth&&m("Gebruikersnaam of wachtwoord incorrect"),console.log(c.data),g(c));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"hor-center flexparent",children:Object(a.jsxs)("div",{className:"flex-block",children:[Object(a.jsx)(R,{data:U,className:"breadCrumbItem"}),Object(a.jsx)(F,{children:v}),Object(a.jsxs)("form",{onSubmit:x,children:[Object(a.jsx)("label",{htmlFor:"login-username",children:"Gebruikersnaam"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",autoComplete:"username",id:"login-username",value:n,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"login-password",children:"Wachtwoord"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password",autoComplete:"current-password",id:"login-password",value:l,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(C,{className:"info",type:"submit",children:"Login"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})]})})})},P=new PopStateEvent("popstate"),q=function(e){var t=e.requiredLvl,n=e.inputPage,r=Object(c.useState)(Object(a.jsx)(I,{})),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(c.useState)(0),d=Object(i.a)(l,2),j=d[0],h=d[1];return Object(c.useEffect)((function(){clearTimeout(j),h(setTimeout((function(){var e=b.getAccountLvl();0===e&&"/"!==window.location.pathname?(window.history.pushState({},"","/"),window.dispatchEvent(P)):0===e&&"/"===window.location.pathname?(u(Object(a.jsx)(I,{})),console.log("navigation","set Loginpage",e)):e<t?(window.history.pushState({},"","/overview"),window.dispatchEvent(P),console.info("navigation","too low accountlvl")):(u(n),console.log("navigation","default page",e))}),50))}),[n,t]),Object(a.jsx)("main",{className:"main",children:o})},V=n(10),M=n.n(V),H=function(e){return 0===e?Object(a.jsx)(r.a.Fragment,{}):1===e?Object(a.jsxs)("nav",{className:M.a["nav-list"],children:[Object(a.jsx)(y,{href:"/",className:"nav-link",children:"Overzicht"}),Object(a.jsx)(y,{href:"/logout",className:"nav-link logout-link",children:"Logout"})]}):2===e?Object(a.jsxs)("nav",{className:M.a["nav-list"],children:[Object(a.jsx)(y,{href:"/overview",className:"nav-link",children:"Overzicht"}),Object(a.jsx)(y,{href:"/accountbeheer",className:"nav-link",children:" Account Beheer"}),Object(a.jsx)(y,{href:"/liedbeheer",className:"nav-link",children:"Lied Beheer"}),Object(a.jsx)(y,{href:"/logout",className:"nav-link logout-link",children:"Uitloggen"})]}):Object(a.jsx)(r.a.Fragment,{})},z=function(){var e=b.getAccountLvl(),t=Object(c.useState)(Object(a.jsx)(r.a.Fragment,{})),n=Object(i.a)(t,2),s=n[0],o=n[1];return Object(c.useEffect)((function(){o(H(e))}),[e]),Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{className:M.a["nav-logo"],children:Object(a.jsx)(y,{href:"/",className:"nav-link",children:"ZingApp"})}),s]})},G=n(12),D=n.n(G),K=function(){return Object(a.jsx)("footer",{className:D.a.footer,children:Object(a.jsx)("div",{className:D.a["copyright-line"],children:"\xa9De Hoopkaap"})})},Q=n(30),W=n.n(Q),J=function(e){for(var t=e.titles,n=e.colSpans,c=[],r=0;r<t.length;r++){var s=1,o=t[r];void 0!==n&&void 0!==n[r]&&(s=n[r]),c.push(Object(a.jsx)("th",{colSpan:s,children:o},r+o))}return Object(a.jsx)("thead",{className:W.a.thead,children:Object(a.jsx)("tr",{children:c})})},Z=n(13),X=n.n(Z),Y=function(e){var t=e.titles,n=e.colSpans,c=e.className,r=e.children;return void 0===c?c="table":c+=" table",null===r?Object(a.jsx)("div",{children:"Loading ..."}):Object(a.jsxs)("table",{className:X.a.table,children:[Object(a.jsx)(J,{titles:t,colSpans:n}),Object(a.jsx)("tbody",{className:X.a.tbody,children:r})]})},$=n(14),ee=n.n($),te=function(e){var t=e.id,n=e.title,c=e.number;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("tr",{}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:ee.a["td-text"],children:c}),Object(a.jsx)("td",{className:ee.a["td-text"],children:n}),Object(a.jsx)("td",{children:Object(a.jsx)(y,{href:"/overview/".concat(t),className:"",children:Object(a.jsx)(C,{className:"info rightRadius",children:"Bekijk"})})})]})]})},ne=[{name:"Overzicht",link:""}],ae=function(){var e=b.getToken(),t=Object(c.useState)({}),n=Object(i.a)(t,2),s=n[0],o=n[1],u=Object(c.useState)(null),l=Object(i.a)(u,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){(function(){var t=Object(f.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URLSearchParams).append("token",e),t.next=4,O.post("/overview",n);case 4:200===(a=t.sent).status&&"success"===a.data.status?o(a.data):x(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[o,e]),Object(c.useEffect)((function(){if("success"===s.status)if(void 0!==s.songInfo){var e=s.songInfo.map((function(e){var t=e.id,n=e.title,c=e.number;return Object(a.jsx)(te,{id:t,title:n,number:c},t)}));j(e)}else console.error("incorectdata gained",s)}),[s]),Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"hor-center flexparent",children:Object(a.jsxs)("div",{className:"flex-block",children:[Object(a.jsx)(R,{data:ne,className:"breadCrumbItem"}),Object(a.jsx)(Y,{titles:["Nummer","Titel",""],colspan:[1,1,1],children:d})]})})})},ce=function(){var e=b.getAccountLvl(),t=Object(c.useState)(Object(a.jsx)(r.a.Fragment,{})),n=Object(i.a)(t,2),s=n[0],o=n[1];return Object(c.useEffect)((function(){var t=null;0===e?t=Object(a.jsx)(I,{}):Math.floor(e)>0&&(t=Object(a.jsx)(ae,{})),o(t)}),[e]),s},re=function(){return Object(c.useEffect)((function(){b.setToken(""),b.setAccountLvl(0),j.destroyCookie(),b.reload();var e=new PopStateEvent("popstate");window.history.pushState({},"","/"),window.dispatchEvent(e)}),[]),null},se=function(){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("h1",{children:"404"})})},oe=n(7),ie=n.n(oe),ue=new k(ie.a),le=function(e){var t=e.token,n=e.id,s=e.number,o=e.title,u=e.removeRow,l=e.setMessage,d=Object(c.useState)(s),j=Object(i.a)(d,2),b=j[0],h=j[1],v=Object(c.useState)(o),m=Object(i.a)(v,2),g=m[0],w=m[1];return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("tr",{}),Object(a.jsxs)("tr",{className:ie.a.tableRow,children:[Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:ue.get("inputLiedBeheer song-number leftradius"),value:b,onChange:function(e){h(e.target.value)},type:"number"})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:ue.get("inputLiedBeheer song-title"),value:g,onChange:function(e){w(e.target.value)},type:"text"})}),Object(a.jsx)("td",{children:Object(a.jsx)(y,{href:"/liedbeheer/".concat(n),className:"",children:Object(a.jsx)(C,{className:"info noRadius",children:"Bewerk liedtekst"})})}),Object(a.jsx)("td",{children:Object(a.jsx)(C,{className:"warning noRadius",callback:function(){!function(e){!function(){var n=Object(f.a)(p.a.mark((function n(){var a,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(""),(a=new URLSearchParams).append("token",t),a.append("number",b),a.append("title",g),a.append("songid",e),n.next=8,O.post("/liedbeheer/update",a);case 8:200===(c=n.sent).status&&"success"===c.data.status?console.log(c.data):(void 0!==c.data.errors&&l(c.data.errors),x(c));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}(n)},children:"Update"})}),Object(a.jsx)("td",{children:Object(a.jsx)(C,{className:"danger rightRadius",callback:function(){!function(e){!function(){var n=Object(f.a)(p.a.mark((function n(){var a,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new URLSearchParams).append("token",t),a.append("songid",e),n.next=5,O.post("/liedbeheer/delete",a);case 5:200===(c=n.sent).status&&"success"===c.data.status?(console.log(c.data),u(e)):(void 0!==c.data.errors&&l(c.data.errors),x(c));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}(n)},children:"Delete"})})]})]})},de=new k(ie.a),je=function(e){var t=e.token,n=e.addRow,s=e.setMessage,o=Object(c.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),h=b[0],v=b[1];return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("tr",{className:ie.a.tableRowSpacer}),Object(a.jsxs)("tr",{className:ie.a.tableRow,children:[Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:de.get("inputLiedBeheer song-number leftradius"),placeholder:"Lied nummer",value:l,onChange:function(e){d(e.target.value)},type:"number",step:"1"})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:de.get("inputLiedBeheer song-title"),placeholder:"Lied titel",value:h,onChange:function(e){v(e.target.value)},type:"text"})}),Object(a.jsx)("td",{children:Object(a.jsx)(C,{className:"success rightRadius",callback:function(){!function(){var e=Object(f.a)(p.a.mark((function e(){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),(a=new URLSearchParams).append("token",t),a.append("number",l),a.append("title",h),e.next=7,O.post("/liedbeheer/create",a);case 7:200===(c=e.sent).status&&"success"===c.data.status?(console.log(c.data),n(),d(""),v("")):(void 0!==c.data.errors&&s(c.data.errors),x(c));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},children:"Cre\xeber"})})]})]})},be=[{name:"Lied Beheer",link:""}],he=function(){var e=b.getToken(),t=Object(c.useState)(null),n=Object(i.a)(t,2),s=n[0],o=n[1],u=Object(c.useState)({}),l=Object(i.a)(u,2),d=l[0],j=l[1],h=Object(c.useState)(""),v=Object(i.a)(h,2),m=v[0],g=v[1],w=function(){var t=Object(f.a)(p.a.mark((function t(){var n,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URLSearchParams).append("token",e),t.next=4,O.post("/liedbeheer",n);case 4:200===(c=t.sent).status&&"success"===c.data.status?void 0!==c.data.songInfo?(console.log("sucess",c.data.songInfo),r=c.data.songInfo.map((function(t){var n=t.id,c=t.number,r=t.title;return Object(a.jsx)(le,{token:e,id:n,number:c,title:r,removeRow:k,setMessage:g},n)})),j(r)):console.log(c.data):x(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){w()},k=function(){w()};return Object(c.useEffect)((function(){console.log(m)}),[m]),Object(c.useEffect)((function(){w()}),[]),Object(c.useEffect)((function(){void 0!==d[0]&&o(Object(a.jsxs)(r.a.Fragment,{children:[d,Object(a.jsx)(je,{token:e,addRow:_,setMessage:g})]}))}),[d]),Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"hor-center flexparent",children:Object(a.jsxs)("div",{className:"flex-block",children:[Object(a.jsx)(R,{data:be,className:"breadCrumbItem"}),Object(a.jsx)(F,{children:m}),Object(a.jsx)(Y,{titles:["Nummer","Titel","Acties"],colSpans:[1,1,3],children:s})]})})})},pe=n(31),fe=n.n(pe),ve=function(e){var t=e.children;return Object(a.jsx)("div",{className:fe.a["blue-bar"],children:Object(a.jsx)("span",{children:t})})},Oe=(n(23),[{name:"Liedbeheer",link:"/liedbeheer"},{name:"Bewerk-liedtekst-pagina",link:""}]),me=function(){var e=b.getToken(),t=b.getUrlVars(),n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],u=s[1],l=Object(c.useState)(""),d=Object(i.a)(l,2),j=d[0],h=d[1],v=Object(c.useState)(""),m=Object(i.a)(v,2),g=m[0],w=m[1],_=Object(c.useState)(""),k=Object(i.a)(_,2),N=k[0],y=k[1];return Object(c.useEffect)((function(){var n=function(){var n=Object(f.a)(p.a.mark((function n(){var a,c,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new URLSearchParams).append("token",e),n.next=4,O.post("/overview/".concat(t.id),a);case 4:200===(c=n.sent).status&&"success"===c.data.status&&void 0!==c.data.songInfo?(r=c.data.songInfo,u(r.id),h(r.number),w(r.title),y(r.songText)):x(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();void 0!==t&&void 0!==t.id?n():console.log("",t)}),[e,t]),Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"hor-center flexparent",children:Object(a.jsxs)("div",{className:"flex-block",children:[Object(a.jsx)(R,{data:Oe,className:"breadCrumbItem"}),Object(a.jsxs)("div",{className:"edit-container",children:[Object(a.jsxs)(ve,{children:["Nummer: ",j]}),Object(a.jsx)("h2",{className:"edit-title",children:g}),Object(a.jsx)("div",{className:"song-input",children:Object(a.jsx)("textarea",{type:"text",onChange:function(e){y(e.target.value),console.log(e.target.value)},value:N})})]}),Object(a.jsx)(C,{className:"warning",callback:function(){!function(e,t,n){console.log("update",t),function(){var a=Object(f.a)(p.a.mark((function a(){var c,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(c=new URLSearchParams).append("token",e),c.append("songid",t),c.append("songtext",n),a.next=6,O.post("/liedbeheer/update/songtext",c);case 6:200===(r=a.sent).status&&"success"===r.data.status?console.log(r.data):x(r);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}(e,o,N)},children:"Update liedtekst"})]})})})},xe=n(8),ge=n.n(xe),we=new k(ge.a),_e=function(e){var t=e.token,n=e.id,s=e.username,o=e.role,u=e.removeRow,l=e.setMessage,d=Object(c.useState)(s),j=Object(i.a)(d,2),b=j[0],h=j[1],v=Object(c.useState)(o),m=Object(i.a)(v,2),g=m[0],w=m[1],_=Object(c.useState)(""),k=Object(i.a)(_,2),N=k[0],y=k[1];return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("tr",{}),Object(a.jsxs)("tr",{className:ge.a.tableRow,children:[Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:we.get("inputAdminBeheer username leftradius"),value:b,onChange:function(e){h(e.target.value)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:we.get("inputAdminBeheer pass"),value:N,onChange:function(e){y(e.target.value)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:we.get("inputAdminBeheer role"),value:g,onChange:function(e){w(e.target.value)},type:"number",min:"1",max:"2",step:"1"})}),Object(a.jsx)("td",{children:Object(a.jsx)(C,{className:"warning noRadius",callback:function(){!function(e){l(""),function(){var n=Object(f.a)(p.a.mark((function n(){var a,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new URLSearchParams).append("token",t),a.append("accountid",e),a.append("accountname",b),a.append("password",N),a.append("roleid",g),n.next=8,O.post("/accountbeheer/update",a);case 8:200===(c=n.sent).status&&"success"===c.data.status?(console.log(c.data),y("")):(void 0!==c.data.errors&&l(c.data.errors),x(c));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}(n)},children:"Update"})}),Object(a.jsx)("td",{children:Object(a.jsx)(C,{className:"danger rightRadius",callback:function(){!function(e){l(""),function(){var n=Object(f.a)(p.a.mark((function n(){var a,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new URLSearchParams).append("token",t),a.append("accountid",e),n.next=5,O.post("/accountbeheer/delete",a);case 5:200===(c=n.sent).status&&"success"===c.data.status?u(e):(void 0!==c.data.errors&&l(c.data.errors),x(c));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}(n)},children:"Delete"})})]})]})},ke=new k(ge.a),Ne=function(e){var t=e.token,n=e.addRow,s=e.setMessage,o=Object(c.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),h=b[0],v=b[1],m=Object(c.useState)(""),g=Object(i.a)(m,2),w=g[0],_=g[1];return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("tr",{className:ge.a.tableRowSpacer}),Object(a.jsxs)("tr",{className:ge.a.tableRow,children:[Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:ke.get("inputAdminBeheer username leftradius"),placeholder:"Gebruikersnaam",value:l,onChange:function(e){d(e.target.value)},type:"text"})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:ke.get("inputAdminBeheer pass"),placeholder:"Wachtwoord",value:w,onChange:function(e){_(e.target.value)},type:"text"})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{className:ke.get("inputAdminBeheer role"),placeholder:"Rol",value:h,onChange:function(e){v(e.target.value)},type:"number",min:"1",max:"2",step:"1"})}),Object(a.jsx)("td",{children:Object(a.jsx)(C,{className:"success rightRadius",callback:function(){s(""),function(){var e=Object(f.a)(p.a.mark((function e(){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new URLSearchParams).append("token",t),a.append("accountname",l),a.append("password",w),a.append("roleid",h),e.next=7,O.post("/accountbeheer/create",a);case 7:200===(c=e.sent).status&&"success"===c.data.status?(r=c.data.accountInfo,n(r.id,r.name,r.role_id),d(""),_(""),v("")):(void 0!==c.data.errors&&s(c.data.errors),x(c));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},children:"Cre\xeber"})})]})]})},ye=[{name:"Account Beheer",link:""}],Se=function(){var e=b.getToken(),t=Object(c.useState)(null),n=Object(i.a)(t,2),s=n[0],o=n[1],u=Object(c.useState)({}),l=Object(i.a)(u,2),d=l[0],j=l[1],h=Object(c.useState)(""),v=Object(i.a)(h,2),m=v[0],g=v[1],w=function(){var t=Object(f.a)(p.a.mark((function t(){var n,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URLSearchParams).append("token",e),t.next=4,O.post("/accountbeheer",n);case 4:200===(c=t.sent).status&&"success"===c.data.status?(console.log("index success",c.data),void 0!==c.data.accountInfo&&(r=c.data.accountInfo.map((function(t){var n=t.id,c=t.name,r=t.role_id;return Object(a.jsx)(_e,{token:e,id:n,username:c,role:r,removeRow:k,setMessage:g},n)})),j(r))):x(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){w()},k=function(){w()};return Object(c.useEffect)((function(){w()}),[]),Object(c.useEffect)((function(){void 0!==d[0]&&o(Object(a.jsxs)(r.a.Fragment,{children:[d,Object(a.jsx)(Ne,{token:e,addRow:_,setMessage:g})]}))}),[d]),Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"hor-center flexparent",children:Object(a.jsxs)("div",{className:"flex-block",children:[Object(a.jsx)(R,{data:ye,className:"breadCrumbItem"}),Object(a.jsx)(F,{children:m}),Object(a.jsx)(Y,{titles:["Gebruikersnaam","Nieuw-wachtwoord*","Rol","Acties"],colSpans:[1,1,1,2],children:s}),Object(a.jsx)("p",{children:"*Als er geen wachtwoord word gegeven dan wordt het wachtwoord niet gewijzigd"})]})})})},Le=[{name:"Overzicht",link:"/overview"},{name:"Liedtekst-pagina",link:""}],Re=function(){var e=b.getToken(),t=b.getUrlVars(),n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],u=s[1],l=Object(c.useState)(""),d=Object(i.a)(l,2),j=d[0],h=d[1],v=Object(c.useState)(""),m=Object(i.a)(v,2),g=m[0],w=m[1];return Object(c.useEffect)((function(){var n=function(){var n=Object(f.a)(p.a.mark((function n(){var a,c,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new URLSearchParams).append("token",e),n.next=4,O.post("/overview/".concat(t.id),a);case 4:200===(c=n.sent).status&&"success"===c.data.status&&void 0!==c.data.songInfo?(r=c.data.songInfo,u(r.number),h(r.title),w(r.songText)):x(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();void 0!==t.id?n():console.log("",t)}),[e,t]),Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"hor-center flexparent",children:Object(a.jsxs)("div",{className:"flex-block",children:[Object(a.jsx)(R,{data:Le,className:"breadCrumbItem"}),Object(a.jsxs)("div",{className:"edit-container",children:[Object(a.jsxs)(ve,{children:["Nummer: ",o]}),Object(a.jsx)("h2",{className:"edit-title",children:j}),Object(a.jsx)("div",{className:"song-input",children:Object(a.jsx)("textarea",{type:"text",defaultValue:g,disabled:!0})})]})]})})})},Be=[{path:"/",page:Object(a.jsx)(ce,{}),requiredLvl:0},{path:"/logout",page:Object(a.jsx)(re,{}),requiredLvl:1},{path:"/overview",page:Object(a.jsx)(ae,{}),requiredLvl:1},{path:"/overview/{id}",page:Object(a.jsx)(Re,{}),requiredLvl:1},{path:"/accountbeheer",page:Object(a.jsx)(Se,{}),requiredLvl:2},{path:"/liedbeheer",page:Object(a.jsx)(he,{}),requiredLvl:2},{path:"/liedbeheer/{id}",page:Object(a.jsx)(me,{}),requiredLvl:2},{path:"/404",page:Object(a.jsx)(se,{}),requiredLvl:0},{path:"/login",page:Object(a.jsx)(I,{}),requiredLvl:0}],Ae=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(0),u=Object(i.a)(o,2),d=u[0],j=u[1],h=Object(c.useState)(0),p=Object(i.a)(h,2),f=p[0],v=p[1],O=Object(c.useState)(window.location.pathname),m=Object(i.a)(O,2),x=m[0],g=m[1],w=Object(c.useState)({page:null,requiredLvl:0}),_=Object(i.a)(w,2),k=_[0],N=_[1],y=Object(c.useState)(null),S=Object(i.a)(y,2),L=S[0],R=S[1];Object(c.useEffect)((function(){b.setReloadFunc(v)}),[]),Object(c.useEffect)((function(){B()}),[f]),Object(c.useEffect)((function(){var e=function(){g(window.location.pathname)};return window.addEventListener("popstate",e),window.addEventListener("hashchange",e),function(){window.removeEventListener("popstate",e)}}),[x,f]);var B=function(){var e=!0;if(Be.map((function(t){var n=t.path,a=t.page,c=t.requiredLvl,r=function(e,t){var n={testResult:null,newUrlVars:{}};if(e===t)return n.testResult=!0,n;if(-1!==e.search("{")){var a=e.split("/"),c=t.split("/");if(a.length===c.length){for(var r=0;r<a.length;r++){var s=a[r].search("{"),o=a[r].search("}");if(-1===s||-1===o){if(a[r]!==c[r])return n.testResult=!1,n}else{var i=a[r].slice(1,-1);n.newUrlVars[i]=c[r]}}return n.testResult=!0,n}}return n.testResult=!1,n}(n,x),s=r.testResult,o=r.newUrlVars;return s&&(e=!1,!1===l.compare(b.getUrlVars(),o)?(b.setUrlVars(o),N({page:a,requiredLvl:c})):N({page:a,requiredLvl:c})),null})),e){var t=new PopStateEvent("popstate");window.history.pushState({},"","/"),window.dispatchEvent(t),console.info("navigation","404")}};return Object(c.useEffect)((function(){clearTimeout(d),j(setTimeout((function(){B()}),50))}),[x,f]),Object(c.useEffect)((function(){clearTimeout(n),s(setTimeout((function(){R(Object(a.jsx)(q,{requiredLvl:k.requiredLvl,inputPage:k.page}))}),100))}),[k,f]),Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(z,{}),L,Object(a.jsx)(K,{})]})};n(56),n(57);j.init();var Ce=function(){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)(Ae,{})})};o.a.render(Object(a.jsx)(Ce,{}),document.getElementById("root"))}],[[58,1,2]]]);
//# sourceMappingURL=main.3612584a.chunk.js.map