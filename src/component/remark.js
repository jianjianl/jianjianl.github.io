define('component/remark.vue', function(require, exports, module) {

  //
  //
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
    },
    props: {
      id: {
        type: String
      }
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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "hello" }, [_c('h6', [_vm._v("在这里写下你想写的话吧~")]), _vm._v(" "), _c('textarea', { attrs: { "col": "2" } }), _vm._v(" "), _c('h6', [_vm._v("你写了就发现，写了也没用，凑合玩吧")])]);
  }];
  __vue__options__._scopeId = "_v-99e2bfc1";
  module.exports = exports['default'];

});
