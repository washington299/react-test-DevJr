(this["webpackJsonpxbrain-test-vaga-fe"]=this["webpackJsonpxbrain-test-vaga-fe"]||[]).push([[0],{34:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(18),c=t.n(i),o=t(10),l=t(16),u=t(17),m=t(19),d={products:[{id:1,image:"".concat("","images/produto-01.jpeg"),name:"AirPods Apple Fones de ouvido",price:1499,installmentPrice:124.92,cashPrice:1349,quantity:0},{id:2,image:"".concat("","images/produto-02.jpeg"),name:"Capa de silicone para iPhone 8/7 cor Areia - rosa",price:299,installmentPrice:24.92,cashPrice:269.1,quantity:0},{id:3,image:"".concat("","images/produto-03.jpeg"),name:"Apple pencil",price:729,installmentPrice:60.75,cashPrice:656.1,quantity:0},{id:4,image:"".concat("","images/produto-04.jpeg"),name:"Magic Mouse 2 - Prateado",price:549,installmentPrice:45.75,cashPrice:494.1,quantity:0},{id:5,image:"".concat("","images/produto-05.jpeg"),name:"Caixa prateada de alum\xednio com pulseira esportiva branca",price:2899,installmentPrice:241.58,cashPrice:2609.1,quantity:0},{id:6,image:"".concat("","images/produto-06.jpeg"),name:"Cabo de lighting para USB (1m)",price:149,installmentPrice:12.42,cashPrice:134.1,quantity:0},{id:7,image:"".concat("","images/produto-07.jpeg"),name:"Smart Keyboard para Ipad Pro 12,9 polegadas - ingl\xeas (EUA)",price:1099,installmentPrice:91.58,cashPrice:989.1,quantity:0},{id:8,image:"".concat("","images/produto-08.jpeg"),name:"Carregador USB de 5W Apple",price:149,installmentPrice:12.42,cashPrice:134.1,quantity:0}],total:0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_PRODUCT":var t=n.payload,a=t.id,r=t.quantity,i=t.value,c=e.products.filter((function(e){return e.id===a})),o=c[0];return o.quantity+=r,e.products.slice(0,o.id-1,o),Object(m.a)({},e,{total:e.total+i});default:return e}},s={user:{name:"",email:"",sexo:""}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_USER":var t=n.payload,a=t.name,r=t.email,i=t.sexo;return Object(m.a)({},e,{user:{name:a,email:r,sexo:i}});default:return e}},b=Object(u.b)({products:p,user:f}),g=Object(u.c)(b),x=t(13),h=function(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)},E=function(e){return{type:"ADD_USER",payload:{name:e.name,email:e.email,sexo:e.sexo}}},v=t(4),y=t(5);function _(){var e=Object(v.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #eceff1;\n\n  .message-box {\n    background-color: #fff;\n    width: 370px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 40px 30px;\n\n    .message-box-person {\n      color: #546e7a;\n      text-align: center;\n    }\n    .message-box-message {\n      text-align: center;\n      color: #546e7a;\n      font-size: 18px;\n      font-weight: 600;\n\n      span {\n        display: inline-block;\n        margin: 0 5px;\n        color: #019cdf;\n      }\n    }\n\n    img {\n      width: 180px;\n      margin: 30px 0;\n      margin-left: 30px;\n    }\n    button {\n      width: 230px;\n      border: none;\n      border-radius: 5px;\n      color: #fff;\n      background-color: #ff9800;\n      margin-top: 15px;\n      padding: 10px 20px;\n      font-weight: 600;\n      cursor: pointer;\n    }\n  }\n"]);return _=function(){return e},e}var j=y.b.div(_()),w=Object(o.b)((function(e){return{user:e.user.user,total:e.products.total}}))((function(e){var n=e.user,t=e.total,a=e.dispatch,i=Object(x.f)(),c=n.name,o=n.email,l=n.sexo;return c&&o&&l||(a(E({name:"",email:"",sexo:""})),i.push("/")),r.a.createElement(j,null,r.a.createElement("div",{className:"message-box"},r.a.createElement("h2",{className:"message-box-person"},"".concat(n.name,",")),r.a.createElement("div",{className:"message-box-message"},"Sua compra no valor de",r.a.createElement("span",null,h(t)),"foi finalizada com sucesso"),r.a.createElement("img",{src:"".concat("","images/purchase.png"),alt:"Compra realizada com sucesso"}),r.a.createElement("button",{type:"button",onClick:function(){window.location.href=""}},"INICIAR NOVA COMPRA")))}));function O(){var e=Object(v.a)(["\n  display: block;\n  color: #f00;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 5px;\n"]);return O=function(){return e},e}function P(){var e=Object(v.a)(["\n  background: #aaa;\n"]);return P=function(){return e},e}function N(){var e=Object(v.a)(["\n  color: #546e7a;\n  padding: 15px 0;\n  border-bottom: 1px solid #eee;\n"]);return N=function(){return e},e}function C(){var e=Object(v.a)(["\n  padding-top: ","px;\n\n  @media only screen and (max-width: 1140px) {\n    margin: 0 10px;\n  }\n  @media only screen and (max-width: 800px) {\n    padding-top: 30px;\n  }\n  @media only screen and (max-width: 530px) {\n    padding-top: 0;\n  }\n"]);return C=function(){return e},e}function A(){var e=Object(v.a)(["\n  max-width: 1140px;\n  margin: auto;\n"]);return A=function(){return e},e}function k(){var e=Object(v.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n"]);return k=function(){return e},e}var q=Object(y.a)(k()),S=y.b.section(A()),D=y.b.header(C(),(function(e){return e.pt})),F=y.b.h1(N()),R=(y.b.div(P()),y.b.span(O())),z=function(){return r.a.createElement(D,{pt:60},r.a.createElement(F,null,"Produtos"))},I=t(6),U=t(24);function B(){var e=Object(v.a)(["\n  .add-product {\n    display: flex;\n    justify-content: center;\n    margin: 15px 0;\n\n    .add-product__svg {\n      font-size: 45px;\n    }\n    .add-product__input {\n      width: 125px;\n      margin: 0 10px;\n      border: 1px solid #ddd;\n      border-radius: 5px;\n      text-align: center;\n      font-size: 16px;\n      outline: none;\n    }\n  }\n\n  .add-product__button {\n    width: 100%;\n    background-color: #019cdf;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    padding: 10px 0;\n    font-weight: 600;\n  }\n"]);return B=function(){return e},e}var M=y.b.div(B()),T=Object(o.b)(null)((function(e){var n=e.id,t=e.quantity,i=e.price,c=e.dispatch,o=Object(a.useState)(t),l=Object(I.a)(o,2),u=l[0],m=l[1],d=Object(a.useState)(!1),p=Object(I.a)(d,2),s=p[0],f=p[1];return r.a.createElement(M,null,r.a.createElement("div",{className:"add-product"},r.a.createElement(U.b,{className:"add-product__svg",color:u>0?"#546e7a":"#b0bec5",onClick:function(){0!==u&&m(u-1)}}),r.a.createElement("input",{readOnly:!0,value:u,className:"add-product__input"}),r.a.createElement(U.a,{className:"add-product__svg",color:u<99?"#546e7a":"#b0bec5",onClick:function(){99!==u&&m(u+1)}})),r.a.createElement("button",{type:"button",className:"add-product__button",onClick:function(){0!==u?(c(function(e,n,t){return{type:"ADD_PRODUCT",payload:{id:e,quantity:n,value:t}}}(n,u,u*i)),f(!1)):f(!0)}},"ADICIONAR"),s&&r.a.createElement(R,{style:{textAlign:"center"}},"Nenhum produto selecionado"))}));function J(){var e=Object(v.a)(["\n  width: 25%;\n\n  .product-item {\n    margin: 20px 10px;\n    padding: 10px;\n    cursor: pointer;\n\n    :hover {\n      border: 1px solid #eee;\n      border-radius: 8px;\n      box-shadow: 0px 3px 5px #ccc;\n    }\n  }\n\n  .product-item__background {\n    .product-item--img {\n      width: 100%;\n    }\n    .product-item--name,\n    .product-item--price {\n      color: #546e7a;\n    }\n    .product-item--price {\n      font-size: 22px;\n      font-weight: bold;\n    }\n    .product-item--different-prices {\n      color: #b0bdc4;\n      font-size: 14px;\n      margin-top: 10px;\n\n      p {\n        margin: 5px 0;\n      }\n    }\n  }\n\n  @media only screen and (max-width: 960px) {\n    width: 33%;\n  }\n  @media only screen and (max-width: 800px) {\n    width: 50%;\n  }\n  @media only screen and (max-width: 530px) {\n    width: 100%;\n  }\n"]);return J=function(){return e},e}var L=y.b.div(J()),K=Object(o.b)((function(e){return{products:e.products.products}}))((function(e){var n=e.products,t=Object(a.useState)(null),i=Object(I.a)(t,2),c=i[0],o=i[1];return r.a.createElement(r.a.Fragment,null,n.map((function(e){var n=e.id,t=e.image,a=e.name,i=e.price,l=e.installmentPrice,u=e.cashPrice,m=e.quantity;return r.a.createElement(L,{key:n,onClick:function(){return o(n)}},r.a.createElement("div",{className:"product-item"},r.a.createElement("div",{className:"product-item__background"},r.a.createElement("img",{src:t,alt:a,className:"product-item--img"}),r.a.createElement("p",{className:"product-item--name"},a),r.a.createElement("span",{className:"product-item--price"},h(i)),r.a.createElement("div",{className:"product-item--different-prices"},r.a.createElement("p",null,"Em at\xe9 12x de ".concat(h(l))),r.a.createElement("p",null,"".concat(h(u)," \xe0 vista (10% de desconto)"))),n===c&&r.a.createElement(T,{id:n,quantity:m,price:i}))))})))}));function V(){var e=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return V=function(){return e},e}var W=y.b.section(V()),Z=function(){return r.a.createElement(W,null,r.a.createElement(K,null))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(Z,null))},H=t(32);function Q(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  float: right;\n  margin-right: 10px;\n  padding-bottom: 40px;\n\n  h2 {\n    margin-bottom: 5px;\n    color: #546e7a;\n  }\n  input {\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    background-color: #ff9800;\n    padding: 10px 20px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n"]);return Q=function(){return e},e}function X(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 0 10px;\n\n  label {\n    margin-bottom: 5px;\n    color: #546e7a;\n    font-weight: 600;\n  }\n\n  input,\n  select {\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 15px;\n\n    ::placeholder {\n      color: #bbb;\n    }\n  }\n\n  input {\n    height: 30px;\n  }\n  select {\n    height: 100%;\n    cursor: pointer;\n  }\n\n  @media only screen and (max-width: 960px) {\n    margin: 10px;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 40px;\n\n  .form__area--name,\n  .form__area--email {\n    width: 40%;\n  }\n  .form__area--select {\n    width: 20%;\n  }\n\n  @media only screen and (max-width: 960px) {\n    .form__area--name,\n    .form__area--email {\n      width: 50%;\n    }\n    .form__area--select {\n      width: 200px;\n    }\n  }\n  @media only screen and (max-width: 530px) {\n    .form__area--name,\n    .form__area--email,\n    .form__area--select {\n      width: 100%;\n    }\n  }\n"]);return Y=function(){return e},e}var $=y.b.form(Y()),ee=y.b.div(X()),ne=y.b.div(Q()),te=Object(o.b)((function(e){return{total:e.products.total}}))((function(e){var n=e.total,t=e.dispatch,i=Object(H.a)(),c=i.register,o=i.handleSubmit,l=i.errors,u=Object(x.f)(),m=Object(a.useState)(!1),d=Object(I.a)(m,2),p=d[0],s=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,r.a.createElement("div",{className:"form__area--name"},r.a.createElement(ee,null,r.a.createElement("label",{htmlFor:"name"},"Nome:"),r.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Nome do cliente aqui",ref:c({required:!0})}),l.name&&r.a.createElement(R,null,"Campo obrigat\xf3rio"))),r.a.createElement("div",{className:"form__area--email"},r.a.createElement(ee,null,r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Digite seu email aqui",ref:c({required:!0})}),l.email&&r.a.createElement(R,null,"Campo obrigat\xf3rio"))),r.a.createElement("div",{className:"form__area--select"},r.a.createElement(ee,null,r.a.createElement("label",{htmlFor:"sexo"},"Sexo:"),r.a.createElement("select",{name:"sexo",id:"sexo",ref:c({required:!0})},r.a.createElement("option",{value:""},"Selecione:"),r.a.createElement("option",{value:"masculino"},"Masculino"),r.a.createElement("option",{value:"feminino"},"Feminino")),l.sexo&&r.a.createElement(R,null,"Campo obrigat\xf3rio")))),r.a.createElement(ne,null,r.a.createElement("h2",null,"Total: ".concat(h(n))),r.a.createElement("input",{type:"hidden",name:"total",ref:c,value:n}),r.a.createElement("input",{type:"submit",value:"FINALIZAR COMPRA",onClick:o((function(e){0!==n?(t(E(e)),u.push("/purchased")):s(!0)}))}),p&&r.a.createElement(R,null,"Selecione um produto")))})),ae=function(){return r.a.createElement(D,null,r.a.createElement(F,null,"Dados do Cliente"),r.a.createElement(te,null))},re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(ae,null))},ie=function(){return r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/purchased",component:w}),r.a.createElement(S,null,r.a.createElement(x.a,{path:"/",component:re})))},ce=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null),r.a.createElement(ie,null))};c.a.render(r.a.createElement(o.a,{store:g},r.a.createElement(l.a,null,r.a.createElement(ce,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.38ac8450.chunk.js.map