/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!function (n, e, s) { function o(n, e) { return typeof n === e } function a() { var n, e, s, a, i, l, r; for (var c in f) if (f.hasOwnProperty(c)) { if (n = [], e = f[c], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (s = 0; s < e.options.aliases.length; s++)n.push(e.options.aliases[s].toLowerCase()); for (a = o(e.fn, "function") ? e.fn() : e.fn, i = 0; i < n.length; i++)l = n[i], r = l.split("."), 1 === r.length ? Modernizr[r[0]] = a : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = a), t.push((a ? "" : "no-") + r.join("-")) } } function i(n) { var e = r.className, s = Modernizr._config.classPrefix || ""; if (c && (e = e.baseVal), Modernizr._config.enableJSClass) { var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)"); e = e.replace(o, "$1" + s + "js$2") } Modernizr._config.enableClasses && (e += " " + s + n.join(" " + s), c ? r.className.baseVal = e : r.className = e) } var t = [], f = [], l = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (n, e) { var s = this; setTimeout(function () { e(s[n]) }, 0) }, addTest: function (n, e, s) { f.push({ name: n, fn: e, options: s }) }, addAsyncTest: function (n) { f.push({ name: null, fn: n }) } }, Modernizr = function () { }; Modernizr.prototype = l, Modernizr = new Modernizr; var r = e.documentElement, c = "svg" === r.nodeName.toLowerCase(); a(), i(t), delete l.addTest, delete l.addAsyncTest; for (var u = 0; u < Modernizr._q.length; u++)Modernizr._q[u](); n.Modernizr = Modernizr }(window, document);

!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],e);else{var n="object"==typeof exports?e(require("jquery")):e(t.jQuery);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(n){return function(n){var i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}({"./js/entries/foundation.js":function(t,e,n){"use strict";n.r(e);var i=n("jquery"),o=n.n(i),s=n("./js/foundation.core.js");n.d(e,"Foundation",function(){return s.Foundation});var a=n("./js/foundation.core.utils.js");n.d(e,"CoreUtils",function(){return a});var r=n("./js/foundation.util.box.js");n.d(e,"Box",function(){return r.Box});var l=n("./js/foundation.util.imageLoader.js");n.d(e,"onImagesLoaded",function(){return l.onImagesLoaded});var u=n("./js/foundation.util.keyboard.js");n.d(e,"Keyboard",function(){return u.Keyboard});var c=n("./js/foundation.util.mediaQuery.js");n.d(e,"MediaQuery",function(){return c.MediaQuery});var d=n("./js/foundation.util.motion.js");n.d(e,"Motion",function(){return d.Motion});var h=n("./js/foundation.util.nest.js");n.d(e,"Nest",function(){return h.Nest});var f=n("./js/foundation.util.timer.js");n.d(e,"Timer",function(){return f.Timer});var p=n("./js/foundation.util.touch.js");n.d(e,"Touch",function(){return p.Touch});var m=n("./js/foundation.util.triggers.js");n.d(e,"Triggers",function(){return m.Triggers});var g=n("./js/foundation.abide.js");n.d(e,"Abide",function(){return g.Abide});var v=n("./js/foundation.accordion.js");n.d(e,"Accordion",function(){return v.Accordion});var y=n("./js/foundation.accordionMenu.js");n.d(e,"AccordionMenu",function(){return y.AccordionMenu});var b=n("./js/foundation.drilldown.js");n.d(e,"Drilldown",function(){return b.Drilldown});var w=n("./js/foundation.dropdown.js");n.d(e,"Dropdown",function(){return w.Dropdown});var _=n("./js/foundation.dropdownMenu.js");n.d(e,"DropdownMenu",function(){return _.DropdownMenu});var $=n("./js/foundation.equalizer.js");n.d(e,"Equalizer",function(){return $.Equalizer});var j=n("./js/foundation.interchange.js");n.d(e,"Interchange",function(){return j.Interchange});var k=n("./js/foundation.magellan.js");n.d(e,"Magellan",function(){return k.Magellan});var O=n("./js/foundation.offcanvas.js");n.d(e,"OffCanvas",function(){return O.OffCanvas});var C=n("./js/foundation.orbit.js");n.d(e,"Orbit",function(){return C.Orbit});var z=n("./js/foundation.responsiveMenu.js");n.d(e,"ResponsiveMenu",function(){return z.ResponsiveMenu});var T=n("./js/foundation.responsiveToggle.js");n.d(e,"ResponsiveToggle",function(){return T.ResponsiveToggle});var S=n("./js/foundation.reveal.js");n.d(e,"Reveal",function(){return S.Reveal});var P=n("./js/foundation.slider.js");n.d(e,"Slider",function(){return P.Slider});var E=n("./js/foundation.smoothScroll.js");n.d(e,"SmoothScroll",function(){return E.SmoothScroll});var A=n("./js/foundation.sticky.js");n.d(e,"Sticky",function(){return A.Sticky});var x=n("./js/foundation.tabs.js");n.d(e,"Tabs",function(){return x.Tabs});var L=n("./js/foundation.toggler.js");n.d(e,"Toggler",function(){return L.Toggler});var R=n("./js/foundation.tooltip.js");n.d(e,"Tooltip",function(){return R.Tooltip});var M=n("./js/foundation.responsiveAccordionTabs.js");n.d(e,"ResponsiveAccordionTabs",function(){return M.ResponsiveAccordionTabs}),s.Foundation.addToJquery(o.a),s.Foundation.rtl=a.rtl,s.Foundation.GetYoDigits=a.GetYoDigits,s.Foundation.transitionend=a.transitionend,s.Foundation.RegExpEscape=a.RegExpEscape,s.Foundation.onLoad=a.onLoad,s.Foundation.Box=r.Box,s.Foundation.onImagesLoaded=l.onImagesLoaded,s.Foundation.Keyboard=u.Keyboard,s.Foundation.MediaQuery=c.MediaQuery,s.Foundation.Motion=d.Motion,s.Foundation.Move=d.Move,s.Foundation.Nest=h.Nest,s.Foundation.Timer=f.Timer,p.Touch.init(o.a),m.Triggers.init(o.a,s.Foundation),c.MediaQuery._init(),s.Foundation.plugin(g.Abide,"Abide"),s.Foundation.plugin(v.Accordion,"Accordion"),s.Foundation.plugin(y.AccordionMenu,"AccordionMenu"),s.Foundation.plugin(b.Drilldown,"Drilldown"),s.Foundation.plugin(w.Dropdown,"Dropdown"),s.Foundation.plugin(_.DropdownMenu,"DropdownMenu"),s.Foundation.plugin($.Equalizer,"Equalizer"),s.Foundation.plugin(j.Interchange,"Interchange"),s.Foundation.plugin(k.Magellan,"Magellan"),s.Foundation.plugin(O.OffCanvas,"OffCanvas"),s.Foundation.plugin(C.Orbit,"Orbit"),s.Foundation.plugin(z.ResponsiveMenu,"ResponsiveMenu"),s.Foundation.plugin(T.ResponsiveToggle,"ResponsiveToggle"),s.Foundation.plugin(S.Reveal,"Reveal"),s.Foundation.plugin(P.Slider,"Slider"),s.Foundation.plugin(E.SmoothScroll,"SmoothScroll"),s.Foundation.plugin(A.Sticky,"Sticky"),s.Foundation.plugin(x.Tabs,"Tabs"),s.Foundation.plugin(L.Toggler,"Toggler"),s.Foundation.plugin(R.Tooltip,"Tooltip"),s.Foundation.plugin(M.ResponsiveAccordionTabs,"ResponsiveAccordionTabs"),e.default=s.Foundation},"./js/foundation.abide.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Abide",function(){return h});var i=n("jquery"),c=n.n(i),s=n("./js/foundation.core.plugin.js"),a=n("./js/foundation.core.utils.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,u(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(n,s["Plugin"]),e=n,(i=[{key:"_setup",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.$element=t,this.options=c.a.extend(!0,{},n.defaults,this.$element.data(),e),this.className="Abide",this._init()}},{key:"_init",value:function(){var n=this;this.$inputs=c.a.merge(this.$element.find("input").not("[type=submit]"),this.$element.find("textarea, select"));var t=this.$element.find("[data-abide-error]");this.options.a11yAttributes&&(this.$inputs.each(function(t,e){return n.addA11yAttributes(c()(e))}),t.each(function(t,e){return n.addGlobalErrorA11yAttributes(c()(e))})),this._events()}},{key:"_events",value:function(){var e=this;this.$element.off(".abide").on("reset.zf.abide",function(){e.resetForm()}).on("submit.zf.abide",function(){return e.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(t){e.validateInput(c()(t.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(t){e.validateInput(c()(t.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(t){e.validateInput(c()(t.target))})}},{key:"_reflow",value:function(){this._init()}},{key:"requiredCheck",value:function(t){if(!t.attr("required"))return!0;var e=!0;switch(t[0].type){case"checkbox":e=t[0].checked;break;case"select":case"select-one":case"select-multiple":var n=t.find("option:selected");n.length&&n.val()||(e=!1);break;default:t.val()&&t.val().length||(e=!1)}return e}},{key:"findFormError",value:function(t){var e=t[0].id,n=t.siblings(this.options.formErrorSelector);return n.length||(n=t.parent().find(this.options.formErrorSelector)),e&&(n=n.add(this.$element.find('[data-form-error-for="'.concat(e,'"]')))),n}},{key:"findLabel",value:function(t){var e=t[0].id,n=this.$element.find('label[for="'.concat(e,'"]'));return n.length?n:t.closest("label")}},{key:"findRadioLabels",value:function(t){var o=this,e=t.map(function(t,e){var n=e.id,i=o.$element.find('label[for="'.concat(n,'"]'));return i.length||(i=c()(e).closest("label")),i[0]});return c()(e)}},{key:"addErrorClasses",value:function(t){var e=this.findLabel(t),n=this.findFormError(t);e.length&&e.addClass(this.options.labelErrorClass),n.length&&n.addClass(this.options.formErrorClass),t.addClass(this.options.inputErrorClass).attr({"data-invalid":"","aria-invalid":!0})}},{key:"addA11yAttributes",value:function(t){var e=this.findFormError(t),n=e.filter("label"),i=e.first();if(e.length){if(void 0===t.attr("aria-describedby")){var o=i.attr("id");void 0===o&&(o=Object(a.GetYoDigits)(6,"abide-error"),i.attr("id",o)),t.attr("aria-describedby",o)}if(n.filter("[for]").length<n.length){var s=t.attr("id");void 0===s&&(s=Object(a.GetYoDigits)(6,"abide-input"),t.attr("id",s)),n.each(function(t,e){var n=c()(e);void 0===n.attr("for")&&n.attr("for",s)})}e.each(function(t,e){var n=c()(e);void 0===n.attr("role")&&n.attr("role","alert")}).end()}}},{key:"addGlobalErrorA11yAttributes",value:function(t){void 0===t.attr("aria-live")&&t.attr("aria-live",this.options.a11yErrorLevel)}},{key:"removeRadioErrorClasses",value:function(t){var e=this.$element.find(':radio[name="'.concat(t,'"]')),n=this.findRadioLabels(e),i=this.findFormError(e);n.length&&n.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),e.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}},{key:"removeErrorClasses",value:function(t){if("radio"==t[0].type)return this.removeRadioErrorClasses(t.attr("name"));var e=this.findLabel(t),n=this.findFormError(t);e.length&&e.removeClass(this.options.labelErrorClass),n.length&&n.removeClass(this.options.formErrorClass),t.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}},{key:"validateInput",value:function(t){var e=this.requiredCheck(t),n=!1,i=!0,o=t.attr("data-validator"),s=!0;if(t.is("[data-abide-ignore]")||t.is('[type="hidden"]')||t.is("[disabled]"))return!0;switch(t[0].type){case"radio":n=this.validateRadio(t.attr("name"));break;case"checkbox":n=e;break;case"select":case"select-one":case"select-multiple":n=e;break;default:n=this.validateText(t)}o&&(i=this.matchValidation(t,o,t.attr("required"))),t.attr("data-equalto")&&(s=this.options.validators.equalTo(t));var a=-1===[e,n,i,s].indexOf(!1),r=(a?"valid":"invalid")+".zf.abide";if(a){var l=this.$element.find('[data-equalto="'.concat(t.attr("id"),'"]'));if(l.length){var u=this;l.each(function(){c()(this).val()&&u.validateInput(c()(this))})}}return this[a?"removeErrorClasses":"addErrorClasses"](t),t.trigger(r,[t]),a}},{key:"validateForm",value:function(){var i=this,t=[],e=this;this.$inputs.each(function(){t.push(e.validateInput(c()(this)))});var o=-1===t.indexOf(!1);return this.$element.find("[data-abide-error]").each(function(t,e){var n=c()(e);i.options.a11yAttributes&&i.addGlobalErrorA11yAttributes(n),n.css("display",o?"none":"block")}),this.$element.trigger((o?"formvalid":"forminvalid")+".zf.abide",[this.$element]),o}},{key:"validateText",value:function(t,e){e=e||t.attr("pattern")||t.attr("type");var n=t.val(),i=!1;return n.length?i=this.options.patterns.hasOwnProperty(e)?this.options.patterns[e].test(n):e===t.attr("type")||new RegExp(e).test(n):t.prop("required")||(i=!0),i}},{key:"validateRadio",value:function(t){var e=this.$element.find(':radio[name="'.concat(t,'"]')),n=!1,i=!1;return e.each(function(t,e){c()(e).attr("required")&&(i=!0)}),i||(n=!0),n||e.each(function(t,e){c()(e).prop("checked")&&(n=!0)}),n}},{key:"matchValidation",value:function(e,t,n){var i=this;return n=!!n,-1===t.split(" ").map(function(t){return i.options.validators[t](e,n,e.parent())}).indexOf(!1)}},{key:"resetForm",value:function(){var t=this.$element,e=this.options;c()(".".concat(e.labelErrorClass),t).not("small").removeClass(e.labelErrorClass),c()(".".concat(e.inputErrorClass),t).not("small").removeClass(e.inputErrorClass),c()("".concat(e.formErrorSelector,".").concat(e.formErrorClass)).removeClass(e.formErrorClass),t.find("[data-abide-error]").css("display","none"),c()(":input",t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({"data-invalid":null,"aria-invalid":null}),c()(":input:radio",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),c()(":input:checkbox",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),t.trigger("formreset.zf.abide",[t])}},{key:"_destroy",value:function(){var t=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){t.removeErrorClasses(c()(this))})}}])&&r(e.prototype,i),o&&r(e,o),n}();h.defaults={validateOn:"fieldChange",labelErrorClass:"is-invalid-label",inputErrorClass:"is-invalid-input",formErrorSelector:".form-error",formErrorClass:"is-visible",a11yAttributes:!0,a11yErrorLevel:"assertive",liveValidate:!1,validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,website:{test:function(t){return h.defaults.patterns.domain.test(t)||h.defaults.patterns.url.test(t)}}},validators:{equalTo:function(t,e,n){return c()("#".concat(t.attr("data-equalto"))).val()===t.val()}}}},"./js/foundation.accordion.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Accordion",function(){return f});var i=n("jquery"),a=n.n(i),r=n("./js/foundation.core.utils.js"),s=n("./js/foundation.util.keyboard.js"),l=n("./js/foundation.core.plugin.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,d(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(n,l["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=a.a.extend({},n.defaults,this.$element.data(),e),this.className="Accordion",this._init(),s.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}},{key:"_init",value:function(){var o=this;this._isInitializing=!0,this.$element.attr("role","tablist"),this.$tabs=this.$element.children("[data-accordion-item]"),this.$tabs.each(function(t,e){var n=a()(e),i=n.children("[data-tab-content]"),o=i[0].id||Object(r.GetYoDigits)(6,"accordion"),s=e.id?"".concat(e.id,"-label"):"".concat(o,"-label");n.find("a:first").attr({"aria-controls":o,role:"tab",id:s,"aria-expanded":!1,"aria-selected":!1}),i.attr({role:"tabpanel","aria-labelledby":s,"aria-hidden":!0,id:o})});var t=this.$element.find(".is-active").children("[data-tab-content]");t.length&&(this._initialAnchor=t.prev("a").attr("href"),this._openSingleTab(t)),this._checkDeepLink=function(){var t=window.location.hash;if(!t.length){if(o._isInitializing)return;o._initialAnchor&&(t=o._initialAnchor)}var e=t&&a()(t),n=t&&o.$element.find('[href$="'.concat(t,'"]')),i=!(!e.length||!n.length);e&&n&&n.length?n.parent("[data-accordion-item]").hasClass("is-active")||o._openSingleTab(e):o._closeAllTabs(),i&&(o.options.deepLinkSmudge&&Object(r.onLoad)(a()(window),function(){var t=o.$element.offset();a()("html, body").animate({scrollTop:t.top},o.options.deepLinkSmudgeDelay)}),o.$element.trigger("deeplink.zf.accordion",[n,e]))},this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}},{key:"_events",value:function(){var i=this;this.$tabs.each(function(){var e=a()(this),n=e.children("[data-tab-content]");n.length&&e.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(t){t.preventDefault(),i.toggle(n)}).on("keydown.zf.accordion",function(t){s.Keyboard.handleKey(t,"Accordion",{toggle:function(){i.toggle(n)},next:function(){var t=e.next().find("a").focus();i.options.multiExpand||t.trigger("click.zf.accordion")},previous:function(){var t=e.prev().find("a").focus();i.options.multiExpand||t.trigger("click.zf.accordion")},handled:function(){t.preventDefault(),t.stopPropagation()}})})}),this.options.deepLink&&a()(window).on("hashchange",this._checkDeepLink)}},{key:"toggle",value:function(t){if(t.closest("[data-accordion]").is("[disabled]"))console.info("Cannot toggle an accordion that is disabled.");else if(t.parent().hasClass("is-active")?this.up(t):this.down(t),this.options.deepLink){var e=t.prev("a").attr("href");this.options.updateHistory?history.pushState({},"",e):history.replaceState({},"",e)}}},{key:"down",value:function(t){t.closest("[data-accordion]").is("[disabled]")?console.info("Cannot call down on an accordion that is disabled."):this.options.multiExpand?this._openTab(t):this._openSingleTab(t)}},{key:"up",value:function(t){if(this.$element.is("[disabled]"))console.info("Cannot call up on an accordion that is disabled.");else{var e=t.parent();if(e.hasClass("is-active")){var n=e.siblings();(this.options.allowAllClosed||n.hasClass("is-active"))&&this._closeTab(t)}}}},{key:"_openSingleTab",value:function(t){var e=this.$element.children(".is-active").children("[data-tab-content]");e.length&&this._closeTab(e.not(t)),this._openTab(t)}},{key:"_openTab",value:function(t){var e=this,n=t.parent(),i=t.attr("aria-labelledby");t.attr("aria-hidden",!1),n.addClass("is-active"),a()("#".concat(i)).attr({"aria-expanded":!0,"aria-selected":!0}),t.slideDown(this.options.slideSpeed,function(){e.$element.trigger("down.zf.accordion",[t])})}},{key:"_closeTab",value:function(t){var e=this,n=t.parent(),i=t.attr("aria-labelledby");t.attr("aria-hidden",!0),n.removeClass("is-active"),a()("#".concat(i)).attr({"aria-expanded":!1,"aria-selected":!1}),t.slideUp(this.options.slideSpeed,function(){e.$element.trigger("up.zf.accordion",[t])})}},{key:"_closeAllTabs",value:function(){var t=this.$element.children(".is-active").children("[data-tab-content]");t.length&&this._closeTab(t)}},{key:"_destroy",value:function(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),this.options.deepLink&&a()(window).off("hashchange",this._checkDeepLink)}}])&&u(e.prototype,i),o&&u(e,o),n}();f.defaults={slideSpeed:250,multiExpand:!1,allowAllClosed:!1,deepLink:!1,deepLinkSmudge:!1,deepLinkSmudgeDelay:300,updateHistory:!1}},"./js/foundation.accordionMenu.js":function(t,e,n){"use strict";n.r(e),n.d(e,"AccordionMenu",function(){return p});var i=n("jquery"),r=n.n(i),l=n("./js/foundation.util.keyboard.js"),a=n("./js/foundation.util.nest.js"),u=n("./js/foundation.core.utils.js"),s=n("./js/foundation.core.plugin.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,h(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,s["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=r.a.extend({},n.defaults,this.$element.data(),e),this.className="AccordionMenu",this._init(),l.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}},{key:"_init",value:function(){a.Nest.Feather(this.$element,"accordion");var s=this;this.$element.find("[data-submenu]").not(".is-active").slideUp(0),this.$element.attr({role:"tree","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var t=this.id||Object(u.GetYoDigits)(6,"acc-menu-link"),e=r()(this),n=e.children("[data-submenu]"),i=n[0].id||Object(u.GetYoDigits)(6,"acc-menu"),o=n.hasClass("is-active");s.options.parentLink&&e.children("a").clone().prependTo(n).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');s.options.submenuToggle?(e.addClass("has-submenu-toggle"),e.children("a").after('<button id="'+t+'" class="submenu-toggle" aria-controls="'+i+'" aria-expanded="'+o+'" title="'+s.options.submenuToggleText+'"><span class="submenu-toggle-text">'+s.options.submenuToggleText+"</span></button>")):e.attr({"aria-controls":i,"aria-expanded":o,id:t}),n.attr({"aria-labelledby":t,"aria-hidden":!o,role:"group",id:i})}),this.$element.find("li").attr({role:"treeitem"});var t=this.$element.find(".is-active");if(t.length){s=this;t.each(function(){s.down(r()(this))})}this._events()}},{key:"_events",value:function(){var a=this;this.$element.find("li").each(function(){var e=r()(this).children("[data-submenu]");e.length&&(a.options.submenuToggle?r()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){a.toggle(e)}):r()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){t.preventDefault(),a.toggle(e)}))}).on("keydown.zf.accordionmenu",function(e){var n,i,o=r()(this),s=o.parent("ul").children("li"),t=o.children("[data-submenu]");s.each(function(t){if(r()(this).is(o))return n=s.eq(Math.max(0,t-1)).find("a").first(),i=s.eq(Math.min(t+1,s.length-1)).find("a").first(),r()(this).children("[data-submenu]:visible").length&&(i=o.find("li:first-child").find("a").first()),r()(this).is(":first-child")?n=o.parents("li").first().find("a").first():n.parents("li").first().children("[data-submenu]:visible").length&&(n=n.parents("li").find("li:last-child").find("a").first()),void(r()(this).is(":last-child")&&(i=o.parents("li").first().next("li").find("a").first()))}),l.Keyboard.handleKey(e,"AccordionMenu",{open:function(){t.is(":hidden")&&(a.down(t),t.find("li").first().find("a").first().focus())},close:function(){t.length&&!t.is(":hidden")?a.up(t):o.parent("[data-submenu]").length&&(a.up(o.parent("[data-submenu]")),o.parents("li").first().find("a").first().focus())},up:function(){return n.focus(),!0},down:function(){return i.focus(),!0},toggle:function(){return!a.options.submenuToggle&&(o.children("[data-submenu]").length?(a.toggle(o.children("[data-submenu]")),!0):void 0)},closeAll:function(){a.hideAll()},handled:function(t){t&&e.preventDefault(),e.stopImmediatePropagation()}})})}},{key:"hideAll",value:function(){this.up(this.$element.find("[data-submenu]"))}},{key:"showAll",value:function(){this.down(this.$element.find("[data-submenu]"))}},{key:"toggle",value:function(t){t.is(":animated")||(t.is(":hidden")?this.down(t):this.up(t))}},{key:"down",value:function(t){var e=this;if(!this.options.multiOpen){var n=t.parentsUntil(this.$element).add(t).add(t.find(".is-active")),i=this.$element.find(".is-active").not(n);this.up(i)}t.addClass("is-active").attr({"aria-hidden":!1}),this.options.submenuToggle?t.prev(".submenu-toggle").attr({"aria-expanded":!0}):t.parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),t.slideDown(this.options.slideSpeed,function(){e.$element.trigger("down.zf.accordionMenu",[t])})}},{key:"up",value:function(t){var e=this,n=t.find("[data-submenu]"),i=t.add(n);n.slideUp(0),i.removeClass("is-active").attr("aria-hidden",!0),this.options.submenuToggle?i.prev(".submenu-toggle").attr("aria-expanded",!1):i.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1),t.slideUp(this.options.slideSpeed,function(){e.$element.trigger("up.zf.accordionMenu",[t])})}},{key:"_destroy",value:function(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),this.$element.find("[data-is-parent-link]").detach(),this.options.submenuToggle&&(this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"),this.$element.find(".submenu-toggle").remove()),a.Nest.Burn(this.$element,"accordion")}}])&&c(e.prototype,i),o&&c(e,o),n}();p.defaults={parentLink:!1,slideSpeed:250,submenuToggle:!1,submenuToggleText:"Toggle menu",multiOpen:!0}},"./js/foundation.core.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Foundation",function(){return l});var i=n("jquery"),s=n.n(i),o=n("./js/foundation.core.utils.js"),a=n("./js/foundation.util.mediaQuery.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l={version:"6.5.3",_plugins:{},_uuids:[],plugin:function(t,e){var n=e||u(t),i=c(n);this._plugins[i]=this[n]=t},registerPlugin:function(t,e){var n=e?c(e):u(t.constructor).toLowerCase();t.uuid=Object(o.GetYoDigits)(6,n),t.$element.attr("data-".concat(n))||t.$element.attr("data-".concat(n),t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t),t.$element.trigger("init.zf.".concat(n)),this._uuids.push(t.uuid)},unregisterPlugin:function(t){var e=c(u(t.$element.data("zfPlugin").constructor));for(var n in this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-".concat(e)).removeData("zfPlugin").trigger("destroyed.zf.".concat(e)),t)t[n]=null},reInit:function(t){var e=t instanceof s.a;try{if(e)t.each(function(){s()(this).data("zfPlugin")._init()});else{var n=r(t),i=this;({object:function(t){t.forEach(function(t){t=c(t),s()("[data-"+t+"]").foundation("_init")})},string:function(){t=c(t),s()("[data-"+t+"]").foundation("_init")},undefined:function(){this.object(Object.keys(i._plugins))}})[n](t)}}catch(t){console.error(t)}finally{return t}},reflow:function(i,t){void 0===t?t=Object.keys(this._plugins):"string"==typeof t&&(t=[t]);var o=this;s.a.each(t,function(t,e){var n=o._plugins[e];s()(i).find("[data-"+e+"]").addBack("[data-"+e+"]").each(function(){var t=s()(this),i={};if(t.data("zfPlugin"))console.warn("Tried to initialize "+e+" on an element that already has a Foundation plugin.");else{if(t.attr("data-options"))t.attr("data-options").split(";").forEach(function(t,e){var n=t.split(":").map(function(t){return t.trim()});n[0]&&(i[n[0]]=function(t){{if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(1*t))return parseFloat(t)}return t}(n[1]))});try{t.data("zfPlugin",new n(s()(this),i))}catch(t){console.error(t)}finally{return}}})})},getFnName:u,addToJquery:function(s){return s.fn.foundation=function(n){var t=r(n),e=s(".no-js");if(e.length&&e.removeClass("no-js"),"undefined"===t)a.MediaQuery._init(),l.reflow(this);else{if("string"!==t)throw new TypeError("We're sorry, ".concat(t," is not a valid parameter. You must use a string representing the method you wish to invoke."));var i=Array.prototype.slice.call(arguments,1),o=this.data("zfPlugin");if(void 0===o||void 0===o[n])throw new ReferenceError("We're sorry, '"+n+"' is not an available method for "+(o?u(o):"this element")+".");1===this.length?o[n].apply(o,i):this.each(function(t,e){o[n].apply(s(e).data("zfPlugin"),i)})}return this},s}};function u(t){if(void 0!==Function.prototype.name)return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name;var e=/function\s([^(]{1,})\(/.exec(t.toString());return e&&1<e.length?e[1].trim():""}function c(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}l.util={throttle:function(n,i){var o=null;return function(){var t=this,e=arguments;null===o&&(o=setTimeout(function(){n.apply(t,e),o=null},i))}}},window.Foundation=l,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,i=function(){},o=function(){return n.apply(this instanceof i?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(i.prototype=this.prototype),o.prototype=new i,o})},"./js/foundation.core.plugin.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Plugin",function(){return i});n("jquery");var o=n("./js/foundation.core.utils.js");function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function i(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this._setup(t,e);var n=r(this);this.uuid=Object(o.GetYoDigits)(6,n),this.$element.attr("data-".concat(n))||this.$element.attr("data-".concat(n),this.uuid),this.$element.data("zfPlugin")||this.$element.data("zfPlugin",this),this.$element.trigger("init.zf.".concat(n))}var t,e,n;return t=i,(e=[{key:"destroy",value:function(){this._destroy();var t=r(this);for(var e in this.$element.removeAttr("data-".concat(t)).removeData("zfPlugin").trigger("destroyed.zf.".concat(t)),this)this[e]=null}}])&&s(t.prototype,e),n&&s(t,n),i}();function a(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function r(t){return void 0!==t.constructor.name?a(t.constructor.name):a(t.className)}},"./js/foundation.core.utils.js":function(t,e,n){"use strict";n.r(e),n.d(e,"rtl",function(){return o}),n.d(e,"GetYoDigits",function(){return s}),n.d(e,"RegExpEscape",function(){return a}),n.d(e,"transitionend",function(){return r}),n.d(e,"onLoad",function(){return u}),n.d(e,"ignoreMousedisappear",function(){return c});var i=n("jquery"),l=n.n(i);function o(){return"rtl"===l()("html").attr("dir")}function s(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-".concat(e):"")}function a(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function r(t){var e,n={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},i=document.createElement("div");for(var o in n)void 0!==i.style[o]&&(e=n[o]);return e||(e=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}function u(t,e){var n="complete"===document.readyState,i=(n?"_didLoad":"load")+".zf.util.onLoad",o=function(){return t.triggerHandler(i)};return t&&(e&&t.one(i,e),n?setTimeout(o):l()(window).one("load",o)),i}function c(s){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=t.ignoreLeaveWindow,a=void 0!==e&&e,n=t.ignoreReappear,r=void 0!==n&&n;return function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=s.bind.apply(s,[this,e].concat(n));if(null!==e.relatedTarget)return o();setTimeout(function(){if(!a&&document.hasFocus&&!document.hasFocus())return o();r||l()(document).one("mouseenter",function(t){l()(e.currentTarget).has(t.target).length||(e.relatedTarget=t.target,o())})},0)}}},"./js/foundation.drilldown.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Drilldown",function(){return m});var i=n("jquery"),a=n.n(i),r=n("./js/foundation.util.keyboard.js"),s=n("./js/foundation.util.nest.js"),l=n("./js/foundation.core.utils.js"),u=n("./js/foundation.util.box.js"),c=n("./js/foundation.core.plugin.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,f(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,c["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=a.a.extend({},n.defaults,this.$element.data(),e),this.className="Drilldown",this._init(),r.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}},{key:"_init",value:function(){s.Nest.Feather(this.$element,"drilldown"),this.options.autoApplyClass&&this.$element.addClass("drilldown"),this.$element.attr({role:"tree","aria-multiselectable":!1}),this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role","group"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","treeitem").find("a"),this.$currentMenu=this.$element,this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||Object(l.GetYoDigits)(6,"drilldown")),this._prepareMenu(),this._registerEvents(),this._keyboardEvents()}},{key:"_prepareMenu",value:function(){var n=this;this.$submenuAnchors.each(function(){var t=a()(this),e=t.parent();n.options.parentLink&&t.clone().prependTo(e.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'),t.data("savedHref",t.attr("href")).removeAttr("href").attr("tabindex",0),t.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"group"}),n._events(t)}),this.$submenus.each(function(){var t=a()(this);if(!t.find(".js-drilldown-back").length)switch(n.options.backButtonPosition){case"bottom":t.append(n.options.backButton);break;case"top":t.prepend(n.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+n.options.backButtonPosition+"'")}n._back(t)}),this.$submenus.addClass("invisible"),this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous"),this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=a()(this.options.wrapper).addClass("is-drilldown"),this.options.animateHeight&&this.$wrapper.addClass("animate-height"),this.$element.wrap(this.$wrapper)),this.$wrapper=this.$element.parent(),this.$wrapper.css(this._getMaxDims())}},{key:"_resize",value:function(){this.$wrapper.css({"max-width":"none","min-height":"none"}),this.$wrapper.css(this._getMaxDims())}},{key:"_events",value:function(n){var i=this;n.off("click.zf.drilldown").on("click.zf.drilldown",function(t){if(a()(t.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(t.stopImmediatePropagation(),t.preventDefault()),i._show(n.parent("li")),i.options.closeOnClick){var e=a()("body");e.off(".zf.drilldown").on("click.zf.drilldown",function(t){t.target===i.$element[0]||a.a.contains(i.$element[0],t.target)||(t.preventDefault(),i._hideAll(),e.off(".zf.drilldown"))})}})}},{key:"_registerEvents",value:function(){this.options.scrollTop&&(this._bindHandler=this._scrollTop.bind(this),this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",this._bindHandler)),this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}},{key:"_scrollTop",value:function(){var t=this,e=""!=t.options.scrollTopElement?a()(t.options.scrollTopElement):t.$element,n=parseInt(e.offset().top+t.options.scrollTopOffset,10);a()("html, body").stop(!0).animate({scrollTop:n},t.options.animationDuration,t.options.animationEasing,function(){this===a()("html")[0]&&t.$element.trigger("scrollme.zf.drilldown")})}},{key:"_keyboardEvents",value:function(){var t=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",function(e){var n,i,o=a()(this),s=o.parent("li").parent("ul").children("li").children("a");s.each(function(t){if(a()(this).is(o))return n=s.eq(Math.max(0,t-1)),void(i=s.eq(Math.min(t+1,s.length-1)))}),r.Keyboard.handleKey(e,"Drilldown",{next:function(){if(o.is(t.$submenuAnchors))return t._show(o.parent("li")),o.parent("li").one(Object(l.transitionend)(o),function(){o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0},previous:function(){return t._hide(o.parent("li").parent("ul")),o.parent("li").parent("ul").one(Object(l.transitionend)(o),function(){setTimeout(function(){o.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function(){return n.focus(),!o.is(t.$element.find("> li:first-child > a"))},down:function(){return i.focus(),!o.is(t.$element.find("> li:last-child > a"))},close:function(){o.is(t.$element.find("> li > a"))||(t._hide(o.parent().parent()),o.parent().parent().siblings("a").focus())},open:function(){return(!t.options.parentLink||!o.attr("href"))&&(o.is(t.$menuItems)?o.is(t.$submenuAnchors)?(t._show(o.parent("li")),o.parent("li").one(Object(l.transitionend)(o),function(){o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0):void 0:(t._hide(o.parent("li").parent("ul")),o.parent("li").parent("ul").one(Object(l.transitionend)(o),function(){setTimeout(function(){o.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0))},handled:function(t){t&&e.preventDefault(),e.stopImmediatePropagation()}})})}},{key:"_hideAll",value:function(){var e=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");this.options.autoHeight&&this.$wrapper.css({height:e.parent().closest("ul").data("calcHeight")}),e.one(Object(l.transitionend)(e),function(t){e.removeClass("is-active is-closing")}),this.$element.trigger("closed.zf.drilldown")}},{key:"_back",value:function(n){var i=this;n.off("click.zf.drilldown"),n.children(".js-drilldown-back").on("click.zf.drilldown",function(t){t.stopImmediatePropagation(),i._hide(n);var e=n.parent("li").parent("ul").parent("li");e.length&&i._show(e)})}},{key:"_menuLinkEvents",value:function(){var e=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(t){setTimeout(function(){e._hideAll()},0)})}},{key:"_setShowSubMenuClasses",value:function(t,e){t.addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),t.parent("li").attr("aria-expanded",!0),!0===e&&this.$element.trigger("open.zf.drilldown",[t])}},{key:"_setHideSubMenuClasses",value:function(t,e){t.removeClass("is-active").addClass("invisible").attr("aria-hidden",!0),t.parent("li").attr("aria-expanded",!1),!0===e&&t.trigger("hide.zf.drilldown",[t])}},{key:"_showMenu",value:function(n,i){var o=this;if(this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(t){o._setHideSubMenuClasses(a()(this))}),(this.$currentMenu=n).is("[data-drilldown]"))return!0===i&&n.find('li[role="treeitem"] > a').first().focus(),void(this.options.autoHeight&&this.$wrapper.css("height",n.data("calcHeight")));var s=n.children().first().parentsUntil("[data-drilldown]","[data-submenu]");s.each(function(t){0===t&&o.options.autoHeight&&o.$wrapper.css("height",a()(this).data("calcHeight"));var e=t==s.length-1;!0===e&&a()(this).one(Object(l.transitionend)(a()(this)),function(){!0===i&&n.find('li[role="treeitem"] > a').first().focus()}),o._setShowSubMenuClasses(a()(this),e)})}},{key:"_show",value:function(t){var e=t.children("[data-submenu]");t.attr("aria-expanded",!0),(this.$currentMenu=e).addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),this.options.autoHeight&&this.$wrapper.css({height:e.data("calcHeight")}),this.$element.trigger("open.zf.drilldown",[t])}},{key:"_hide",value:function(t){this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")});t.parent("li").attr("aria-expanded",!1),t.attr("aria-hidden",!0),t.addClass("is-closing").one(Object(l.transitionend)(t),function(){t.removeClass("is-active is-closing"),t.blur().addClass("invisible")}),t.trigger("hide.zf.drilldown",[t])}},{key:"_getMaxDims",value:function(){var e=0,t={},n=this;return this.$submenus.add(this.$element).each(function(){a()(this).children("li").length;var t=u.Box.GetDimensions(this).height;e=e<t?t:e,n.options.autoHeight&&a()(this).data("calcHeight",t)}),this.options.autoHeight?t.height=this.$currentMenu.data("calcHeight"):t["min-height"]="".concat(e,"px"),t["max-width"]="".concat(this.$element[0].getBoundingClientRect().width,"px"),t}},{key:"_destroy",value:function(){this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler),this._hideAll(),this.$element.off("mutateme.zf.trigger"),s.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){a()(this).off(".zf.drilldown")}),this.$element.find("[data-is-parent-link]").detach(),this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"),this.$element.find("a").each(function(){var t=a()(this);t.removeAttr("tabindex"),t.data("savedHref")&&t.attr("href",t.data("savedHref")).removeData("savedHref")})}}])&&d(e.prototype,i),o&&d(e,o),n}();m.defaults={autoApplyClass:!0,backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',backButtonPosition:"top",wrapper:"<div></div>",parentLink:!1,closeOnClick:!1,autoHeight:!1,animateHeight:!1,scrollTop:!1,scrollTopElement:"",scrollTopOffset:0,animationDuration:500,animationEasing:"swing"}},"./js/foundation.dropdown.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Dropdown",function(){return m});var i=n("jquery"),s=n.n(i),a=n("./js/foundation.util.keyboard.js"),r=n("./js/foundation.core.utils.js"),l=n("./js/foundation.positionable.js"),u=n("./js/foundation.util.triggers.js");n("./js/foundation.util.touch.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t,e,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,f(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,l["Positionable"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=s.a.extend({},n.defaults,this.$element.data(),e),this.className="Dropdown",u.Triggers.init(s.a),this._init(),a.Keyboard.register("Dropdown",{ENTER:"toggle",SPACE:"toggle",ESCAPE:"close"})}},{key:"_init",value:function(){var t=this.$element.attr("id");this.$anchors=s()('[data-toggle="'.concat(t,'"]')).length?s()('[data-toggle="'.concat(t,'"]')):s()('[data-open="'.concat(t,'"]')),this.$anchors.attr({"aria-controls":t,"data-is-focus":!1,"data-yeti-box":t,"aria-haspopup":!0,"aria-expanded":!1}),this._setCurrentAnchor(this.$anchors.first()),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,void 0===this.$element.attr("aria-labelledby")&&(void 0===this.$currentAnchor.attr("id")&&this.$currentAnchor.attr("id",Object(r.GetYoDigits)(6,"dd-anchor")),this.$element.attr("aria-labelledby",this.$currentAnchor.attr("id"))),this.$element.attr({"aria-hidden":"true","data-yeti-box":t,"data-resize":t}),h(f(n.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function(){var t=this.$element[0].className.match(/(top|left|right|bottom)/g);return t?t[0]:"bottom"}},{key:"_getDefaultAlignment",value:function(){var t=/float-(\S+)/.exec(this.$currentAnchor.attr("class"));return t?t[1]:h(f(n.prototype),"_getDefaultAlignment",this).call(this)}},{key:"_setPosition",value:function(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment)),h(f(n.prototype),"_setPosition",this).call(this,this.$currentAnchor,this.$element,this.$parent),this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment))}},{key:"_setCurrentAnchor",value:function(t){this.$currentAnchor=s()(t)}},{key:"_events",value:function(){var n=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.$anchors.off("click.zf.trigger").on("click.zf.trigger",function(){n._setCurrentAnchor(this)}),this.options.hover&&(this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){n._setCurrentAnchor(this);var t=s()("body").data();void 0!==t.whatinput&&"mouse"!==t.whatinput||(clearTimeout(n.timeout),n.timeout=setTimeout(function(){n.open(),n.$anchors.data("hover",!0)},n.options.hoverDelay))}).on("mouseleave.zf.dropdown",Object(r.ignoreMousedisappear)(function(){clearTimeout(n.timeout),n.timeout=setTimeout(function(){n.close(),n.$anchors.data("hover",!1)},n.options.hoverDelay)})),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(n.timeout)}).on("mouseleave.zf.dropdown",Object(r.ignoreMousedisappear)(function(){clearTimeout(n.timeout),n.timeout=setTimeout(function(){n.close(),n.$anchors.data("hover",!1)},n.options.hoverDelay)}))),this.$anchors.add(this.$element).on("keydown.zf.dropdown",function(t){var e=s()(this);a.Keyboard.findFocusable(n.$element);a.Keyboard.handleKey(t,"Dropdown",{open:function(){e.is(n.$anchors)&&!e.is("input, textarea")&&(n.open(),n.$element.attr("tabindex",-1).focus(),t.preventDefault())},close:function(){n.close(),n.$anchors.focus()}})})}},{key:"_addBodyHandler",value:function(){var e=s()(document.body).not(this.$element),n=this;e.off("click.zf.dropdown").on("click.zf.dropdown",function(t){n.$anchors.is(t.target)||n.$anchors.find(t.target).length||n.$element.is(t.target)||n.$element.find(t.target).length||(n.close(),e.off("click.zf.dropdown"))})}},{key:"open",value:function(){if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchors.addClass("hover").attr({"aria-expanded":!0}),this.$element.addClass("is-opening"),this._setPosition(),this.$element.removeClass("is-opening").addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var t=a.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&a.Keyboard.trapFocus(this.$element),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){if(!this.$element.hasClass("is-open"))return!1;this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchors.removeClass("hover").attr("aria-expanded",!1),this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&a.Keyboard.releaseFocus(this.$element)}},{key:"toggle",value:function(){if(this.$element.hasClass("is-open")){if(this.$anchors.data("hover"))return;this.close()}else this.open()}},{key:"_destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchors.off(".zf.dropdown"),s()(document.body).off("click.zf.dropdown")}}])&&c(e.prototype,i),o&&c(e,o),n}();m.defaults={parentClass:null,hoverDelay:250,hover:!1,hoverPane:!1,vOffset:0,hOffset:0,position:"auto",alignment:"auto",allowOverlap:!1,allowBottomOverlap:!0,trapFocus:!1,autoFocus:!1,closeOnClick:!1}},"./js/foundation.dropdownMenu.js":function(t,e,n){"use strict";n.r(e),n.d(e,"DropdownMenu",function(){return m});var i=n("jquery"),h=n.n(i),s=n("./js/foundation.core.plugin.js"),r=n("./js/foundation.core.utils.js"),f=n("./js/foundation.util.keyboard.js"),a=n("./js/foundation.util.nest.js"),l=n("./js/foundation.util.box.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,d(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,s["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=h.a.extend({},n.defaults,this.$element.data(),e),this.className="DropdownMenu",this._init(),f.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}},{key:"_init",value:function(){a.Nest.Feather(this.$element,"dropdown");var t=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),"auto"===this.options.alignment?this.$element.hasClass(this.options.rightClass)||Object(r.rtl)()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",t.addClass("opens-left")):(this.options.alignment="left",t.addClass("opens-right")):"right"===this.options.alignment?t.addClass("opens-left"):t.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function(){return"block"===this.$tabs.css("display")||"column"===this.$element.css("flex-direction")}},{key:"_isRtl",value:function(){return this.$element.hasClass("align-right")||Object(r.rtl)()&&!this.$element.hasClass("align-left")}},{key:"_events",value:function(){var d=this,s="ontouchstart"in window||void 0!==window.ontouchstart,a="is-dropdown-submenu-parent";(this.options.clickOpen||s)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",function(t){var e=h()(t.target).parentsUntil("ul",".".concat(a)),n=e.hasClass(a),i="true"===e.attr("data-is-click"),o=e.children(".is-dropdown-submenu");if(n)if(i){if(!d.options.closeOnClick||!d.options.clickOpen&&!s||d.options.forceFollow&&s)return;t.stopImmediatePropagation(),t.preventDefault(),d._hide(e)}else t.preventDefault(),t.stopImmediatePropagation(),d._show(o),e.add(e.parentsUntil(d.$element,".".concat(a))).attr("data-is-click",!0)}),d.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu",function(t){h()(this).hasClass(a)||d._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(t){var e=h()(this);e.hasClass(a)&&(clearTimeout(e.data("_delay")),e.data("_delay",setTimeout(function(){d._show(e.children(".is-dropdown-submenu"))},d.options.hoverDelay)))}).on("mouseleave.zf.dropdownMenu",Object(r.ignoreMousedisappear)(function(t){var e=h()(this);if(e.hasClass(a)&&d.options.autoclose){if("true"===e.attr("data-is-click")&&d.options.clickOpen)return!1;clearTimeout(e.data("_delay")),e.data("_delay",setTimeout(function(){d._hide(e)},d.options.closingTime))}})),this.$menuItems.on("keydown.zf.dropdownmenu",function(e){var n,i,o=h()(e.target).parentsUntil("ul",'[role="menuitem"]'),t=-1<d.$tabs.index(o),s=t?d.$tabs:o.siblings("li").add(o);s.each(function(t){if(h()(this).is(o))return n=s.eq(t-1),void(i=s.eq(t+1))});var a=function(){i.children("a:first").focus(),e.preventDefault()},r=function(){n.children("a:first").focus(),e.preventDefault()},l=function(){var t=o.children("ul.is-dropdown-submenu");t.length&&(d._show(t),o.find("li > a:first").focus(),e.preventDefault())},u=function(){var t=o.parent("ul").parent("li");t.children("a:first").focus(),d._hide(t),e.preventDefault()},c={open:l,close:function(){d._hide(d.$element),d.$menuItems.eq(0).children("a").focus(),e.preventDefault()},handled:function(){e.stopImmediatePropagation()}};t?d._isVertical()?d._isRtl()?h.a.extend(c,{down:a,up:r,next:u,previous:l}):h.a.extend(c,{down:a,up:r,next:l,previous:u}):d._isRtl()?h.a.extend(c,{next:r,previous:a,down:l,up:u}):h.a.extend(c,{next:a,previous:r,down:l,up:u}):d._isRtl()?h.a.extend(c,{next:u,previous:l,down:a,up:r}):h.a.extend(c,{next:l,previous:u,down:a,up:r}),f.Keyboard.handleKey(e,"DropdownMenu",c)})}},{key:"_addBodyHandler",value:function(){var e=h()(document.body),n=this;e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(t){n.$element.find(t.target).length||(n._hide(),e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}},{key:"_show",value:function(n){var t=this.$tabs.index(this.$tabs.filter(function(t,e){return 0<h()(e).find(n).length})),e=n.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(e,t),n.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var i=l.Box.ImNotTouchingYou(n,null,!0);if(!i){var o="left"===this.options.alignment?"-right":"-left",s=n.parent(".is-dropdown-submenu-parent");s.removeClass("opens".concat(o)).addClass("opens-".concat(this.options.alignment)),(i=l.Box.ImNotTouchingYou(n,null,!0))||s.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"),this.changed=!0}n.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdownmenu",[n])}},{key:"_hide",value:function(t,n){var e;if((e=t&&t.length?t:void 0!==n?this.$tabs.not(function(t,e){return t===n}):this.$element).hasClass("is-active")||0<e.find(".is-active").length){if(e.find("li.is-active").add(e).attr({"data-is-click":!1}).removeClass("is-active"),e.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||e.find("opens-inner").length){var i="left"===this.options.alignment?"right":"left";e.find("li.is-dropdown-submenu-parent").add(e).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(i)),this.changed=!1}this.$element.trigger("hide.zf.dropdownmenu",[e])}}},{key:"_destroy",value:function(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),h()(document.body).off(".zf.dropdownmenu"),a.Nest.Burn(this.$element,"dropdown")}}])&&u(e.prototype,i),o&&u(e,o),n}();m.defaults={disableHover:!1,autoclose:!0,hoverDelay:50,clickOpen:!1,closingTime:500,alignment:"auto",closeOnClick:!0,closeOnClickInside:!0,verticalClass:"vertical",rightClass:"align-right",forceFollow:!0}},"./js/foundation.equalizer.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Equalizer",function(){return p});var i=n("jquery"),d=n.n(i),s=n("./js/foundation.util.mediaQuery.js"),a=n("./js/foundation.util.imageLoader.js"),r=n("./js/foundation.core.utils.js"),l=n("./js/foundation.core.plugin.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,h(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,l["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=d.a.extend({},n.defaults,this.$element.data(),e),this.className="Equalizer",this._init()}},{key:"_init",value:function(){var t=this.$element.attr("data-equalizer")||"",e=this.$element.find('[data-equalizer-watch="'.concat(t,'"]'));s.MediaQuery._init(),this.$watched=e.length?e:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",t||Object(r.GetYoDigits)(6,"eq")),this.$element.attr("data-mutate",t||Object(r.GetYoDigits)(6,"eq")),this.hasNested=0<this.$element.find("[data-equalizer]").length,this.isNested=0<this.$element.parentsUntil(document.body,"[data-equalizer]").length,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var n,i=this.$element.find("img");this.options.equalizeOn?(n=this._checkMQ(),d()(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==n&&!1===n||void 0===n)&&(i.length?Object(a.onImagesLoaded)(i,this._reflow.bind(this)):this._reflow())}},{key:"_pauseEvents",value:function(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}},{key:"_onResizeMe",value:function(t){this._reflow()}},{key:"_onPostEqualized",value:function(t){t.target!==this.$element[0]&&this._reflow()}},{key:"_events",value:function(){this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):(this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)),this.isOn=!0}},{key:"_checkMQ",value:function(){var t=!s.MediaQuery.is(this.options.equalizeOn);return t?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),t}},{key:"_killswitch",value:function(){}},{key:"_reflow",value:function(){if(!this.options.equalizeOnStack&&this._isStacked())return this.$watched.css("height","auto"),!1;this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this))}},{key:"_isStacked",value:function(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}},{key:"getHeights",value:function(t){for(var e=[],n=0,i=this.$watched.length;n<i;n++)this.$watched[n].style.height="auto",e.push(this.$watched[n].offsetHeight);t(e)}},{key:"getHeightsByRow",value:function(t){var e=this.$watched.length?this.$watched.first().offset().top:0,n=[],i=0;n[i]=[];for(var o=0,s=this.$watched.length;o<s;o++){this.$watched[o].style.height="auto";var a=d()(this.$watched[o]).offset().top;a!=e&&(n[++i]=[],e=a),n[i].push([this.$watched[o],this.$watched[o].offsetHeight])}for(var r=0,l=n.length;r<l;r++){var u=d()(n[r]).map(function(){return this[1]}).get(),c=Math.max.apply(null,u);n[r].push(c)}t(n)}},{key:"applyHeight",value:function(t){var e=Math.max.apply(null,t);this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",e),this.$element.trigger("postequalized.zf.equalizer")}},{key:"applyHeightByRow",value:function(t){this.$element.trigger("preequalized.zf.equalizer");for(var e=0,n=t.length;e<n;e++){var i=t[e].length,o=t[e][i-1];if(i<=2)d()(t[e][0][0]).css({height:"auto"});else{this.$element.trigger("preequalizedrow.zf.equalizer");for(var s=0,a=i-1;s<a;s++)d()(t[e][s][0]).css({height:o});this.$element.trigger("postequalizedrow.zf.equalizer")}}this.$element.trigger("postequalized.zf.equalizer")}},{key:"_destroy",value:function(){this._pauseEvents(),this.$watched.css("height","auto")}}])&&u(e.prototype,i),o&&u(e,o),n}();p.defaults={equalizeOnStack:!1,equalizeByRow:!1,equalizeOn:""}},"./js/foundation.interchange.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Interchange",function(){return f});var i=n("jquery"),o=n.n(i),s=n("./js/foundation.util.mediaQuery.js"),a=n("./js/foundation.core.plugin.js"),l=n("./js/foundation.core.utils.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),c(this,d(r).apply(this,arguments))}var e,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(r,a["Plugin"]),e=r,(n=[{key:"_setup",value:function(t,e){this.$element=t,this.options=o.a.extend({},r.defaults,e),this.rules=[],this.currentPath="",this.className="Interchange",this._init(),this._events()}},{key:"_init",value:function(){s.MediaQuery._init();var t=this.$element[0].id||Object(l.GetYoDigits)(6,"interchange");this.$element.attr({"data-resize":t,id:t}),this._addBreakpoints(),this._generateRules(),this._reflow()}},{key:"_events",value:function(){var t=this;this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(){return t._reflow()})}},{key:"_reflow",value:function(){var t;for(var e in this.rules)if(this.rules.hasOwnProperty(e)){var n=this.rules[e];window.matchMedia(n.query).matches&&(t=n)}t&&this.replace(t.path)}},{key:"_addBreakpoints",value:function(){for(var t in s.MediaQuery.queries)if(s.MediaQuery.queries.hasOwnProperty(t)){var e=s.MediaQuery.queries[t];r.SPECIAL_QUERIES[e.name]=e.value}}},{key:"_generateRules",value:function(t){var e,n=[];for(var i in e="string"==typeof(e=this.options.rules?this.options.rules:this.$element.data("interchange"))?e.match(/\[.*?, .*?\]/g):e)if(e.hasOwnProperty(i)){var o=e[i].slice(1,-1).split(", "),s=o.slice(0,-1).join(""),a=o[o.length-1];r.SPECIAL_QUERIES[a]&&(a=r.SPECIAL_QUERIES[a]),n.push({path:s,query:a})}this.rules=n}},{key:"replace",value:function(e){if(this.currentPath!==e){var n=this,i="replaced.zf.interchange";"IMG"===this.$element[0].nodeName?this.$element.attr("src",e).on("load",function(){n.currentPath=e}).trigger(i):e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?(e=e.replace(/\(/g,"%28").replace(/\)/g,"%29"),this.$element.css({"background-image":"url("+e+")"}).trigger(i)):o.a.get(e,function(t){n.$element.html(t).trigger(i),o()(t).foundation(),n.currentPath=e})}}},{key:"_destroy",value:function(){this.$element.off("resizeme.zf.trigger")}}])&&u(e.prototype,n),i&&u(e,i),r}();f.defaults={rules:null},f.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"}},"./js/foundation.magellan.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Magellan",function(){return f});var i=n("jquery"),c=n.n(i),s=n("./js/foundation.core.utils.js"),a=n("./js/foundation.core.plugin.js"),r=n("./js/foundation.smoothScroll.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),u(this,d(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(n,a["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=c.a.extend({},n.defaults,this.$element.data(),e),this.className="Magellan",this._init(),this.calcPoints()}},{key:"_init",value:function(){var t=this.$element[0].id||Object(s.GetYoDigits)(6,"magellan");this.$targets=c()("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":t,"data-scroll":t,id:t}),this.$active=c()(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}},{key:"calcPoints",value:function(){var n=this,t=document.body,e=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,e.clientHeight)),this.docHeight=Math.round(Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)),this.$targets.each(function(){var t=c()(this),e=Math.round(t.offset().top-n.options.threshold);t.targetPoint=e,n.points.push(e)})}},{key:"_events",value:function(){var n=this;c()("html, body"),n.options.animationDuration,n.options.animationEasing;c()(window).one("load",function(){n.options.deepLinking&&location.hash&&n.scrollToLoc(location.hash),n.calcPoints(),n._updateActive()}),n.onLoadListener=Object(s.onLoad)(c()(window),function(){n.$element.on({"resizeme.zf.trigger":n.reflow.bind(n),"scrollme.zf.trigger":n._updateActive.bind(n)}).on("click.zf.magellan",'a[href^="#"]',function(t){t.preventDefault();var e=this.getAttribute("href");n.scrollToLoc(e)})}),this._deepLinkScroll=function(t){n.options.deepLinking&&n.scrollToLoc(window.location.hash)},c()(window).on("hashchange",this._deepLinkScroll)}},{key:"scrollToLoc",value:function(t){this._inTransition=!0;var e=this,n={animationEasing:this.options.animationEasing,animationDuration:this.options.animationDuration,threshold:this.options.threshold,offset:this.options.offset};r.SmoothScroll.scrollToLoc(t,n,function(){e._inTransition=!1})}},{key:"reflow",value:function(){this.calcPoints(),this._updateActive()}},{key:"_updateActive",value:function(){var n=this;if(!this._inTransition){var t,i=parseInt(window.pageYOffset,10),o=this.scrollPos>i;if((this.scrollPos=i)<this.points[0]);else if(i+this.winHeight===this.docHeight)t=this.points.length-1;else{var e=this.points.filter(function(t,e){return t-n.options.offset-(o?n.options.threshold:0)<=i});t=e.length?e.length-1:0}var s=this.$active,a="";void 0!==t?(this.$active=this.$links.filter('[href="#'+this.$targets.eq(t).data("magellan-target")+'"]'),this.$active.length&&(a=this.$active[0].getAttribute("href"))):this.$active=c()();var r=!(!this.$active.length&&!s.length||this.$active.is(s)),l=a!==window.location.hash;if(r&&(s.removeClass(this.options.activeClass),this.$active.addClass(this.options.activeClass)),this.options.deepLinking&&l)if(window.history.pushState){var u=a||window.location.pathname+window.location.search;window.history.pushState(null,null,u)}else window.location.hash=a;r&&this.$element.trigger("update.zf.magellan",[this.$active])}}},{key:"_destroy",value:function(){if(this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass),this.options.deepLinking){var t=this.$active[0].getAttribute("href");window.location.hash.replace(t,"")}c()(window).off("hashchange",this._deepLinkScroll),this.onLoadListener&&c()(window).off(this.onLoadListener)}}])&&l(e.prototype,i),o&&l(e,o),n}();f.defaults={animationDuration:500,animationEasing:"linear",threshold:50,activeClass:"is-active",deepLinking:!1,offset:0}},"./js/foundation.offcanvas.js":function(t,e,n){"use strict";n.r(e),n.d(e,"OffCanvas",function(){return m});var i=n("jquery"),s=n.n(i),a=n("./js/foundation.core.utils.js"),r=n("./js/foundation.util.keyboard.js"),l=n("./js/foundation.util.mediaQuery.js"),u=n("./js/foundation.core.plugin.js"),c=n("./js/foundation.util.triggers.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),h(this,f(i).apply(this,arguments))}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(i,u["Plugin"]),e=i,(n=[{key:"_setup",value:function(t,e){var n=this;this.className="OffCanvas",this.$element=t,this.options=s.a.extend({},i.defaults,this.$element.data(),e),this.contentClasses={base:[],reveal:[]},this.$lastTrigger=s()(),this.$triggers=s()(),this.position="left",this.$content=s()(),this.nested=!!this.options.nested,s()(["push","overlap"]).each(function(t,e){n.contentClasses.base.push("has-transition-"+e)}),s()(["left","right","top","bottom"]).each(function(t,e){n.contentClasses.base.push("has-position-"+e),n.contentClasses.reveal.push("has-reveal-"+e)}),c.Triggers.init(s.a),l.MediaQuery._init(),this._init(),this._events(),r.Keyboard.register("OffCanvas",{ESCAPE:"close"})}},{key:"_init",value:function(){var t=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),this.options.contentId?this.$content=s()("#"+this.options.contentId):this.$element.siblings("[data-off-canvas-content]").length?this.$content=this.$element.siblings("[data-off-canvas-content]").first():this.$content=this.$element.closest("[data-off-canvas-content]").first(),this.options.contentId?this.options.contentId&&null===this.options.nested&&console.warn("Remember to use the nested option if using the content ID option!"):this.nested=0===this.$element.siblings("[data-off-canvas-content]").length,!0===this.nested&&(this.options.transition="overlap",this.$element.removeClass("is-transition-push")),this.$element.addClass("is-transition-".concat(this.options.transition," is-closed")),this.$triggers=s()(document).find('[data-open="'+t+'"], [data-close="'+t+'"], [data-toggle="'+t+'"]').attr("aria-expanded","false").attr("aria-controls",t),this.position=this.$element.is(".position-left, .position-top, .position-right, .position-bottom")?this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1]:this.position,!0===this.options.contentOverlay){var e=document.createElement("div"),n="fixed"===s()(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";e.setAttribute("class","js-off-canvas-overlay "+n),this.$overlay=s()(e),"is-overlay-fixed"===n?s()(this.$overlay).insertAfter(this.$element):this.$content.append(this.$overlay)}var i=new RegExp(Object(a.RegExpEscape)(this.options.revealClass)+"([^\\s]+)","g").exec(this.$element[0].className);i&&(this.options.isRevealed=!0,this.options.revealOn=this.options.revealOn||i[1]),!0===this.options.isRevealed&&this.options.revealOn&&(this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)),this._setMQChecker()),this.options.transitionTime&&this.$element.css("transition-duration",this.options.transitionTime),this._removeContentClasses()}},{key:"_events",value:function(){(this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),!0===this.options.closeOnClick)&&(this.options.contentOverlay?this.$overlay:this.$content).on({"click.zf.offcanvas":this.close.bind(this)})}},{key:"_setMQChecker",value:function(){var t=this;this.onLoadListener=Object(a.onLoad)(s()(window),function(){l.MediaQuery.atLeast(t.options.revealOn)&&t.reveal(!0)}),s()(window).on("changed.zf.mediaquery",function(){l.MediaQuery.atLeast(t.options.revealOn)?t.reveal(!0):t.reveal(!1)})}},{key:"_removeContentClasses",value:function(t){"boolean"!=typeof t?this.$content.removeClass(this.contentClasses.base.join(" ")):!1===t&&this.$content.removeClass("has-reveal-".concat(this.position))}},{key:"_addContentClasses",value:function(t){this._removeContentClasses(t),"boolean"!=typeof t?this.$content.addClass("has-transition-".concat(this.options.transition," has-position-").concat(this.position)):!0===t&&this.$content.addClass("has-reveal-".concat(this.position))}},{key:"reveal",value:function(t){t?(this.close(),this.isRevealed=!0,this.$element.attr("aria-hidden","false"),this.$element.off("open.zf.trigger toggle.zf.trigger"),this.$element.removeClass("is-closed")):(this.isRevealed=!1,this.$element.attr("aria-hidden","true"),this.$element.off("open.zf.trigger toggle.zf.trigger").on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),this.$element.addClass("is-closed")),this._addContentClasses(t)}},{key:"_stopScrolling",value:function(t){return!1}},{key:"_recordScrollable",value:function(t){var e=this;e.scrollHeight!==e.clientHeight&&(0===e.scrollTop&&(e.scrollTop=1),e.scrollTop===e.scrollHeight-e.clientHeight&&(e.scrollTop=e.scrollHeight-e.clientHeight-1)),e.allowUp=0<e.scrollTop,e.allowDown=e.scrollTop<e.scrollHeight-e.clientHeight,e.lastY=t.originalEvent.pageY}},{key:"_stopScrollPropagation",value:function(t){var e=t.pageY<this.lastY,n=!e;this.lastY=t.pageY,e&&this.allowUp||n&&this.allowDown?t.stopPropagation():t.preventDefault()}},{key:"open",value:function(t,e){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;e&&(this.$lastTrigger=e),"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight),this.options.transitionTime&&"overlap"!==this.options.transition?this.$element.siblings("[data-off-canvas-content]").css("transition-duration",this.options.transitionTime):this.$element.siblings("[data-off-canvas-content]").css("transition-duration",""),this.$element.addClass("is-open").removeClass("is-closed"),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false"),this.$content.addClass("is-open-"+this.position),!1===this.options.contentScroll&&(s()("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling),this.$element.on("touchstart",this._recordScrollable),this.$element.on("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.addClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.addClass("is-closable"),!0===this.options.autoFocus&&this.$element.one(Object(a.transitionend)(this.$element),function(){if(n.$element.hasClass("is-open")){var t=n.$element.find("[data-autofocus]");t.length?t.eq(0).focus():n.$element.find("a, button").eq(0).focus()}}),!0===this.options.trapFocus&&(this.$content.attr("tabindex","-1"),r.Keyboard.trapFocus(this.$element)),this._addContentClasses(),this.$element.trigger("opened.zf.offcanvas")}}},{key:"close",value:function(t){if(this.$element.hasClass("is-open")&&!this.isRevealed){var e=this;this.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"),!1===this.options.contentScroll&&(s()("body").removeClass("is-off-canvas-open").off("touchmove",this._stopScrolling),this.$element.off("touchstart",this._recordScrollable),this.$element.off("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.removeClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.removeClass("is-closable"),this.$triggers.attr("aria-expanded","false"),!0===this.options.trapFocus&&(this.$content.removeAttr("tabindex"),r.Keyboard.releaseFocus(this.$element)),this.$element.one(Object(a.transitionend)(this.$element),function(t){e.$element.addClass("is-closed"),e._removeContentClasses()})}}},{key:"toggle",value:function(t,e){this.$element.hasClass("is-open")?this.close(t,e):this.open(t,e)}},{key:"_handleKeyboard",value:function(t){var e=this;r.Keyboard.handleKey(t,"OffCanvas",{close:function(){return e.close(),e.$lastTrigger.focus(),!0},handled:function(){t.stopPropagation(),t.preventDefault()}})}},{key:"_destroy",value:function(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$overlay.off(".zf.offcanvas"),this.onLoadListener&&s()(window).off(this.onLoadListener)}}])&&d(e.prototype,n),o&&d(e,o),i}();m.defaults={closeOnClick:!0,contentOverlay:!0,contentId:null,nested:null,contentScroll:!0,transitionTime:null,transition:"push",forceTo:null,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-",trapFocus:!1}},"./js/foundation.orbit.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Orbit",function(){return v});var i=n("jquery"),s=n.n(i),a=n("./js/foundation.util.keyboard.js"),c=n("./js/foundation.util.motion.js"),r=n("./js/foundation.util.timer.js"),l=n("./js/foundation.util.imageLoader.js"),u=n("./js/foundation.core.utils.js"),d=n("./js/foundation.core.plugin.js"),h=n("./js/foundation.util.touch.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,m(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(n,d["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=s.a.extend({},n.defaults,this.$element.data(),e),this.className="Orbit",h.Touch.init(s.a),this._init(),a.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}},{key:"_init",value:function(){this._reset(),this.$wrapper=this.$element.find(".".concat(this.options.containerClass)),this.$slides=this.$element.find(".".concat(this.options.slideClass));var t=this.$element.find("img"),e=this.$slides.filter(".is-active"),n=this.$element[0].id||Object(u.GetYoDigits)(6,"orbit");this.$element.attr({"data-resize":n,id:n}),e.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),t.length?Object(l.onImagesLoaded)(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&1<this.$slides.length&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function(){this.$bullets=this.$element.find(".".concat(this.options.boxOfBullets)).find("button")}},{key:"geoSync",value:function(){var t=this;this.timer=new r.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()}},{key:"_prepareForOrbit",value:function(){this._setWrapperHeight()}},{key:"_setWrapperHeight",value:function(t){var e,n=0,i=0,o=this;this.$slides.each(function(){e=this.getBoundingClientRect().height,s()(this).attr("data-slide",i),/mui/g.test(s()(this)[0].className)||o.$slides.filter(".is-active")[0]===o.$slides.eq(i)[0]||s()(this).css({display:"none"}),n=n<e?e:n,i++}),i===this.$slides.length&&(this.$wrapper.css({height:n}),t&&t(n))}},{key:"_setSlideHeight",value:function(t){this.$slides.each(function(){s()(this).css("max-height",t)})}},{key:"_events",value:function(){var i=this;if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),1<this.$slides.length){if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",!i.$element.data("clickedOn")),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons)this.$element.find(".".concat(this.options.nextClass,", .").concat(this.options.prevClass)).attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(t){t.preventDefault(),i.changeSlide(s()(this).hasClass(i.options.nextClass))});this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var t=s()(this).data("slide"),e=t>i.$slides.filter(".is-active").data("slide"),n=i.$slides.eq(t);i.changeSlide(e,n,t)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(t){a.Keyboard.handleKey(t,"Orbit",{next:function(){i.changeSlide(!0)},previous:function(){i.changeSlide(!1)},handled:function(){s()(t.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})}}},{key:"_reset",value:function(){void 0!==this.$slides&&1<this.$slides.length&&(this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),this.options.autoPlay&&this.timer.restart(),this.$slides.each(function(t){s()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),this.$slides.first().addClass("is-active").show(),this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),this.options.bullets&&this._updateBullets(0))}},{key:"changeSlide",value:function(t,e,n){if(this.$slides){var i=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(i[0].className))return!1;var o,s=this.$slides.first(),a=this.$slides.last(),r=t?"Right":"Left",l=t?"Left":"Right",u=this;(o=e||(t?this.options.infiniteWrap?i.next(".".concat(this.options.slideClass)).length?i.next(".".concat(this.options.slideClass)):s:i.next(".".concat(this.options.slideClass)):this.options.infiniteWrap?i.prev(".".concat(this.options.slideClass)).length?i.prev(".".concat(this.options.slideClass)):a:i.prev(".".concat(this.options.slideClass)))).length&&(this.$element.trigger("beforeslidechange.zf.orbit",[i,o]),this.options.bullets&&(n=n||this.$slides.index(o),this._updateBullets(n)),this.options.useMUI&&!this.$element.is(":hidden")?(c.Motion.animateIn(o.addClass("is-active"),this.options["animInFrom".concat(r)],function(){o.css({display:"block"}).attr("aria-live","polite")}),c.Motion.animateOut(i.removeClass("is-active"),this.options["animOutTo".concat(l)],function(){i.removeAttr("aria-live"),u.options.autoPlay&&!u.timer.isPaused&&u.timer.restart()})):(i.removeClass("is-active is-in").removeAttr("aria-live").hide(),o.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()),this.$element.trigger("slidechange.zf.orbit",[o]))}}},{key:"_updateBullets",value:function(t){var e=this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach();this.$bullets.eq(t).addClass("is-active").append(e)}},{key:"_destroy",value:function(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()}}])&&f(e.prototype,i),o&&f(e,o),n}();v.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous",useMUI:!0}},"./js/foundation.positionable.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Positionable",function(){return g});var a=n("./js/foundation.util.box.js"),s=n("./js/foundation.core.plugin.js"),r=n("./js/foundation.core.utils.js");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=["left","right","top","bottom"],o=["top","bottom","center"],f=["left","right","center"],p={left:o,right:o,top:f,bottom:f};function m(t,e){var n=e.indexOf(t);return n===e.length-1?e[0]:e[n+1]}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,c(e).apply(this,arguments))}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,s["Plugin"]),n=e,(i=[{key:"_init",value:function(){this.triedPositions={},this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position,this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment,this.originalPosition=this.position,this.originalAlignment=this.alignment}},{key:"_getDefaultPosition",value:function(){return"bottom"}},{key:"_getDefaultAlignment",value:function(){switch(this.position){case"bottom":case"top":return Object(r.rtl)()?"right":"left";case"left":case"right":return"bottom"}}},{key:"_reposition",value:function(){this._alignmentsExhausted(this.position)?(this.position=m(this.position,h),this.alignment=p[this.position][0]):this._realign()}},{key:"_realign",value:function(){this._addTriedPosition(this.position,this.alignment),this.alignment=m(this.alignment,p[this.position])}},{key:"_addTriedPosition",value:function(t,e){this.triedPositions[t]=this.triedPositions[t]||[],this.triedPositions[t].push(e)}},{key:"_positionsExhausted",value:function(){for(var t=!0,e=0;e<h.length;e++)t=t&&this._alignmentsExhausted(h[e]);return t}},{key:"_alignmentsExhausted",value:function(t){return this.triedPositions[t]&&this.triedPositions[t].length==p[t].length}},{key:"_getVOffset",value:function(){return this.options.vOffset}},{key:"_getHOffset",value:function(){return this.options.hOffset}},{key:"_setPosition",value:function(t,e,n){if("false"===t.attr("aria-expanded"))return!1;a.Box.GetDimensions(e),a.Box.GetDimensions(t);if(this.options.allowOverlap||(this.position=this.originalPosition,this.alignment=this.originalAlignment),e.offset(a.Box.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset())),!this.options.allowOverlap){for(var i=1e8,o={position:this.position,alignment:this.alignment};!this._positionsExhausted();){var s=a.Box.OverlapArea(e,n,!1,!1,this.options.allowBottomOverlap);if(0===s)return;s<i&&(i=s,o={position:this.position,alignment:this.alignment}),this._reposition(),e.offset(a.Box.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}this.position=o.position,this.alignment=o.alignment,e.offset(a.Box.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}])&&l(n.prototype,i),o&&l(n,o),e}();g.defaults={position:"auto",alignment:"auto",allowOverlap:!1,allowBottomOverlap:!0,vOffset:0,hOffset:0}},"./js/foundation.responsiveAccordionTabs.js":function(t,e,n){"use strict";n.r(e),n.d(e,"ResponsiveAccordionTabs",function(){return m});var i=n("jquery"),c=n.n(i),a=n("./js/foundation.util.mediaQuery.js"),d=n("./js/foundation.core.utils.js"),s=n("./js/foundation.core.plugin.js"),o=n("./js/foundation.accordion.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p={tabs:{cssClass:"tabs",plugin:n("./js/foundation.tabs.js").Tabs},accordion:{cssClass:"accordion",plugin:o.Accordion}},m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,h(e).apply(this,arguments))}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,s["Plugin"]),n=e,(i=[{key:"_setup",value:function(t,e){this.$element=c()(t),this.options=c.a.extend({},this.$element.data(),e),this.rules=this.$element.data("responsive-accordion-tabs"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveAccordionTabs",this.$element.attr("id")||this.$element.attr("id",Object(d.GetYoDigits)(6,"responsiveaccordiontabs")),this._init(),this._events()}},{key:"_init",value:function(){if(a.MediaQuery._init(),"string"==typeof this.rules){for(var t={},e=this.rules.split(" "),n=0;n<e.length;n++){var i=e[n].split("-"),o=1<i.length?i[0]:"small",s=1<i.length?i[1]:i[0];null!==p[s]&&(t[o]=p[s])}this.rules=t}this._getAllOptions(),c.a.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function(){for(var t in this.allOptions={},p)if(p.hasOwnProperty(t)){var e=p[t];try{var n=c()("<ul></ul>"),i=new e.plugin(n,this.options);for(var o in i.options)if(i.options.hasOwnProperty(o)&&"zfPlugin"!==o){var s=i.options[o];this.allOptions[o]=s}i.destroy()}catch(t){}}}},{key:"_events",value:function(){this._changedZfMediaQueryHandler=this._checkMediaQueries.bind(this),c()(window).on("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}},{key:"_checkMediaQueries",value:function(){var e,n=this;c.a.each(this.rules,function(t){a.MediaQuery.atLeast(t)&&(e=t)}),e&&(this.currentPlugin instanceof this.rules[e].plugin||(c.a.each(p,function(t,e){n.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[e].cssClass),this.currentPlugin&&(!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData),this.currentPlugin.destroy()),this._handleMarkup(this.rules[e].cssClass),this.currentPlugin=new this.rules[e].plugin(this.$element,{}),this.storezfData=this.currentPlugin.$element.data("zfPlugin")))}},{key:"_handleMarkup",value:function(t){var n=this,e="accordion",i=c()("[data-tabs-content="+this.$element.attr("id")+"]");if(i.length&&(e="tabs"),e!==t){var o=n.allOptions.linkClass?n.allOptions.linkClass:"tabs-title",s=n.allOptions.panelClass?n.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var a=this.$element.children("."+o+",[data-accordion-item]").removeClass(o).removeClass("accordion-item").removeAttr("data-accordion-item"),r=a.children("a").removeClass("accordion-title");if("tabs"===e?(i=i.children("."+s).removeClass(s).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected"):i=a.children("[data-tab-content]").removeClass("accordion-content"),i.css({display:"",visibility:""}),a.css({display:"",visibility:""}),"accordion"===t)i.each(function(t,e){c()(e).appendTo(a.get(t)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""}),c()("[data-tabs-content="+n.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+n.$element.attr("id")+'"></div>').detach(),a.addClass("accordion-item").attr("data-accordion-item",""),r.addClass("accordion-title")});else if("tabs"===t){var l=c()("[data-tabs-content="+n.$element.attr("id")+"]"),u=c()("#tabs-placeholder-"+n.$element.attr("id"));u.length?(l=c()('<div class="tabs-content"></div>').insertAfter(u).attr("data-tabs-content",n.$element.attr("id")),u.remove()):l=c()('<div class="tabs-content"></div>').insertAfter(n.$element).attr("data-tabs-content",n.$element.attr("id")),i.each(function(t,e){var n=c()(e).appendTo(l).addClass(s),i=r.get(t).hash.slice(1),o=c()(e).attr("id")||Object(d.GetYoDigits)(6,"accordion");i!==o&&(""!==i?c()(e).attr("id",i):(i=o,c()(e).attr("id",i),c()(r.get(t)).attr("href",c()(r.get(t)).attr("href").replace("#","")+"#"+i))),c()(a.get(t)).hasClass("is-active")&&n.addClass("is-active")}),a.addClass(o)}}}},{key:"_destroy",value:function(){this.currentPlugin&&this.currentPlugin.destroy(),c()(window).off("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}}])&&l(n.prototype,i),o&&l(n,o),e}();m.defaults={}},"./js/foundation.responsiveMenu.js":function(t,e,n){"use strict";n.r(e),n.d(e,"ResponsiveMenu",function(){return v});var i=n("jquery"),a=n.n(i),r=n("./js/foundation.util.mediaQuery.js"),l=n("./js/foundation.core.utils.js"),s=n("./js/foundation.core.plugin.js"),o=n("./js/foundation.dropdownMenu.js"),u=n("./js/foundation.drilldown.js"),c=n("./js/foundation.accordionMenu.js");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g={dropdown:{cssClass:"dropdown",plugin:o.DropdownMenu},drilldown:{cssClass:"drilldown",plugin:u.Drilldown},accordion:{cssClass:"accordion-menu",plugin:c.AccordionMenu}},v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,p(e).apply(this,arguments))}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,s["Plugin"]),n=e,(i=[{key:"_setup",value:function(t,e){this.$element=a()(t),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveMenu",this._init(),this._events()}},{key:"_init",value:function(){if(r.MediaQuery._init(),"string"==typeof this.rules){for(var t={},e=this.rules.split(" "),n=0;n<e.length;n++){var i=e[n].split("-"),o=1<i.length?i[0]:"small",s=1<i.length?i[1]:i[0];null!==g[s]&&(t[o]=g[s])}this.rules=t}a.a.isEmptyObject(this.rules)||this._checkMediaQueries(),this.$element.attr("data-mutate",this.$element.attr("data-mutate")||Object(l.GetYoDigits)(6,"responsive-menu"))}},{key:"_events",value:function(){var t=this;a()(window).on("changed.zf.mediaquery",function(){t._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var e,n=this;a.a.each(this.rules,function(t){r.MediaQuery.atLeast(t)&&(e=t)}),e&&(this.currentPlugin instanceof this.rules[e].plugin||(a.a.each(g,function(t,e){n.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[e].cssClass),this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[e].plugin(this.$element,{})))}},{key:"_destroy",value:function(){this.currentPlugin.destroy(),a()(window).off(".zf.ResponsiveMenu")}}])&&h(n.prototype,i),o&&h(n,o),e}();v.defaults={}},"./js/foundation.responsiveToggle.js":function(t,e,n){"use strict";n.r(e),n.d(e,"ResponsiveToggle",function(){return f});var i=n("jquery"),s=n.n(i),a=n("./js/foundation.util.mediaQuery.js"),r=n("./js/foundation.util.motion.js"),l=n("./js/foundation.core.plugin.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,d(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(n,l["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=s()(t),this.options=s.a.extend({},n.defaults,this.$element.data(),e),this.className="ResponsiveToggle",this._init(),this._events()}},{key:"_init",value:function(){a.MediaQuery._init();var e=this.$element.data("responsive-toggle");if(e||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=s()("#".concat(e)),this.$toggler=this.$element.find("[data-toggle]").filter(function(){var t=s()(this).data("toggle");return t===e||""===t}),this.options=s.a.extend({},this.options,this.$targetMenu.data()),this.options.animate){var t=this.options.animate.split(" ");this.animationIn=t[0],this.animationOut=t[1]||null}this._update()}},{key:"_events",value:function(){this._updateMqHandler=this._update.bind(this),s()(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}},{key:"_update",value:function(){a.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}},{key:"toggleMenu",value:function(){var t=this;a.MediaQuery.atLeast(this.options.hideFor)||(this.options.animate?this.$targetMenu.is(":hidden")?r.Motion.animateIn(this.$targetMenu,this.animationIn,function(){t.$element.trigger("toggled.zf.responsiveToggle"),t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")}):r.Motion.animateOut(this.$targetMenu,this.animationOut,function(){t.$element.trigger("toggled.zf.responsiveToggle")}):(this.$targetMenu.toggle(0),this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),this.$element.trigger("toggled.zf.responsiveToggle")))}},{key:"_destroy",value:function(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),s()(window).off("changed.zf.mediaquery",this._updateMqHandler)}}])&&u(e.prototype,i),o&&u(e,o),n}();f.defaults={hideFor:"medium",animate:!1}},"./js/foundation.reveal.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Reveal",function(){return g});var i=n("jquery"),a=n.n(i),s=n("./js/foundation.core.utils.js"),r=n("./js/foundation.util.keyboard.js"),l=n("./js/foundation.util.mediaQuery.js"),u=n("./js/foundation.util.motion.js"),c=n("./js/foundation.core.plugin.js"),d=n("./js/foundation.util.triggers.js");n("./js/foundation.util.touch.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),f(this,p(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(n,c["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=a.a.extend({},n.defaults,this.$element.data(),e),this.className="Reveal",this._init(),d.Triggers.init(a.a),r.Keyboard.register("Reveal",{ESCAPE:"close"})}},{key:"_init",value:function(){var t=this;l.MediaQuery._init(),this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:l.MediaQuery.current},this.$anchor=a()('[data-open="'.concat(this.id,'"]')).length?a()('[data-open="'.concat(this.id,'"]')):a()('[data-toggle="'.concat(this.id,'"]')),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(a()(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#".concat(this.id)&&(this.onLoadListener=Object(s.onLoad)(a()(window),function(){return t.open()}))}},{key:"_makeOverlay",value:function(){var t="";return this.options.additionalOverlayClasses&&(t=" "+this.options.additionalOverlayClasses),a()("<div></div>").addClass("reveal-overlay"+t).appendTo(this.options.appendTo)}},{key:"_updatePosition",value:function(){var t,e=this.$element.outerWidth(),n=a()(window).width(),i=this.$element.outerHeight(),o=a()(window).height(),s=null;t="auto"===this.options.hOffset?parseInt((n-e)/2,10):parseInt(this.options.hOffset,10),"auto"===this.options.vOffset?s=o<i?parseInt(Math.min(100,o/10),10):parseInt((o-i)/4,10):null!==this.options.vOffset&&(s=parseInt(this.options.vOffset,10)),null!==s&&this.$element.css({top:s+"px"}),this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:t+"px"}),this.$element.css({margin:"0px"}))}},{key:"_events",value:function(){var n=this,i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function(t,e){if(t.target===i.$element[0]||a()(t.target).parents("[data-closable]")[0]===e)return n.close.apply(n)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function(){i._updatePosition()}}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(t){t.target!==i.$element[0]&&!a.a.contains(i.$element[0],t.target)&&a.a.contains(document,t.target)&&i.close()}),this.options.deepLink&&a()(window).on("hashchange.zf.reveal:".concat(this.id),this._handleState.bind(this))}},{key:"_handleState",value:function(t){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}},{key:"_disableScroll",value:function(t){t=t||a()(window).scrollTop(),a()(document).height()>a()(window).height()&&a()("html").css("top",-t)}},{key:"_enableScroll",value:function(t){t=t||parseInt(a()("html").css("top")),a()(document).height()>a()(window).height()&&(a()("html").css("top",""),a()(window).scrollTop(-t))}},{key:"open",value:function(){var t=this,e="#".concat(this.id);this.options.deepLink&&window.location.hash!==e&&(window.history.pushState?this.options.updateHistory?window.history.pushState({},"",e):window.history.replaceState({},"",e):window.location.hash=e),this.$activeAnchor=a()(document.activeElement).is(this.$anchor)?a()(document.activeElement):this.$anchor,this.isActive=!0,this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||this.$element.trigger("closeme.zf.reveal",this.id),this._disableScroll();var n=this;if(this.options.animationIn){this.options.overlay&&u.Motion.animateIn(this.$overlay,"fade-in"),u.Motion.animateIn(this.$element,this.options.animationIn,function(){t.$element&&(t.focusableElements=r.Keyboard.findFocusable(t.$element),n.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),n._addGlobalClasses(),r.Keyboard.trapFocus(n.$element))})}else this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay);this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),r.Keyboard.trapFocus(this.$element),this._addGlobalClasses(),this._addGlobalListeners(),this.$element.trigger("open.zf.reveal")}},{key:"_addGlobalClasses",value:function(){var t=function(){a()("html").toggleClass("zf-has-scroll",!!(a()(document).height()>a()(window).height()))};this.$element.on("resizeme.zf.trigger.revealScrollbarListener",function(){return t()}),t(),a()("html").addClass("is-reveal-open")}},{key:"_removeGlobalClasses",value:function(){this.$element.off("resizeme.zf.trigger.revealScrollbarListener"),a()("html").removeClass("is-reveal-open"),a()("html").removeClass("zf-has-scroll")}},{key:"_addGlobalListeners",value:function(){var e=this;this.$element&&(this.focusableElements=r.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||a()("body").on("click.zf.reveal",function(t){t.target!==e.$element[0]&&!a.a.contains(e.$element[0],t.target)&&a.a.contains(document,t.target)&&e.close()}),this.options.closeOnEsc&&a()(window).on("keydown.zf.reveal",function(t){r.Keyboard.handleKey(t,"Reveal",{close:function(){e.options.closeOnEsc&&e.close()}})}))}},{key:"close",value:function(){if(!this.isActive||!this.$element.is(":visible"))return!1;var e=this;function t(){var t=parseInt(a()("html").css("top"));0===a()(".reveal:visible").length&&e._removeGlobalClasses(),r.Keyboard.releaseFocus(e.$element),e.$element.attr("aria-hidden",!0),e._enableScroll(t),e.$element.trigger("closed.zf.reveal")}if(this.options.animationOut?(this.options.overlay&&u.Motion.animateOut(this.$overlay,"fade-out"),u.Motion.animateOut(this.$element,this.options.animationOut,t)):(this.$element.hide(this.options.hideDelay),this.options.overlay?this.$overlay.hide(0,t):t()),this.options.closeOnEsc&&a()(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&a()("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,e.options.deepLink&&window.location.hash==="#".concat(this.id))if(window.history.replaceState){var n=window.location.pathname+window.location.search;this.options.updateHistory?window.history.pushState({},"",n):window.history.replaceState("",document.title,n)}else window.location.hash="";this.$activeAnchor.focus()}},{key:"toggle",value:function(){this.isActive?this.close():this.open()}},{key:"_destroy",value:function(){this.options.overlay&&(this.$element.appendTo(a()(this.options.appendTo)),this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),a()(window).off(".zf.reveal:".concat(this.id)),this.onLoadListener&&a()(window).off(this.onLoadListener),0===a()(".reveal:visible").length&&this._removeGlobalClasses()}}])&&h(e.prototype,i),o&&h(e,o),n}();g.defaults={animationIn:"",animationOut:"",showDelay:0,hideDelay:0,closeOnClick:!0,closeOnEsc:!0,multipleOpened:!1,vOffset:"auto",hOffset:"auto",fullScreen:!1,overlay:!0,resetOnClose:!1,deepLink:!1,updateHistory:!1,appendTo:"body",additionalOverlayClasses:""}},"./js/foundation.slider.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Slider",function(){return f});var i=n("jquery"),m=n.n(i),a=n("./js/foundation.util.keyboard.js"),_=n("./js/foundation.util.motion.js"),g=n("./js/foundation.core.utils.js"),s=n("./js/foundation.core.plugin.js"),r=n("./js/foundation.util.touch.js"),l=n("./js/foundation.util.triggers.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,d(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(n,s["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=m.a.extend({},n.defaults,this.$element.data(),e),this.className="Slider",r.Touch.init(m.a),l.Triggers.init(m.a),this._init(),a.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast",HOME:"min",END:"max"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}},{key:"_init",value:function(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):m()("#".concat(this.$handle.attr("aria-controls"))),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=m()().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=1<this.inputs.length?this.inputs.eq(1):m()("#".concat(this.$handle2.attr("aria-controls"))),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),!0,this._setInitAttr(1)),this.setHandles(),this._events()}},{key:"setHandles",value:function(){var t=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0,function(){t._setHandlePos(t.$handle2,t.inputs.eq(1).val(),!0)}):this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0)}},{key:"_reflow",value:function(){this.setHandles()}},{key:"_pctOfBar",value:function(t){var e=$(t-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":e=this._logTransform(e);break;case"log":e=this._powTransform(e)}return e.toFixed(2)}},{key:"_value",value:function(t){switch(this.options.positionValueFunction){case"pow":t=this._powTransform(t);break;case"log":t=this._logTransform(t)}return(this.options.end-this.options.start)*t+parseFloat(this.options.start)}},{key:"_logTransform",value:function(t){return e=this.options.nonLinearBase,n=t*(this.options.nonLinearBase-1)+1,Math.log(n)/Math.log(e);var e,n}},{key:"_powTransform",value:function(t){return(Math.pow(this.options.nonLinearBase,t)-1)/(this.options.nonLinearBase-1)}},{key:"_setHandlePos",value:function(t,e,n,i){if(!this.$element.hasClass(this.options.disabledClass)){(e=parseFloat(e))<this.options.start?e=this.options.start:e>this.options.end&&(e=this.options.end);var o=this.options.doubleSided;if(this.options.vertical&&!n&&(e=this.options.end-e),o)if(0===this.handles.index(t)){var s=parseFloat(this.$handle2.attr("aria-valuenow"));e=s<=e?s-this.options.step:e}else{var a=parseFloat(this.$handle.attr("aria-valuenow"));e=e<=a?a+this.options.step:e}var r=this,l=this.options.vertical,u=l?"height":"width",c=l?"top":"left",d=t[0].getBoundingClientRect()[u],h=this.$element[0].getBoundingClientRect()[u],f=this._pctOfBar(e),p=(100*$((h-d)*f,h)).toFixed(this.options.decimal);e=parseFloat(e.toFixed(this.options.decimal));var m={};if(this._setValues(t,e),o){var g,v=0===this.handles.index(t),y=~~(100*$(d,h));if(v)m[c]="".concat(p,"%"),g=parseFloat(this.$handle2[0].style[c])-p+y,i&&"function"==typeof i&&i();else{var b=parseFloat(this.$handle[0].style[c]);g=p-(isNaN(b)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):b)+y}m["min-".concat(u)]="".concat(g,"%")}this.$element.one("finished.zf.animate",function(){r.$element.trigger("moved.zf.slider",[t])});var w=this.$element.data("dragging")?1e3/60:this.options.moveTime;Object(_.Move)(w,t,function(){isNaN(p)?t.css(c,"".concat(100*f,"%")):t.css(c,"".concat(p,"%")),r.options.doubleSided?r.$fill.css(m):r.$fill.css(u,"".concat(100*f,"%"))}),clearTimeout(r.timeout),r.timeout=setTimeout(function(){r.$element.trigger("changed.zf.slider",[t])},r.options.changedDelay)}}},{key:"_setInitAttr",value:function(t){var e=0===t?this.options.initialStart:this.options.initialEnd,n=this.inputs.eq(t).attr("id")||Object(g.GetYoDigits)(6,"slider");this.inputs.eq(t).attr({id:n,max:this.options.end,min:this.options.start,step:this.options.step}),this.inputs.eq(t).val(e),this.handles.eq(t).attr({role:"slider","aria-controls":n,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":e,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}},{key:"_setValues",value:function(t,e){var n=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(n).val(e),t.attr("aria-valuenow",e)}},{key:"_handleEvent",value:function(t,e,n){var i,o;if(n)i=this._adjustValue(null,n),o=!0;else{t.preventDefault();var s=this.options.vertical,a=s?"height":"width",r=s?"top":"left",l=s?t.pageY:t.pageX,u=(this.$handle[0].getBoundingClientRect()[a],this.$element[0].getBoundingClientRect()[a]),c=s?m()(window).scrollTop():m()(window).scrollLeft(),d=this.$element.offset()[r];t.clientY===t.pageY&&(l+=c);var h,f=l-d,p=$(h=f<0?0:u<f?u:f,u);if(i=this._value(p),Object(g.rtl)()&&!this.options.vertical&&(i=this.options.end-i),i=this._adjustValue(null,i),o=!1,!e)e=v(this.$handle,r,h,a)<=v(this.$handle2,r,h,a)?this.$handle:this.$handle2}this._setHandlePos(e,i,o)}},{key:"_adjustValue",value:function(t,e){var n,i,o,s=this.options.step,a=parseFloat(s/2);return 0===(i=0<=(n=t?parseFloat(t.attr("aria-valuenow")):e)?n%s:s+n%s)?n:n=(o=n-i)+a<=n?o+s:o}},{key:"_events",value:function(){this._eventsForHandle(this.$handle),this.handles[1]&&this._eventsForHandle(this.$handle2)}},{key:"_eventsForHandle",value:function(e){var n,s=this,i=function(t){var e=s.inputs.index(m()(this));s._handleEvent(t,s.handles.eq(e),m()(this).val())};if(this.inputs.off("keyup.zf.slider").on("keyup.zf.slider",function(t){13==t.keyCode&&i.call(this,t)}),this.inputs.off("change.zf.slider").on("change.zf.slider",i),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(t){if(s.$element.data("dragging"))return!1;m()(t.target).is("[data-slider-handle]")||(s.options.doubleSided?s._handleEvent(t):s._handleEvent(t,s.$handle))}),this.options.draggable){this.handles.addTouch();var o=m()("body");e.off("mousedown.zf.slider").on("mousedown.zf.slider",function(t){e.addClass("is-dragging"),s.$fill.addClass("is-dragging"),s.$element.data("dragging",!0),n=m()(t.currentTarget),o.on("mousemove.zf.slider",function(t){t.preventDefault(),s._handleEvent(t,n)}).on("mouseup.zf.slider",function(t){s._handleEvent(t,n),e.removeClass("is-dragging"),s.$fill.removeClass("is-dragging"),s.$element.data("dragging",!1),o.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(t){t.preventDefault()})}e.off("keydown.zf.slider").on("keydown.zf.slider",function(t){var e,n=m()(this),i=s.options.doubleSided?s.handles.index(n):0,o=parseFloat(s.inputs.eq(i).val());a.Keyboard.handleKey(t,"Slider",{decrease:function(){e=o-s.options.step},increase:function(){e=o+s.options.step},decrease_fast:function(){e=o-10*s.options.step},increase_fast:function(){e=o+10*s.options.step},min:function(){e=s.options.start},max:function(){e=s.options.end},handled:function(){t.preventDefault(),s._setHandlePos(n,e,!0)}})})}},{key:"_destroy",value:function(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),clearTimeout(this.timeout)}}])&&u(e.prototype,i),o&&u(e,o),n}();function $(t,e){return t/e}function v(t,e,n,i){return Math.abs(t.position()[e]+t[i]()/2-n)}f.defaults={start:0,end:100,step:1,initialStart:0,initialEnd:100,binding:!1,clickSelect:!0,vertical:!1,draggable:!0,disabled:!1,doubleSided:!1,decimal:2,moveTime:200,disabledClass:"disabled",invertVertical:!1,changedDelay:500,nonLinearBase:5,positionValueFunction:"linear"}},"./js/foundation.smoothScroll.js":function(t,e,n){"use strict";n.r(e),n.d(e,"SmoothScroll",function(){return h});var i=n("jquery"),a=n.n(i),o=n("./js/foundation.core.utils.js"),r=n("./js/foundation.core.plugin.js");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),u(this,c(s).apply(this,arguments))}var e,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(s,r["Plugin"]),e=s,i=[{key:"scrollToLoc",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:s.defaults,n=2<arguments.length?arguments[2]:void 0,i=a()(t);if(!i.length)return!1;var o=Math.round(i.offset().top-e.threshold/2-e.offset);a()("html, body").stop(!0).animate({scrollTop:o},e.animationDuration,e.animationEasing,function(){"function"==typeof n&&n()})}}],(n=[{key:"_setup",value:function(t,e){this.$element=t,this.options=a.a.extend({},s.defaults,this.$element.data(),e),this.className="SmoothScroll",this._init()}},{key:"_init",value:function(){var t=this.$element[0].id||Object(o.GetYoDigits)(6,"smooth-scroll");this.$element.attr({id:t}),this._events()}},{key:"_events",value:function(){this._linkClickListener=this._handleLinkClick.bind(this),this.$element.on("click.zf.smoothScroll",this._linkClickListener),this.$element.on("click.zf.smoothScroll",'a[href^="#"]',this._linkClickListener)}},{key:"_handleLinkClick",value:function(t){var e=this;if(a()(t.currentTarget).is('a[href^="#"]')){var n=t.currentTarget.getAttribute("href");this._inTransition=!0,s.scrollToLoc(n,this.options,function(){e._inTransition=!1}),t.preventDefault()}}},{key:"_destroy",value:function(){this.$element.off("click.zf.smoothScroll",this._linkClickListener),this.$element.off("click.zf.smoothScroll",'a[href^="#"]',this._linkClickListener)}}])&&l(e.prototype,n),i&&l(e,i),s}();h.defaults={animationDuration:500,animationEasing:"linear",threshold:50,offset:0}},"./js/foundation.sticky.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Sticky",function(){return p});var i=n("jquery"),r=n.n(i),s=n("./js/foundation.core.utils.js"),l=n("./js/foundation.util.mediaQuery.js"),a=n("./js/foundation.core.plugin.js"),u=n("./js/foundation.util.triggers.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,h(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,a["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=r.a.extend({},n.defaults,this.$element.data(),e),this.className="Sticky",u.Triggers.init(r.a),this._init()}},{key:"_init",value:function(){l.MediaQuery._init();var t=this.$element.parent("[data-sticky-container]"),e=this.$element[0].id||Object(s.GetYoDigits)(6,"sticky"),n=this;t.length?this.$container=t:(this.wasWrapped=!0,this.$element.wrap(this.options.container),this.$container=this.$element.parent()),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":e,"data-mutate":e}),""!==this.options.anchor&&r()("#"+n.options.anchor).attr({"data-mutate":e}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,this.onLoadListener=Object(s.onLoad)(r()(window),function(){n.containerHeight="none"==n.$element.css("display")?0:n.$element[0].getBoundingClientRect().height,n.$container.css("height",n.containerHeight),n.elemHeight=n.containerHeight,""!==n.options.anchor?n.$anchor=r()("#"+n.options.anchor):n._parsePoints(),n._setSizes(function(){var t=window.pageYOffset;n._calc(!1,t),n.isStuck||n._removeSticky(!(t>=n.topPoint))}),n._events(e.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){for(var t=[""==this.options.topAnchor?1:this.options.topAnchor,""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor],e={},n=0,i=t.length;n<i&&t[n];n++){var o;if("number"==typeof t[n])o=t[n];else{var s=t[n].split(":"),a=r()("#".concat(s[0]));o=a.offset().top,s[1]&&"bottom"===s[1].toLowerCase()&&(o+=a[0].getBoundingClientRect().height)}e[n]=o}this.points=e}},{key:"_events",value:function(n){var i=this,t=this.scrollListener="scroll.zf.".concat(n);this.isOn||(this.canStick&&(this.isOn=!0,r()(window).off(t).on(t,function(t){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,e){i._eventsHandler(n)}),this.$element.on("mutateme.zf.trigger",function(t,e){i._eventsHandler(n)}),this.$anchor&&this.$anchor.on("mutateme.zf.trigger",function(t,e){i._eventsHandler(n)}))}},{key:"_eventsHandler",value:function(t){var e=this,n=this.scrollListener="scroll.zf.".concat(t);e._setSizes(function(){e._calc(!1),e.canStick?e.isOn||e._events(t):e.isOn&&e._pauseListeners(n)})}},{key:"_pauseListeners",value:function(t){this.isOn=!1,r()(window).off(t),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(t,e){if(t&&this._setSizes(),!this.canStick)return this.isStuck&&this._removeSticky(!0),!1;e||(e=window.pageYOffset),e>=this.topPoint?e<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0)}},{key:"_setSticky",value:function(){var t=this,e=this.options.stickTo,n="top"===e?"marginTop":"marginBottom",i="top"===e?"bottom":"top",o={};o[n]="".concat(this.options[n],"em"),o[e]=0,o[i]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-".concat(i)).addClass("is-stuck is-at-".concat(e)).css(o).trigger("sticky.zf.stuckto:".concat(e)),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}},{key:"_removeSticky",value:function(t){var e=this.options.stickTo,n="top"===e,i={},o=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,s=t?"top":"bottom";i[n?"marginTop":"marginBottom"]=0,i.bottom="auto",i.top=t?0:o,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-".concat(e)).addClass("is-anchored is-at-".concat(s)).css(i).trigger("sticky.zf.unstuckfrom:".concat(s))}},{key:"_setSizes",value:function(t){this.canStick=l.MediaQuery.is(this.options.stickyOn),this.canStick||t&&"function"==typeof t&&t();var e=this.$container[0].getBoundingClientRect().width,n=window.getComputedStyle(this.$container[0]),i=parseInt(n["padding-left"],10),o=parseInt(n["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":"".concat(e-i-o,"px")});var s=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(s=0),this.containerHeight=s,this.$container.css({height:s}),this.elemHeight=s,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var a=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",a)}this._setBreakPoints(s,function(){t&&"function"==typeof t&&t()})}},{key:"_setBreakPoints",value:function(t,e){if(!this.canStick){if(!e||"function"!=typeof e)return!1;e()}var n=m(this.options.marginTop),i=m(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,s=this.points?this.points[1]:o+this.anchorHeight,a=window.innerHeight;"top"===this.options.stickTo?(o-=n,s-=t+n):"bottom"===this.options.stickTo&&(o-=a-(t+i),s-=a-i),this.topPoint=o,this.bottomPoint=s,e&&"function"==typeof e&&e()}},{key:"_destroy",value:function(){this._removeSticky(!0),this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger").off("mutateme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),this.scrollListener&&r()(window).off(this.scrollListener),this.onLoadListener&&r()(window).off(this.onLoadListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""})}}])&&c(e.prototype,i),o&&c(e,o),n}();function m(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}p.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1}},"./js/foundation.tabs.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Tabs",function(){return o});var i=n("jquery"),r=n.n(i),l=n("./js/foundation.core.utils.js"),a=n("./js/foundation.util.keyboard.js"),u=n("./js/foundation.util.imageLoader.js"),s=n("./js/foundation.core.plugin.js");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var o=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,f(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,s["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=r.a.extend({},n.defaults,this.$element.data(),e),this.className="Tabs",this._init(),a.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}},{key:"_init",value:function(){var s=this,a=this;if(this._isInitializing=!0,this.$element.attr({role:"tablist"}),this.$tabTitles=this.$element.find(".".concat(this.options.linkClass)),this.$tabContent=r()('[data-tabs-content="'.concat(this.$element[0].id,'"]')),this.$tabTitles.each(function(){var t=r()(this),e=t.find("a"),n=t.hasClass("".concat(a.options.linkActiveClass)),i=e.attr("data-tabs-target")||e[0].hash.slice(1),o=e[0].id?e[0].id:"".concat(i,"-label"),s=r()("#".concat(i));t.attr({role:"presentation"}),e.attr({role:"tab","aria-controls":i,"aria-selected":n,id:o,tabindex:n?"0":"-1"}),s.attr({role:"tabpanel","aria-labelledby":o}),n&&(a._initialAnchor="#".concat(i)),n||s.attr("aria-hidden","true"),n&&a.options.autoFocus&&(a.onLoadListener=Object(l.onLoad)(r()(window),function(){r()("html, body").animate({scrollTop:t.offset().top},a.options.deepLinkSmudgeDelay,function(){e.focus()})}))}),this.options.matchHeight){var t=this.$tabContent.find("img");t.length?Object(u.onImagesLoaded)(t,this._setHeight.bind(this)):this._setHeight()}this._checkDeepLink=function(){var t=window.location.hash;if(!t.length){if(s._isInitializing)return;s._initialAnchor&&(t=s._initialAnchor)}var e=t&&r()(t),n=t&&s.$element.find('[href$="'+t+'"]'),i=!(!e.length||!n.length);if(e&&e.length&&n&&n.length?s.selectTab(e,!0):s._collapse(),i){if(s.options.deepLinkSmudge){var o=s.$element.offset();r()("html, body").animate({scrollTop:o.top},s.options.deepLinkSmudgeDelay)}s.$element.trigger("deeplink.zf.tabs",[n,e])}},this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}},{key:"_events",value:function(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),r()(window).on("changed.zf.mediaquery",this._setHeightMqHandler)),this.options.deepLink&&r()(window).on("hashchange",this._checkDeepLink)}},{key:"_addClickHandler",value:function(){var e=this;this.$element.off("click.zf.tabs").on("click.zf.tabs",".".concat(this.options.linkClass),function(t){t.preventDefault(),t.stopPropagation(),e._handleTabChange(r()(this))})}},{key:"_addKeyHandler",value:function(){var s=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(t){if(9!==t.which){var e,n,i=r()(this),o=i.parent("ul").children("li");o.each(function(t){r()(this).is(i)&&(n=s.options.wrapOnKeys?(e=0===t?o.last():o.eq(t-1),t===o.length-1?o.first():o.eq(t+1)):(e=o.eq(Math.max(0,t-1)),o.eq(Math.min(t+1,o.length-1))))}),a.Keyboard.handleKey(t,"Tabs",{open:function(){i.find('[role="tab"]').focus(),s._handleTabChange(i)},previous:function(){e.find('[role="tab"]').focus(),s._handleTabChange(e)},next:function(){n.find('[role="tab"]').focus(),s._handleTabChange(n)},handled:function(){t.stopPropagation(),t.preventDefault()}})}})}},{key:"_handleTabChange",value:function(t,e){if(t.hasClass("".concat(this.options.linkActiveClass)))this.options.activeCollapse&&this._collapse();else{var n=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass)),i=t.find('[role="tab"]'),o=i.attr("data-tabs-target"),s=o&&o.length?"#".concat(o):i[0].hash,a=this.$tabContent.find(s);this._collapseTab(n),this._openTab(t),this.options.deepLink&&!e&&(this.options.updateHistory?history.pushState({},"",s):history.replaceState({},"",s)),this.$element.trigger("change.zf.tabs",[t,a]),a.find("[data-mutate]").trigger("mutateme.zf.trigger")}}},{key:"_openTab",value:function(t){var e=t.find('[role="tab"]'),n=e.attr("data-tabs-target")||e[0].hash.slice(1),i=this.$tabContent.find("#".concat(n));t.addClass("".concat(this.options.linkActiveClass)),e.attr({"aria-selected":"true",tabindex:"0"}),i.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")}},{key:"_collapseTab",value:function(t){var e=t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({"aria-selected":"false",tabindex:-1});r()("#".concat(e.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({"aria-hidden":"true"})}},{key:"_collapse",value:function(){var t=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass));t.length&&(this._collapseTab(t),this.$element.trigger("collapse.zf.tabs",[t]))}},{key:"selectTab",value:function(t,e){var n;(n="object"===c(t)?t[0].id:t).indexOf("#")<0&&(n="#".concat(n));var i=this.$tabTitles.has('[href$="'.concat(n,'"]'));this._handleTabChange(i,e)}},{key:"_setHeight",value:function(){var i=0,o=this;this.$tabContent.find(".".concat(this.options.panelClass)).css("height","").each(function(){var t=r()(this),e=t.hasClass("".concat(o.options.panelActiveClass));e||t.css({visibility:"hidden",display:"block"});var n=this.getBoundingClientRect().height;e||t.css({visibility:"",display:""}),i=i<n?n:i}).css("height","".concat(i,"px"))}},{key:"_destroy",value:function(){this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&r()(window).off("changed.zf.mediaquery",this._setHeightMqHandler),this.options.deepLink&&r()(window).off("hashchange",this._checkDeepLink),this.onLoadListener&&r()(window).off(this.onLoadListener)}}])&&d(e.prototype,i),o&&d(e,o),n}();o.defaults={deepLink:!1,deepLinkSmudge:!1,deepLinkSmudgeDelay:300,updateHistory:!1,autoFocus:!1,wrapOnKeys:!0,matchHeight:!1,activeCollapse:!1,linkClass:"tabs-title",linkActiveClass:"is-active",panelClass:"tabs-panel",panelActiveClass:"is-active"}},"./js/foundation.toggler.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Toggler",function(){return p});var i=n("jquery"),s=n.n(i),a=n("./js/foundation.util.motion.js"),r=n("./js/foundation.core.plugin.js"),l=n("./js/foundation.core.utils.js"),u=n("./js/foundation.util.triggers.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,h(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,r["Plugin"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=s.a.extend({},n.defaults,t.data(),e),this.className="",this.className="Toggler",u.Triggers.init(s.a),this._init(),this._events()}},{key:"_init",value:function(){var t;this.options.animate?(t=this.options.animate.split(" "),this.animationIn=t[0],this.animationOut=t[1]||null):(t=this.$element.data("toggler"),this.className="."===t[0]?t.slice(1):t);var o=this.$element[0].id,e=s()('[data-open~="'.concat(o,'"], [data-close~="').concat(o,'"], [data-toggle~="').concat(o,'"]'));e.attr("aria-expanded",!this.$element.is(":hidden")),e.each(function(t,e){var n=s()(e),i=n.attr("aria-controls")||"";new RegExp("\\b".concat(Object(l.RegExpEscape)(o),"\\b")).test(i)||n.attr("aria-controls",i?"".concat(i," ").concat(o):o)})}},{key:"_events",value:function(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}},{key:"toggle",value:function(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function(){this.$element.toggleClass(this.className);var t=this.$element.hasClass(this.className);t?this.$element.trigger("on.zf.toggler"):this.$element.trigger("off.zf.toggler"),this._updateARIA(t),this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function(){var t=this;this.$element.is(":hidden")?a.Motion.animateIn(this.$element,this.animationIn,function(){t._updateARIA(!0),this.trigger("on.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")}):a.Motion.animateOut(this.$element,this.animationOut,function(){t._updateARIA(!1),this.trigger("off.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")})}},{key:"_updateARIA",value:function(t){var e=this.$element[0].id;s()('[data-open="'.concat(e,'"], [data-close="').concat(e,'"], [data-toggle="').concat(e,'"]')).attr({"aria-expanded":!!t})}},{key:"_destroy",value:function(){this.$element.off(".zf.toggler")}}])&&c(e.prototype,i),o&&c(e,o),n}();p.defaults={animate:!1}},"./js/foundation.tooltip.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Tooltip",function(){return m});var i=n("jquery"),s=n.n(i),a=n("./js/foundation.core.utils.js"),r=n("./js/foundation.util.mediaQuery.js"),l=n("./js/foundation.util.triggers.js"),u=n("./js/foundation.positionable.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t,e,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,f(n).apply(this,arguments))}var e,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,u["Positionable"]),e=n,(i=[{key:"_setup",value:function(t,e){this.$element=t,this.options=s.a.extend({},n.defaults,this.$element.data(),e),this.className="Tooltip",this.isActive=!1,this.isClick=!1,l.Triggers.init(s.a),this._init()}},{key:"_init",value:function(){r.MediaQuery._init();var t=this.$element.attr("aria-describedby")||Object(a.GetYoDigits)(6,"tooltip");this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?s()(this.options.template):this._buildTemplate(t),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":t,"data-yeti-box":t,"data-toggle":t,"data-resize":t}).addClass(this.options.triggerClass),h(f(n.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function(){var t=this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);return t?t[0]:"top"}},{key:"_getDefaultAlignment",value:function(){return"center"}},{key:"_getHOffset",value:function(){return"left"===this.position||"right"===this.position?this.options.hOffset+this.options.tooltipWidth:this.options.hOffset}},{key:"_getVOffset",value:function(){return"top"===this.position||"bottom"===this.position?this.options.vOffset+this.options.tooltipHeight:this.options.vOffset}},{key:"_buildTemplate",value:function(t){var e="".concat(this.options.tooltipClass," ").concat(this.options.templateClasses).trim();return s()("<div></div>").addClass(e).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:t})}},{key:"_setPosition",value:function(){h(f(n.prototype),"_setPosition",this).call(this,this.$element,this.template)}},{key:"show",value:function(){if("all"!==this.options.showOn&&!r.MediaQuery.is(this.options.showOn))return!1;this.template.css("visibility","hidden").show(),this._setPosition(),this.template.removeClass("top bottom left right").addClass(this.position),this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-"+this.alignment),this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),this.isActive=!0,this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){}),this.$element.trigger("show.zf.tooltip")}},{key:"hide",value:function(){var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1}),this.$element.trigger("hide.zf.tooltip")}},{key:"_events",value:function(){var e=this,n=(this.template,!1);this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(t){e.isActive||(e.timeout=setTimeout(function(){e.show()},e.options.hoverDelay))}).on("mouseleave.zf.tooltip",Object(a.ignoreMousedisappear)(function(t){clearTimeout(e.timeout),(!n||e.isClick&&!e.options.clickOpen)&&e.hide()})),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(t){t.stopImmediatePropagation(),e.isClick||(e.isClick=!0,!e.options.disableHover&&e.$element.attr("tabindex")||e.isActive||e.show())}):this.$element.on("mousedown.zf.tooltip",function(t){t.stopImmediatePropagation(),e.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(t){e.isActive?e.hide():e.show()}),this.$element.on({"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(t){if(n=!0,e.isClick)return e.options.clickOpen||(n=!1),!1;e.show()}).on("focusout.zf.tooltip",function(t){n=!1,e.isClick=!1,e.hide()}).on("resizeme.zf.trigger",function(){e.isActive&&e._setPosition()})}},{key:"toggle",value:function(){this.isActive?this.hide():this.show()}},{key:"_destroy",value:function(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove()}}])&&c(e.prototype,i),o&&c(e,o),n}();m.defaults={disableForTouch:!1,hoverDelay:200,fadeInDuration:150,fadeOutDuration:150,disableHover:!1,templateClasses:"",tooltipClass:"tooltip",triggerClass:"has-tip",showOn:"small",template:"",tipText:"",touchCloseText:"Tap to close.",clickOpen:!0,position:"auto",alignment:"auto",allowOverlap:!1,allowBottomOverlap:!1,vOffset:0,hOffset:0,tooltipHeight:14,tooltipWidth:12,allowHtml:!1}},"./js/foundation.util.box.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Box",function(){return i});var a=n("./js/foundation.core.utils.js"),i={ImNotTouchingYou:function(t,e,n,i,o){return 0===s(t,e,n,i,o)},OverlapArea:s,GetDimensions:d,GetOffsets:function(t,e,n,i,o,s){switch(console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"),n){case"top":return Object(a.rtl)()?r(t,e,"top","left",i,o,s):r(t,e,"top","right",i,o,s);case"bottom":return Object(a.rtl)()?r(t,e,"bottom","left",i,o,s):r(t,e,"bottom","right",i,o,s);case"center top":return r(t,e,"top","center",i,o,s);case"center bottom":return r(t,e,"bottom","center",i,o,s);case"center left":return r(t,e,"left","center",i,o,s);case"center right":return r(t,e,"right","center",i,o,s);case"left bottom":return r(t,e,"bottom","left",i,o,s);case"right bottom":return r(t,e,"bottom","right",i,o,s);case"center":return{left:$eleDims.windowDims.offset.left+$eleDims.windowDims.width/2-$eleDims.width/2+o,top:$eleDims.windowDims.offset.top+$eleDims.windowDims.height/2-($eleDims.height/2+i)};case"reveal":return{left:($eleDims.windowDims.width-$eleDims.width)/2+o,top:$eleDims.windowDims.offset.top+i};case"reveal full":return{left:$eleDims.windowDims.offset.left,top:$eleDims.windowDims.offset.top};default:return{left:Object(a.rtl)()?$anchorDims.offset.left-$eleDims.width+$anchorDims.width-o:$anchorDims.offset.left+o,top:$anchorDims.offset.top+$anchorDims.height+i}}},GetExplicitOffsets:r};function s(t,e,n,i,o){var s,a,r,l,u=d(t);if(e){var c=d(e);a=c.height+c.offset.top-(u.offset.top+u.height),s=u.offset.top-c.offset.top,r=u.offset.left-c.offset.left,l=c.width+c.offset.left-(u.offset.left+u.width)}else a=u.windowDims.height+u.windowDims.offset.top-(u.offset.top+u.height),s=u.offset.top-u.windowDims.offset.top,r=u.offset.left-u.windowDims.offset.left,l=u.windowDims.width-(u.offset.left+u.width);return a=o?0:Math.min(a,0),s=Math.min(s,0),r=Math.min(r,0),l=Math.min(l,0),n?r+l:i?s+a:Math.sqrt(s*s+a*a+r*r+l*l)}function d(t){if((t=t.length?t[0]:t)===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var e=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect(),i=document.body.getBoundingClientRect(),o=window.pageYOffset,s=window.pageXOffset;return{width:e.width,height:e.height,offset:{top:e.top+o,left:e.left+s},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+s}},windowDims:{width:i.width,height:i.height,offset:{top:o,left:s}}}}function r(t,e,n,i,o,s,a){var r,l,u=d(t),c=e?d(e):null;switch(n){case"top":r=c.offset.top-(u.height+o);break;case"bottom":r=c.offset.top+c.height+o;break;case"left":l=c.offset.left-(u.width+s);break;case"right":l=c.offset.left+c.width+s}switch(n){case"top":case"bottom":switch(i){case"left":l=c.offset.left+s;break;case"right":l=c.offset.left-u.width+c.width-s;break;case"center":l=a?s:c.offset.left+c.width/2-u.width/2+s}break;case"right":case"left":switch(i){case"bottom":r=c.offset.top-o+c.height-u.height;break;case"top":r=c.offset.top+o;break;case"center":r=c.offset.top+o+c.height/2-u.height/2}}return{top:r,left:l}}},"./js/foundation.util.imageLoader.js":function(t,e,n){"use strict";n.r(e),n.d(e,"onImagesLoaded",function(){return s});var i=n("jquery"),o=n.n(i);function s(t,e){var n=t.length;function i(){0===--n&&e()}0===n&&e(),t.each(function(){if(this.complete&&void 0!==this.naturalWidth)i();else{var t=new Image,n="load.zf.images error.zf.images";o()(t).one(n,function t(e){o()(this).off(n,t),i()}),t.src=o()(this).attr("src")}})}},"./js/foundation.util.keyboard.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Keyboard",function(){return c});var i=n("jquery"),r=n.n(i),l=n("./js/foundation.core.utils.js"),o={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",35:"END",36:"HOME",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},u={};function s(t){return!!t&&t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!r()(this).is(":visible")||r()(this).attr("tabindex")<0)})}function a(t){var e=o[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();return e=e.replace(/\W+/,""),t.shiftKey&&(e="SHIFT_".concat(e)),t.ctrlKey&&(e="CTRL_".concat(e)),t.altKey&&(e="ALT_".concat(e)),e=e.replace(/_$/,"")}var c={keys:function(t){var e={};for(var n in t)e[t[n]]=t[n];return e}(o),parseKey:a,handleKey:function(t,e,n){var i,o=u[e],s=this.parseKey(t);if(!o)return console.warn("Component not defined!");if((i=n[(void 0===o.ltr?o:Object(l.rtl)()?r.a.extend({},o.ltr,o.rtl):r.a.extend({},o.rtl,o.ltr))[s]])&&"function"==typeof i){var a=i.apply();(n.handled||"function"==typeof n.handled)&&n.handled(a)}else(n.unhandled||"function"==typeof n.unhandled)&&n.unhandled()},findFocusable:s,register:function(t,e){u[t]=e},trapFocus:function(t){var e=s(t),n=e.eq(0),i=e.eq(-1);t.on("keydown.zf.trapfocus",function(t){t.target===i[0]&&"TAB"===a(t)?(t.preventDefault(),n.focus()):t.target===n[0]&&"SHIFT_TAB"===a(t)&&(t.preventDefault(),i.focus())})},releaseFocus:function(t){t.off("keydown.zf.trapfocus")}}},"./js/foundation.util.mediaQuery.js":function(t,e,n){"use strict";n.r(e),n.d(e,"MediaQuery",function(){return a});var i=n("jquery"),s=n.n(i);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.matchMedia||(window.matchMedia=function(){var e=window.styleMedia||window.media;if(!e){var n,i=document.createElement("style"),t=document.getElementsByTagName("script")[0];i.type="text/css",i.id="matchmediajs-test",t?t.parentNode.insertBefore(i,t):document.head.appendChild(i),n="getComputedStyle"in window&&window.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function(t){var e="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=e:i.textContent=e,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());var a={queries:[],current:"",_init:function(){s()("meta.foundation-mq").length||s()('<meta class="foundation-mq">').appendTo(document.head);var t,e,n,i=s()(".foundation-mq").css("font-family");for(var o in n={},t="string"==typeof(e=i)&&(e=e.trim().slice(1,-1))?n=e.split("&").reduce(function(t,e){var n=e.replace(/\+/g," ").split("="),i=n[0],o=n[1];return i=decodeURIComponent(i),o=void 0===o?null:decodeURIComponent(o),t.hasOwnProperty(i)?Array.isArray(t[i])?t[i].push(o):t[i]=[t[i],o]:t[i]=o,t},{}):n)t.hasOwnProperty(o)&&this.queries.push({name:o,value:"only screen and (min-width: ".concat(t[o],")")});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(t){var e=this.get(t);return!!e&&window.matchMedia(e).matches},is:function(t){return 1<(t=t.trim().split(" ")).length&&"only"===t[1]?t[0]===this._getCurrentSize():this.atLeast(t[0])},get:function(t){for(var e in this.queries)if(this.queries.hasOwnProperty(e)){var n=this.queries[e];if(t===n.name)return n.value}return null},_getCurrentSize:function(){for(var t,e=0;e<this.queries.length;e++){var n=this.queries[e];window.matchMedia(n.value).matches&&(t=n)}return"object"===o(t)?t.name:t},_watcher:function(){var n=this;s()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery",function(){var t=n._getCurrentSize(),e=n.current;t!==e&&(n.current=t,s()(window).trigger("changed.zf.mediaquery",[t,e]))})}}},"./js/foundation.util.motion.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Move",function(){return s}),n.d(e,"Motion",function(){return o});var i=n("jquery"),r=n.n(i),l=n("./js/foundation.core.utils.js"),u=["mui-enter","mui-leave"],c=["mui-enter-active","mui-leave-active"],o={animateIn:function(t,e,n){a(!0,t,e,n)},animateOut:function(t,e,n){a(!1,t,e,n)}};function s(n,i,o){var s,a,r=null;if(0===n)return o.apply(i),void i.trigger("finished.zf.animate",[i]).triggerHandler("finished.zf.animate",[i]);s=window.requestAnimationFrame(function t(e){r||(r=e),a=e-r,o.apply(i),a<n?s=window.requestAnimationFrame(t,i):(window.cancelAnimationFrame(s),i.trigger("finished.zf.animate",[i]).triggerHandler("finished.zf.animate",[i]))})}function a(t,e,n,i){if((e=r()(e).eq(0)).length){var o=t?u[0]:u[1],s=t?c[0]:c[1];a(),e.addClass(n).css("transition","none"),requestAnimationFrame(function(){e.addClass(o),t&&e.show()}),requestAnimationFrame(function(){e[0].offsetWidth,e.css("transition","").addClass(s)}),e.one(Object(l.transitionend)(e),function(){t||e.hide();a(),i&&i.apply(e)})}function a(){e[0].style.transitionDuration=0,e.removeClass("".concat(o," ").concat(s," ").concat(n))}}},"./js/foundation.util.nest.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Nest",function(){return o});var i=n("jquery"),r=n.n(i),o={Feather:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"zf";t.attr("role","menubar");var e=t.find("li").attr({role:"menuitem"}),i="is-".concat(n,"-submenu"),o="".concat(i,"-item"),s="is-".concat(n,"-submenu-parent"),a="accordion"!==n;e.each(function(){var t=r()(this),e=t.children("ul");e.length&&(t.addClass(s),a&&(t.attr({"aria-haspopup":!0,"aria-label":t.children("a:first").text()}),"drilldown"===n&&t.attr({"aria-expanded":!1})),e.addClass("submenu ".concat(i)).attr({"data-submenu":"",role:"menubar"}),"drilldown"===n&&e.attr({"aria-hidden":!0})),t.parent("[data-submenu]").length&&t.addClass("is-submenu-item ".concat(o))})},Burn:function(t,e){var n="is-".concat(e,"-submenu"),i="".concat(n,"-item"),o="is-".concat(e,"-submenu-parent");t.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(n," ").concat(i," ").concat(o," is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display","")}}},"./js/foundation.util.timer.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Timer",function(){return i});n("jquery");function i(e,t,n){var i,o,s=this,a=t.duration,r=Object.keys(e.data())[0]||"timer",l=-1;this.isPaused=!1,this.restart=function(){l=-1,clearTimeout(o),this.start()},this.start=function(){this.isPaused=!1,clearTimeout(o),l=l<=0?a:l,e.data("paused",!1),i=Date.now(),o=setTimeout(function(){t.infinite&&s.restart(),n&&"function"==typeof n&&n()},l),e.trigger("timerstart.zf.".concat(r))},this.pause=function(){this.isPaused=!0,clearTimeout(o),e.data("paused",!0);var t=Date.now();l-=t-i,e.trigger("timerpaused.zf.".concat(r))}}},"./js/foundation.util.touch.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Touch",function(){return c});var i=n("jquery"),o=n.n(i);function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a,r,l,u,c={},d=!1,h=!1;function f(t){if(this.removeEventListener("touchmove",p),this.removeEventListener("touchend",f),!h){var e=o.a.Event("tap",u||t);o()(this).trigger(e)}u=null,h=d=!1}function p(t){if(o.a.spotSwipe.preventDefault&&t.preventDefault(),d){var e,n=t.touches[0].pageX,i=(t.touches[0].pageY,a-n);h=!0,l=(new Date).getTime()-r,Math.abs(i)>=o.a.spotSwipe.moveThreshold&&l<=o.a.spotSwipe.timeThreshold&&(e=0<i?"left":"right"),e&&(t.preventDefault(),f.apply(this,arguments),o()(this).trigger(o.a.Event("swipe",t),e).trigger(o.a.Event("swipe".concat(e),t)))}}function m(t){1==t.touches.length&&(a=t.touches[0].pageX,t.touches[0].pageY,u=t,h=!(d=!0),r=(new Date).getTime(),this.addEventListener("touchmove",p,!1),this.addEventListener("touchend",f,!1))}function g(){this.addEventListener&&this.addEventListener("touchstart",m,!1)}var v=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.version="1.0.0",this.enabled="ontouchstart"in document.documentElement,this.preventDefault=!1,this.moveThreshold=75,this.timeThreshold=200,this.$=t,this._init()}var t,n,i;return t=e,(n=[{key:"_init",value:function(){var t=this.$;t.event.special.swipe={setup:g},t.event.special.tap={setup:g},t.each(["left","up","down","right"],function(){t.event.special["swipe".concat(this)]={setup:function(){t(this).on("swipe",t.noop)}}})}}])&&s(t.prototype,n),i&&s(t,i),e}();c.setupSpotSwipe=function(t){t.spotSwipe=new v(t)},c.setupTouchHandler=function(i){i.fn.addTouch=function(){this.each(function(t,e){i(e).bind("touchstart touchmove touchend touchcancel",function(t){n(t)})});var n=function(t){var e,n=t.changedTouches[0],i={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[t.type];"MouseEvent"in window&&"function"==typeof window.MouseEvent?e=new window.MouseEvent(i,{bubbles:!0,cancelable:!0,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY}):(e=document.createEvent("MouseEvent")).initMouseEvent(i,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(e)}}},c.init=function(t){void 0===t.spotSwipe&&(c.setupSpotSwipe(t),c.setupTouchHandler(t))}},"./js/foundation.util.triggers.js":function(t,e,n){"use strict";n.r(e),n.d(e,"Triggers",function(){return c});var i=n("jquery"),s=n.n(i),o=n("./js/foundation.core.utils.js"),a=n("./js/foundation.util.motion.js");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if("".concat(t[e],"MutationObserver")in window)return window["".concat(t[e],"MutationObserver")];return!1}(),u=function(e,n){e.data(n).split(" ").forEach(function(t){s()("#".concat(t))["close"===n?"trigger":"triggerHandler"]("".concat(n,".zf.trigger"),[e])})},c={Listeners:{Basic:{},Global:{}},Initializers:{}};function d(e,t,n){var i,o=Array.prototype.slice.call(arguments,3);s()(window).off(t).on(t,function(t){i&&clearTimeout(i),i=setTimeout(function(){n.apply(null,o)},e||10)})}c.Listeners.Basic={openListener:function(){u(s()(this),"open")},closeListener:function(){s()(this).data("close")?u(s()(this),"close"):s()(this).trigger("close.zf.trigger")},toggleListener:function(){s()(this).data("toggle")?u(s()(this),"toggle"):s()(this).trigger("toggle.zf.trigger")},closeableListener:function(t){t.stopPropagation();var e=s()(this).data("closable");""!==e?a.Motion.animateOut(s()(this),e,function(){s()(this).trigger("closed.zf")}):s()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function(){var t=s()(this).data("toggle-focus");s()("#".concat(t)).triggerHandler("toggle.zf.trigger",[s()(this)])}},c.Initializers.addOpenListener=function(t){t.off("click.zf.trigger",c.Listeners.Basic.openListener),t.on("click.zf.trigger","[data-open]",c.Listeners.Basic.openListener)},c.Initializers.addCloseListener=function(t){t.off("click.zf.trigger",c.Listeners.Basic.closeListener),t.on("click.zf.trigger","[data-close]",c.Listeners.Basic.closeListener)},c.Initializers.addToggleListener=function(t){t.off("click.zf.trigger",c.Listeners.Basic.toggleListener),t.on("click.zf.trigger","[data-toggle]",c.Listeners.Basic.toggleListener)},c.Initializers.addCloseableListener=function(t){t.off("close.zf.trigger",c.Listeners.Basic.closeableListener),t.on("close.zf.trigger","[data-closeable], [data-closable]",c.Listeners.Basic.closeableListener)},c.Initializers.addToggleFocusListener=function(t){t.off("focus.zf.trigger blur.zf.trigger",c.Listeners.Basic.toggleFocusListener),t.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",c.Listeners.Basic.toggleFocusListener)},c.Listeners.Global={resizeListener:function(t){l||t.each(function(){s()(this).triggerHandler("resizeme.zf.trigger")}),t.attr("data-events","resize")},scrollListener:function(t){l||t.each(function(){s()(this).triggerHandler("scrollme.zf.trigger")}),t.attr("data-events","scroll")},closeMeListener:function(t,e){var n=t.namespace.split(".")[0];s()("[data-".concat(n,"]")).not('[data-yeti-box="'.concat(e,'"]')).each(function(){var t=s()(this);t.triggerHandler("close.zf.trigger",[t])})}},c.Initializers.addClosemeListener=function(t){var e=s()("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(t&&("string"==typeof t?n.push(t):"object"===r(t)&&"string"==typeof t[0]?n=n.concat(t):console.error("Plugin names must be strings")),e.length){var i=n.map(function(t){return"closeme.zf.".concat(t)}).join(" ");s()(window).off(i).on(i,c.Listeners.Global.closeMeListener)}},c.Initializers.addResizeListener=function(t){var e=s()("[data-resize]");e.length&&d(t,"resize.zf.trigger",c.Listeners.Global.resizeListener,e)},c.Initializers.addScrollListener=function(t){var e=s()("[data-scroll]");e.length&&d(t,"scroll.zf.trigger",c.Listeners.Global.scrollListener,e)},c.Initializers.addMutationEventsListener=function(t){if(!l)return!1;var e=t.find("[data-resize], [data-scroll], [data-mutate]"),n=function(t){var e=s()(t[0].target);switch(t[0].type){case"attributes":"scroll"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("scrollme.zf.trigger",[e,window.pageYOffset]),"resize"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("resizeme.zf.trigger",[e]),"style"===t[0].attributeName&&(e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]));break;case"childList":e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]);break;default:return!1}};if(e.length)for(var i=0;i<=e.length-1;i++){new l(n).observe(e[i],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},c.Initializers.addSimpleListeners=function(){var t=s()(document);c.Initializers.addOpenListener(t),c.Initializers.addCloseListener(t),c.Initializers.addToggleListener(t),c.Initializers.addCloseableListener(t),c.Initializers.addToggleFocusListener(t)},c.Initializers.addGlobalListeners=function(){var t=s()(document);c.Initializers.addMutationEventsListener(t),c.Initializers.addResizeListener(),c.Initializers.addScrollListener(),c.Initializers.addClosemeListener()},c.init=function(t,e){Object(o.onLoad)(t(window),function(){!0!==t.triggersInitialized&&(c.Initializers.addSimpleListeners(),c.Initializers.addGlobalListeners(),t.triggersInitialized=!0)}),e&&(e.Triggers=c,e.IHearYou=c.Initializers.addGlobalListeners)}},0:function(t,e,n){t.exports=n("./js/entries/foundation.js")},jquery:function(t,e){t.exports=n}})});
//# sourceMappingURL=foundation.min.js.map

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.7.13 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2018, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
(function($) {
	"use strict";

	if('undefined' === typeof $) {
		if('console' in window){ window.console.info('Too much lightness, Featherlight needs jQuery.'); }
		return;
	}
	if($.fn.jquery.match(/-ajax/)) {
		if('console' in window){ window.console.info('Featherlight needs regular jQuery, not the slim version.'); }
		return;
	}
	/* Featherlight is exported as $.featherlight.
	   It is a function used to open a featherlight lightbox.

	   [tech]
	   Featherlight uses prototype inheritance.
	   Each opened lightbox will have a corresponding object.
	   That object may have some attributes that override the
	   prototype's.
	   Extensions created with Featherlight.extend will have their
	   own prototype that inherits from Featherlight's prototype,
	   thus attributes can be overriden either at the object level,
	   or at the extension level.
	   To create callbacks that chain themselves instead of overriding,
	   use chainCallbacks.
	   For those familiar with CoffeeScript, this correspond to
	   Featherlight being a class and the Gallery being a class
	   extending Featherlight.
	   The chainCallbacks is used since we don't have access to
	   CoffeeScript's `super`.
	*/

	function Featherlight($content, config) {
		if(this instanceof Featherlight) {  /* called with new */
			this.id = Featherlight.id++;
			this.setup($content, config);
			this.chainCallbacks(Featherlight._callbackChain);
		} else {
			var fl = new Featherlight($content, config);
			fl.open();
			return fl;
		}
	}

	var opened = [],
		pruneOpened = function(remove) {
			opened = $.grep(opened, function(fl) {
				return fl !== remove && fl.$instance.closest('body').length > 0;
			} );
			return opened;
		};

	// Removes keys of `set` from `obj` and returns the removed key/values.
	function slice(obj, set) {
		var r = {};
		for (var key in obj) {
			if (key in set) {
				r[key] = obj[key];
				delete obj[key];
			}
		}
		return r;
	}

	// NOTE: List of available [iframe attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).
	var iFrameAttributeSet = {
		allow: 1, allowfullscreen: 1, frameborder: 1, height: 1, longdesc: 1, marginheight: 1, marginwidth: 1,
		mozallowfullscreen: 1, name: 1, referrerpolicy: 1, sandbox: 1, scrolling: 1, src: 1, srcdoc: 1, style: 1,
		webkitallowfullscreen: 1, width: 1
	};

	// Converts camelCased attributes to dasherized versions for given prefix:
	//   parseAttrs({hello: 1, hellFrozeOver: 2}, 'hell') => {froze-over: 2}
	function parseAttrs(obj, prefix) {
		var attrs = {},
			regex = new RegExp('^' + prefix + '([A-Z])(.*)');
		for (var key in obj) {
			var match = key.match(regex);
			if (match) {
				var dasherized = (match[1] + match[2].replace(/([A-Z])/g, '-$1')).toLowerCase();
				attrs[dasherized] = obj[key];
			}
		}
		return attrs;
	}

	/* document wide key handler */
	var eventMap = { keyup: 'onKeyUp', resize: 'onResize' };

	var globalEventHandler = function(event) {
		$.each(Featherlight.opened().reverse(), function() {
			if (!event.isDefaultPrevented()) {
				if (false === this[eventMap[event.type]](event)) {
					event.preventDefault(); event.stopPropagation(); return false;
			  }
			}
		});
	};

	var toggleGlobalEvents = function(set) {
			if(set !== Featherlight._globalHandlerInstalled) {
				Featherlight._globalHandlerInstalled = set;
				var events = $.map(eventMap, function(_, name) { return name+'.'+Featherlight.prototype.namespace; } ).join(' ');
				$(window)[set ? 'on' : 'off'](events, globalEventHandler);
			}
		};

	Featherlight.prototype = {
		constructor: Featherlight,
		/*** defaults ***/
		/* extend featherlight with defaults and methods */
		namespace:      'featherlight',        /* Name of the events and css class prefix */
		targetAttr:     'data-featherlight',   /* Attribute of the triggered element that contains the selector to the lightbox content */
		variant:        null,                  /* Class that will be added to change look of the lightbox */
		resetCss:       false,                 /* Reset all css */
		background:     null,                  /* Custom DOM for the background, wrapper and the closebutton */
		openTrigger:    'click',               /* Event that triggers the lightbox */
		closeTrigger:   'click',               /* Event that triggers the closing of the lightbox */
		filter:         null,                  /* Selector to filter events. Think $(...).on('click', filter, eventHandler) */
		root:           'body',                /* Where to append featherlights */
		openSpeed:      250,                   /* Duration of opening animation */
		closeSpeed:     250,                   /* Duration of closing animation */
		closeOnClick:   'background',          /* Close lightbox on click ('background', 'anywhere' or false) */
		closeOnEsc:     true,                  /* Close lightbox when pressing esc */
		closeIcon:      '&#10005;',            /* Close icon */
		loading:        '',                    /* Content to show while initial content is loading */
		persist:        false,                 /* If set, the content will persist and will be shown again when opened again. 'shared' is a special value when binding multiple elements for them to share the same content */
		otherClose:     null,                  /* Selector for alternate close buttons (e.g. "a.close") */
		beforeOpen:     $.noop,                /* Called before open. can return false to prevent opening of lightbox. Gets event as parameter, this contains all data */
		beforeContent:  $.noop,                /* Called when content is loaded. Gets event as parameter, this contains all data */
		beforeClose:    $.noop,                /* Called before close. can return false to prevent opening of lightbox. Gets event as parameter, this contains all data */
		afterOpen:      $.noop,                /* Called after open. Gets event as parameter, this contains all data */
		afterContent:   $.noop,                /* Called after content is ready and has been set. Gets event as parameter, this contains all data */
		afterClose:     $.noop,                /* Called after close. Gets event as parameter, this contains all data */
		onKeyUp:        $.noop,                /* Called on key up for the frontmost featherlight */
		onResize:       $.noop,                /* Called after new content and when a window is resized */
		type:           null,                  /* Specify type of lightbox. If unset, it will check for the targetAttrs value. */
		contentFilters: ['jquery', 'image', 'html', 'ajax', 'iframe', 'text'], /* List of content filters to use to determine the content */

		/*** methods ***/
		/* setup iterates over a single instance of featherlight and prepares the background and binds the events */
		setup: function(target, config){
			/* all arguments are optional */
			if (typeof target === 'object' && target instanceof $ === false && !config) {
				config = target;
				target = undefined;
			}

			var self = $.extend(this, config, {target: target}),
				css = !self.resetCss ? self.namespace : self.namespace+'-reset', /* by adding -reset to the classname, we reset all the default css */
				$background = $(self.background || [
					'<div class="'+css+'-loading '+css+'">',
						'<div class="'+css+'-content">',
							'<button class="'+css+'-close-icon '+ self.namespace + '-close" aria-label="Close">',
								self.closeIcon,
							'</button>',
							'<div class="'+self.namespace+'-inner">' + self.loading + '</div>',
						'</div>',
					'</div>'].join('')),
				closeButtonSelector = '.'+self.namespace+'-close' + (self.otherClose ? ',' + self.otherClose : '');

			self.$instance = $background.clone().addClass(self.variant); /* clone DOM for the background, wrapper and the close button */

			/* close when click on background/anywhere/null or closebox */
			self.$instance.on(self.closeTrigger+'.'+self.namespace, function(event) {
				if(event.isDefaultPrevented()) {
					return;
				}
				var $target = $(event.target);
				if( ('background' === self.closeOnClick  && $target.is('.'+self.namespace))
					|| 'anywhere' === self.closeOnClick
					|| $target.closest(closeButtonSelector).length ){
					self.close(event);
					event.preventDefault();
				}
			});

			return this;
		},

		/* this method prepares the content and converts it into a jQuery object or a promise */
		getContent: function(){
			if(this.persist !== false && this.$content) {
				return this.$content;
			}
			var self = this,
				filters = this.constructor.contentFilters,
				readTargetAttr = function(name){ return self.$currentTarget && self.$currentTarget.attr(name); },
				targetValue = readTargetAttr(self.targetAttr),
				data = self.target || targetValue || '';

			/* Find which filter applies */
			var filter = filters[self.type]; /* check explicit type like {type: 'image'} */

			/* check explicit type like data-featherlight="image" */
			if(!filter && data in filters) {
				filter = filters[data];
				data = self.target && targetValue;
			}
			data = data || readTargetAttr('href') || '';

			/* check explicity type & content like {image: 'photo.jpg'} */
			if(!filter) {
				for(var filterName in filters) {
					if(self[filterName]) {
						filter = filters[filterName];
						data = self[filterName];
					}
				}
			}

			/* otherwise it's implicit, run checks */
			if(!filter) {
				var target = data;
				data = null;
				$.each(self.contentFilters, function() {
					filter = filters[this];
					if(filter.test)  {
						data = filter.test(target);
					}
					if(!data && filter.regex && target.match && target.match(filter.regex)) {
						data = target;
					}
					return !data;
				});
				if(!data) {
					if('console' in window){ window.console.error('Featherlight: no content filter found ' + (target ? ' for "' + target + '"' : ' (no target specified)')); }
					return false;
				}
			}
			/* Process it */
			return filter.process.call(self, data);
		},

		/* sets the content of $instance to $content */
		setContent: function($content){
      this.$instance.removeClass(this.namespace+'-loading');

      /* we need a special class for the iframe */
      this.$instance.toggleClass(this.namespace+'-iframe', $content.is('iframe'));

      /* replace content by appending to existing one before it is removed
         this insures that featherlight-inner remain at the same relative
         position to any other items added to featherlight-content */
      this.$instance.find('.'+this.namespace+'-inner')
        .not($content)                /* excluded new content, important if persisted */
        .slice(1).remove().end()      /* In the unexpected event where there are many inner elements, remove all but the first one */
        .replaceWith($.contains(this.$instance[0], $content[0]) ? '' : $content);

      this.$content = $content.addClass(this.namespace+'-inner');

      return this;
		},

		/* opens the lightbox. "this" contains $instance with the lightbox, and with the config.
			Returns a promise that is resolved after is successfully opened. */
		open: function(event){
			var self = this;
			self.$instance.hide().appendTo(self.root);
			if((!event || !event.isDefaultPrevented())
				&& self.beforeOpen(event) !== false) {

				if(event){
					event.preventDefault();
				}
				var $content = self.getContent();

				if($content) {
					opened.push(self);

					toggleGlobalEvents(true);

					self.$instance.fadeIn(self.openSpeed);
					self.beforeContent(event);

					/* Set content and show */
					return $.when($content)
						.always(function($content){
							self.setContent($content);
							self.afterContent(event);
						})
						.then(self.$instance.promise())
						/* Call afterOpen after fadeIn is done */
						.done(function(){ self.afterOpen(event); });
				}
			}
			self.$instance.detach();
			return $.Deferred().reject().promise();
		},

		/* closes the lightbox. "this" contains $instance with the lightbox, and with the config
			returns a promise, resolved after the lightbox is successfully closed. */
		close: function(event){
			var self = this,
				deferred = $.Deferred();

			if(self.beforeClose(event) === false) {
				deferred.reject();
			} else {

				if (0 === pruneOpened(self).length) {
					toggleGlobalEvents(false);
				}

				self.$instance.fadeOut(self.closeSpeed,function(){
					self.$instance.detach();
					self.afterClose(event);
					deferred.resolve();
				});
			}
			return deferred.promise();
		},

		/* resizes the content so it fits in visible area and keeps the same aspect ratio.
				Does nothing if either the width or the height is not specified.
				Called automatically on window resize.
				Override if you want different behavior. */
		resize: function(w, h) {
			if (w && h) {
				/* Reset apparent image size first so container grows */
				this.$content.css('width', '').css('height', '');
				/* Calculate the worst ratio so that dimensions fit */
				 /* Note: -1 to avoid rounding errors */
				var ratio = Math.max(
					w  / (this.$content.parent().width()-1),
					h / (this.$content.parent().height()-1));
				/* Resize content */
				if (ratio > 1) {
					ratio = h / Math.floor(h / ratio); /* Round ratio down so height calc works */
					this.$content.css('width', '' + w / ratio + 'px').css('height', '' + h / ratio + 'px');
				}
			}
		},

		/* Utility function to chain callbacks
		   [Warning: guru-level]
		   Used be extensions that want to let users specify callbacks but
		   also need themselves to use the callbacks.
		   The argument 'chain' has callback names as keys and function(super, event)
		   as values. That function is meant to call `super` at some point.
		*/
		chainCallbacks: function(chain) {
			for (var name in chain) {
				this[name] = $.proxy(chain[name], this, $.proxy(this[name], this));
			}
		}
	};

	$.extend(Featherlight, {
		id: 0,                                    /* Used to id single featherlight instances */
		autoBind:       '[data-featherlight]',    /* Will automatically bind elements matching this selector. Clear or set before onReady */
		defaults:       Featherlight.prototype,   /* You can access and override all defaults using $.featherlight.defaults, which is just a synonym for $.featherlight.prototype */
		/* Contains the logic to determine content */
		contentFilters: {
			jquery: {
				regex: /^[#.]\w/,         /* Anything that starts with a class name or identifiers */
				test: function(elem)    { return elem instanceof $ && elem; },
				process: function(elem) { return this.persist !== false ? $(elem) : $(elem).clone(true); }
			},
			image: {
				regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
				process: function(url)  {
					var self = this,
						deferred = $.Deferred(),
						img = new Image(),
						$img = $('<img src="'+url+'" alt="" class="'+self.namespace+'-image" />');
					img.onload  = function() {
						/* Store naturalWidth & height for IE8 */
						$img.naturalWidth = img.width; $img.naturalHeight = img.height;
						deferred.resolve( $img );
					};
					img.onerror = function() { deferred.reject($img); };
					img.src = url;
					return deferred.promise();
				}
			},
			html: {
				regex: /^\s*<[\w!][^<]*>/, /* Anything that starts with some kind of valid tag */
				process: function(html) { return $(html); }
			},
			ajax: {
				regex: /./,            /* At this point, any content is assumed to be an URL */
				process: function(url)  {
					var self = this,
						deferred = $.Deferred();
					/* we are using load so one can specify a target with: url.html #targetelement */
					var $container = $('<div></div>').load(url, function(response, status){
						if ( status !== "error" ) {
							deferred.resolve($container.contents());
						}
						deferred.fail();
					});
					return deferred.promise();
				}
			},
			iframe: {
				process: function(url) {
					var deferred = new $.Deferred();
					var $content = $('<iframe/>');
					var css = parseAttrs(this, 'iframe');
					var attrs = slice(css, iFrameAttributeSet);
					$content.hide()
						.attr('src', url)
						.attr(attrs)
						.css(css)
						.on('load', function() { deferred.resolve($content.show()); })
						// We can't move an <iframe> and avoid reloading it,
						// so let's put it in place ourselves right now:
						.appendTo(this.$instance.find('.' + this.namespace + '-content'));
					return deferred.promise();
				}
			},
			text: {
				process: function(text) { return $('<div>', {text: text}); }
			}
		},

		functionAttributes: ['beforeOpen', 'afterOpen', 'beforeContent', 'afterContent', 'beforeClose', 'afterClose'],

		/*** class methods ***/
		/* read element's attributes starting with data-featherlight- */
		readElementConfig: function(element, namespace) {
			var Klass = this,
				regexp = new RegExp('^data-' + namespace + '-(.*)'),
				config = {};
			if (element && element.attributes) {
				$.each(element.attributes, function(){
					var match = this.name.match(regexp);
					if (match) {
						var val = this.value,
							name = $.camelCase(match[1]);
						if ($.inArray(name, Klass.functionAttributes) >= 0) {  /* jshint -W054 */
							val = new Function(val);                           /* jshint +W054 */
						} else {
							try { val = JSON.parse(val); }
							catch(e) {}
						}
						config[name] = val;
					}
				});
			}
			return config;
		},

		/* Used to create a Featherlight extension
		   [Warning: guru-level]
		   Creates the extension's prototype that in turn
		   inherits Featherlight's prototype.
		   Could be used to extend an extension too...
		   This is pretty high level wizardy, it comes pretty much straight
		   from CoffeeScript and won't teach you anything about Featherlight
		   as it's not really specific to this library.
		   My suggestion: move along and keep your sanity.
		*/
		extend: function(child, defaults) {
			/* Setup class hierarchy, adapted from CoffeeScript */
			var Ctor = function(){ this.constructor = child; };
			Ctor.prototype = this.prototype;
			child.prototype = new Ctor();
			child.__super__ = this.prototype;
			/* Copy class methods & attributes */
			$.extend(child, this, defaults);
			child.defaults = child.prototype;
			return child;
		},

		attach: function($source, $content, config) {
			var Klass = this;
			if (typeof $content === 'object' && $content instanceof $ === false && !config) {
				config = $content;
				$content = undefined;
			}
			/* make a copy */
			config = $.extend({}, config);

			/* Only for openTrigger, filter & namespace... */
			var namespace = config.namespace || Klass.defaults.namespace,
				tempConfig = $.extend({}, Klass.defaults, Klass.readElementConfig($source[0], namespace), config),
				sharedPersist;
			var handler = function(event) {
				var $target = $(event.currentTarget);
				/* ... since we might as well compute the config on the actual target */
				var elemConfig = $.extend(
					{$source: $source, $currentTarget: $target},
					Klass.readElementConfig($source[0], tempConfig.namespace),
					Klass.readElementConfig(event.currentTarget, tempConfig.namespace),
					config);
				var fl = sharedPersist || $target.data('featherlight-persisted') || new Klass($content, elemConfig);
				if(fl.persist === 'shared') {
					sharedPersist = fl;
				} else if(fl.persist !== false) {
					$target.data('featherlight-persisted', fl);
				}
				if (elemConfig.$currentTarget.blur) {
					elemConfig.$currentTarget.blur(); // Otherwise 'enter' key might trigger the dialog again
				}
				fl.open(event);
			};

			$source.on(tempConfig.openTrigger+'.'+tempConfig.namespace, tempConfig.filter, handler);

			return {filter: tempConfig.filter, handler: handler};
		},

		current: function() {
			var all = this.opened();
			return all[all.length - 1] || null;
		},

		opened: function() {
			var klass = this;
			pruneOpened();
			return $.grep(opened, function(fl) { return fl instanceof klass; } );
		},

		close: function(event) {
			var cur = this.current();
			if(cur) { return cur.close(event); }
		},

		/* Does the auto binding on startup.
		   Meant only to be used by Featherlight and its extensions
		*/
		_onReady: function() {
			var Klass = this;
			if(Klass.autoBind){
				var $autobound = $(Klass.autoBind);
				/* Bind existing elements */
				$autobound.each(function(){
					Klass.attach($(this));
				});
				/* If a click propagates to the document level, then we have an item that was added later on */
				$(document).on('click', Klass.autoBind, function(evt) {
					if (evt.isDefaultPrevented()) {
						return;
					}
					var $cur = $(evt.currentTarget);
					var len = $autobound.length;
					$autobound = $autobound.add($cur);
					if(len === $autobound.length) {
						return; /* already bound */
					}
					/* Bind featherlight */
					var data = Klass.attach($cur);
					/* Dispatch event directly */
					if (!data.filter || $(evt.target).parentsUntil($cur, data.filter).length > 0) {
						data.handler(evt);
					}
				});
			}
		},

		/* Featherlight uses the onKeyUp callback to intercept the escape key.
		   Private to Featherlight.
		*/
		_callbackChain: {
			onKeyUp: function(_super, event){
				if(27 === event.keyCode) {
					if (this.closeOnEsc) {
						$.featherlight.close(event);
					}
					return false;
				} else {
					return _super(event);
				}
			},

			beforeOpen: function(_super, event) {
				// Used to disable scrolling
				$(document.documentElement).addClass('with-featherlight');

				// Remember focus:
				this._previouslyActive = document.activeElement;

				// Disable tabbing:
				// See http://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus
				this._$previouslyTabbable = $("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]")
					.not('[tabindex]')
					.not(this.$instance.find('button'));

				this._$previouslyWithTabIndex = $('[tabindex]').not('[tabindex="-1"]');
				this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function(_i, elem) {
					return $(elem).attr('tabindex');
				});

				this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr('tabindex', -1);

				if (document.activeElement.blur) {
					document.activeElement.blur();
				}
				return _super(event);
			},

			afterClose: function(_super, event) {
				var r = _super(event);
				// Restore focus
				var self = this;
				this._$previouslyTabbable.removeAttr('tabindex');
				this._$previouslyWithTabIndex.each(function(i, elem) {
					$(elem).attr('tabindex', self._previousWithTabIndices[i]);
				});
				this._previouslyActive.focus();
				// Restore scroll
				if(Featherlight.opened().length === 0) {
					$(document.documentElement).removeClass('with-featherlight');
				}
				return r;
			},

			onResize: function(_super, event){
				this.resize(this.$content.naturalWidth, this.$content.naturalHeight);
				return _super(event);
			},

			afterContent: function(_super, event){
				var r = _super(event);
				this.$instance.find('[autofocus]:not([disabled])').focus();
				this.onResize(event);
				return r;
			}
		}
	});

	$.featherlight = Featherlight;

	/* bind jQuery elements to trigger featherlight */
	$.fn.featherlight = function($content, config) {
		Featherlight.attach(this, $content, config);
		return this;
	};

	/* bind featherlight on ready if config autoBind is set */
	$(document).ready(function(){ Featherlight._onReady(); });
}(jQuery));

(function(window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if(typeof module == 'object' && module.exports){
		module.exports = lazySizes;
	}
}(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */
	if(!document.getElementsByClassName){return;}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('CustomEvent');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesConfig.throttleDelay;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesConfig.ricTimeout){
					rICTimeout = lazySizesConfig.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesConfig)){
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function(){
			if(lazySizesConfig.init){
				init();
			}
		});
	})();

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(e && e.target){
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				if(preloadExpand == null){
					if(!('expand' in lazySizesConfig)){
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
			triggerEvent(e.target, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				if(firesLoad){
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function(){
				if( !firesLoad || (elem.complete && elem.naturalWidth > 1)){
					if(firesLoad){
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			}, true);
		});

		var unveilElement = function (elem){
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function(){
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function(){
				if(lazySizesConfig.loadMode == 3){
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));

/*
This plugin extends lazySizes to lazyLoad:
background images, videos/posters and scripts

Background-Image:
For background images, use data-bg attribute:
<div class="lazyload" data-bg="bg-img.jpg"></div>

 Video:
 For video/audio use data-poster and preload="none":
 <video class="lazyload" data-poster="poster.jpg" preload="none">
 <!-- sources -->
 </video>

 Scripts:
 For scripts use data-script:
 <div class="lazyload" data-script="module-name.js"></div>


 Script modules using require:
 For modules using require use data-require:
 <div class="lazyload" data-require="module-name"></div>
*/

(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if(typeof module == 'object' && module.exports){
		factory(require('lazysizes'));
	} else if(window.lazySizes) {
		globalInstall();
	} else {
		window.addEventListener('lazyunveilread', globalInstall, true);
	}
}(window, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';
	var bgLoad, regBgUrlEscape;
	var uniqueUrls = {};

	if(document.addEventListener){
		regBgUrlEscape = /\(|\)|\s|'/;

		bgLoad = function (url, cb){
			var img = document.createElement('img');
			img.onload = function(){
				img.onload = null;
				img.onerror = null;
				img = null;
				cb();
			};
			img.onerror = img.onload;

			img.src = url;

			if(img && img.complete && img.onload){
				img.onload();
			}
		};

		addEventListener('lazybeforeunveil', function(e){
			if(e.detail.instance != lazySizes){return;}

			var tmp, load, bg, poster;
			if(!e.defaultPrevented) {

				if(e.target.preload == 'none'){
					e.target.preload = 'auto';
				}

				tmp = e.target.getAttribute('data-link');
				if(tmp){
					addStyleScript(tmp, true);
				}

				// handle data-script
				tmp = e.target.getAttribute('data-script');
				if(tmp){
					addStyleScript(tmp);
				}

				// handle data-require
				tmp = e.target.getAttribute('data-require');
				if(tmp){
					if(lazySizes.cfg.requireJs){
						lazySizes.cfg.requireJs([tmp]);
					} else {
						addStyleScript(tmp);
					}
				}

				// handle data-bg
				bg = e.target.getAttribute('data-bg');
				if (bg) {
					e.detail.firesLoad = true;
					load = function(){
						e.target.style.backgroundImage = 'url(' + (regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg ) + ')';
						e.detail.firesLoad = false;
						lazySizes.fire(e.target, '_lazyloaded', {}, true, true);
					};

					bgLoad(bg, load);
				}

				// handle data-poster
				poster = e.target.getAttribute('data-poster');
				if(poster){
					e.detail.firesLoad = true;
					load = function(){
						e.target.poster = poster;
						e.detail.firesLoad = false;
						lazySizes.fire(e.target, '_lazyloaded', {}, true, true);
					};

					bgLoad(poster, load);

				}
			}
		}, false);

	}

	function addStyleScript(src, style){
		if(uniqueUrls[src]){
			return;
		}
		var elem = document.createElement(style ? 'link' : 'script');
		var insertElem = document.getElementsByTagName('script')[0];

		if(style){
			elem.rel = 'stylesheet';
			elem.href = src;
		} else {
			elem.src = src;
		}
		uniqueUrls[src] = true;
		uniqueUrls[elem.src || elem.href] = true;
		insertElem.parentNode.insertBefore(elem, insertElem);
	}
}));

/**
 * Owl Carousel v2.3.3
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.3
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.3
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.3
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.3
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					console.log('update called');
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.3
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.3
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.3
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.3
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.3
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.3
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);


$(document).ready(function(){
    
    $('#featured-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        lazyLoad: true,
        margin: 25,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop: true
            },
            991:{
                items:2,
                nav:false,
                loop: true
            },
            1200:{
                items:3,
                nav:false,
                loop:true
            }
        }
    });
    
    $('#blog-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        lazyLoad: true,
        margin: 25,
        autoplay:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop: true
            },
            991:{
                items:2,
                nav:true,
                loop: true
            },
            1200:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
});

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v2.1.1
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
window.whatInput = function () { "use strict"; function e(e) { n(), o(e), m = !0, L = window.setTimeout(function () { m = !1 }, 650) } function t(e) { m || o(e) } function n() { window.clearTimeout(L) } function o(e) { var t = r(e), n = E[e.type]; if ("pointer" === n && (n = d(e)), v !== n) { var o = document.activeElement.nodeName.toLowerCase(); !p.hasAttribute("data-whatinput-formswitching") && !p.hasAttribute("data-whatinput-formtyping") && v && f.indexOf(o) > -1 || y.indexOf(t) > -1 || i(n) } "keyboard" === n && u(t) } function i(e) { v = e, p.setAttribute("data-whatinput", v), -1 === l.indexOf(v) && l.push(v) } function r(e) { return e.keyCode ? e.keyCode : e.which } function d(e) { return "number" == typeof e.pointerType ? b[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType } function u(e) { -1 === w.indexOf(k[e]) && k[e] && w.push(k[e]) } function a(e) { var t = r(e), n = w.indexOf(k[t]); -1 !== n && w.splice(n, 1) } function s() { p = document.body, window.PointerEvent ? (p.addEventListener("pointerdown", t), p.addEventListener("pointermove", t)) : window.MSPointerEvent ? (p.addEventListener("MSPointerDown", t), p.addEventListener("MSPointerMove", t)) : (p.addEventListener("mousedown", t), p.addEventListener("mousemove", t), "ontouchstart" in window && p.addEventListener("touchstart", e)), p.addEventListener(h, t), p.addEventListener("keydown", e), p.addEventListener("keyup", e), document.addEventListener("keyup", a) } function c() { return h = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll" } var p, w = [], m = !1, v = null, f = ["button", "input", "select", "textarea"], h = c(), y = [16, 17, 18, 91, 93], E = { keydown: "keyboard", keyup: "keyboard", mousedown: "mouse", mousemove: "mouse", MSPointerDown: "pointer", MSPointerMove: "pointer", pointerdown: "pointer", pointermove: "pointer", touchstart: "touch" }; E[c()] = "mouse"; var L, l = [], k = { 9: "tab", 13: "enter", 16: "shift", 27: "esc", 32: "space", 37: "left", 38: "up", 39: "right", 40: "down" }, b = { 2: "touch", 3: "touch", 4: "mouse" }; return "addEventListener" in window && Array.prototype.indexOf && (document.body ? s() : document.addEventListener("DOMContentLoaded", s)), { ask: function () { return v }, keys: function () { return w }, types: function () { return l }, set: i } }();

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e() }(this, function () { return function (n) { var o = {}; function r(t) { if (o[t]) return o[t].exports; var e = o[t] = { i: t, l: !1, exports: {} }; return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports } return r.m = n, r.c = o, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) { return e[t] }.bind(null, o)); return n }, r.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return r.d(e, "a", e), e }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 0) }([function (t, e, n) { "use strict"; var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i = function () { function o(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function (t, e, n) { return e && o(t.prototype, e), n && o(t, n), t } }(), a = o(n(1)), c = o(n(3)), u = o(n(4)); function o(t) { return t && t.__esModule ? t : { default: t } } var l = function (t) { function o(t, e) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, o); var n = function (t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this)); return n.resolveOptions(e), n.listenClick(t), n } return function (t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(o, c.default), i(o, [{ key: "resolveOptions", value: function () { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body } }, { key: "listenClick", value: function (t) { var e = this; this.listener = (0, u.default)(t, "click", function (t) { return e.onClick(t) }) } }, { key: "onClick", value: function (t) { var e = t.delegateTarget || t.currentTarget; this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this }) } }, { key: "defaultAction", value: function (t) { return s("action", t) } }, { key: "defaultTarget", value: function (t) { var e = s("target", t); if (e) return document.querySelector(e) } }, { key: "defaultText", value: function (t) { return s("text", t) } }, { key: "destroy", value: function () { this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null) } }], [{ key: "isSupported", value: function () { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], e = "string" == typeof t ? [t] : t, n = !!document.queryCommandSupported; return e.forEach(function (t) { n = n && !!document.queryCommandSupported(t) }), n } }]), o }(); function s(t, e) { var n = "data-clipboard-" + t; if (e.hasAttribute(n)) return e.getAttribute(n) } t.exports = l }, function (t, e, n) { "use strict"; var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i = function () { function o(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } return function (t, e, n) { return e && o(t.prototype, e), n && o(t, n), t } }(), a = n(2), c = (o = a) && o.__esModule ? o : { default: o }; var u = function () { function e(t) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e), this.resolveOptions(t), this.initSelection() } return i(e, [{ key: "resolveOptions", value: function () { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "" } }, { key: "initSelection", value: function () { this.text ? this.selectFake() : this.target && this.selectTarget() } }, { key: "selectFake", value: function () { var t = this, e = "rtl" == document.documentElement.getAttribute("dir"); this.removeFake(), this.fakeHandlerCallback = function () { return t.removeFake() }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px"; var n = window.pageYOffset || document.documentElement.scrollTop; this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c.default)(this.fakeElem), this.copyText() } }, { key: "removeFake", value: function () { this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null) } }, { key: "selectTarget", value: function () { this.selectedText = (0, c.default)(this.target), this.copyText() } }, { key: "copyText", value: function () { var e = void 0; try { e = document.execCommand(this.action) } catch (t) { e = !1 } this.handleResult(e) } }, { key: "handleResult", value: function (t) { this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) }) } }, { key: "clearSelection", value: function () { this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges() } }, { key: "destroy", value: function () { this.removeFake() } }, { key: "action", set: function () { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy"; if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"') }, get: function () { return this._action } }, { key: "target", set: function (t) { if (void 0 !== t) { if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element'); if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'); if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'); this._target = t } }, get: function () { return this._target } }]), e }(); t.exports = u }, function (t, e) { t.exports = function (t) { var e; if ("SELECT" === t.nodeName) t.focus(), e = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) { var n = t.hasAttribute("readonly"); n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value } else { t.hasAttribute("contenteditable") && t.focus(); var o = window.getSelection(), r = document.createRange(); r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString() } return e } }, function (t, e) { function n() { } n.prototype = { on: function (t, e, n) { var o = this.e || (this.e = {}); return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this }, once: function (t, e, n) { var o = this; function r() { o.off(t, r), e.apply(n, arguments) } return r._ = e, this.on(t, r, n) }, emit: function (t) { for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)n[o].fn.apply(n[o].ctx, e); return this }, off: function (t, e) { var n = this.e || (this.e = {}), o = n[t], r = []; if (o && e) for (var i = 0, a = o.length; i < a; i++)o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]); return r.length ? n[t] = r : delete n[t], this } }, t.exports = n }, function (t, e, n) { var d = n(5), h = n(6); t.exports = function (t, e, n) { if (!t && !e && !n) throw new Error("Missing required arguments"); if (!d.string(e)) throw new TypeError("Second argument must be a String"); if (!d.fn(n)) throw new TypeError("Third argument must be a Function"); if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), { destroy: function () { l.removeEventListener(s, f) } }; if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function (t) { t.addEventListener(c, u) }), { destroy: function () { Array.prototype.forEach.call(a, function (t) { t.removeEventListener(c, u) }) } }; if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i); throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList"); var o, r, i, a, c, u, l, s, f } }, function (t, n) { n.node = function (t) { return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType }, n.nodeList = function (t) { var e = Object.prototype.toString.call(t); return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0])) }, n.string = function (t) { return "string" == typeof t || t instanceof String }, n.fn = function (t) { return "[object Function]" === Object.prototype.toString.call(t) } }, function (t, e, n) { var a = n(7); function i(t, e, n, o, r) { var i = function (e, n, t, o) { return function (t) { t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t) } }.apply(this, arguments); return t.addEventListener(n, i, r), { destroy: function () { t.removeEventListener(n, i, r) } } } t.exports = function (t, e, n, o, r) { return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) { return i(t, e, n, o, r) })) } }, function (t, e) { if ("undefined" != typeof Element && !Element.prototype.matches) { var n = Element.prototype; n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector } t.exports = function (t, e) { for (; t && 9 !== t.nodeType;) { if ("function" == typeof t.matches && t.matches(e)) return t; t = t.parentNode } } }]) });