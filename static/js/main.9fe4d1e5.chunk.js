(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(2),s=n.n(a),u=n(3),c=n(4),l=n(6),i=n(5);function m(t){var e=t.goods;return o.a.createElement("ul",null,e.map((function(t){return o.a.createElement("li",{key:t.id},t.product)})))}function d(t){var e=t.showGoods,n=t.showButtons;return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement("button",{type:"button",onClick:e},"Start"))}n(12);function h(t){var e=t.reverse;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:e},"Reverse"))}function g(t){var e=t.sortByName;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:e},"Sort alphabetically"))}function f(t){var e=t.reset;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:e},"Reset"))}function p(t){var e=t.sortByLength;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:e},"Sort by length"))}var E=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=E.map((function(t,e){return{product:t,id:e+1}})),v=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:y,showButtons:!0},t.showGoods=function(){return t.setState((function(t){return{showButtons:!1}}))},t.sortByName=function(){t.setState((function(t){return{goods:t.goods.sort((function(t,e){return t.product.localeCompare(e.product)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:t.goods.sort((function(t,e){return t.product.length-e.product.length}))}}))},t.reset=function(){t.setState((function(t){return{goods:t.goods.sort((function(t,e){return t.id-e.id}))}}))},t.reverse=function(){return t.setState((function(t){return{goods:t.goods.reverse()}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.showList,n=t.showButtons,r=t.goods,a=t.isReversed,s=t.sortBy;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),o.a.createElement(d,{showGoods:this.showGoods,showButtons:n}),!n&&o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{reverse:this.reverse}),o.a.createElement(g,{sortByName:this.sortByName}),o.a.createElement(f,{reset:this.reset}),o.a.createElement(p,{sortByLength:this.sortByLength}),o.a.createElement(m,{showList:e,goods:r,isReversed:a,sortBy:s})),E.length)}}]),n}(o.a.Component);s.a.render(o.a.createElement(v,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9fe4d1e5.chunk.js.map