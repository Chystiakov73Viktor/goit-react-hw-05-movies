"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{8828:function(e,t,n){n.d(t,{Bt:function(){return l},Tg:function(){return i},Y5:function(){return p},d5:function(){return f},uw:function(){return o}});var r=n(5861),a=n(7757),u=n.n(a),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="d88417173bd74f0afa4871cb3367af96",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3597:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),u=n(7757),c=n.n(u),s=n(2791),i=n(7689),o=n(8828),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],f=(0,s.useState)(!1),l=(0,a.Z)(f,2),d=l[0],v=l[1],h=(0,s.useState)(null),g=(0,a.Z)(h,2),m=g[0],w=g[1],x=(0,i.UO)().movieId;return(0,s.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,(0,o.d5)(x);case 4:t=e.sent,u(t),v(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),w(e.t0.message),console.log("error",e.t0),v(!0);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]),(0,p.jsxs)(p.Fragment,{children:[m&&(0,p.jsx)("p",{children:m}),n&&(0,p.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.profile_path,r=e.name,a=e.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("p",{children:a})]},t)}))}),d&&(0,p.jsx)("div",{children:"Loading..."})]})}}}]);
//# sourceMappingURL=597.d660e750.chunk.js.map