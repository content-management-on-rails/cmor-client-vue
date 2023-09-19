/*!
 * @beegoodit/cmor-client-vue v1.0.0
 * (c) BeeGood IT
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var __vue_normalize__ = require('vue-runtime-helpers/dist/normalize-component.js');
var __vue_create_injector__ = require('vue-runtime-helpers/dist/inject-style/browser.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var __vue_normalize____default = /*#__PURE__*/_interopDefaultLegacy(__vue_normalize__);
var __vue_create_injector____default = /*#__PURE__*/_interopDefaultLegacy(__vue_create_injector__);

/* script */

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('ion-card', {
    attrs: {
      "color": _vm.cardStyle == 'background' ? _vm.color : null
    }
  }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__$2 = [];

/* style */
var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-810e9fe4_0", {
    source: "ion-card[data-v-810e9fe4]{padding:1rem;margin-left:0;margin-right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$2 = "data-v-810e9fe4";
/* module identifier */
var __vue_module_identifier__$2 = undefined;
/* functional template */
var __vue_is_functional_template__$2 = false;
/* style inject SSR */

var Alert = __vue_normalize____default["default"]({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, {}, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, __vue_create_injector____default["default"], undefined);

/* script */

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c('ion-item', [_c('ion-label', {
    attrs: {
      "position": "floating"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('ion-input', {
    "class": _vm.errorClassesFor('name'),
    attrs: {
      "type": "text",
      "aria-label": "Name",
      "error-text": _vm.errorFor('name')
    },
    model: {
      value: _vm.formData.name,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "name", $$v);
      },
      expression: "formData.name"
    }
  })], 1), _vm._v(" "), _c('ion-item', [_c('ion-label', {
    attrs: {
      "position": "floating"
    }
  }, [_vm._v("E-Mail")]), _vm._v(" "), _c('ion-input', {
    "class": _vm.errorClassesFor('email'),
    attrs: {
      "type": "email",
      "aria-label": "E-Mail",
      "error-text": _vm.errorFor('email')
    },
    model: {
      value: _vm.formData.email,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "email", $$v);
      },
      expression: "formData.email"
    }
  })], 1), _vm._v(" "), _c('ion-item', [_c('ion-label', {
    attrs: {
      "position": "floating"
    }
  }, [_vm._v("Telefonnummer")]), _vm._v(" "), _c('ion-input', {
    "class": _vm.errorClassesFor('phone'),
    attrs: {
      "type": "phone",
      "aria-label": "Phone",
      "error-text": _vm.errorFor('phone')
    },
    model: {
      value: _vm.formData.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "phone", $$v);
      },
      expression: "formData.phone"
    }
  })], 1), _vm._v(" "), _c('ion-item', [_c('ion-label', {
    attrs: {
      "position": "floating"
    }
  }, [_vm._v("Nachricht")]), _vm._v(" "), _c('ion-textarea', {
    "class": _vm.errorClassesFor('message'),
    attrs: {
      "aria-label": "Nachricht",
      "error-text": _vm.errorFor('message')
    },
    model: {
      value: _vm.formData.message,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "message", $$v);
      },
      expression: "formData.message"
    }
  })], 1), _vm._v(" "), _c('ion-item', [_c('ion-checkbox', {
    model: {
      value: _vm.formData.acceptTermsOfService,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "acceptTermsOfService", $$v);
      },
      expression: "formData.acceptTermsOfService"
    }
  }, [_vm._v("Hiermit erlaube ich dem Seitenbetreiber die Nutzung meiner Daten zwecks Beantwortung dieser Kontaktanfrage.")]), _vm._v(" "), _vm.errorFor('accept_terms_of_service') ? _c('ion-text', {
    staticClass: "ion-padding-start",
    attrs: {
      "color": "danger"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.errorFor('accept_terms_of_service')) + "\n    ")]) : _vm._e()], 1), _vm._v(" "), _c('ion-button', {
    attrs: {
      "type": "submit",
      "expand": "block"
    }
  }, [_vm._v("Absenden")]), _vm._v(" "), _vm.success === true ? _c('alert', {
    attrs: {
      "color": "success"
    }
  }, [_vm._v("\n    Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.\n  ")]) : _vm._e(), _vm._v(" "), _vm.success === false ? _c('alert', {
    attrs: {
      "color": "danger"
    }
  }, [_vm._v("\n    Es ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Eingaben.\n  ")]) : _vm._e()], 1);
};
var __vue_staticRenderFns__$1 = [];

/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = "data-v-44584f70";
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

var ContactForm = __vue_normalize____default["default"]({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

/* script */

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('ion-grid', {
    attrs: {
      "fixed": ""
    }
  }, [_c('ion-row', _vm._l(_vm.columns, function (categories, id) {
    return _c('ion-col', {
      key: id,
      attrs: {
        "size": "6",
        "size-md": "3"
      }
    }, [_c('ion-list', _vm._l(categories, function (category) {
      return _c('div', {
        key: category.id
      }, [_c('h3', [_vm._v(_vm._s(category.attributes.name))]), _vm._v(" "), _c('ion-list', _vm._l(category.attributes.links, function (link) {
        return _c('ion-item', {
          key: link.id,
          attrs: {
            "lines": "none"
          }
        }, [_vm.useInternalNavigation(link.url) ? [_c('ion-label', [_c('router-link', {
          attrs: {
            "to": link.url,
            "title": link.description
          }
        }, [_vm._v(_vm._s(link.name))])], 1)] : [_c('ion-label', [_c('a', {
          attrs: {
            "href": link.url,
            "title": link.description,
            "target": "_blank"
          }
        }, [_vm._v(_vm._s(link.name))])])]], 2);
      }), 1)], 1);
    }), 0)], 1);
  }), 1)], 1);
};
var __vue_staticRenderFns__ = [];

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-c18ffb8e_0", {
    source: "ion-list[data-v-c18ffb8e]{padding-top:0;padding-bottom:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__ = "data-v-c18ffb8e";
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject SSR */

var LinkFooter = __vue_normalize____default["default"]({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, {}, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector____default["default"], undefined);

var index = {
  install: function install(app, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    app.component("alert", Alert);
    app.component("contact-form", ContactForm);
    app.component("link-footer", LinkFooter);
    app.provide('cmorClient', {
      api: options.api
    });
  }
};

exports.Alert = Alert;
exports.ContactForm = ContactForm;
exports.LinkFooter = LinkFooter;
exports["default"] = index;
