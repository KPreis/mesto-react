(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},4:function(e,a,t){e.exports=t.p+"static/media/logo-white.b4fe8513.svg"},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),s=t.n(c),l=(t(16),t(1)),i=t(4),o=t.n(i);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:o.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))};var d=function(e){var a=e.card,t=e.handleCardClick;return r.a.createElement("li",{className:"card",key:a._id},r.a.createElement("button",{className:"card__delete",type:"button"}),r.a.createElement("div",{className:"card__img-container"},r.a.createElement("img",{className:"card__img",alt:a.name,src:a.link,onClick:function(){t(a)}})),r.a.createElement("div",{className:"card__description"},r.a.createElement("h2",{className:"card__name"},a.name),r.a.createElement("div",{className:"card__like-block"},r.a.createElement("button",{className:"card__like",type:"button"}),r.a.createElement("p",{className:"card__like-counter"},a.likes.length))))};var u=function(e){var a=e.dataProfile,t=e.cards,n=e.handleCardClick,c=e.onEditProfile,s=e.onAddPlace,l=e.onEditAvatar;return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container",onClick:l},r.a.createElement("img",{className:"profile__avatar",src:a.avatar,alt:a.name})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__name-with-button"},r.a.createElement("h1",{className:"profile__name"},a.name),r.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:c})),r.a.createElement("p",{className:"profile__description"},a.about)),r.a.createElement("button",{type:"button",className:"profile__add-button",onClick:s})),r.a.createElement("section",{className:"galary"},r.a.createElement("ul",{className:"galary__cards-list"},t.map(function(e){return r.a.createElement(d,{key:e._id,card:e,handleCardClick:n})}))))};var p=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text"},"\xa9 ",e," Mesto Russia created by KPreis"))};var h=function(e){var a=e.card,t=e.onClose;return r.a.createElement("div",{className:"pop-up pop-up_image ".concat(a&&"pop-up_opened"),id:"imagePopup"},r.a.createElement("figure",{className:"pop-up__figure"},r.a.createElement("img",{className:"pop-up__image",src:a?a.link:"https://mesto.kpreis.ru/images/taganay.jpeg",alt:a?a.name:"\u0422\u0430\u0433\u0430\u043d\u0430\u0439"}),r.a.createElement("figcaption",{className:"pop-up__label"},a?a.name:"\u0422\u0430\u0433\u0430\u043d\u0430\u0439"),r.a.createElement("button",{className:"pop-up__close-button",type:"button",onClick:t})))};var _=function(e){return r.a.createElement("div",{className:"pop-up  ".concat(e.isOpen&&"pop-up_opened"),id:e.id},r.a.createElement("div",{className:"pop-up__form"},r.a.createElement("form",{name:"",className:"form",noValidate:!0},r.a.createElement("h2",{className:"form__header"},e.title),e.children,r.a.createElement("button",{className:"form__save-button",type:"submit"},e.textButton),r.a.createElement("button",{className:"pop-up__close-button",type:"button",onClick:e.onClose}))))},f=t(5),E=t(6),N="eb3b2bc4-a18d-46ae-aeed-207ad13f265c",b="cohort-41",k=r.a.createElement("fieldset",{className:"form__fields"},r.a.createElement("input",{className:"form__item",id:"cardNameField",type:"text",name:"name",defaultValue:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"40"}),r.a.createElement("span",{className:"form__item-error cardNameField-error"}),r.a.createElement("input",{className:"form__item",id:"cardLinkField",type:"url",name:"link",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"form__item-error cardLinkField-error"})),v=r.a.createElement("fieldset",{className:"form__fields"},r.a.createElement("input",{className:"form__item",id:"profileNameEditField",type:"text",name:"name",defaultValue:"",required:!0,minLength:"2",maxLength:"40"}),r.a.createElement("span",{className:"form__item-error profileNameEditField-error"}),r.a.createElement("input",{className:"form__item",id:"profileDescriptionEditField",type:"text",name:"description",defaultValue:"",required:!0,minLength:"2",maxLength:"200"}),r.a.createElement("span",{className:"form__item-error profileDescriptionEditField-error"})),g=r.a.createElement("fieldset",{className:"form__fields"},r.a.createElement("input",{className:"form__item",id:"avatarLinkField",type:"url",name:"link",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"form__item-error avatarLinkField-error"})),y=new(function(){function e(a){var t=a.baseUrl,n=a.headers;Object(f.a)(this,e),this._baseUrl=t,this._headers=n}return Object(E.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"sendNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.description)})}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then(this._checkResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https:///mesto.nomoreparties.co/v1/".concat(b),headers:{authorization:"".concat(N),"Content-Type":"application/json"}});var C=function(){var e=r.a.useState([]),a=Object(l.a)(e,2),t=a[0],n=a[1],c=r.a.useState({}),s=Object(l.a)(c,2),i=s[0],o=s[1],d=r.a.useState(null),f=Object(l.a)(d,2),E=f[0],N=f[1],b=r.a.useState(!1),C=Object(l.a)(b,2),P=C[0],O=C[1],L=r.a.useState(!1),F=Object(l.a)(L,2),j=F[0],x=F[1],U=r.a.useState(!1),S=Object(l.a)(U,2),w=S[0],R=S[1];r.a.useEffect(function(){Promise.all([y.getInitialCards(),y.getProfile()]).then(function(e){var a=Object(l.a)(e,2),t=a[0],r=a[1];n(t),o(r)}).catch(function(e){console.log(e)})},[]);var T=function(){x(!1),O(!1),R(!1),N(null)};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"page"},r.a.createElement(m,null),r.a.createElement(u,{cards:t,dataProfile:i,handleCardClick:function(e){N(e)},onEditProfile:function(){O(!0)},onAddPlace:function(){x(!0)},onEditAvatar:function(){R(!0)}}),r.a.createElement(p,null),r.a.createElement(h,{card:E,onClose:T}),r.a.createElement(_,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",id:"avatarUpdatePopup",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:w,onClose:T},g),";",r.a.createElement(_,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",id:"profileEditPopup",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:P,onClose:T},v),";",r.a.createElement(_,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",id:"cardAddPopup",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:j,onClose:T},k),";"))},P=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,68)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),P()},7:function(e,a,t){e.exports=t(67)}},[[7,3,2]]]);
//# sourceMappingURL=main.4e8f9b82.chunk.js.map