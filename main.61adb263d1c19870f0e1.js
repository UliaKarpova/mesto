(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers,this.sendNewProfileInfo=this.sendNewProfileInfo.bind(this),this.addNewCard=this.addNewCard.bind(this),this.addLike=this.addLike.bind(this),this.deleteLike=this.deleteLike.bind(this),this.sendNewAvatar=this.sendNewAvatar.bind(this),this.deleteImage=this.deleteImage.bind(this)}var n,r;return n=t,(r=[{key:"getInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"getPhotos",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"sendNewProfileInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"deleteImage",value:function(e){return fetch("".concat(this._url,"cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"sendNewAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,u){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=n,this._item=t,this._userId=t.userId,this._likes=t.likes,this._callback=r,this._imageDeleteCallback=o,this._likeDeleteCallback=i,this._likeAddCallback=u,this._userLiked=this._item.likes.some((function(e){return e._id===a._userId}))}var t,r;return t=e,(r=[{key:"_getCard",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".grid__item").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getCard(),this._cardImage=this._element.querySelector(".grid__photo"),this._cardImage.src=this._item.link,this._element.querySelector(".grid__text").textContent=this._item.name,this._cardImage.setAttribute("alt",this._item.name),this._likeButton=this._element.querySelector(".grid__heart"),this._likesNumber=this._element.querySelector(".grid__likes-number"),this._isLiked(),this._userLiked&&this._likeButton.classList.add("grid__heart_activ"),this._likesNumber.textContent=this._likes.length,this._isUserOwner()||this._element.querySelector(".grid__delete-item").remove(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;return this._cardImage.addEventListener("click",(function(){e._callback({name:e._item.name,link:e._item.link})})),this._likeButton.addEventListener("click",(function(){e._userLiked?e._deleteLikeCallback():e._addLikeCallback()})),this._isUserOwner()&&this._element.querySelector(".grid__delete-item").addEventListener("click",(function(){e._imageDeleteCallback(e._item,e._element)})),this._element}},{key:"_isUserOwner",value:function(){if(this._item.owner._id===this._userId)return!0}},{key:"_isLiked",value:function(){var e=this;return this._userLiked=this._item.likes.some((function(t){return t._id===e._userId})),this._userLiked}},{key:"toggleLike",value:function(e){this._likeButton.classList.toggle("grid__heart_activ"),this._likesNumber.textContent=e.likes.length,this._userLiked=!this._userLiked}},{key:"addLikeApi",value:function(e){this._addLikeCallback=e}},{key:"deleteLikeApi",value:function(e){this._deleteLikeCallback=e}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._removeButton(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._removeButton()):this._activateButton()}},{key:"_removeButton",value:function(){this._buttonElement.disabled=!0}},{key:"_activateButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__exit"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n,r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(){var e=n._getInputValues();n._apiCallback(e)},(o="_submitHandler")in(r=d(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__item"),n._apiCallback=t,n._submit=n._form.querySelector(".popup__submit"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){l(_(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._submitHandler)}},{key:"close",value:function(){l(_(u.prototype),"close",this).call(this),this._form.reset()}},{key:"preloader",value:function(){this._submit.textContent="Сохранение..."}},{key:"offPreloader",value:function(e){this._submit.textContent=e}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._aboutElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._aboutElement.textContent=e.about}},{key:"setAvatar",value:function(e){this._avatarElement.src=e}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageCaption=t._popup.querySelector(".popup-larger__caption"),t._image=t._popup.querySelector(".popup-larger__photo"),t}return t=u,(n=[{key:"open",value:function(e){this._imageCaption.textContent=e.name,this._image.src=e.link,this._image.setAttribute("alt",e.name),g(L(u.prototype),"open",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){return t.addItem(t.renderer(e)),e}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=document.querySelector("#name"),I=document.querySelector("#info"),q={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_visible"},B=document.querySelector(".profile__edit-button"),R=document.querySelector(".popup__edit-button"),T=document.querySelector(".profile__add-button"),x=document.querySelector(".popup__add-button"),A=document.querySelector(".popup__change-button"),N=document.querySelector(".profile__edit-avatar");function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function G(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}document.querySelector(".profile__avatar"),document.querySelector(".popup__submit_place_delete");var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._submit=t._popup.querySelector(".popup__submit"),t}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._callback=e}},{key:"setEventListeners",value:function(){U(z(u.prototype),"setEventListeners",this).call(this)}},{key:"removeButton",value:function(){this._submit.disabled=!0}},{key:"activateButton",value:function(){this._submit.disabled=!1}},{key:"submit",value:function(){this._submit.addEventListener("click",this._callback)}},{key:"close",value:function(){this._submit.removeEventListener("click",this._callback),U(z(u.prototype),"close",this).call(this)}},{key:"preloader",value:function(){this._submit.textContent="Удаление..."}},{key:"offPreloader",value:function(e){this._submit.textContent=e}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function M(e,t,n){return M=K()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Q(o,n.prototype),o},M.apply(null,arguments)}function K(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}var W,X=new t({url:"https://nomoreparties.co/v1/cohort-41/",headers:{authorization:"d60f88da-0c33-4cb7-a701-de2dcdca59ad","content-Type":"application/json"}});Promise.all([X.getInfo(),X.getPhotos()]).then((function(e){var t=e[0],n=e[1];re.setAvatar(t.avatar),re.setUserInfo(t),W=t._id,n.forEach((function(e){e.userId=t._id})),Y.rendererItems(n)})).catch((function(e){return console.log(e)}));var Y=new j(ce,".grid"),Z=new y("#change-avatar",(function(e){Z.preloader(),ie.resetValidation(),X.sendNewAvatar(e).then((function(e){ie.resetValidation(),re.setAvatar(e.avatar),Z.close()})).catch((function(e){return console.log(e)}))}));Z.setEventListeners(),N.addEventListener("click",(function(){Z.offPreloader("Сохранить"),Z.open()}));var $=new y("#edit_profile",(function(e){X.sendNewProfileInfo(e).then((function(e){re.setUserInfo(e),$.close()})).catch((function(e){return console.log(e)}))}));$.setEventListeners(),B.addEventListener("click",(function(){var e;oe.resetValidation(),e=re.getUserInfo(),C.value=e.name,I.value=e.about,$.offPreloader("Сохранить"),$.open()}));var ee=new y("#add_image",(function(e){ee.preloader(),ue.resetValidation(),X.addNewCard(e).then((function(e){ue.resetValidation();var t=e;t.userId=W,Y.addItem(ce(t)),ee.close()})).catch((function(e){return console.log(e)}))}));ee.setEventListeners(),T.addEventListener("click",(function(){ee.offPreloader("Создать"),ee.open()}));var te=new F("#delete-image");te.setEventListeners();var ne=new O(".popup-larger");ne.setEventListeners();var re=new v({nameSelector:".profile__name",aboutSelector:".profile__text",avatarSelector:".profile__avatar"}),oe=new i(q,R);oe.enableValidation();var ie=new i(q,A);ie.enableValidation();var ue=new i(q,x);function ae(e,t){te.setSubmitAction((function(){te.removeButton(),te.preloader(),X.deleteImage(e,t).then((function(){t.remove(),t=null,te.close()})).catch((function(e){return console.log(e)}))})),te.activateButton(),te.offPreloader("Да"),te.open(),te.submit()}function ce(e){var t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return M(r,t)}(e,".template",se,ae);return t.deleteLikeApi((function(){X.deleteLike(e).then((function(e){t.toggleLike(e)})).catch((function(e){return console.log(e)}))})),t.addLikeApi((function(){X.addLike(e).then((function(e){t.toggleLike(e)})).catch((function(e){return console.log(e)}))})),t.createCard()}function se(e){ne.open(e)}ue.enableValidation()})();