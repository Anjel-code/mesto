(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e.name,this.link=e.link,this.countLikes=e.likes,this._handleLikeCard=e.handleLikeCard,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteClick=e.handleDeleteClick,this._isOwner=e.owner,this._Id=e._id}var n,o;return n=t,(o=[{key:"_getCardData",value:function(){var e=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0);return this._photo=e.querySelector(".element__image-click"),this._like=e.querySelector(".element__like"),this._image=e.querySelector(".element__image"),this._removeButton=e.querySelector(".element__delete-button"),this._elementName=e.querySelector(".element__name"),e}},{key:"createCard",value:function(){return this._card=this._getCardData(),this._setEventListeners(),this._card.querySelector(".element__like-counter").textContent=this.countLikes,this._image.src=this.link,this._image.alt=this.name,this._elementName.textContent=this.name,this._card}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){return e._handleLikeCard(e._Id,e._card)})),this._removeButton.addEventListener("click",(function(){e._handleDeleteClick()})),this._photo.addEventListener("click",(function(){e._handleCardClick(e)})),this._isOwner&&(this._buttonDelete=this._card.querySelector(".element__delete-button"),this._buttonDelete.classList.add("element__delete-button_active"),this._buttonDelete.addEventListener("click",(function(){e._handleDeleteClick(e._card,e._Id)})))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=o,this._renderer=r,this._container=document.querySelector(n)}var t,o;return t=e,(o=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitBtnSelector=t.submitButtonSelector,this._inactiveBtnClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitBtnSelector)}var t,n;return t=e,(n=[{key:"_showErrorMessage",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideErrorMessage",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_determineValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveBtnClass)):(this._buttonElement.removeAttribute("disabled",!0),this._buttonElement.classList.remove(this._inactiveBtnClass))}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._determineValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideErrorMessage(t)}))}}])&&r(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this.escClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this.escClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this.escClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("click",(function(t){t.target.classList.contains("popup__overlay")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&a(t.prototype,n),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},f(e,t,n||e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(r){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e){var t=this.popup.querySelector(".popup-image__element");t.src=e.src,t.alt=e.alt,this.popup.querySelector(".popup-image__title").textContent=e.caption,f(d(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),a}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},v(e,t,n||e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(r){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formSubmitter=t,n._inputs=n.popup.querySelectorAll(".popup__input"),n._inputValues={},n._popupForm=n.popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;v(g(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmitter(e._getInputValues()),e.close()}))}},{key:"close",value:function(){v(g(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&m(t.prototype,n),a}(c);function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.profileName),this._info=document.querySelector(t.profileJob)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._name.textContent,job:this._info.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.job}}])&&C(t.prototype,n),e}();function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&w(t.prototype,n),e}(),L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},O=document.querySelector(".popup__form-add"),P=document.querySelector(".popup__form-edit"),q=document.querySelector(".popup__form-avatar"),I=document.querySelector(".profile__button-add"),R=document.querySelector(".profile__button-edit"),D=document.querySelector(".profile__avatar-button"),T=P.querySelector(".popup__submit-button"),x=O.querySelector(".popup__submit-button"),B=q.querySelector(".popup__submit-button"),U=document.querySelector(".popup__input_info_name"),V=document.querySelector(".popup__input_info_job"),A=document.querySelector(".profile__avatar");function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t,n){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},M(e,t,n||e)}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function F(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(o);if(r){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitDeleteCard=t,n._buttonDelete=n.popup.querySelector(".popup__accept-delete"),n}return t=a,(n=[{key:"open",value:function(e,t){M(H(a.prototype),"open",this).call(this),this._card=e,this._cardId=t}},{key:"setEventListeners",value:function(){var e=this;M(H(a.prototype),"setEventListeners",this).call(this),this._buttonDelete.addEventListener("click",(function(){return e._submitDeleteCard(e._card,e._cardId)}))}}])&&N(t.prototype,n),a}(c),K=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-28",headers:"56e4c833-591d-4990-9d0a-38f57698d34e"}),Q=new o({items:[],renderer:function(e){Q.setItem(te({name:e.name,link:e.link,likes:e.likes.length,handleLikeCard:oe,_id:e._id}))}},".elements__container");K.getInitialCards().then((function(e){var t=e;Q.renderItems(t)})).catch((function(e){console.log(e)}));var W=new _(".popup-image"),X=new i(L,O),Y=new i(L,P),Z=new i(L,q),$=new S({profileName:".profile__name",profileJob:".profile__job"}),ee=function(e){W.open({src:e.link,alt:e.name,caption:e.name})};function te(e){return new t(e,".card-default",ee).createCard()}var ne=function(e,t){ce.open(e,t)},oe=function(e,t){var n=t.querySelector(".element__like"),o=t.querySelector(".element__like-counter");n.classList.contains("element__liked")?(n.classList.remove("element__liked"),K.removeLike(e).then((function(e){o.textContent=e.likes.length})).catch((function(e){console.log(e)}))):(n.classList.add("element__liked"),K.addLike(e).then((function(e){o.textContent=e.likes.length})).catch((function(e){console.log(e)})))},re=new E(".popup-add",(function(e){x.textContent="Создание...",K.addCard({name:e.name,link:e.link}).then((function(e){Q.setItem(te({name:e.name,link:e.link,likes:e.likes.length,handleDeleteClick:ne,handleLikeCard:oe,owner:!0,_id:e._id}))})).catch((function(e){console.log(e)})).finally((function(){x.textContent="Создать"})),X.resetValidation()})),ie=new E(".popup-edit",(function(e){T.textContent="Сохранение...",K.patchUserInfo({name:e.name,about:e.job}).then((function(e){$.setUserInfo({name:e.name,job:e.about})})).catch((function(e){console.log(e)})).finally((function(){T.textContent="Сохранить"}))})),ae=new E(".popup-avatar",(function(e){B.textContent="Сохранение...",K.setAvatar(e.link).then((function(e){$.setUserInfo({name:e.name,job:e.about})})).catch((function(e){console.log(e)})).finally((function(){B.textContent="Сохранить"})),A.src=e.link})),ce=new G(".popup-delete",(function(e,t){K.deleteCard(t).catch((function(e){console.log(e)})),e.remove(),ce.close()}));W.setEventListeners(),re.setEventListeners(),ie.setEventListeners(),ae.setEventListeners(),ce.setEventListeners(),X.enableValidation(),Y.enableValidation(),Z.enableValidation(),I.addEventListener("click",(function(){re.open(),X.resetValidation()})),R.addEventListener("click",(function(){var e=$.getUserInfo();U.value=e.name,V.value=e.job,Y.resetValidation(),ie.open()})),D.addEventListener("click",(function(){ae.open(),Z.resetValidation()}))})();