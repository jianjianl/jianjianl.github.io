define('index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vue = require('node_modules/vue/dist/vue.runtime.common');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _vueRouter = require('node_modules/vue-router/dist/vue-router.common');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  var _componentAppVue = require('component/app.vue');
  
  var _componentAppVue2 = _interopRequireDefault(_componentAppVue);
  
  var _routerJs = require('router');
  
  var _routerJs2 = _interopRequireDefault(_routerJs);
  
  _vue2['default'].use(_vueRouter2['default']);
  
  new _vue2['default']({
      el: "#blog",
      router: _routerJs2['default'],
      render: function render(h) {
          return h(_componentAppVue2['default']);
      }
  });

});
