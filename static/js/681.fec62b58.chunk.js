"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{8828:function(e,n,t){t.d(n,{Bt:function(){return v},Tg:function(){return i},Y5:function(){return p},d5:function(){return f},uw:function(){return o}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="d88417173bd74f0afa4871cb3367af96",i=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9681:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),i=t(7689),o=t(8828),p=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,s.useState)(!1),v=(0,a.Z)(f,2),l=v[0],d=v[1],h=(0,s.useState)(null),g=(0,a.Z)(h,2),m=g[0],x=g[1],w=(0,i.UO)().movieId;return(0,s.useEffect)((function(){if(w){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,(0,o.Bt)(w);case 4:n=e.sent,u(n),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),x(e.t0.message),d(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[w]),(0,p.jsxs)(p.Fragment,{children:[0!==t.length?(0,p.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.content,r=e.author;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:r}),(0,p.jsx)("p",{children:t})]},n)}))}):(0,p.jsx)("h2",{children:"We don't have any reviews for this movie"}),m&&(0,p.jsx)("p",{children:m}),l&&(0,p.jsx)("div",{children:"Loading..."})]})}}}]);
//# sourceMappingURL=681.fec62b58.chunk.js.map