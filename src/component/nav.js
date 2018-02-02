define('component/nav.vue', function(require, exports, module) {

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
              items: [{
                  message: '主导航',
                  path: '/main'
              }, {
                  message: '标签',
                  path: '/tag'
              }]
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
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "nav" }, _vm._l(_vm.items, function (item) {
          return _c('li', [_vm._v("\n        " + _vm._s(item.message) + "\n    ")]);
      }));
  };
  __vue__options__.staticRenderFns = [];
  __vue__options__._scopeId = "_v-f46c4734";
  module.exports = exports['default'];

});
