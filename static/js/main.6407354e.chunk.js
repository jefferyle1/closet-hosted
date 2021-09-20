(this["webpackJsonpcloset-hosted"]=this["webpackJsonpcloset-hosted"]||[]).push([[0],{51:function(e,n,t){"use strict";t.r(n);var c,i,a,r,s,l,o=t(5),j=t.n(o),b=t(37),d=t.n(b),u=t(9),x=t(10),h=t(23),p=t(11),f=t(3);var O=x.a.div(c||(c=Object(u.a)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 95vw;\n"]))),g=x.a.div(i||(i=Object(u.a)(["\n  width: 100px;\n \n"]))),m=x.a.div(a||(a=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  border: 2px solid black;\n  padding: 1px;\n  cursor:pointer;  \n  align-self: flex-start;\n"]))),v=x.a.div(r||(r=Object(u.a)(["\n  width: 40px;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),y=x.a.p(s||(s=Object(u.a)(["\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 15px;\n"]))),w=x.a.p(l||(l=Object(u.a)(["\n display: flex;\n justify-content: space-around;\n align-items: center;\n\n"]))),S={margin:"1rem",textDecoration:"none",color:"black"},k=function(e){return Object(f.jsxs)(O,{children:[Object(f.jsx)(w,{children:Object(f.jsx)(y,{children:Object(f.jsx)(h.b,{style:S,to:"/add",children:Object(f.jsxs)(m,{children:[" ",Object(f.jsx)(v,{children:"+"}),Object(f.jsx)(g,{children:" Add A Piece of Clothing "})]})})})}),Object(f.jsxs)(h.b,{style:S,to:"/",children:[Object(f.jsx)(y,{children:"The Virtual Closet"}),"  "]})]})},C=t(13),T=function(e,n,t,c,i,a,r,s,l){return{num:e,name:n,brand:t,colour:c,type:i,season:a,tags:r,desc:s,img:l}},B=[],D={allSeasons:["Winter","Spring","Summer","Fall"],allColours:["Black","Blue","Brown","Burdgundy","Gray","Green","Navy","Orange","Pink","Purple","Red","Tan","White","Yellow"],allTypes:["Outerwear","Top","Bottom","Footwear","Accessories"],UserTags:[]};localStorage.FiltersDB&&(D=JSON.parse(localStorage.FiltersDB));var F,U,A,J,N,E=[T(0,"Track Jacket","Adidas","Tan","Outerwear",["Spring","Summer","Fall"],["For windy weather"],"Great jacket for every situation.","https://firebasestorage.googleapis.com/v0/b/the-cloud-closet.appspot.com/o/images%2Fclothing%20(1).jpg?alt=media&token=26bc788a-48cd-4034-bd29-1420dc8af705"),T(1,"Running Shorts","Nike","Black","Bottom",["Spring","Summer"],["Running"],"Very breathable and lightweight.","https://firebasestorage.googleapis.com/v0/b/the-cloud-closet.appspot.com/o/images%2F20210913_211532.jpg?alt=media&token=18d5e53e-5dac-4281-8083-d083a2a31867"),T(2,"Joggers","Puma","Black","Bottom",["Spring","Summer","Fall"],["Running","For windy weather"],"Very comfortable.","https://firebasestorage.googleapis.com/v0/b/the-cloud-closet.appspot.com/o/images%2F20210823_113800.jpg?alt=media&token=59c008f6-07ec-4fdb-8fb5-98a7b19f8c69")];function z(e){var n;return n="allSeasons"===e.cat?"Seasons":"allColours"===e.cat?"Colours":"allTypes"===e.cat?"Types":"Tags",Object(f.jsx)("center",{children:Object(f.jsx)("b",{children:n})})}function I(e){var n=e.filter,t=e.cat,c=Object(o.useState)(!1),i=Object(C.a)(c,2),a=i[0],r=i[1];return"UserTags"===t?Object(f.jsxs)(M,{children:[" ",Object(f.jsx)(_,{onClick:function(){G(a,r,n)},style:a?{fontWeight:"bold"}:{fontWeight:"normal"},children:n}),Object(f.jsx)(K,{onDoubleClick:function(){!function(e){var n=D.UserTags.indexOf(e);D.UserTags.splice(n,1),localStorage.FiltersDB=JSON.stringify(D);var t=0;if(E.forEach((function(n){if(n.tags&&n.tags.includes(e)){var c=n.tags.indexOf(e);E[t].tags.splice(c,1),localStorage.ClosetDB=JSON.stringify(E)}t++})),B.includes(e)){var c=B.indexOf(e);B.splice(c,1)}}(n)},children:" x "})]}):Object(f.jsx)(_,{onClick:function(){G(a,r,n)},style:a?{fontWeight:"bold"}:{fontWeight:"normal"},children:n})}function G(e,n,t){if(!1===e)(D.allColours.includes(t)&&!B.some((function(e){return D.allColours.includes(e)}))||D.allTypes.includes(t)&&!B.some((function(e){return D.allTypes.includes(e)}))||D.allSeasons.includes(t)||D.UserTags.includes(t))&&(n(!0),B.push(t));else{n(!1);var c=B.indexOf(t);B.splice(c,1)}}localStorage.ClosetDB&&(E=JSON.parse(localStorage.ClosetDB));var P,W,R,H,V=function(e){var n=[];for(var t in e.filters)n.push(Object(f.jsx)(z,{cat:t},t)),e.filters[t].forEach((function(e){n.push(Object(f.jsx)(I,{cat:t,filter:e},e))}));return Object(f.jsxs)(Y,{children:[" ",Object(f.jsxs)("div",{children:[n," "]}),Object(f.jsx)(L,{onClick:function(){!function(){var e=prompt("Enter a custom tag:");""===e||null===e||D.UserTags.includes(e)||(D.UserTags.push(e),localStorage.FiltersDB=JSON.stringify(D))}()},children:" Add Custom Tag "})]})},Y=x.a.div(F||(F=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: arial;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-left: 5px;\n  height: 100%;\n"]))),_=x.a.div(U||(U=Object(u.a)(["\n  cursor:pointer;   \n  width:fit-content;\n  user-select: none;\n"]))),L=x.a.button(A||(A=Object(u.a)(["\n  margin-bottom: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  user-select: none;\n  background-color: white;\n"]))),K=x.a.div(J||(J=Object(u.a)(["\n  cursor:pointer;  \n  border: 1px solid black; \n  display: flex;\n  width: 11px;\n  height: 10px;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n"]))),M=x.a.div(N||(N=Object(u.a)(["\n  display:flex; \n  justify-content: space-between;\n  margin-right: 10px;\n  word-break: normal;\n"])));function Z(e){e.clothing.num=e.num;var n=e.clothing;return Object(f.jsxs)(ee,{children:[Object(f.jsx)(ce,{src:n.img}),Object(f.jsxs)(te,{children:[Object(f.jsxs)("div",{children:[" ",n.brand," "]}),Object(f.jsxs)("b",{children:[" ",n.colour," ",n.name," "]})]})]})}var q,Q,X,$=function(e){for(var n=[],t=0;t<e.closet.length;t++){var c=E.indexOf(e.closet[t]);n.push(Object(f.jsxs)(h.b,{to:"/item/:".concat(c),style:S,children:[Object(f.jsx)(Z,{clothing:e.closet[t],num:c})," "]}))}return Object(f.jsxs)(ne,{children:[n," "]})},ee=x.a.div(P||(P=Object(u.a)(["\n display: flex;\n justify-content: flex-end;\n flex-direction: column;\n width: 200px;\n margin: 10px;\n font-family: Arial, Helvetica, sans-serif;\n border-top: 3px solid black;\n"]))),ne=x.a.div(W||(W=Object(u.a)(["\n display: flex;\n flex-direction: row;\n flex-wrap: wrap;\n"]))),te=x.a.div(R||(R=Object(u.a)(["\n display: flex;\n flex-direction: column;\n flex-wrap: wrap;\n justify-content: center;\n align-items: center;\n height: 60px;\n border-top: 3px solid black;\n text-align: center;\n"]))),ce=x.a.img(H||(H=Object(u.a)(["\n  object-position: center;\n  height: 270px;\n  width: 200px;\n  object-fit: cover;\n"])));var ie=function(e){var n=Object(o.useState)(E),t=Object(C.a)(n,2),c=t[0],i=t[1];return Object(f.jsxs)(ae,{children:[Object(f.jsx)(re,{onClick:function(){!function(e,n,t){var c=n.slice();e.forEach((function(e){c.forEach((function(n){D.allSeasons.includes(e)?c=c.filter((function(n){return n.season.includes(e)})):D.allColours.includes(e)?c=c.filter((function(n){return n.colour===e})):D.allTypes.includes(e)&&n.type!==e?c=c.filter((function(n){return n.type===e})):D.UserTags.includes(e)&&!n.tags.includes(e)&&(c=c.filter((function(n){return n.tags.includes(e)})))}))})),t(c)}(B,E,i)},children:Object(f.jsx)(V,{filters:D})}),Object(f.jsx)(se,{children:Object(f.jsx)($,{closet:c})})]})},ae=x.a.div(q||(q=Object(u.a)(["\n display: flex;\n flex-direction: row;\n justify-content: left;\n user-select: none;\n height: 90vh;\n width: 95vw;\n"]))),re=x.a.div(Q||(Q=Object(u.a)(["\n display: flex;\n flex-direction: column;\n width: 200px;\n border: 2px solid black;\n  justify-content: space-between;\n  overflow: auto;\n"]))),se=x.a.div(X||(X=Object(u.a)(["\n display: flex;\n flex-direction: row;\n border: 2px solid black;\n width: 100%;\n overflow: auto;\n"]))),le=t(18),oe=function(e){var n=e.options,t=e.onChange,c=Object(o.useState)(n),i=Object(C.a)(c,2),a=i[0],r=i[1];return Object(f.jsx)(f.Fragment,{children:a.map((function(e,n){return Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",checked:e.checked||!1,onClick:function(){return function(e){var n=Object(le.a)(a);n.splice(e,1,{label:a[e].label,checked:!a[e].checked}),r(n),t(n.filter((function(e){return e.checked})))}(n)}}),e.label]},e.label)}))})},je=t(31);t(49),t(52);je.a.initializeApp({apiKey:"AIzaSyAPZaegt5fpg8Hj9cAv0FGg4RLxJd9WCFc",authDomain:"the-cloud-closet.firebaseapp.com",projectId:"the-cloud-closet",storageBucket:"the-cloud-closet.appspot.com",messagingSenderId:"849177485911",appId:"1:849177485911:web:cf96471858d863c0b5b912",measurementId:"G-YHGEG6107P"});var be,de,ue,xe,he,pe=je.a.storage();function fe(e){var n=Object(o.useState)(null),t=Object(C.a)(n,2),c=t[0],i=t[1],a=e.setUrl,r=e.url;return Object(f.jsxs)(Te,{children:[Object(f.jsx)(we,{src:r,alt:"Choose and Upload an Image Below"}),Object(f.jsxs)(ke,{children:[Object(f.jsx)("hr",{}),Object(f.jsx)(Ce,{type:"file",onChange:function(e){e.target.files[0]&&i(e.target.files[0])}}),Object(f.jsx)(Se,{onClick:function(){c&&pe.ref("images/".concat(c.name)).put(c).on("stage_changed",(function(e){}),(function(e){console.log(e)}),(function(){pe.ref("images").child(c.name).getDownloadURL().then((function(e){a(e)}))}))},children:" Upload Image "})]})]})}var Oe,ge,me,ve,ye,we=x.a.img(be||(be=Object(u.a)(["\n  font-weight: bold;\n  font-size: 17px;\n  margin-bottom: 25px;\n  vertical-align: top;\n  height: 65%;\n"]))),Se=x.a.button(de||(de=Object(u.a)([" \n  background-color: white;\n  cursor: pointer;\n"]))),ke=x.a.div(ue||(ue=Object(u.a)(["\n  margin-bottom: 25px;\n"]))),Ce=x.a.input(xe||(xe=Object(u.a)(["\n  margin-bottom: 25px;\n  \n"]))),Te=x.a.div(he||(he=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  border-right: 2px solid black;\n  padding: 10px;\n  border: 2px solid black;\n"])));function Be(e){var n=[Object(f.jsx)("option",{children:""})];return e.arr.forEach((function(e){n.push(Object(f.jsx)("option",{children:e}))})),n}function De(e){for(var n=e.splice(),t=0;t<e.length;t++)n.splice(t,1,{label:e[t]});return n}function Fe(e){for(var n=e.splice(),t=0;t<e.length;t++)n[t]=e[t].label;return n}var Ue,Ae,Je,Ne,Ee,ze,Ie,Ge,Pe,We,Re,He,Ve,Ye=function(e){B.length=0;var n=Object(o.useState)(""),t=Object(C.a)(n,2),c=t[0],i=t[1],a=Object(o.useState)(""),r=Object(C.a)(a,2),s=r[0],l=r[1],j=Object(o.useState)(""),b=Object(C.a)(j,2),d=b[0],u=b[1],x=Object(o.useState)(""),h=Object(C.a)(x,2),O=h[0],g=h[1],m=Object(o.useState)(""),v=Object(C.a)(m,2),y=v[0],w=v[1],S=Object(o.useState)([]),k=Object(C.a)(S,2),F=k[0],U=k[1],A=Object(o.useState)([]),J=Object(C.a)(A,2),N=J[0],z=J[1],I=Object(o.useState)(""),G=Object(C.a)(I,2),P=G[0],W=G[1],R=Object(p.g)(),H=function(e){e.preventDefault(),function(e,n,t,c,i,a,r,s,l){if(""!==n.trim()&&""!==i.trim()&&""!==c.trim()&&0!==a.length&&""!==l){var o=T(e,n,t,c,i,a,r,s,l);return E.push(o),localStorage.ClosetDB=JSON.stringify(E),!0}return alert("Ensure that all non-optional inputs are filled and that you've uploaded an image."),!1}(E.length,c,s,O,d,F,N,y,P)&&R("/")};return Object(f.jsxs)(_e,{children:[Object(f.jsx)(Le,{children:Object(f.jsxs)("form",{onSubmit:function(e){H(e)},children:[Object(f.jsx)("label",{children:"Name"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:function(e){i(e.target.value)},type:"text"}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{children:["Brand ",Object(f.jsx)(Me,{children:"(optional)"})," "]}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:function(e){l(e.target.value)},type:"text"}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{children:"Choose Clothing Type "}),Object(f.jsx)("br",{}),Object(f.jsx)("select",{onChange:function(e){u(e.target.value)},children:Object(f.jsx)(Be,{arr:D.allTypes})}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{children:"Choose Colour "})," ",Object(f.jsx)("br",{}),Object(f.jsx)("select",{onChange:function(e){g(e.target.value)},children:Object(f.jsx)(Be,{arr:D.allColours})})," ",Object(f.jsx)("br",{}),Object(f.jsxs)("label",{children:["Description ",Object(f.jsx)(Me,{children:"(optional)"})]}),Object(f.jsx)("br",{}),Object(f.jsx)(Ke,{onChange:function(e){w(e.target.value)},type:"text"})," ",Object(f.jsx)("br",{}),Object(f.jsx)("label",{children:"Seasons"}),Object(f.jsx)("br",{}),Object(f.jsx)(oe,{options:De(D.allSeasons),onChange:function(e){return U(Fe(e))}}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{children:["Tags ",Object(f.jsx)(Me,{children:"(optional)"})]}),Object(f.jsx)("br",{}),Object(f.jsx)(oe,{options:De(D.UserTags),onChange:function(e){return z(Fe(e))}}),Object(f.jsx)("br",{}),Object(f.jsx)(Ze,{type:"submit",className:"submitButton",value:"Submit",children:" Add This Piece To Your Closet "})]})}),Object(f.jsx)(fe,{url:P,setUrl:W})]})},_e=x.a.div(Oe||(Oe=Object(u.a)(["\n display: flex;\n flex-direction: row;\n justify-content: center;\n user-select: none;\n height: 85vh;\n font-family: arial;\n max-width: 90vw;\n"]))),Le=x.a.div(ge||(ge=Object(u.a)(["\n border-right: 2px solid black;\n padding: 10px;\n  display: flex; \n  flex-direction: column;\n  overflow: auto;\n  border: 2px solid black;\n  min-width: 200px;\n"]))),Ke=x.a.textarea(me||(me=Object(u.a)(["\n  min-width: 180px;\n  height: 200px;\n  font-family: Helvetica;\n"]))),Me=x.a.p(ve||(ve=Object(u.a)(["\n  display: inline;\n  font-size: 13px;\n"]))),Ze=x.a.button(ye||(ye=Object(u.a)(["\n  cursor: pointer;\n  font-size: 20px;\n  margin-top: 30px;\n  width: 95%;\n  margin-left: 0px;\n  background-color: white;\n"])));function qe(e){var n=[Object(f.jsx)("option",{children:""})];return e.arr&&e.arr.forEach((function(e){n.push(Object(f.jsx)("option",{children:e}))})),n}var Qe,Xe=function(e){B.length=0;var n=Object(p.h)().id.substring(1),t=E[n],c=Object(p.g)();function i(e){return t.desc?Object(f.jsxs)("div",{children:[" ",Object(f.jsxs)(jn,{children:[" ",Object(f.jsx)("div",{children:' "Description"'})]}),Object(f.jsxs)(on,{children:[" ",t.desc," "]})]}):Object(f.jsx)("div",{})}function a(e){var n=[];return t.season.forEach((function(e){n.push(Object(f.jsxs)(cn,{children:[" ",e," "]}))})),Object(f.jsx)(tn,{children:n})}function r(e){var n=[];return t.tags.forEach((function(e){n.push(Object(f.jsxs)("div",{children:[" - ",e," "]}))})),Object(f.jsx)("div",{children:n})}var s=Object(o.useState)(""),l=Object(C.a)(s,2),j=l[0],b=l[1],d=Object(o.useState)(""),u=Object(C.a)(d,2),x=u[0],h=u[1];return t?Object(f.jsxs)($e,{children:[Object(f.jsxs)(nn,{children:[" ",t.colour," ",t.brand,"  ",t.name," "]}),Object(f.jsxs)(cn,{children:[" ",t.type," "]}),Object(f.jsx)(a,{}),Object(f.jsxs)(an,{children:[Object(f.jsx)(bn,{src:t.img}),Object(f.jsxs)(rn,{children:[Object(f.jsx)(en,{onClick:function(){!function(e,n){var t=n.indexOf(e);n.splice(t,1),localStorage.ClosetDB=JSON.stringify(n),c("/")}(t,E)},children:" Delete"}),Object(f.jsxs)(dn,{children:[Object(f.jsx)(i,{}),Object(f.jsx)(jn,{children:" Tags "}),Object(f.jsx)(r,{})]}),Object(f.jsxs)(ln,{children:[Object(f.jsx)(sn,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(e){!function(e){if(""!==x){var c=t.tags.indexOf(x);E[n].tags.splice(c,1),localStorage.ClosetDB=JSON.stringify(E),h("")}}()},children:"Delete A Tag"}),Object(f.jsx)("br",{}),Object(f.jsx)("select",{value:x,onChange:function(e){h(e.target.value)},style:{width:200},children:Object(f.jsx)(qe,{arr:t.tags})})]})}),Object(f.jsx)(sn,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(e){""!==j&&(E[n].tags.push(j),localStorage.ClosetDB=JSON.stringify(E),b(""))},children:"Add A Tag"}),Object(f.jsx)("br",{}),Object(f.jsx)("select",{value:j,onChange:function(e){b(e.target.value)},style:{width:200},children:Object(f.jsx)(qe,{arr:D.UserTags.filter((function(e){return!t.tags.includes(e)}))})})]})})]})]})]})]}):Object(f.jsx)("h2",{children:"Sorry, this page doesn't exist!"})},$e=x.a.div(Ue||(Ue=Object(u.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n justify-content: center;\n user-select: none;\n height: 90vh;\n width: 95vw;\n"]))),en=x.a.button(Ae||(Ae=Object(u.a)(["\nheight: 30px; \nalign-self: flex-end;\nbackground-color: white;\ncursor: pointer;\nborder: 2px solid white;\nborder-left: 1px solid black;\nborder-bottom: 1px solid black;\n"]))),nn=x.a.h1(Je||(Je=Object(u.a)(["\nmargin-top: 0px;\nmargin-bottom: 5px;\n"]))),tn=x.a.p(Ne||(Ne=Object(u.a)(["\nmargin-bottom: 10px;\nmargin-top: 0px;\ndisplay: inline;\n"]))),cn=x.a.p(Ee||(Ee=Object(u.a)(["\n  margin: 0px;\n  opacity: 75%;\n  display: inline;\n  align-self: center;\n"]))),an=x.a.div(ze||(ze=Object(u.a)(["\n  width: auto;\n  height: 450px;\n  display: flex;\n  flex-direction: row;\n"]))),rn=x.a.div(Ie||(Ie=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 5px;\n  border: 1px solid black;\n"]))),sn=x.a.div(Ge||(Ge=Object(u.a)(["\n  border: 2px solid black;\n  margin: 5px;\n  padding: 2px;\n  font-size: 13px;\n"]))),ln=x.a.div(Pe||(Pe=Object(u.a)(["\n  display: flex;\n"]))),on=x.a.p(We||(We=Object(u.a)(["\n  white-space: pre-wrap;\n  margin-top: 0px;\n  text-align: center;\n  font-size: 14px;\n"]))),jn=x.a.p(Re||(Re=Object(u.a)(["\n text-align: center;\n  margin-bottom: 2px;\n  font-weight: bold;\n"]))),bn=x.a.img(He||(He=Object(u.a)(["\n  object-fit: cover;\n  width: auto;\n  height: 100%;\n  max-width: 400px;\n"]))),dn=x.a.div(Ve||(Ve=Object(u.a)(["\n  width: auto;\n  height: 100%;\n  margin: 5px;\n"])));var un=function(){return Object(f.jsx)(h.a,{children:Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{path:"/",element:Object(f.jsxs)(xn,{children:[" ",Object(f.jsx)(k,{})," ",Object(f.jsx)(ie,{})," "]})}),Object(f.jsx)(p.a,{path:"add",element:Object(f.jsxs)(xn,{children:[" ",Object(f.jsx)(k,{})," ",Object(f.jsx)(Ye,{})," "]})}),Object(f.jsx)(p.a,{path:"item/:id",element:Object(f.jsxs)(xn,{children:[" ",Object(f.jsx)(k,{})," ",Object(f.jsx)(Xe,{})," "]})}),Object(f.jsx)(p.a,{path:"*",exact:!0,element:Object(f.jsxs)(xn,{children:[Object(f.jsx)(k,{})," ",Object(f.jsx)("h2",{children:" Sorry, this page doesn't exist!"})]})})]})})},xn=x.a.div(Qe||(Qe=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin:0px;\n  padding: 0px;\n  min-height: 98vh;\n  user-select: none;\n  align-items: center;\n  font-family: Helvetica;\n"])));d.a.render(Object(f.jsx)(j.a.StrictMode,{children:Object(f.jsx)(un,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.6407354e.chunk.js.map