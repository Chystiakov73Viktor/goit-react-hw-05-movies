"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{8828:function(e,n,r){r.d(n,{Bt:function(){return d},Tg:function(){return u},Y5:function(){return l},d5:function(){return p},uw:function(){return o}});var t=r(5861),a=r(7757),i=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="d88417173bd74f0afa4871cb3367af96",u=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9257:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t,a,i,c,s,u,o=r(5861),l=r(9439),p=r(7757),d=r.n(p),f=r(2791),h=r(3430),v=r(7689),x=r(1087),g=r(8828),m=r(168),w=r(5867),Z=w.ZP.div(t||(t=(0,m.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-left: 10px;\n"]))),j=w.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n"]))),k=w.ZP.p(i||(i=(0,m.Z)(["\n  width: 500px;\n"]))),b=w.ZP.h2(c||(c=(0,m.Z)(["\n  margin-left: 10px;\n"]))),y=w.ZP.li(s||(s=(0,m.Z)(["\n  margin-top: 10px;\n"]))),_=(0,w.ZP)(x.OL)(u||(u=(0,m.Z)(["\n  display: inline-block;\n  margin-top: 70px;\n  margin-left: 10px;\n"]))),S=r(184),U=function(){var e,n,r=(0,f.useState)(null),t=(0,l.Z)(r,2),a=t[0],i=t[1],c=(0,f.useState)(!1),s=(0,l.Z)(c,2),u=s[0],p=s[1],m=(0,f.useState)(null),w=(0,l.Z)(m,2),U=w[0],P=w[1],C=(0,v.TH)(),L=(0,f.useRef)(null!==(e=null===(n=C.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),O=(0,v.UO)().movieId;if((0,f.useEffect)((function(){if(O){var e=function(){var e=(0,o.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,(0,g.Y5)(O);case 4:n=e.sent,i(n),p(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),P(e.t0.message),p(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[O]),a){var R=a.title,A=a.release_date,I=a.poster_path,T=a.overview,Y=a.genres,q=a.vote_average;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{to:L.current,children:"go back"}),a&&(0,S.jsxs)(Z,{children:[(0,S.jsx)("img",{width:"300px",src:I?"https://image.tmdb.org/t/p/w500".concat(I):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:R}),(0,S.jsxs)(j,{children:[(0,S.jsxs)("h1",{children:[R," (",A.slice(0,4),")"]}),(0,S.jsxs)("p",{children:["User Score: ",Math.round(10*q),"%"]}),(0,S.jsx)("h2",{children:"Overview"}),(0,S.jsx)(k,{children:T}),(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("ul",{children:Y.map((function(e){return(0,S.jsx)("li",{children:e.name},e.id)}))})]})]}),U&&(0,S.jsx)("p",{children:U}),u&&(0,S.jsx)(h.gy,{color:"green"}),(0,S.jsx)(b,{children:"Additional information"}),(0,S.jsxs)("ul",{children:[(0,S.jsx)(y,{children:(0,S.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,S.jsx)(y,{children:(0,S.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]}),(0,S.jsx)(f.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading..."}),children:(0,S.jsx)(v.j3,{})})]})}}}}]);
//# sourceMappingURL=257.40c56b79.chunk.js.map