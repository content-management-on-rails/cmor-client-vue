/*!
 * cmor-client-vue v1.0.0
 * (c) BeeGood IT
 * Released under the MIT License.
 */
'use strict';

function render(_ctx, _cache) {
  return null;
}

var script = {};
script.render = render;

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("test-button", script);
  }
};

module.exports = index;
