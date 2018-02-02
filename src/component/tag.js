define('component/tag.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    data: function data() {
      return {
        msg: 'Hello World!'
      };
    }
  };
  
  var __vue__options__;
  if (exports && exports.__esModule && exports['default']) {
    __vue__options__ = exports['default'];
  } else {
    __vue__options__ = module.exports;
  }
  __vue__options__.render = function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm._m(0);
  };
  __vue__options__.staticRenderFns = [function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "hello" }, [_c('h1', [_vm._v("tag")])]);
  }];
  __vue__options__._scopeId = "_v-971befc5";
  module.exports = exports['default'];

});
