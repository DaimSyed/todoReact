/*! For license information please see main.43b50153.chunk.js.LICENSE.txt */
(this["webpackJsonpes6-spread-operator-practice"]=this["webpackJsonpes6-spread-operator-practice"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),l=n.n(r),o=n(3),u=n(4),i=function(e){return c.a.createElement("li",{style:{textDecoration:e.checked?"line-through":null,userSelect:"none"},onClick:function(t){return e.handler(e.item)},onContextMenu:function(t){t.preventDefault(),e.completed(e.item)}},e.text)},s=!1,d=[["Hello World",!1],["Hy Wrold",!1],["How are you",!1]];var m,p=function(e){var t=1;e.data&&!s&&(s=!0,t++,d=e.data,console.log(e.data,t,s));var n=Object(a.useState)(d),r=Object(u.a)(n,2),l=r[0],m=r[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),h=f[0],v=f[1];console.log(t,s);var E=function(e){m((function(t){return t[e][1]=!t[e][1],Object(o.a)(t)}))},b=function(e){m((function(t){return t.splice(e,1),Object(o.a)(t)}))};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List")),c.a.createElement("div",{className:"form"},c.a.createElement("input",{onChange:function(e){var t=e.target.value;v(t)},type:"text",value:h}),c.a.createElement("button",{onClick:function(){h&&m((function(e){return[].concat(Object(o.a)(e),[[h,!1]])})),v("")}},c.a.createElement("span",null,"Add"))),c.a.createElement("div",null,c.a.createElement("ul",null,l.map((function(e,t){return c.a.createElement(i,{handler:E,completed:b,key:Math.random(),item:t,text:e[0],checked:e[1]})})))))};l.a.render(c.a.createElement(p,{data:m||null}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.43b50153.chunk.js.map