(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[5],{101:function(e,r,n){e.exports={Order:"Order_Order__3kYZJ"}},105:function(e,r,n){"use strict";n.r(r);var t=n(4),a=n(5),i=n(7),o=n(6),u=n(8),c=n(0),s=n.n(c),d=n(16),p=n(101),l=n.n(p),m=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return s.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return s.a.createElement("div",{className:l.a.Order},s.a.createElement("p",null,"Ingredients: ",t),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},b=n(22),f=n(43),h=n(17),g=n(42),O=function(e){function r(){return Object(t.a)(this,r),Object(i.a)(this,Object(o.a)(r).apply(this,arguments))}return Object(u.a)(r,e),Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(g.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return s.a.createElement(m,{key:e.id,ingredients:e.ingredients,price:e.price})})),s.a.createElement("div",null,e)}}]),r}(c.Component);r.default=Object(d.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(r,n){return e(h.d(r,n))}}})(Object(f.a)(O,b.a))}}]);
//# sourceMappingURL=5.86ba5885.chunk.js.map