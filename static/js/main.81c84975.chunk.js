(window.webpackJsonptheatre=window.webpackJsonptheatre||[]).push([[0],{135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=(a(67),a(16)),u=a(11),i=a.n(u),s=a(22),m=a(14),p=a(37),f=a.n(p),d=a(18),h=a.n(d);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var v=function(e,t){var a=[];return e.map((function(e){for(var n=t.filter((function(t){return e.id===t.relationships.performance.data.id})).map((function(e){return e.attributes})),r=[],c=0;c<n.length;c++){var l=h()(n[c].from).format("YYYY-MM-DD");a.includes(l)||function(){var e=l;a.push(l);var t=n.filter((function(t){return h()(t.from).format("YYYY-MM-DD")===e})).map((function(e){return{from:h()(e.from).format("HH:mm"),to:h()(e.to).format("HH:mm")}}));r.push({day:e,times:t})}()}return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{sessions:r})}))},E=(a(87),function(e){var t=e.children;switch(e.size){case"h2":return r.a.createElement("h2",null,t);case"h3":return r.a.createElement("h3",null,t);case"h4":return r.a.createElement("h4",null,t);case"h5":return r.a.createElement("h5",null,t);default:return r.a.createElement("h1",null,t)}}),g=(a(25),function(e){var t=e.data,a=e.onChangeStep;return r.a.createElement("div",{className:"performances"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"performance box"},r.a.createElement(E,{size:"h2"},e.attributes.title),r.a.createElement("div",{className:"genres"},e.attributes.genres.map((function(e){return r.a.createElement("span",{className:"genre",key:e},e)}))),r.a.createElement("div",{className:"sessions"},e.sessions.map((function(e){return r.a.createElement("div",{key:e.day},r.a.createElement(E,{size:"h4"},h()(e.day).format("DD.MM.YYYY")),r.a.createElement("div",{className:"times",onClick:function(){return a(2)}},e.times.map((function(e){return r.a.createElement("div",{className:"session",key:e.from},r.a.createElement("div",{className:"time"},e.from),r.a.createElement("span",null,"-"),r.a.createElement("div",{className:"time"},e.to))}))))}))))})))}),y=a(46),O=a.n(y),N=a(61);a(134),a(135);Object(y.registerLocale)("ru",N.a);var w=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,l=e.type,o=e.required,u=e.handleChange;switch(l){case"calendar":return r.a.createElement("label",{className:"input-box"},r.a.createElement("div",{className:"label"},t),r.a.createElement(O.a,{name:a,selected:n,showYearDropdown:!0,placeholderText:c,locale:"ru",dateFormat:"yyyy-MM-dd",className:"input",onChange:function(e,t){t.preventDefault(),u(a,e)}}));default:return r.a.createElement("label",{className:"input-box"},r.a.createElement("div",{className:"label"},t),r.a.createElement("input",{name:a,required:o,value:n,type:l||"text",placeholder:c,onChange:function(e){var t=e.target.value;return u(a,t)},className:"input"}))}},j=(a(136),function(e){var t=e.name,a=e.label,n=e.options,c=e.value,l=e.handleChange;return r.a.createElement("label",{className:"select-box"},r.a.createElement("div",{className:"label"},a),r.a.createElement("select",{onChange:function(e){var a=e.target.value;l(t,a)},value:c},n.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.text)}))))}),S=(a(137),function(e){var t=e.children,a=e.name,n=e.checked,c=e.handleChange;return r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",name:a,defaultChecked:n,onChange:function(){return c(a)}}),r.a.createElement("div",{className:"checkbox-text"},t))}),C=(a(138),function(e){var t=e.children,a=e.type,n=e.htmltype,c=e.disabled,l=e.handleClick,o=void 0===l?function(){}:l;return r.a.createElement("button",{disabled:c,className:"button ".concat(a),htmltype:n,onClick:function(){return o()}},t)});function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(e,t){switch(t.type){case"INPUT_CHANGE":return P({},e,Object(o.a)({},t.name,t.value));case"TOGGLE_RULES":return P({},e,{rules:!e.rules});default:return e}},D=function(e){var t=e.onChangeStep,a={firstName:localStorage.getItem("firstName")||"",lastName:localStorage.getItem("lastName")||"",birthDate:localStorage.getItem("birthDate")?new Date(localStorage.getItem("birthDate")):"",email:localStorage.getItem("email")||"",payment:localStorage.getItem("payment")||"cash",rules:localStorage.getItem("lastName")||!1},c=Object(n.useReducer)(I,a),l=Object(m.a)(c,2),o=l[0],u=l[1],p=o.firstName&&o.lastName&&o.birthDate&&o.email&&o.payment&&o.rules;return r.a.createElement("div",{className:"box personal-box"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a="cash"===o.payment?4:3;t(a,o)}},r.a.createElement(w,{name:"firstName",label:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",placeholder:"\u0418\u0432\u0430\u043d",value:o.firstName,required:!0,handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement(w,{name:"lastName",label:"\u0412\u0430\u0448\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432",value:o.lastName,required:!0,handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement(w,{type:"email",name:"email",label:"Email",placeholder:"ivan@ivanov@mail.ru",value:o.email,required:!0,handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement(w,{type:"calendar",name:"birthDate",value:o.birthDate,label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",placeholder:"1990-10-31",handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement(j,{name:"payment",label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b",value:o.payment,options:[{text:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438",value:"cash"},{text:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043a\u0430\u0440\u0442\u043e\u0439",value:"card"}],handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement(S,{name:"rules",checked:o.rules,handleChange:function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"TOGGLE_RULES"});case 2:localStorage.setItem("rules",!o.rules);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438"),r.a.createElement("div",{className:"buttons"},r.a.createElement(C,{handleClick:function(){return t(1,o)}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(C,{type:"primary",htmltype:"submit",disabled:!p},"\u0412\u043f\u0435\u0440\u0435\u0434"))))},k=function(e){var t=e.onChangeStep,a={number:localStorage.getItem("number")||"",expired:localStorage.getItem("expired")||"",owner:localStorage.getItem("owner")||""},c=Object(n.useReducer)(I,a),l=Object(m.a)(c,2),o=l[0],u=l[1],i=o.number&&o.expired&&o.owner;return r.a.createElement("div",{className:"box personal-box"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(4,o)}},r.a.createElement(w,{name:"number",label:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",placeholder:"1234123412341234",type:"number",value:o.number,required:!0,handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement(w,{name:"expired",label:"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u0430\u0440\u0442\u044b",placeholder:"08/22",value:o.expired,required:!0,handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement(w,{name:"owner",label:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u043a\u0430\u0440\u0442\u044b",placeholder:"IVAN IVANOV",value:o.owner,required:!0,handleChange:function(e,t){u({type:"INPUT_CHANGE",name:e,value:t}),localStorage.setItem(e,t)}}),r.a.createElement("div",{className:"buttons"},r.a.createElement(C,{handleClick:function(){return t(2)}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(C,{type:"primary",disabled:!i},"\u0413\u043e\u0442\u043e\u0432\u043e"))))},_=function(){return localStorage.clear(),r.a.createElement("div",{className:"box personal-box finish"},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")},G=(a(139),function(e){var t=e.currentStep;return r.a.createElement("div",{className:"title-box"},r.a.createElement("div",null,function(){switch(t){case 2:return r.a.createElement(E,null,"2. \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435");case 3:return r.a.createElement(E,null,"3. \u041e\u043f\u043b\u0430\u0442\u0430 \u043a\u0430\u0440\u0442\u043e\u0439");case 4:return r.a.createElement(E,null,"\u0413\u043e\u0442\u043e\u0432\u043e!");default:return r.a.createElement(E,null,"1. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c \u0438 \u0432\u0440\u0435\u043c\u044f")}}()))}),H=a(60),Y=a.n(H),T=(a(140),function(){return r.a.createElement("div",{className:"spin"},r.a.createElement("img",{src:Y.a,alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}))});function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=function(){var e=Object(n.useState)(+localStorage.getItem("step")),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(m.a)(l,2),u=o[0],p=o[1],d=Object(n.useState)([]),h=Object(m.a)(d,2),b=h[0],E=h[1],y=Object(n.useState)(!0),O=Object(m.a)(y,2),N=O[0],w=O[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.a.get("http://www.amock.io/api/Darren_Clyd/sessions"),a=f.a.get("http://www.amock.io/api/Darren_Clyd/performances"),e.prev=2,e.next=5,Promise.all([a,t]);case 5:n=e.sent,E(v(n[0].data.data,n[1].data.data)),w(!1),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(2),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem("step",t);case 2:if(c(t),!a){e.next=7;break}return e.next=6,p(U({},u,{},a));case 6:"cash"!==a.payment&&4!==t||S();case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){return"card"===u.payment?{type:"card",card:{number:u.number,valid_thru:u.expired,name:u.owner}}:{type:"cash"}},f.a.post("",{data:{type:"orders",attributes:{session:1,first_name:u.firstName,last_name:u.lastName,birthday:u.birthDate,email:u.email,payment:t()}}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement(G,{currentStep:a}),N?r.a.createElement(T,null):function(){switch(a){case 1:return r.a.createElement(g,{data:b,onChangeStep:function(e){return j(e)}});case 2:return r.a.createElement(D,{onChangeStep:function(e,t){return j(e,t)}});case 3:return r.a.createElement(k,{onChangeStep:function(e,t){return j(e,t)}});case 4:return r.a.createElement(_,null);default:return r.a.createElement(g,{data:b,onChangeStep:function(e){return j(e)}})}}())},M=(a(141),function(e){var t=e.children;return r.a.createElement("header",{className:"header"},t)});var L=function(){return r.a.createElement("div",null,r.a.createElement(M,null,"\u0422\u0435\u0430\u0442\u0440"),r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/spin.24b07114.svg"},62:function(e,t,a){e.exports=a(142)},67:function(e,t,a){},87:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.81c84975.chunk.js.map