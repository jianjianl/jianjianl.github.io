define('component/app.vue', function(require, exports, module) {

  //
  //
  //
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
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _componentRemark = require('component/remark.vue');
  
  var _componentRemark2 = _interopRequireDefault(_componentRemark);
  
  exports['default'] = {
    data: function data() {
      return {
        isDiff: '',
        itemsList: [16, 25, 36, 49, 64],
        level: 0,
        items: 16,
        width: '264px'
      };
    },
  
    created: function created() {
      this.isDiff = Math.floor(Math.random() * 16);
    },
  
    methods: {
      uaction: function uaction(e) {
        if (e.target.className.indexOf('diff') > -1) {
          this.reload();
        }
      },
  
      reload: function reload() {
        this.level = this.level < 4 ? ++this.level : this.level;
        this.items = this.itemsList[this.level];
        this.isDiff = Math.floor(Math.random() * this.items);
        this.width = 66 * (this.level + 4) + 'px';
      }
    },
  
    components: {
      remark: _componentRemark2['default']
    }
  };
  
  var __vue__options__;
  if (exports && exports.__esModule && exports['default']) {
    __vue__options__ = exports['default'];
  } else {
    __vue__options__ = module.exports;
  }
  __vue__options__.render = function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('h3', [_vm._v("闲来无聊，写了一个超级脑残的测色盲demo")]), _vm._v(" "), _c('div', { staticClass: "container", style: { width: _vm.width } }, _vm._l(_vm.items, function (item) {
      return _c('div', { staticClass: "item", 'class': { diff: _vm.isDiff == item }, on: { "click": _vm.uaction } });
    })), _vm._v(" "), _c('remark')], 1);
  };
  __vue__options__.staticRenderFns = [];
  module.exports = exports['default'];

});
