(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{2696:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fixtures",function(){return n(1520)}])},7518:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});var r=n(5893),c=n(1842),o=n.n(c),s=function(e){var t=e.children;return(0,r.jsx)("div",{className:o().container,children:t})}},1520:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f}});var r=n(603),c=n(5893),o=n(7294),s=n(7518),a=n(3596),l=n.n(a),i=n(3854),u=n(1664),d=n.n(u),h=function(e){var t,n,a,u=e.leagueGames;return(0,c.jsx)(s.W,{children:(0,c.jsx)("div",{className:l()["league-table"],children:(0,c.jsx)("table",{children:Object.entries(u).map(function(e){var s=(0,r.Z)(e,2),u=s[0],h=s[1];return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsxs)("thead",{children:[(0,c.jsx)("tr",{className:l()["league-name"],children:(0,c.jsx)("th",{colSpan:5,children:(0,c.jsx)(d(),{href:"/fixtures/".concat(u.replaceAll(" ","_")),children:(0,c.jsx)("a",{children:(0,c.jsxs)("h2",{children:[(0,c.jsx)("span",{children:u})," ",(0,c.jsx)(i.x9Z,{})]})})})})}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{scope:"rowgroup",children:"Date"}),(0,c.jsx)("th",{scope:"rowgroup",children:"Fixture"}),(0,c.jsx)("th",{scope:"rowgroup",children:"Location"}),(0,c.jsx)("th",{scope:"rowgroup",children:"Result"}),(0,c.jsx)("th",{})]})]},u),h.sort(function(e,t){return e.date.localeCompare(t.date)}).map(function(e){return(0,c.jsx)("tbody",{className:l()["league-games"],children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:new Date(e.date).toISOString().substring(0,10)}),(0,c.jsxs)("td",{children:[e.awayGame?e.opponent:"Urmston"," v"," ",e.awayGame?"Urmston":e.opponent]}),(0,c.jsx)("td",{children:null!==(t=e.location)&&void 0!==t?t:""}),(0,c.jsx)("td",{children:"".concat(null!==(n=e.homeScore)&&void 0!==n?n:""," - ").concat(null!==(a=e.awayScore)&&void 0!==a?a:"")}),(0,c.jsx)("td",{children:(0,c.jsx)(d(),{href:"/fixtures/".concat(u.replaceAll(" ","_"),"/").concat(e.sys.id),children:(0,c.jsx)("a",{children:(0,c.jsx)(i.x9Z,{})})})})]})},e.sys.id)})]},u)})})})})},f=!0;t.default=h},1842:function(e){e.exports={container:"container_container__TPo_T"}},3596:function(e){e.exports={"league-table":"Fixtures_league-table__GpuvI","league-name":"Fixtures_league-name__XARaL",center:"Fixtures_center__CS2Ms"}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(c),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)0>t.indexOf(r[c])&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n};function l(e){return function(t){return r.createElement(i,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,s({key:n},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var n,c=e.attr,o=e.size,l=e.title,i=a(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,i,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(c)}}},function(e){e.O(0,[556,774,888,179],function(){return e(e.s=2696)}),_N_E=e.O()}]);